import Head from 'next/head';
import HomePage from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Education from '../components/education';
import Projects from '../components/projects';
import Footer from '../components/footer';

const Index = () => (
  <div >
  <Head>
    <title>Nicolas Urruty</title>
  </Head>
  <HomePage>
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </HomePage>
  </div>
)
export default Index;