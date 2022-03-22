import Head from 'next/head'

import Public from '@layouts/Public'

const Page = () => (
  <div>
    <Head>
      <title>café tennis</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Public>
        <h1>café tennis</h1>
      </Public>
    </main>
  </div>
)

export default Page
