import { Request, Response } from "express";
import categoryModel from "src/models/categoryModel";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoryById = await categoryModel.getCategoryById(+id);
    res.json(categoryById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newCategory = await categoryModel.createCategory(name, description);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await categoryModel.updateCategory(
      Number(id),
      name,
      description
    );
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await categoryModel.deleteCategory(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
