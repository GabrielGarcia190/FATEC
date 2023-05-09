-- CreateTable
CREATE TABLE "cartao_credito" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero_cartao" TEXT NOT NULL,
    "nome_cartao" TEXT NOT NULL,
    "CPF_cartao" TEXT NOT NULL,
    "ccv" TEXT NOT NULL,
    "data_validade" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
