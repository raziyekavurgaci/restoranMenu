import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class productModel {
  static async getAllProducts(category?: string, showDeleted?: string) {
    let whereCondition: any = {};
    if (category) {
      whereCondition.categoryId = Number(category);
    } else if (showDeleted === "onlyDeleted") {
      whereCondition.deletedAt = { not: null };
    }
    return await prisma.product.findMany({ where: whereCondition });
  }
  static async getProductById(id: number) {
    return await prisma.product.findUnique({
      where: { id },
    });
  }
  static async createProduct(
    name: string,
    categoryId: number,
    price: number,
    description?: string
  ) {
    return await prisma.product.create({
      data: { name, categoryId, price, description },
    });
  }

  static async updateProduct(
    id: number,
    categoryId?: number,
    name?: string,
    price?: number,
    description?: string
  ) {
    return await prisma.product.update({
      where: { id },
      data: { price, categoryId, name, description },
    });
  }

  static async deleteProduct(id: number) {
    return await prisma.product.delete({
      where: { id },
    });
  }
}
export default productModel;
