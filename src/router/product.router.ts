import { Router } from "express";
import { authGuard } from "../services/auth.service";
import {
  getAllProducts,
  addProduct,
  getProductById,
  deleteProduct,
  updateProductByname,
} from "../controllers/products.controller";

const productRouter = Router();

productRouter.get("/", authGuard, getAllProducts);

productRouter.post("/add", authGuard, addProduct);

productRouter.get("/product", authGuard, getProductById);

productRouter.put("/update", authGuard, updateProductByname);

productRouter.delete("/delete/:id", authGuard, deleteProduct);

export default productRouter;
