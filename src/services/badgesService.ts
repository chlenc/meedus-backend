import {
  TBadge,
  TFirstTransactionsBadge,
  TInvokeBadge,
  TTransactionsBadge,
} from "../achievements";
import axios from "axios";
import dayjs from "dayjs";
import { broadcast, data, libs, waitForTx } from "@waves/waves-transactions";
import { chainId, validatorSeed } from "../config";
import nodeService, { nodeUrl } from "./nodeService";
import { DataTransactionEntry } from "@waves/ts-types/src";

type TCheckResult = {
  address: string;
  badgeId: number;
  // state: number;
  // updatedAt: string;
  scriptResult: {
    actualActionValue: number;
    requiredActionValue: number;
  };
};

export const getBadgesList = async (): Promise<Array<TBadge>> => {
  const validatorAddress = libs.crypto.address(validatorSeed, chainId);
  const res = await nodeService.nodeMatchRequest(
    validatorAddress,
    "%5Ebadge_%5B0-9%5D%2B%24", //"^badge_[0-9]+$"
    chainId as "W" | "T"
  );
  return res.map(({ value }) => JSON.parse(value as string));
};

export const checkInvokeBadgeStatus = async (
  sender: string,
  badge: TInvokeBadge
): Promise<TCheckResult> => {
  const search = new URLSearchParams({
    sender,
    limit: String(badge.conditions.minTxAmount),
    dapp: badge.conditions.contractAddress,
    function: badge.conditions.functionName,
  });

  const apiBase = `https://api.wavesplatform.com/v0/transactions/invoke-script?`;
  const actualActionValue: number = await axios
    .get(apiBase + search.toString())
    .then(({ data }) => data.data.length);
  return {
    address: sender,
    badgeId: badge.id,
    scriptResult: {
      actualActionValue,
      requiredActionValue: badge.conditions.minTxAmount,
    },
  };
};
export const checkTransactionsBadgeStatus = async (
  sender: string,
  badge: TTransactionsBadge
): Promise<TCheckResult> => {
  const search = new URLSearchParams({
    sender,
    limit: String(badge.conditions.minTxAmount),
  });
  const apiBase = `https://api.wavesplatform.com/v0/transactions/${badge.conditions.txType}?`;
  const actualActionValue: number = await axios
    .get(apiBase + search.toString())
    .then(({ data }) => data.data.length);
  return {
    address: sender,
    badgeId: badge.id,
    scriptResult: {
      actualActionValue,
      requiredActionValue: badge.conditions.minTxAmount,
    },
  };
};
export const checkFirstTransactionBadgeStatus = async (
  sender: string,
  badge: TFirstTransactionsBadge
): Promise<TCheckResult> => {
  const search = new URLSearchParams({ sender, sort: "asc", limit: "1" });
  const apiBase = `https://api.wavesplatform.com/v0/transactions/all?`;
  const txs = await axios
    .get(apiBase + search.toString())
    .then(({ data }) => data.data);
  const isBetween =
    txs.length > 0 &&
    (dayjs(txs[0].data.timestamp) as any).isBetween(
      badge.conditions.startDate,
      badge.conditions.endDate,
      "day"
    );
  return {
    address: sender,
    badgeId: badge.id,
    scriptResult: {
      actualActionValue: isBetween ? 1 : 0,
      requiredActionValue: 1,
    },
  };
};
export const checkAvailableBadges = async (sender: string) => {
  const achievements = await getBadgesList();
  const state = await Promise.all(
    achievements.map(async (badge) => {
      switch (badge.type) {
        case "invoke":
          return checkInvokeBadgeStatus(sender, badge);
        case "firstTransaction":
          return checkFirstTransactionBadgeStatus(sender, badge);
        case "transactions":
          return checkTransactionsBadgeStatus(sender, badge);
      }
    })
  );
  const validatorAddress = libs.crypto.address(validatorSeed, chainId);
  const lastState = await nodeService.nodeMatchRequest(
    validatorAddress,
    `${sender}_stateOf_(.*)`,
    chainId as "W" | "T" | undefined
  );

  const dataEntries: Array<DataTransactionEntry> = state
    .filter(
      (v) =>
        v.scriptResult.actualActionValue >=
          v.scriptResult.requiredActionValue &&
        !lastState.some(
          (state) =>
            state.key === `${v.address}_stateOf_${v.badgeId}` &&
            ["available", "claimed"].includes(String(state.value))
        )
    )
    .map((v) => ({
      key: `${v.address}_stateOf_${v.badgeId}`,
      value: "available",
      type: "string",
    }));
  if (dataEntries.length > 0) {
    const tx = data({ chainId, data: dataEntries }, validatorSeed);
    await broadcast(tx, nodeUrl);
    await waitForTx(tx.id, { apiBase: nodeUrl });
    console.log("♻️ state updated", tx);
  }
  return state;
};
