import WhatWeDoCard from "./whatwedocard";
import Button from "../buttons-component/solidbutton";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { destination } from "../../constants/destinations";
import "./homePage.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { useTranslation } from "react-i18next";
import { offers } from "../../constants/offers";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className=" w-full overflow-hidden">
      <div className=" flex bg-[url('/banner.png')] pt-36 pb-80 bg-top bg-no-repeat bg-cover  ">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-50   py-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-10"
        >
          <motion.h1
            variants={animationVariants.fadeLeft}
            className="text-6xl  max-lg:mx-auto font-semibold max-sm:text-4xl max-w-lg "
          >
            {t("SliderHeader")}
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeLeft}
            className="text-3xl max-lg:mx-lg max-w-lg  "
          >
            {t("SliderDescription")}
          </motion.p>
          <motion.div
            variants={animationVariants.fadeLeft}
            id="search-inp"
            className="max-w-xl max-lg:mx-auto max-lg:w-full relative"
          >
            <Link onClick={scrollToTop} to="/contact">
              <Button
                content={t("ContactUs")}
                fontSize={"text-xl"}
                fontWeight={""}
                padding={"px-5  py-2"}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* </Reveal> */}
      </div>
      {/* about section */}
      <div style={{ maxWidth: 1200 }} className="p-10 max-md:px-5 mx-auto">
          <div className="contentContainer">
            <aside className="carousel">
              <div className="carousel__wrapper">
            
                {offers.map((e, i) => {
                  if (e.id != 5 && e.id != 6) {
                    return (
                      <div  className="item w-full " key={i}>
                        <img src={e.coverImage} className="absolute " alt="" />
                        <div className="absolute w-full h-full "></div>
                        <motion.div
                          initial="initial"
                          whileInView="animate"
                          variants={animationVariants.toLeft}
                          viewport={{ once: true, amount: 0.2 }}
                          className="absolute w-full h-full bg-white origin-left z-20 "
                        >
                          <div className=""></div>
                        </motion.div>
                        <Link
                          onClick={scrollToTop}
                          to={`/offers/${e.id}`}
                          className="absolute w-full h-full block "
                        ></Link>

                        <div className="flex flex-col gap-3  text-white absolute bottom-6 left-6 right-6 ">
                          <Link
                            onClick={scrollToTop}
                            to={`/offers/${e.id}`}
                            target="_blank"
                            className="text-xl font-medium hover:text-red-500  transition-all"
                          >
                            {t("placeName", {
                              placename: e.city,
                              placenameAR: e.cityAr,
                            })}
                          </Link>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </aside>
          </div>
        </div>
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex justify-between items-start p-10 py-28 max-md:py-16 gap-5 max-md:px-5 max-md:flex-col max-md:items-center max-md:text-center"
        >
          <div className="w-2/4 max-md:w-full ">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomOut}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-5xl max-md:text-4xl font-bold title-font">
                {t("HomePageHeader1")}
                <span className=" text-blue-500 title-font ">{t("Name")}</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-2/4 max-md:w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xl">{t("HomePageDescription1")}</p>
              <Link onClick={scrollToTop} to={"/aboutus"}>
                <Button
                  content={t("AboutTheCompany")}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="/appriciation-section-image.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto destination-section p-10 max-md:px-5  pb-28"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center  px-2"
          >
            {t("DestinationsWeLove")}
          </motion.h1>
          <div className="grid grid-cols-4 grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-4 relative mt-10 max-sm:mt-8">
            <img
              src="/cards-corner.png"
              className="absolute -left-10 -bottom-10 max-xl:hidden"
              alt=""
            />
            {destination.map((e, i) => {
              if (e.id != 5 && e.id != 6) {
                return (
                  <ProjectCard
                    key={i}
                    src={e.cardImage}
                    title={e.city}
                    titleAR={e.cityAr}
                    href={e.id}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* appreciation section end */}
      {/* what we do section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex gap-5 justify-between items-start p-10 py-28 max-md:py-16 max-md:px-5 max-lg:flex-col max-lg:items-center  max-lg:gap-12"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/3 max-lg:w-full max-lg:text-center flex flex-col gap-2 items-start max-lg:items-center"
          >
            <h2 className="text-5xl max-md:text-4xl font-bold title-font">
              {t("WhatWeDotitle")}
            </h2>
            <p className="text-xl">{t("WhatWeDo")}</p>
            <Link onClick={scrollToTop} to={"/aboutus"}>
              <button
                style={{ borderWidth: 1.5, borderRadius: 4 }}
                className="bg-transparent  text-black border-blue-500 text-xl px-5 py-2 duration-300 hover:bg-blue-500 hover:text-white transition-all mt-5 max-md:mt-3"
              >
                {t("AboutTheCompany")}
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="cards w-2/3 max-lg:w-full  flex justify-center max-md:flex-col max-md:items-center gap-7"
          >
            <div className="flex flex-col gap-7 ">
              {/* فنادق */}
              <WhatWeDoCard
                iconSrc={"/icons/hotel3.png"}
                iconAlt={t("Servisesdiv1Title")}
                title={t("Servisesdiv1Title")}
                desc={t("Servisesdiv1Desc")}
              />
              {/* تاشيرات */}
              <WhatWeDoCard
                iconSrc={"/icons/visa3.png"}
                iconAlt={t("Servisesdiv6Title")}
                title={t("Servisesdiv6Title")}
                desc={t("Servisesdiv6Desc")}
              />
              {/* سفاري ورحلات بحرية */}
              <WhatWeDoCard
                iconSrc={"/icons/car.png"}
                iconAlt={t("Servisesdiv3Title")}
                title={t("Servisesdiv3Title")}
                desc={t("Servisesdiv3Desc")}
              />
            </div>
            <div className="flex flex-col gap-7">
              <div
                style={{ height: 80 }}
                className="max-md:hidden rounded-lg w-90 bg-gradient-to-t from-white to-transparent"
              ></div>
              {/* حج وعمرة  */}
              <WhatWeDoCard
                iconSrc={"/icons/haaj.png"}
                iconAlt={t("Servisesdiv2Title")}
                title={t("Servisesdiv2Title")}
                desc={t("Servisesdiv2Desc")}
              />
              
              {/* الطيران الخاص وخدمات النقل */}
              <WhatWeDoCard
                iconSrc={"/icons/flight.png"}
                iconAlt={t("Servisesdiv5Title")}
                title={t("Servisesdiv5Title")}
                desc={t("Servisesdiv5Desc")}
              />
               {/* سياحة علاجية وتعليمية */}
              <WhatWeDoCard
                iconSrc={"/icons/Edutourists.png"}
                iconAlt={t("Servisesdiv4Title")}
                title={t("Servisesdiv4Title")}
                desc={t("Servisesdiv4Desc")}
              />
            </div>
          </motion.div>
        </div>
       
      </div>
      {/* what we do section end */}

    </div>
  );
};

export default HomePage;
