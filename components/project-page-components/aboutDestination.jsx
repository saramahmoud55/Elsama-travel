import {
  FaArrowLeft,
  FaArrowRight,
  FaWindows,
} from "react-icons/fa";
import "./aboutDestination.css";
import { Link, useParams } from "react-router-dom";
import { destination } from "../../constants/destinations";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const aboutDestination = ({ heroImageSrc, attachment }) => {
  const { t } = useTranslation();
  const param = useParams();
  const project = destination[param.id - 1];
  useEffect(() => {
    document.title =`${ t("ServiceName",{ServiceName:project.city ,ServiceNameAR:project.cityAr})} - ${t("Name")} `
  }, [param]);
  return (
    <div className="overflow-hidden">
      <div
        className={`h-screen relative  ${heroImageSrc} ${attachment} bg-top bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${project.coverImage})`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/50">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-8xl max-lg:text-6xl max-md:text-5xl  font-semibold text-white"
          >
            {t("placeName",{placename:project.city ,placenameAR:project.cityAr})}
          </motion.h1>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="flex mx-auto p-10 max-sm:px-5 gap-16 max-sm:gap-14 max-md:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-5"
        >
          <h1 className="text-5xl font-bold"> {t("placeName",{placename:project.city ,placenameAR:project.cityAr})}</h1>
    
        </motion.div>
      
      </div>
      {/* description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeRight}
        viewport={{ once: true, amount: 0.05 }}
        style={{ maxWidth: 1200 }}
        className="text-lg mx-auto p-10 max-sm:px-5 max-sm:pt-5  max-sm:mb-8 mb-20"
      >
        <p>
        {t("placesDescPara1",{placesDescPara1en:project.description1 ,placesDescPara1AR:project.descriptionAR1})}
        </p>
        <div className="p-5 px-10 max-sm:px-4">
          <h2 className="text-2xl text-center font-semibold text-blue-600 p-5 max-sm:p-3 border-l-4 border-blue-500">
          {t("placesDescPara1",{placesDescPara1en:project.shortDescription ,placesDescPara1AR:project.shortDescriptionAR})}
          </h2>
        </div>
        <p>
        {t("placesDescPara1",{placesDescPara1en:project.description2 ,placesDescPara1AR:project.descriptionAR2})}

        </p>
        <p>
          {t("placesDescPara1",{placesDescPara1en:project.description3 ,placesDescPara1AR:project.descriptionAR3})}

          </p>
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="text-3xl font-semibold text-blue-500">
          {t("placesDescPara1",{placesDescPara1en:project.placesToVisit ,placesDescPara1AR:project.placesToVisitAR})}
          </h2>
          <p>

          </p>
          
        </div>
      </motion.div>

      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {project.moreImages.map((e, i) => {
          return (
        
            <motion.div
            key={i}
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 470 }}
      className="service-card w-full relative "
    >
      <img
        src={e.image}
        className="w-full h-full absolute object-cover"
        alt={e}
      />
      <div className="w-full h-full absolute bg-black/30"></div>
      <div className="it-container px-4 w-full h-full absolute text-white hover:bg-blue-800 transition-all duration-500 flex flex-col justify-center items-center gap-2">
        <h2 className="service-heading text-2xl title-font font-semibold -mb-36 transition-all duration-200 ">
        {t("placeName",{placename:e.imagetitle ,placenameAR:e.imagetitleAR})}
        </h2>
        <p className="it-content text-md mt-10 max-w-md opacity-0  text-center  scale-y-0 transition-all duration-75 origin-top">
        {t("placesDesc",{placesDesc:e.imagecontent ,placesDescAR:e.imagecontentAR})}
        </p>
       
      </div>
    </motion.div>
          );
        })}
      </div>
      <div className=" flex">
        <Link
          onClick={scrollToTop}
          to={project.prevHref}
          id="prev-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <FaArrowLeft className="prev-arrow transition-all" />
          <p className="transition-all">Prev post</p>
        </Link>
        <div className="w-1/5 py-7 border-l-2 border-r-2 flex justify-center items-center">
          <FaWindows />
        </div>
        <Link
          onClick={scrollToTop}
          to={project.nextHref}
          id="next-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <p className="transition-all">Next post</p>
          <FaArrowRight className="next-arrow transition-all " />
        </Link>
      </div>
    </div>
  );
};

export default aboutDestination;
