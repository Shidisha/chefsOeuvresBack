/*
  Warnings:

  - You are about to drop the column `proprieteId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Propriete` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_proprieteId_fkey";

-- AlterTable
ALTER TABLE "Propriete" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "proprieteId";

-- AddForeignKey
ALTER TABLE "Propriete" ADD CONSTRAINT "Propriete_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
