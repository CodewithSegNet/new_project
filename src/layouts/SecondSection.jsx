import React from "react";
import Donators from "../assets/donator.jpg";
import ButtonImg from "../assets/button.jpg";
import SmashPay from "../assets/smashpay.jpg";
import SmashTech from "../assets/smashtech.png";
import Ridesmash from "../assets/ridesmash.png";
import SecondImg from "../assets/secondsection.jpeg";
import { motion } from "framer-motion";
import Testimony from "../assets/testimony.jpg";
import { fadeVariants } from "../utils/varients";

const SecondSection = () => {
  return (
    <>
      <section className="mt-[1rem] lg:mt-[0rem]">
        <div className="flex-1">
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${SecondImg})`,
              backgroundPosition: "top center",
            }}
          >
            <motion.div
              className="max-w-[708px] pt-[2rem] ml-[1rem] lg:pt-[3rem] lg:ml-[3rem]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="font-semibold leading-[50px] lg:leading-[80px] text-[40px] lg:text-[60px] text-white ">
                The Growing Hunger Crisis in{" "}
                <span className="text-[#004D00]">Nigeria</span>, A Threat to Our
                Children's Future
              </h1>
              <p className="font-normal text-[12px] text-white leading-[24px] max-w-[350px] md:max-w-[515px] pt-5 pb-7">
                Millions of children in Nigeria face the harsh reality of
                hunger, leading to malnutrition, stunted growth, and limited
                opportunities. Addressing this crisis is crucial to securing a
                healthier, brighter future for the next generation.
              </p>

              <button className="bg-primary text-white py-[10px] px-[24px] rounded-full font-semibold">
                Make a Donation Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
