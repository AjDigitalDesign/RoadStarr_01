import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Banner from '../components/banner';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Services />
        <Contact />
      </Layout>
    </>
  )
}
