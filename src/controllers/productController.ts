import { Request, Response } from "express";
import productModel from "src/models/productModel";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { category, showDeleted } = req.query;

    const products = await productModel.getAllProducts(
      category as string,
      showDeleted as string
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productById = await productModel.getProductById(Number(id));
    res.json(productById);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { categoryId, name, price, description } = req.body;
    const newProduct = await productModel.createProduct(
      categoryId,
      name,
      price,
      description
    );
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { categoryId, name, price, description } = req.body;
    const updatedProduct = await productModel.updateProduct(
      +id,
      +categoryId,
      name,
      +price,
      description
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productModel.deleteProduct(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
