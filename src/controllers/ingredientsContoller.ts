import { Request, Response } from "express";
import ingredientsModel from "src/models/ingredientsModel";

export const getAllIngredients = async (req: Request, res: Response) => {
  try {
    const ingredients = await ingredientsModel.getAllIngredients();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getIngredientById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ingredientyById = await ingredientsModel.getIngredientById(+id);
    res.json(ingredientyById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createIngredient = async (req: Request, res: Response) => {
  try {
    const { name, isAllergen } = req.body;
    const newIngredient = await ingredientsModel.createIngredient(
      name,
      isAllergen
    );
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateIngredient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, isAllergen } = req.body;
    const updatedIngredient = await ingredientsModel.updateIngredient(
      Number(id),
      name,
      isAllergen
    );
    res.json(updateIngredient);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteIngredient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ingredientsModel.deleteIngredient(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
