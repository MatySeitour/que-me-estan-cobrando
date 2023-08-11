/*
  Warnings:

  - Added the required column `benefits` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "benefits" TEXT NOT NULL;
