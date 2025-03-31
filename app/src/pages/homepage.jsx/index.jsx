import backgroundImage from "../../assets/travels1.webp";
import backgroundImageMedium from "../../assets/travels2.webp";
import backgroundImageSmall from "../../assets/travels3.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/HeroContents/Hero";
import Navbar from "../../layouts/Navbar";
import Card from "../../components/BoardingCard/BoardCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Ads from "../../components/Ads/Ads";
import Bookings from "../../layouts/BookingsPartner";
import Cards from "../../layouts/Card";
import Whychooseus from "../../components/WhyChooseUsContent/Whychooseus";
import Footer from "../../layouts/Footer";
import Testimonies from "../../layouts/Testimonies";
import Faq from "../../layouts/Faq";

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Smash Travels | Home</title>
          <meta
            name="description"
            content="Affordable travel packages and visa services."
          />
          <meta
            name="keywords"
            content="visa services, travel agency, affordable travel packages, international travel, tourism, visa assistance, travel deals, cheap flights, holiday packages"
          />
          <meta property="og:title" content="Smash Travels | Home" />
          <meta
            property="og:description"
            content="Explore travel packages with Smash Travels."
          />
          <meta property="og:url" content="https://www.smashtravels.com" />
          <meta
            name="twitter:title"
            content="Visa Services & Travel"
          />
          <meta
            name="twitter:description"
            content="Smash Travels offers affordable visa services, top-notch travel packages, and hassle-free international travel experiences."
          />
          <meta
            name="twitter:image"
            content="https://www.smashtravels.com/assets/logos.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.smashtravels.com/" />
        </Helmet>

        {/* Hero Section */}
        <div className="relative w-full  md:max-h-[806px]">
          <img
            src={backgroundImage}
            srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
            sizes="(min-width: 2880px) 2880px, 100vw"
            alt="Explore travel packages and visa services with Smash Travels"
            className="absolute object-cover object-top top-[0px] w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[630px] object-fit inset-0"
            loading="eager"
          />
          <Navbar />
          <Hero />

          <Card />
          <Ads />
          <Bookings />
          <Cards />
          <Whychooseus />
          <Testimonies />
          <Faq />
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
};

export default HomePage;
