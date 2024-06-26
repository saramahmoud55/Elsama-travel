import "./section.css";
import { Link } from "react-router-dom";
import Button from "../buttons-component/solidbutton";
import { scrollToTop } from "../../constants/scrollToTop";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section = ({ url, title,titleAR, desc,descAR, href, attachment }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`h-screen flex   ${attachment} bg-top relative bg-no-repeat bg-cover   items-center`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20 "></div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.zoomOut}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col max-w-lg m-28 max-lg:ml-10 max-sm:mx-auto max-sm:px-5  text-white items-start gap-6 relative  w-fit max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:text-center "
      >
        <h1 className="text-6xl max-sm:text-[42px] font-semibold ">{t("placeName",{placename:title ,placenameAR:titleAR})}</h1>
        <p className="text-2xl  max-sm:w-full">{t("placesDesc",{placesDesc:desc ,placesDescAR:descAR})}</p>
        <Link onClick={scrollToTop} to={href}>
          <Button
            content={t("SeeMore")}
            fontSize={"text-2xl"}
            padding={"px-8  py-3 max-sm:py-2 max-sm:px-5"}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Section;
