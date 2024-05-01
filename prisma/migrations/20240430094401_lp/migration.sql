/*
  Warnings:

  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PokemonToType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_B_fkey";

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "types" TEXT[];

-- DropTable
DROP TABLE "Type";

-- DropTable
DROP TABLE "_PokemonToType";
