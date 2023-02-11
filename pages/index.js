import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import TodoList from "@/components/TodoList";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Organize Me</title>
        <MetaTags />
      </Head>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};

export default index;
