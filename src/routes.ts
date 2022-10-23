import { Router } from "express";
import * as badgesController from "./controllers/badgesController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

// Item routes
router.get("/badges/", badgesController.getAllBadges);
router.get("/check/:address", badgesController.check);
// router.post("/items/", itemController.createItem);
// router.put("/items/:id", itemController.updateItem);
// router.delete("/items/:id", itemController.deleteItem);

export { router };
