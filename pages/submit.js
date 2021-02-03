import Link from "next/link";
import Layout from "../components/layout";
import Input from "../components/input";
import TextArea from "../components/textarea";
import Button from "../components/button";
import { useState } from "react";
import { useRouter } from "next/router";

function X() {
  return (
    <div className="relative">
      <Link href="/">
        <a className="absolute right-0 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default function Submit() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [explanation, setExplanation] = useState("");

  async function submit(event) {
    event.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        explanation,
      }),
    });

    try {
      const { error, twitterHandle } = await response.json();
      if (error) {
        setError(error);
      } else {
        await router.push(`/${username}`);
      }
    } catch (error) {
      setError("An Error Happened :(");
    }
  }

  return (
    <Layout title="Submit">
      <X />
      <header className="text-center my-8">
        <h1 className="text-2xl font-bold">Want an invite?</h1>
      </header>
      <main>
        <form className="space-y-8" onSubmit={submit}>
          {error && <p className="text-red-500">{error}</p>}
          <Input
            label="What's your Clubhouse username?"
            name="username"
            required={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextArea
            label="Why do you want a Clubhouse invite?"
            name="explanation"
            required={true}
            maxLength={200}
            value={explanation}
            onChange={(event) => setExplanation(event.target.value)}
          />
          <Button variant="primary" className="w-full">
            Submit
          </Button>
        </form>
      </main>
    </Layout>
  );
}
