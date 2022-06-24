import Head from "next/head"
import Navbar from '../ui/Navbar';


type layoutProps = {
  children: React.ReactNode;
};


const Layout = ({children}: layoutProps) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <Navbar/>
      </nav>
      <main style = {{padding: '20px 50px'}}>
        {children}
      </main>
    </>
  )
}

export default Layout
