import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

export default async function (req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res
      .status(401)
      .json({ error: "You're not logged in you scoundrel!!" });
  }

  const { username, explanation } = req.body;
  if (!username || !explanation) {
    return res
      .status(400)
      .json({ error: "You must specify a username and explanation" });
  }

  await prisma.request.create({
    data: {
      username,
      explanation,
      user: {
        connect: {
          id: session.userId,
        },
      },
    },
  });

  res.status(200).json({ error: null });
}
