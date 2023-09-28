import Head from "next/head";
import fs from "fs";
import path from "path";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Gallery from "../components/Gallery";

export async function getStaticProps() {
  const imgDir = path.join(process.cwd(), "public/img");

  const fileNames = fs.readdirSync(imgDir);

  const images = fileNames.map((fileName) => {
    return path.join(imgDir, fileName).split("public").pop();
  });

  return {
    props: { images },
  };
}

const Services = ({ images }) => (
  <div className="container">
    <Head>
      <title>BDKcloud :: Services</title>
    </Head>
    <header className="py-4">
      <h1 className="text-4xl font-semibold font-heading leading-loose mb-6">
        Services
      </h1>
    </header>
    <main>
      <section id="private-cloud" className="md:flex py-4">
        <h2 className="font-semibold text-3xl dark:text-bdk-blue-lighter md:w-1/4">
          Private Cloud
        </h2>
        <article className="prose-sm md:prose lg:prose-lg dark:text-gray-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dolorum ducimus nemo quidem unde. Accusamus alias atque cumque
            distinctio, dolorum id ipsam necessitatibus nostrum quisquam rem
            repellendus veniam voluptas voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
            blanditiis, dolore dolorum ducimus est facere, iure labore magnam
            magni minus modi nostrum perferendis quas quibusdam quisquam, sequi
            ut velit.
          </p>
        </article>
      </section>
      <section id="hybrid-cloud" className="md:flex py-4">
        <h2 className="font-semibold text-3xl dark:text-bdk-blue-lighter md:w-1/4">
          Hybrid Cloud
        </h2>
        <article className="prose-sm md:prose lg:prose-lg dark:text-gray-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dolorum ducimus nemo quidem unde. Accusamus alias atque cumque
            distinctio, dolorum id ipsam necessitatibus nostrum quisquam rem
            repellendus veniam voluptas voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
            blanditiis, dolore dolorum ducimus est facere, iure labore magnam
            magni minus modi nostrum perferendis quas quibusdam quisquam, sequi
            ut velit.
          </p>
        </article>
      </section>
      <section id="public-cloud" className="md:flex py-4">
        <h2 className="font-semibold text-3xl dark:text-bdk-blue-lighter md:w-1/4">
          Public Cloud
        </h2>
        <article className="prose-sm md:prose lg:prose-lg dark:text-gray-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dolorum ducimus nemo quidem unde. Accusamus alias atque cumque
            distinctio, dolorum id ipsam necessitatibus nostrum quisquam rem
            repellendus veniam voluptas voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
            blanditiis, dolore dolorum ducimus est facere, iure labore magnam
            magni minus modi nostrum perferendis quas quibusdam quisquam, sequi
            ut velit.
          </p>
        </article>
      </section>

      <aside>
        {/*<Gallery images={images} />*/}
      </aside>
      <article className="col-span-3 prose-sm md:prose lg:prose-lg dark:text-gray-200">
        <h2 className="dark:text-bdk-blue-lightest">The Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          dolores dolorum ea earum eligendi, eveniet fugiat harum ipsa iusto
          modi nam nobis odio perspiciatis quia ratione repellendus sint, vero
          voluptatem!
        </p>
        <h2 className="dark:text-bdk-blue-lightest">The Hardware</h2>
        <ul>
          <li>Power</li>
          <li>Windows</li>
          <li>Linux</li>
        </ul>
        <h2 className="dark:text-bdk-blue-lightest">The Partners</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          consequatur consequuntur doloremque eius eveniet facilis hic id nam
          obcaecati porro quam quibusdam saepe, sapiente sed, tenetur voluptas
          voluptatem? Distinctio, esse.
        </p>
        <div className="mb-3">
          <ImagePlaceholder />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consectetur culpa earum exercitationem harum, iusto labore quae quo
          reprehenderit rerum sequi similique soluta tenetur totam voluptas.
          Eveniet id sint vero?
        </p>
      </article>
    </main>
  </div>
);

export default Services;
