import Button from "../components/button";
import Layout from "../components/layout";
import Link from "next/link";
import { signIn } from "next-auth/client";
import { getSession } from "next-auth/client";

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

function LoggedOut() {
  return (
    <>
      <p className="mb-4">Login to submit your username, vote for others.</p>
      <Button onClick={() => signIn("twitter")}>Log In with Twitter</Button>
    </>
  );
}

function LoggedIn() {
  return (
    <>
      <Link href="/submit">
        <Button variant="primary" anchor={true}>
          Submit a Request
        </Button>
      </Link>
    </>
  );
}

export default function Home({ session }) {
  return (
    <Layout>
      <nav></nav>
      <header className="text-center mt-8">
        <h1 className="font-bold text-2xl mb-4">
          <span role="img" aria-label="waving hand emoji" className="mr-2">
            👋
          </span>
          ClubMeUp
        </h1>
        <p className="mb-8">
          Want a <strong>Clubhouse</strong> invite?
        </p>
        {session ? <LoggedIn /> : <LoggedOut />}
      </header>
    </Layout>
  );
}
