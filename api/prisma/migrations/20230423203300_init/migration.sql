/*
  Warnings:

  - You are about to drop the column `apelido` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `bi` on the `Usuario` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Eleitor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Candidato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Eleicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "finshed" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "EleicaoCandidato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "candidatoId" INTEGER NOT NULL,
    "eleicaoId" INTEGER NOT NULL,
    CONSTRAINT "EleicaoCandidato_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EleicaoCandidato_eleicaoId_fkey" FOREIGN KEY ("eleicaoId") REFERENCES "Eleicao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EleicaoEleitor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eleitorId" INTEGER NOT NULL,
    "eleicaoId" INTEGER NOT NULL,
    CONSTRAINT "EleicaoEleitor_eleitorId_fkey" FOREIGN KEY ("eleitorId") REFERENCES "Eleitor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EleicaoEleitor_eleicaoId_fkey" FOREIGN KEY ("eleicaoId") REFERENCES "Eleicao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Voto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eleicaoId" INTEGER NOT NULL,
    "eleitorId" INTEGER NOT NULL,
    "candidatoId" INTEGER NOT NULL,
    CONSTRAINT "Voto_eleicaoId_fkey" FOREIGN KEY ("eleicaoId") REFERENCES "Eleicao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Voto_eleitorId_fkey" FOREIGN KEY ("eleitorId") REFERENCES "Eleitor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Voto_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("id", "name", "phone", "senha", "tipo") SELECT "id", "name", "phone", "senha", "tipo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_phone_key" ON "Usuario"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Voto_eleitorId_eleicaoId_key" ON "Voto"("eleitorId", "eleicaoId");
