import Header from '@/components/Home/Header'
import Footer from '@/components/Home/footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
<div>


  <Header/>
  <Component {...pageProps} />
  <Footer/>
 
</div>
  )

}
