// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const spender = await prisma.spender.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Mateusz',
    },
  });

  const category = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Jedzenie',
    },
  });

  const expense1 = await prisma.expense.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Biedronka',
      amount: 32.49,
      spenderId: 1,
      categoryId: 1,
    },
  });

  const expense2 = await prisma.expense.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Lidl',
      amount: 120,
      spenderId: 1,
      categoryId: 1,
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
