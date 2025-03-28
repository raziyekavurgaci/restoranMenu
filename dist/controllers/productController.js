import productModel from "src/models/productModel";
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productById = await productModel.getProductById(Number(id));
        return productById;
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
export const createProduct = async (req, res) => {
    try {
        const { categoryId, name, price, description } = req.body;
        const newProduct = await productModel.createProduct(categoryId, name, price, description);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryId, name, price, description } = req.body;
        const updatedProduct = await productModel.updateProduct(+id, +categoryId, name, +price, description);
        res.json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.deleteProduct(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
//# sourceMappingURL=productController.js.map