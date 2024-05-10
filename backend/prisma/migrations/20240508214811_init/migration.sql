-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "secondName" TEXT,
    "profil" TEXT,
    "typeUser" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "proprieteId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propriete" (
    "id" SERIAL NOT NULL,
    "typeProprety" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "surface" TEXT NOT NULL,
    "pieceNumber" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cards" TEXT NOT NULL,

    CONSTRAINT "Propriete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_proprieteId_fkey" FOREIGN KEY ("proprieteId") REFERENCES "Propriete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
