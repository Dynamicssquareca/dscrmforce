import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "@/styles/globals.css";
import "@/styles/header.css"
import "@/styles/footer.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


function MyApp({ Component, pageProps }) {
 

 {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
       
      </>
    );
  }


}

export default MyApp;