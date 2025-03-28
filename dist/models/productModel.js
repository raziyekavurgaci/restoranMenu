import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class productModel {
    static async getAllProducts() {
        return await prisma.product.findMany();
    }
    static async getProductById(id) {
        return await prisma.product.findUnique({
            where: { id },
        });
    }
    static async createProduct(name, categoryId, price, description) {
        return await prisma.product.create({
            data: { name, categoryId, price, description },
        });
    }
    static async updateProduct(id, name, price, categoryId, description) {
        return await prisma.product.update({
            where: { id },
            data: { price, categoryId, name, description },
        });
    }
    static async deleteProduct(id) {
        return await prisma.product.delete({
            where: { id },
        });
    }
}
export default productModel;
//# sourceMappingURL=productModel.js.map