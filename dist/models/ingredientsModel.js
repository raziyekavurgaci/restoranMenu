import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class ingredientsModel {
    static async getAllIngredients() {
        return await prisma.category.findMany();
    }
    static async getIngredientById(id) {
        return await prisma.ingredient.findUnique({
            where: { id },
        });
    }
    static async createIngredient(name, isAllergen) {
        return await prisma.ingredient.create({
            data: { name, isAllergen },
        });
    }
    static async updateIngredient(id, name, isAllergen) {
        return await prisma.ingredient.update({
            where: { id },
            data: { name, isAllergen },
        });
    }
    static async deleteIngredient(id) {
        return await prisma.ingredient.delete({
            where: { id },
        });
    }
}
export default ingredientsModel;
//# sourceMappingURL=ingredientsModel.js.map