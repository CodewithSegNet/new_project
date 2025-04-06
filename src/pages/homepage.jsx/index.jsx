import { Helmet, HelmetProvider } from "react-helmet-async";
import Simplepage from "../../layouts/HomeSection";
import Navbar from "../../layouts/Navbar";
import Secondpage from "../../layouts/SecondSection";


const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Paul Smith Initiative | Empowering Lives & Communities</title>
          <meta
            name="description"
            content="Paul Smith Initiative is a non-profit organization dedicated to supporting underprivileged children, women, and single mothers by providing education, healthcare, and empowerment programs."
          />
          <meta
            name="keywords"
            content="NGO, non-profit, charity, underprivileged children, women empowerment, single mothers support, education, healthcare, community development"
          />
          <meta
            property="og:title"
            content="Paul Smith Initiative | Empowering Lives & Communities"
          />
          <meta
            property="og:description"
            content="Join us in making a difference! Paul Smith Initiative supports underprivileged children, women, and single mothers through education, healthcare, and empowerment programs."
          />
          <meta
            property="og:url"
            content="https://www.paulsmithinitiative.org"
          />
          <meta
            name="twitter:title"
            content="Paul Smith Initiative | Changing Lives, One Step at a Time"
          />
          <meta
            name="twitter:description"
            content="Support underprivileged children, women, and single mothers with Paul Smith Initiative. Together, we can create a better future."
          />
          <meta
            name="twitter:image"
            content="https://www.paulsmithinitiative.org/images/og-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.paulsmithinitiative.org" />
        </Helmet>

        <div>

          <div  className="mx-4 md:mx-6 mt-[8rem] lg:mt-[1rem] pb-[7rem] lg:pb-[8rem]">
          <Navbar />
          <Simplepage />
          </div>
  
  <div className="pt-[31rem] md:pt-[22rem] lg:pt-[0rem]">
  <Secondpage/>

  </div>

        </div>
      </HelmetProvider>
    </>
  );
};

export default HomePage;
