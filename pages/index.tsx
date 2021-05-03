import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href="https://example.com"><a>hoge</a></Link>
        </p>
      </section>
    </Layout>
  )
}
