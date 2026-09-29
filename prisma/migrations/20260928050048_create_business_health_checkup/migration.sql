-- CreateTable
CREATE TABLE `BusinessHealthCheckup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessName` VARCHAR(191) NOT NULL,
    `industry` VARCHAR(191) NOT NULL,
    `digitalPresence` VARCHAR(191) NOT NULL,
    `primaryGoal` VARCHAR(191) NOT NULL,
    `biggestChallenge` VARCHAR(191) NOT NULL,
    `serviceNeed` VARCHAR(191) NOT NULL,
    `currentTechnology` VARCHAR(191) NOT NULL,
    `additionalRequirements` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
