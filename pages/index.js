import Head from "next/head";
import { Card, CardTitle, CardBody } from "../components/Card.js";
import CheckCircle from "../components/CheckCircle.js";
import ContactForm from "../components/ContactForm.js";

export default function Home() {
  const offerings = [
    {
      title: "Hosted Power",
      description: "IBMi, Power Linux, AIX",
    },
    {
      title: "Hosted Intel",
      description: "VMWare, Windows, Linux",
    },
    {
      title: "ERP Hosting",
      description: "Manufacturing, Distribution, Lansa ERP",
    },
    {
      title: "EDI Hosting",
      description: "AS2, 850, Automation",
    },
    {
      title: "Application Hosting",
      description: "Windows, Linux, Power",
    },
    {
      title: "Web Hosting",
      description: "Apache, Nginx, Ruby, PHP, Node, Lansa, Docker",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>BDKcloud :: Home</title>
      </Head>
      <h1 className="hidden">BDKcloud Home</h1>
      <main className="container">
        <div className="md:grid md:grid-cols-6 gap-8">
          <div className="col-span-6">
            <div
              className="w-full server-fade pt-24 mb-12 relative border-r-4 border-bdk-blue rounded"
              style={{ height: "36rem" }}
            >
              <div className="absolute top-0 right-0 w-2/3 h-1 bg-gradient-to-l from-bdk-blue" />
              <div className="max-w-lg mb-6">
                <img className="text-white" src="/img/bdk.svg" alt="IBM logo" />
              </div>
              <h2 className="text-bdk-blue text-6xl font-bdk-blue font-semibold mb-3 text-orange-400">
                Power in the Cloud
              </h2>
              <p className="text-2xl">
                Your premier cloud provider. Providing solutions for hosted IBM
                Power, Intel, and other *AAS offerings.
              </p>
              <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-bdk-blue" />
            </div>
          </div>
          <Card className="col-span-2 mb-3">
            <CardTitle>
              <h3>Private Cloud</h3>
            </CardTitle>
            <CardBody>
              <p>
                Enhance your entire technical environment with dedicated cloud
                hosting that connects your team to your corporate services
                privately and securely.
              </p>
            </CardBody>
          </Card>
          <Card className="col-span-2 mb-3">
            <CardTitle>
              <h3>Hybrid Cloud</h3>
            </CardTitle>
            <CardBody>
              <p>
                Create the optimal cloud experience for your organization by
                leveraging a combination of public and private hosting solutions
                to meet the needs of all your applications.
              </p>
            </CardBody>
          </Card>
          <Card className="col-span-2 mb-3">
            <CardTitle>
              <h3>Public Cloud</h3>
            </CardTitle>
            <CardBody>
              <p>
                Whether it’s Office 365, websites, or web applications, your
                organization can only benefit from our simplified planning,
                deploying, and maintenance of your cloud solution.
              </p>
            </CardBody>
          </Card>
          <div className="col-span-3">
            <div className="flex flex-col space-y-12 pt-12 mb-8">
              {offerings.map((o) => (
                <div className="flex space-x-8 items-center" key={o.title}>
                  <span>
                    <CheckCircle />
                  </span>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-2xl font-semibold">{o.title}</h4>
                    <div className="w-full h-1 bg-gradient-to-r from-bdk-blue" />
                    <span className="text-2xl text-bdk-blue-darker dark:text-bdk-blue-lighter">
                      {o.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <div className="pt-12 mb-8">
              <h5 className="text-3xl font-semibold leading-loose">
                Contact us
              </h5>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
