/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `menus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "menus_path_key" ON "menus"("path");
