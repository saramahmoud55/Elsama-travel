import { useParams } from "react-router-dom";
import { animationVariants } from "../../../constants/animationVariants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { offers } from "../../../constants/offers";
import React, { useState, useRef } from "react";
import "./aboutus.css";

const AboutUs = () => {
  const { t } = useTranslation();
  const param = useParams();
  const offer = offers[param.id - 1];
  useEffect(() => {
    document.title =`${t("AboutUs")} - ${t("Name")} `
  }, [param]);

  return (
    <div className=" w-full overflow-hidden">
      <div className=" flex bg-[url('/banner.png')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover  ">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg "
          >
            {t("AboutTheCompany")}
          </motion.h1>
        </div>

        {/* </Reveal> */}
      </div>

      {/* offer form section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 py-28 max-sm:px-5 flex max-lg:flex-wrap-reverse  gap-12"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-1/2 max-lg:w-full p-6 py-7 text-3xl  rounded-md flex flex-col  justify-between items-start gap-5"
        >
             <div className="aboutusresponsive">
                    <div className="aboutusgallery ">

                        <h1>{t(("AboutUs"))}</h1>

                        <div class='contetntcontainer'>
                            <div class='AboutUsparagraph'>
                                <p >{t(("AboutUsContent"))}</p>
                            </div>
                           
                        
                        </div>

                    </div>
                </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/2 flex flex-col gap-5 max-lg:w-full"
        >
          <img src={"/public/aboutTheCompany/Sama-Group-1.jpg"} style={{height:500,width:600}} alt={""} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
