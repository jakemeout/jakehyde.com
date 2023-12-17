import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post
export default async function handle(req, res) {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(401).json({ message: "You must be signed in to post." });
  }

  const { title, content } = req.body;

  try {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email } },
      },
    });
    res.json(result);
  } catch (error) {
    // Handle or log the error
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the post." });
  }
}
