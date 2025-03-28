import express from "express";
import categoryRoute from "src/routes/categoryRoute";
import productRoute from "src/routes/productRoute";

const app = express();
app.use(express.json());

app.use("/categories", categoryRoute);
app.use("/products", productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
