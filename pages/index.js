import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Login from "../components/Login";

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Hello Amazing</title>
        <meta name="description" content="Hello Amazing admin portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden mt-4 ml-4 md:block lg:block">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 font-poppins">
        <div className="block mb-2 lg:hidden md:hidden">
          <Header />
        </div>
        <Login />
      </div>
    </div>
  );
}
// flex flex-col items-center justify-center min-h-screen py-2 font-poppins
