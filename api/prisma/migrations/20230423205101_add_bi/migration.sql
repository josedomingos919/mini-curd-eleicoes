/*
  Warnings:

  - Added the required column `bi` to the `Eleitor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bi` to the `Candidato` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Eleitor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bi" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL
);
INSERT INTO "new_Eleitor" ("id", "nome", "sobrenome") SELECT "id", "nome", "sobrenome" FROM "Eleitor";
DROP TABLE "Eleitor";
ALTER TABLE "new_Eleitor" RENAME TO "Eleitor";
CREATE UNIQUE INDEX "Eleitor_bi_key" ON "Eleitor"("bi");
CREATE TABLE "new_Candidato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bi" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL
);
INSERT INTO "new_Candidato" ("id", "nome", "sobrenome") SELECT "id", "nome", "sobrenome" FROM "Candidato";
DROP TABLE "Candidato";
ALTER TABLE "new_Candidato" RENAME TO "Candidato";
CREATE UNIQUE INDEX "Candidato_bi_key" ON "Candidato"("bi");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
