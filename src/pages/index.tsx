import HeadHomePage from '@/components/headHomePage'
import { DefaultFont } from '@/components/defaultFont'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <HeadHomePage />
      <Layout font={DefaultFont.className}>
        <div>Controles</div>
        <div>Main App</div>
      </Layout>
    </>
  )
}
