import ContactForm from "../components/ContactForm";
import Head from "next/head";
import { FaPhone, FaBox, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <div className="container">
    <Head>
      <title>BDKcloud :: Contact</title>
    </Head>
    <header className="py-4">
      <h1 className="leading-loose text-3xl font-semibold font-heading">
        Contact us
      </h1>
    </header>
    <main className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-3">
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <FaPhone />
          </span>
          <span className="text-lg font-semibold leading-loose">
            <a
              href="tel:1-800-309-0004"
              className="text-bdk-blue hover:text-bdk-blue-light"
            >
              (800) 309-0004
            </a>
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <FaPhone />
          </span>
          <span className="text-lg font-semibold leading-loose">
            <a
                href="mailto:info@bdkinc.com"
                className="text-bdk-blue hover:text-bdk-blue-light"
            >
              info@bdkinc.com
            </a>
          </span>
        </div>
        <div className="flex">
          <span className="mr-2 pt-1">
            <FaBox />
          </span>
          <span>
            <address>
              29515 Canvasback Dr.
              <br />
              Easton, MD 21601
            </address>
          </span>
        </div>
      </div>
    </main>
  </div>
);

export default Contact;
