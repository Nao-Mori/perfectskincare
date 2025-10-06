/*
  Warnings:

  - You are about to drop the column `reviewId` on the `Concern` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Concern` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Concern` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Concern` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Concern` DROP FOREIGN KEY `Concern_reviewId_fkey`;

-- DropIndex
DROP INDEX `Concern_reviewId_fkey` ON `Concern`;

-- AlterTable
ALTER TABLE `Concern` DROP COLUMN `reviewId`,
    DROP COLUMN `value`,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Preference` (
    `userId` VARCHAR(191) NOT NULL,
    `skinType` VARCHAR(191) NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReviewConcerns` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReviewConcerns_AB_unique`(`A`, `B`),
    INDEX `_ReviewConcerns_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PreferenceConcerns` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PreferenceConcerns_AB_unique`(`A`, `B`),
    INDEX `_PreferenceConcerns_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Concern_slug_key` ON `Concern`(`slug`);

-- AddForeignKey
ALTER TABLE `Preference` ADD CONSTRAINT `Preference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReviewConcerns` ADD CONSTRAINT `_ReviewConcerns_A_fkey` FOREIGN KEY (`A`) REFERENCES `Concern`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReviewConcerns` ADD CONSTRAINT `_ReviewConcerns_B_fkey` FOREIGN KEY (`B`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PreferenceConcerns` ADD CONSTRAINT `_PreferenceConcerns_A_fkey` FOREIGN KEY (`A`) REFERENCES `Concern`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PreferenceConcerns` ADD CONSTRAINT `_PreferenceConcerns_B_fkey` FOREIGN KEY (`B`) REFERENCES `Preference`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
