import express from "express";

import {
  listAllNetworkings,
  createNetworking,
  getNetworkingById,
  updateNetworking,
  deleteNetworking
} from "../controllers/networkings";

const router = express.Router();

router.get("/", listAllNetworkings);
router.post("/", createNetworking);
router.get("/:id", getNetworkingById);
router.put("/:id", updateNetworking);
router.delete("/:id", deleteNetworking);

export default router;
