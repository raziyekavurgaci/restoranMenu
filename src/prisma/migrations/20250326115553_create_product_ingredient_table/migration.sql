-- CreateTable
CREATE TABLE "ProductIngredient" (
    "productId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ProductIngredient_pkey" PRIMARY KEY ("productId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "ProductIngredient" ADD CONSTRAINT "ProductIngredient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductIngredient" ADD CONSTRAINT "ProductIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
