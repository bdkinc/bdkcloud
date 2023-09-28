import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import ModeToggle from "../components/ModeToggle";
import "../assets/styles.scss";

const year = new Date().getFullYear();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Power in the cloud. IBM power, Intel, and application hosting. Office 365, off-site backups and other cloud service integrations."
          />
          <meta
            name="keywords"
            content="Cloud, Hosting, IBMi, AS400, Windows, ERP, EDI, Applications"
          />
          <meta name="author" content="BDK, inc." />
          <title>BDKcloud</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,600&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="w-full mb-4 mt-4">
          <div className="container">
            <div className="flex items-center">
              <div className="w-[16rem] h-auto">
                <Link href="/">
                  <a className="-indent-96 overflow-hidden block">
                    Home
                    <Logo />
                  </a>
                </Link>
              </div>
              <div className="flex-1 ml-10">
                <NavMenu />
              </div>
              <div className="ml-auto">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <footer className="container py-6">
          <a
            href="https://www.bdkinc.com"
            className="font-semibold text-bdk-blue hover:text-bdk-blue-light"
            target="_blank"
          >
            BDKinc &copy;{year}
          </a>
        </footer>
      </Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HJZJSR6XMG%22"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-HJZJSR6XMG');
            `}
      </Script>
    </ThemeProvider>
  );
}

export default MyApp;
