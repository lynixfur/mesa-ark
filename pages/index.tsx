import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

const Home = () => (
    <div className="h-[5000px]">
      <Head>
        <title>MesaARK</title>
      </Head>
      {/*<Navbar links={null}/>*/}
      <h2 className="m-5">
        We are not ready! <br />
        We are not quite ready to serve you the best web experience yet. Our shadowmanes are working hard!
      </h2>
    </div>
)

export default Home