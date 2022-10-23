export type TBadgeType =
  | "invoke"
  // | "receive"
  | "transactions"
  | "firstTransaction";

export interface IBadgeBase {
  id: number;
  category: Array<string>;
  name: string;
  description: string;
  link: string;
  type: TBadgeType;
}

export interface TInvokeBadge extends IBadgeBase {
  type: "invoke";
  conditions: {
    contractAddress: string;
    functionName: string;
    minTxAmount: number;
  };
}

export interface TTransactionsBadge extends IBadgeBase {
  type: "transactions";
  conditions: {
    minTxAmount: number;
    txType: "set-script" | "invoke-script" | "all";
  };
}
export interface TFirstTransactionsBadge extends IBadgeBase {
  type: "firstTransaction";
  conditions: {
    startDate: string;
    endDate: string;
  };
}

export type TBadge =
  | TInvokeBadge
  // | TReceiveBadge
  | TTransactionsBadge
  | TFirstTransactionsBadge;

const achievements: TBadge[] = [
  // {
  //   id: 0,
  //   category: ["Ecosystem"],
  //   name: "WNS Serial Registerer",
  //   description: "Registered WNS Domain 3+ times",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 1,
  //   category: ["Ecosystem"],
  //   name: "WNS Serial Renewer",
  //   description: "Renewed WNS 3+ times",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  {
    id: 2,
    category: ["DeFi"],
    name: "PuzzleSwap Uncommon Swapper",
    description: "Swapped 10+ times on PuzzleSwap",
    link: "",
    type: "invoke",
    conditions: {
      contractAddress: "3PGFHzVGT4NTigwCKP1NcwoXkodVZwvBuuU",
      functionName: "swap",
      minTxAmount: 10,
    },
  },
  // {
  //   id: 3,
  //   category: ["NFT"],
  //   name: "PuzzleMarket Artist",
  //   description: "Minted NFTs 1+ times on PuzzleMarket",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 4,
  //   category: ["NFT"],
  //   name: "SignArt Artist",
  //   description: "Minted NFTs 1+ times on SignArt",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 5,
  //   category: ["DeFi"],
  //   name: "Keeper Swap Uncommon User",
  //   description: "Swapped 10+ times on keeper Swap",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 6,
  //   category: ["NFT"],
  //   name: "Puzzlemarket Uncommon Trader",
  //   description: "Traded NFTs 10+ times on PuzzleMarket",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 7,
  //   category: ["Ecosystem"],
  //   name: "Meedus Airdrop Recipient",
  //   description: "Received Meedus airdrop 1+ times",
  //   link: "",
  //   type: "receive",
  //   conditions: {
  //     addressFrom: "3PLVTq7GU8x9ZQHxDvhoYN6gxkjTGWiXK8J",
  //     tokens: [
  //       "7ZCmFU11ZsgvCsU6q9g3xFFqfhdjYfYLeimVzGLQkt1d",
  //       "2Akqusu3iARumtYQjvDMHZ8EYJipDnPjhMJCp7YyyFtH",
  //       "BdRMpxNKQwt5fMf9fGxwFqnjcD9WpHRXvPMyg9EGKY8f",
  //       "6o272LCVoaqyDdsGvhFWkK4CPD21AdXmR5Rj9vmP5cRi",
  //     ],
  //     times: 1,
  //   },
  // },
  // {
  //   id: 8,
  //   category: ["DAO"],
  //   name: "Puzzle Governance Voter",
  //   description: "Voted 3+ times on puzzle dao governance",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  // {
  //   id: 9,
  //   category: ["DAO"],
  //   name: "Puzzle Dao Thought Leader",
  //   description: "Submitted 1+ proposals on Puzzle dao",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  {
    id: 10,
    category: ["General"],
    name: "Waves Uncommon User",
    description: "Created 100+ transactions on waves",
    link: "",
    type: "transactions",
    conditions: {
      txType: "all",
      minTxAmount: 100,
    },
  },
  // {
  //   id: 11,
  //   category: ["NFT"],
  //   name: "WavesPunks Minter",
  //   description: "Minted waves punk 1+ times",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  {
    id: 12,
    category: ["DeFi"],
    name: "Puzzle Staker",
    description: "Staked PUZZLE 1+ times on PUZZLESWAP",
    link: "",
    type: "invoke",
    conditions: {
      contractAddress: "3PFTbywqxtFfukX3HyT881g4iW5K4QL3FAS",
      functionName: "stake",
      minTxAmount: 1,
    },
  },
  {
    id: 13,
    category: ["General"],
    name: "WAVES Since 2016",
    description: "Created the first WAVES transaction in 2016",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2016-01-01T00:00:00.000Z",
      endDate: "2016-12-31T00:00:00.000Z",
    },
  },
  {
    id: 14,
    category: ["General"],
    name: "WAVES Since 2017",
    description: "Created the first WAVES transaction in 2017",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2017-01-01T00:00:00.000Z",
      endDate: "2017-12-31T00:00:00.000Z",
    },
  },
  {
    id: 15,
    category: ["General"],
    name: "WAVES Since 2018",
    description: "Created the first WAVES transaction in 2018",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2018-01-01T00:00:00.000Z",
      endDate: "2018-12-31T00:00:00.000Z",
    },
  },
  {
    id: 16,
    category: ["General"],
    name: "WAVES Since 2019",
    description: "Created the first WAVES transaction in 2019",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2019-01-01T00:00:00.000Z",
      endDate: "2019-12-31T00:00:00.000Z",
    },
  },
  {
    id: 17,
    category: ["General"],
    name: "WAVES Since 2020",
    description: "Created the first WAVES transaction in 2020",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2020-01-01T00:00:00.000Z",
      endDate: "2020-12-31T00:00:00.000Z",
    },
  },
  {
    id: 18,
    category: ["General"],
    name: "WAVES Since 2021",
    description: "Created the first WAVES transaction in 2021",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2021-01-01T00:00:00.000Z",
      endDate: "2021-12-31T00:00:00.000Z",
    },
  },
  {
    id: 19,
    category: ["General"],
    name: "WAVES Since 2022",
    description: "Created the first WAVES transaction in 2022",
    link: "",
    type: "firstTransaction",
    conditions: {
      startDate: "2022-01-01T00:00:00.000Z",
      endDate: "2022-12-31T00:00:00.000Z",
    },
  },
  // {
  //   id: 20,
  //   category: ["NFT"],
  //   name: "WavesDucks Breeder",
  //   description: "Bred waves ducks 1+ times",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
  {
    id: 21,
    category: ["General"],
    name: "Waves Smart Contract Deployer",
    description: "Deployed 1+ smart contracts on waves",
    link: "",
    type: "transactions",
    conditions: {
      txType: "set-script",
      minTxAmount: 1,
    },
  },
  // {
  //   id: 22,
  //   category: ["DeFi"],
  //   name: "Meedus Early Adopter",
  //   description:
  //     "Received achievement 1+ times during the meedus Early Adopter Access",
  //   link: "",
  //   type: "invoke",
  //   conditions: {
  //     contractAddress: "",
  //     functionName: "",
  //     minTxAmount: "",
  //   },
  // },
];

export default achievements;
