/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_userId_fkey";

-- CreateTable
CREATE TABLE "request" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Request";

-- CreateIndex
CREATE UNIQUE INDEX "request.username_unique" ON "request"("username");

-- AddForeignKey
ALTER TABLE "request" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
