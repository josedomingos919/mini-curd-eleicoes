/*
  Warnings:

  - Added the required column `apelido` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bi` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("id", "name", "phone", "senha", "tipo") SELECT "id", "name", "phone", "senha", "tipo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_phone_key" ON "Usuario"("phone");
CREATE UNIQUE INDEX "Usuario_bi_key" ON "Usuario"("bi");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
