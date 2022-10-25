import { RequestHandler } from "express";
import { checkAvailableBadges, getBadgesList } from "../services/badgesService";

export const getAllBadges: RequestHandler<null> = async (req, res, next) => {
  const achievements = await getBadgesList();
  res.send(achievements);
};
export const check: RequestHandler = async (req, res, next) => {
  const sender = req.params.address;
  res.send(await checkAvailableBadges(sender));
};

// export const createBadge: RequestHandler = async (req, res, next) => {
//   const badge = await Badge.create(req.body);
//   res.send(badge);
// };
// export const updateBadge: RequestHandler = async (req, res, next) => {
//   const badge = await Badge.findByIdAndUpdate(req.params.id, req.body);
//   res.send(badge);
// };
// export const deleteBadge: RequestHandler = async (req, res, next) => {
//   await Badge.findByIdAndDelete(req.params.id);
//   res.send("OK");
// };
