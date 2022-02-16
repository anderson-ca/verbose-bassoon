import '../styles/globals.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WavesDivider from '../components/WavesDivider';
import Hero from '../components/Hero';
import About from '../components/About';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ul className="my-grid">
        <li className="grid-item">item 1</li>
        <li className="grid-item">item 2</li>
        <li className="grid-item">item 3</li>
        <li className="grid-item">item 4</li>
        <li className="grid-item">item 5</li>
      </ul>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      <Component {...pageProps} />
      {/* <WavesDivider /> */}
      {/* <Footer /> */}
    </Layout>
  )
}

export default MyApp
