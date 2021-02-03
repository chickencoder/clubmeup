-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request.username_unique" ON "Request"("username");

-- AddForeignKey
ALTER TABLE "Request" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
