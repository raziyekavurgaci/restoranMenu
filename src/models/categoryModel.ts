import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class categoryModel {
  static async getAllCategories() {
    return await prisma.category.findMany();
  }
  static async getCategoryById(id: number) {
    return await prisma.category.findUnique({
      where: { id },
    });
  }
  static async createCategory(name: string, description?: string) {
    return await prisma.category.create({
      data: { name, description },
    });
  }

  static async updateCategory(id: number, name: string, description?: string) {
    return await prisma.category.update({
      where: { id },
      data: { name, description },
    });
  }

  static async deleteCategory(id: number) {
    return await prisma.category.delete({
      where: { id },
    });
  }
}
export default categoryModel;
