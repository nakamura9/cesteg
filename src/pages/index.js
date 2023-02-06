import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/nav"
import Footer from "../components/footer"


export default function Home() {
  return (
    <>
      <Head>
        <title>Cesteg Engineering</title>
        <meta name="description" content="Cesteg Engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main >
          <div>
            Jumbotron
          </div>
          <div>
            Departments
          </div>
          <div>
            Brands
          </div>
          <div>
            Categories
          </div>
          <div>
            Sale
          </div>
      </main>
      <Footer />
    </>
  )
}
