import '../styles/globals.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WavesDivider from '../components/WavesDivider';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <WavesDivider />
      <Footer />
    </Layout>
  )
}

export default MyApp
