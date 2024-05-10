/*
  Warnings:

  - You are about to drop the column `status` on the `Propriete` table. All the data in the column will be lost.
  - Added the required column `stat` to the `Propriete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Propriete" DROP COLUMN "status",
ADD COLUMN     "stat" TEXT NOT NULL;
