
import Head from 'next/head';
import { NextPage } from 'next'
import index from "../public/platformer/js/index"
import Layout from "../components/Layout"
import React, { useState } from "react";

const examplesArray = [
  {
    "name": "Platformer",
    "url":  "/platformer/index.html"
  },
  {
    "name": "Hello World",
    "url": "/helloworld/index.html"
  },
  {
    "name": "Isometric RPG",
    "url": "/isometric_rpg/index.html"
  },
  {
    "name": "Space Invaders",
    "url": "/space-invaders/index.html"
  },
  {
    "name": "Whack a Mole",
    "url": "/whack-a-mole/index.html"
  }
]
const examples: NextPage = () => {
  const [example, setExample] = useState<string>("")

  return (
    <Layout>
      <div>
        {
        example === "" ? (
          <div>
            <ul>
            {
              examplesArray.map((x, idx) => <li key = {idx}><button onClick = {() => setExample(x.url)}>{x.name}</button></li>)
            }
            </ul>
          </div>
        ) : (
        <div>
            <button onClick = {() => setExample("")}>Stop Game</button>
            <iframe src={example} style = {{ width: '100%', height: '100vh', border: 'none'}}></iframe>
        </div>
    )}
    </div>
  </Layout>
  );
  };

export default examples;