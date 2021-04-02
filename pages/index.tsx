import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from 'react'

import { useLoading } from '@swyx/hooks'

function LambdaDemo() {
  const [isLoading, load] = useLoading();
  const [msg, setMsg] = React.useState(null);
  const handleClick = (api: string) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    load(
      fetch('/.netlify/functions/' + api)
        .then(response => response.json())
        .then(json => setMsg(json.msg))
    );
  };

  return (
    <p>
      <button onClick={handleClick('hello')}>
        {isLoading ? 'Loading...' : 'Call Lambda'}
      </button>
      <button onClick={handleClick('async_example')}>
        {isLoading ? 'Loading...' : 'Call Async Lambda'}
      </button>
      <br />
      <span>{msg}</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to your app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <LambdaDemo />

      <Footer />
    </div>
  )
}
