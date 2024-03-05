import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { useTranslation } from "react-i18next";

const OffersCard = ({ src, href, title,titleAR }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 380 }}
      className="relative w-full"
    >
        <Link
          onClick={scrollToTop}
          to={href}
          className="text-3xl text-left w-fit text-white hover:text-black transition-all cursor-pointer "
        >
      <div className="z-40 w-full h-full top-4 opacity-0 hover:opacity-100 transition-all duration-500 max-sm:top-2 max-sm:right-2 right-4 absolute pt-72 pl-10 bg-blue-500">
            {t("placeName",{placename:title ,placenameAR:titleAR})}
      </div>
      <img className="w-full h-full object-cover" src={src} alt="img" />
        </Link>
    </motion.div>
  );
};
export default OffersCard;
