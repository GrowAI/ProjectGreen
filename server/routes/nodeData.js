import express from "express";
import nodeData from "../controllers/nodeDataController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", nodeData.findAll);
router.get("/:id", nodeData.findById);
router.post("/", nodeData.create);
router.put("/:id", nodeData.update);
router.delete("/:id", nodeData.remove);

// Export routes for server.js to use.
export default router;