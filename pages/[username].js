import Layout from "../components/layout";
import Avatar from "../components/avatar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps({ query }) {
  const { username } = query;

  const request = await prisma.request.findUnique({
    select: {
      explanation: true,
      user: true,
    },
    where: {
      username,
    },
  });

  if (!request) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      explanation: request.explanation,
      username,
      user: {
        name: request.user.name,
        image: request.user.image,
      },
    },
  };
}

export default function User({ explanation, username, user }) {
  return (
    <Layout title={`${username} really wants an invite to Clubhouse!`}>
      <header className="flex flex-col items-center space-y-4 my-8">
        <Avatar url={user.image} />
        <h1 className="text-2xl text-gray-600">
          Invite <strong className="text-gray-900">@{username}</strong>
          {` `}
          to Clubhouse!
        </h1>
      </header>
      <main>
        <article className="bg-gray-100 p-4 rounded-lg">{explanation}</article>
      </main>
    </Layout>
  );
  return;
}
