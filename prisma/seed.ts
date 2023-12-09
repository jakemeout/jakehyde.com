import prisma from "../lib/prisma";

async function main() {
  const jake = await prisma.user.upsert({
    where: { email: "test@jake.com" },
    update: {},
    create: {
      email: "test@jake.com",
      name: "Jake",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          content: "https://www.prisma.io/nextjs",
        },
      },
    },
  });
  console.log({ jake });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
