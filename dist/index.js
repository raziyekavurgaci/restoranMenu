import express from "express";
import categoryRoute from "src/routes/categoryRoute";
const app = express();
app.use(express.json());
app.use("/categories", categoryRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`${PORT}`);
});
//# sourceMappingURL=index.js.map