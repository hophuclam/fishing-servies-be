import express from "express";

import MiddleWare from "../middlewares";
import CategoriController from "../controllers/Categori.controller";

const CateRotuer = express.Router();
// cate
CateRotuer.get("/", MiddleWare.handleTryCate(CategoriController.GetAll))
  .get("/:id", MiddleWare.handleTryCate(CategoriController.GetOne))
  .post("/", MiddleWare.handleTryCate(CategoriController.Create))
  .put("/", MiddleWare.handleTryCate(CategoriController.Update))
  .delete("/:id", MiddleWare.handleTryCate(CategoriController.Delete));

export default CateRotuer;