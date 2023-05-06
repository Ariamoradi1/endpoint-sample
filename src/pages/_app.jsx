import Navbar from '../Components/Navbar/Navbar'
import '../styles/Custom.css'


export default function App({ Component, pageProps }) {
  return(
    <>
  <Navbar/>
  <Component {...pageProps}/>
   </>
  ) 
}
