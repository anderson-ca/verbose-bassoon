import '../styles/globals.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavWavesDivider from '../components/NavWavesDivider';
import WavesDivider from '../components/WavesDivider';
import Hero from '../components/Hero';
import About from '../components/About';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Hero />
      {/* <NavWavesDivider /> */}
      <About />
      <Component {...pageProps} />
      {/* <WavesDivider /> */}
      <Footer />
    </Layout>
  )
}

export default MyApp
