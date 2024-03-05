import React from "react";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OffersHeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url(/services-page-images/banner.png)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
      <motion.h1
        initial="initial"
        whileInView="animate"
        variants={animationVariants.zoomOut}
        viewport={{ once: true, amount: 0.2 }}
        className="text-6xl max-sm:text-5xl text-center font-semibold "
      >
        {t("offers")}
      </motion.h1>
    </div>
  );
};

export default OffersHeroSection;
