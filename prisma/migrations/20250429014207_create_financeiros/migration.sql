-- AlterTable
ALTER TABLE "financeiros" ADD COLUMN     "ordemId" TEXT,
ADD COLUMN     "produtoId" TEXT;

-- AddForeignKey
ALTER TABLE "financeiros" ADD CONSTRAINT "financeiros_ordemId_fkey" FOREIGN KEY ("ordemId") REFERENCES "ordems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financeiros" ADD CONSTRAINT "financeiros_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
