import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="pb-12">
        <h2 className="text-xl underline">About Me</h2>
        <p>監視基盤に携わってるDevOpsエンジニア👻</p>
        <p>基盤システムの開発運用やPoC、ユーザサポートなどやってます。</p>
        <br />
        <p>設計から実装、インフラ整備、運用まで全部楽しみたいのでもちょもちょ勉強中。</p>
        <p>Zwiftをやっているので出会いましたら対戦よろしくお願いします🚲</p>
      </section>
    </Layout>
  )
}
