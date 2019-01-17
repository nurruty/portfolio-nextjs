import Head from 'next/head';
import HomePage from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Contact from '../components/contact';

const Index = () => (
  <div >
  <Head>
    <title>Nicolas Urruty</title>
  </Head>
  <HomePage>
    <About />
    <Skills />
    <Contact />
  </HomePage>
  </div>
)
export default Index;