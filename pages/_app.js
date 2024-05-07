import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "@/styles/globals.css";
import "@/styles/header.css"
import "@/styles/footer.css"
import { GoogleAnalytics } from '@next/third-parties/google';
import Layout from '@/components/Layout'; // Import your custom layout component
import Head from "next/head";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


function MyAppWithLayout({ Component, pageProps }) {
 

 {
    return (
      <>
     <Head>
   
     </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics gaId="GTM-T5X2P3X" />
      </>
    );
  }


}

export default MyAppWithLayout;