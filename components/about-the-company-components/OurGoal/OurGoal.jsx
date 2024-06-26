import { useParams } from "react-router-dom";
import { animationVariants } from "../../../constants/animationVariants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { offers } from "../../../constants/offers";
import React, { useState, useRef } from "react";
import "./OurGoal.css";

const OurGoal = () => {
  const { t } = useTranslation();
  const param = useParams();
  const offer = offers[param.id - 1];
  useEffect(() => {
    document.title =`${ t("goal")} - ${t("Name")} `
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
            {t("CEOword")}
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
          className="w-2/3 max-lg:w-full text-3xl p-6 py-7 rounded-md flex flex-col  justify-between items-start gap-5"
        >
         
         <div className="goalresponsive">
                    <div className="goalgallery ">

                        <h1>{t(("goal"))}</h1>

                        <div class='contetntcontainer'>
                            <div className='goalparagraph'>
                                <p >{t(("GoalsContent"))}</p>
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
          className="w-1/3 flex flex-col gap-5 max-lg:w-full"
        >
          <img src={"/public/aboutTheCompany/CEO1.jpg"} alt={""} />
        </motion.div>
      </div>
    </div>
  );
};

export default OurGoal;
