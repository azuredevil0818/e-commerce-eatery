import { PrismaClient } from "@prisma/client";
import globalHandler from "../../lib/handler";
//======================================================

const handler = globalHandler();

handler.get(async (req, res) => {
  const prisma = new PrismaClient();
  const { path } = req.query;

  try {
    const data = await prisma.feed.findMany({
      where: {
        usedFor: `${path}`,
      },
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
  await prisma.$disconnect();
});

export default handler;
