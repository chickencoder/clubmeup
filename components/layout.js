import Head from "next/head";

function Layout({ children, title = "👋 ClubMe" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-xl mx-auto p-4">{children}</div>
    </>
  );
}

export default Layout;
