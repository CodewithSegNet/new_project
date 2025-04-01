import React from "react";
import Donators from "../assets/donator.jpg";
import ButtonImg from "../assets/button.jpg";
import SmashPay from "../assets/smashpay.jpg";
import SmashTech from "../assets/smashtech.png";
import Ridesmash from "../assets/ridesmash.png";
import HeroImg from "../assets/homepage.jpeg";
import { motion } from "framer-motion";
import Testimony from "../assets/testimony.jpg";
import { fadeVariants } from "../utils/varients";



const FirstSection = () => {
  return (
    <>
      <motion.section className="flex h-[680px]"
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <div className="flex flex-col justify-end gap-4 flex-1">
          <motion.div 
          className="flex text-sm gap-2 items-center font-medium">
            <img
              src={Donators}
              alt="contributors that has empower lives"
              className="h-[40px]"
            />
            <p className="flex items-center">
              <span className="text-black font-semibold">1000+</span>Donor
              Community Members
            </p>
          </motion.div>

          <motion.div
          >
            <h1 className="font-semibold w-[515px] text-6xl">
              Building a <span className="text-[#004D00]">Brighter</span> Future
              Together
            </h1>
          </motion.div>

          <div>
            <p className="text-sm font-normal w-[515px] pr-[45px] leading-6">
              Join us in our mission to create lasting change, communities, and
              drive innovation for a brighter and more sustainable future.
              Together, we can make a real difference.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button>
              <img src={ButtonImg} alt="" className=" h-[78px]" />
            </button>

            <button>
              <span className="font-medium text-sm">Learn More</span>
            </button>
          </div>

          <div>
            <h3 className="font-bold text-sm pb-3">Our Partners</h3>

            <div className="flex items-center gap-5">
              <div className="flex gap-1 items-center">
                <div className="h-[32px] w-[32px] rounded-sm overflow-hidden">
                  <img
                    src={SmashPay}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm font-bold">SmashRemite</p>
              </div>

              <div className="flex gap-1 items-center">
                <div className="h-[32px] w-[32px] rounded-sm overflow-hidden">
                  <img
                    src={SmashTech}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold">Ridesmash</p>
              </div>

              <div className="flex gap-1 items-center">
                <div className="h-[32px] w-[32px] rounded-sm overflow-hidden">
                  <img
                    src={Ridesmash}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold">Smash Technology</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div
            className="h-[680px] w-[635px] rounded-[50px] bg-cover bg-center relative "
            style={{ backgroundImage: `url(${HeroImg})` }}
          >
            <motion.div
              className="absolute top-[229px] left-5"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <img
                src={Testimony}
                alt="testimony"
                className="w-[394px] h-[60px] rounded-[46.31px]"
              />
            </motion.div>

            <motion.div
              className="w-[299px] bg-[#ffffff] p-[24px] rounded-[49.8px] absolute bottom-[-100px] left-[-80px] shadow-md"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <h3 className="font-bold">Dedicated Team</h3>
              <p className="font-normal text-[12px] leading-[24px] pt-5 pb-7">
                Our team consists of professionals, advocates, and volunteers
                who work tirelessly to implement impactful initiatives, foster
                innovation, and create sustainable solutions for a better
                future.
              </p>

              <div className="flex items-center gap-4">
                <div>
                  <img src={Donators} alt="" className="h-[40px]" />
                </div>

                <p className="font-bold text-[40px]">50+</p>
              </div>
            </motion.div>

            <motion.div className="absolute bottom-10 right-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <p className="py-[8px] px-[24px] rounded-full bg-[#ffffff] text-sm font-semibold mb-1">
                Lives has been changed
              </p>
              <p className="py-[8px] px-[24px] rounded-full bg-[#ffffff] text-sm font-semibold">
                by your support
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default FirstSection;
