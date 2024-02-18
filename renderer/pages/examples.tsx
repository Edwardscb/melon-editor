import Head from 'next/head';
import { NextPage } from 'next'
import index from "../public/platformer/js/index"
import Layout from "../components/Layout"

const examples: NextPage = () => {
  return (
    <Layout>
    <div>
      <Head>
        <title>MelonJS Game</title>
      </Head>
      <iframe src="/platformer/index.html" style = {{ width: '100%', height: '100vh', border: 'none'}}></iframe>
  </div>
  </Layout>
  );
  };

export default examples;