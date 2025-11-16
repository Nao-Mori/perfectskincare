/*
  Warnings:

  - You are about to alter the column `skinType` on the `Preference` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Preference` MODIFY `skinType` INTEGER NULL;
