import { FaAngleDown, FaBars } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../constants/scrollToTop";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import { servicesData } from "../../constants/servicesData";

const NavBar = ({ navBar2, showCase1Page }) => {
  const param = useParams();
  const serviceData = servicesData[param.id - 1];
  const { t } = useTranslation();
  const [whenScroll, setWhenScroll] = useState("bg-transparent");
  const [logo, setlogo] = useState("/Sama-Toursim-Group.png");
  const [textColor, setTextColor] = useState("text-white");
  const [showcaseDropDown, setShowcaseDropDown] = useState(false);
  const [viewSideNav, setViewSideNav] = useState(false);
  const hideNav = () => {
    setViewSideNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setWhenScroll("bg-white");
        setlogo("/Sama-Toursim-Group.png");
        setTextColor("text-black");
      } else {
        setWhenScroll("transparent");
        setTextColor("text-white");
        setlogo("/Sama-Toursim-Group.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ zIndex: 98 }}
        className={
          showCase1Page
            ? " top-0 left-0 right-0 absolute"
            : `${navBar2 ? "bg-white shadow-xl" : whenScroll} ${
                whenScroll === "bg-white" ? "shadow-xl" : ""
              } transition-all fixed top-0 left-0 right-0 `
        }
      >
        <nav
          style={{ maxWidth: 1200 }}
          className="flex justify-between mx-auto items-center gap-4 py-7 max-md:py-5 px-7 max-sm:px-5 font-sm"
        >
          <Link onClick={scrollToTop} to="/">
            <img
              src={navBar2 ? "/Sama-Toursim-Group.png" : logo}
              className="w-40 max-lg:w-33"
              alt="ُElsama-logo"
            />
          </Link>
          <ul
            className={
              showCase1Page
                ? "text-xl flex max-lg:hidden justify-center items-center gap-6 text-white"
                : `${
                    navBar2 ? "text-black" : textColor
                  } text-xl flex max-lg:hidden justify-center items-center gap-6`
            }
          >
            <Link
              onClick={scrollToTop}
              className="hover:text-blue-500 transition-all"
              to="/"
            >
              {t("HomePage")}
            </Link>
            <div className="showcase-menu cursor-pointer hover:text-blue-500 transition-all relative">
              {t("AboutUs")}
              <div className="showcase-list hidden absolute cursor-default -left-4 ">
                <ul
                  style={{ border: "1px solid #e9e9e9" }}
                  className="mt-4 flex flex-col gap-2  bg-white text-black p-4 px-5 rounded-md  w-48"
                >
                  <li className="listItem flex items-center gap-2 ">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to="/ceoword"
                    >
                      {t("CEOword")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to="/aboutus"
                    >
                      {t("AboutTheCompany")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to="/ourgoal"
                    >
                      {t("goal")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to="/ourstrategy"
                    >
                      {t("Strategy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="showcase-menu cursor-pointer hover:text-blue-500 transition-all relative">
              <Link
                onClick={scrollToTop}
                className="hover:text-blue-500 transition-all"
                to="/Services"
              >
                {t("Services")}
              </Link>

              <div className="showcase-list hidden absolute cursor-default -left-4 ">
                <ul
                  style={{ border: "1px solid #e9e9e9" }}
                  className="mt-4 flex flex-col gap-2  bg-white text-black  p-4 px-5 rounded-md  w-48"
                >
                  <li className="listItem flex items-center gap-2  ">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500  "
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/1`}
                    >
                      {t("HotelReservation")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/2`}
                    >
                      {t("HajjUmrah")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/3`}
                    >
                      {t("Safaritrips")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/4`}
                    >
                      {t("PriviteFlights")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/6`}
                    >
                      {t("CruiseTrips")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/8`}
                    >
                      {t("MedicalTourism")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/7`}
                    >
                      {t("EducationalTourism")}
                    </Link>
                  </li>
                  <li className="listItem flex items-center gap-2">
                    <p
                      style={{ height: "2px" }}
                      className="w-0 bullet-line transition-all bg-blue-500"
                    ></p>
                    <Link
                      onClick={scrollToTop}
                      className="hover:text-blue-500 transition-all"
                      to={`/services/9`}
                    >
                      {t("Transportaion")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              onClick={scrollToTop}
              className="hover:text-blue-500 transition-all"
              to="/offers"
            >
              {t("offers")}
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:text-blue-500 transition-all"
              to="/destinations"
            >
              {t("Destinations")}
            </Link>

            <Link
              onClick={scrollToTop}
              className="hover:text-blue-500 transition-all"
              to={`/services/5`}
            >
              {t("TourtstVisa")}
            </Link>

            <Link onClick={scrollToTop} to="/contact">
              <Button
                content={t("ContactUs")}
                fontSize={"text-xl"}
                fontWeight={""}
                padding={"px-5  py-2"}
              />
            </Link>
            <LanguageSelector />
          </ul>
          <ul
            className={`${
              navBar2 ? "text-black" : textColor
            } text-xl hidden max-lg:flex justify-center items-center gap-8`}
          >
            <FaBars
              onClick={() => {
                setViewSideNav(!viewSideNav);
              }}
              className="cursor-pointer"
            />
          </ul>
        </nav>
      </div>

      {/* side nav bar for mobile view */}
      <div
        onClick={() => {
          setViewSideNav(!viewSideNav);
        }}
        style={{ zIndex: 99 }}
        className={`fixed ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } top-0 left-0 bottom-0 right-0  bg-black `}
      ></div>
      <nav
        style={{ zIndex: 100 }}
        // style={{ height: 8000 }}
        className={`fixed top-0 bottom-0 hidden max-lg:block ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } bg-white  left-0 w-96   p-5 px-10 max-sm:px-5 max-sm:w-80 z-30 transition-all font-medium`}
      >
        <div id="header" className="flex justify-between items-center">
          <img
            className="w-36"
            src="/Sama-Toursim-Group.png"
            alt="sama-logo2"
          />
          {/* close open nav */}
          <div
            onClick={() => {
              setViewSideNav(!viewSideNav);
            }}
            className="cancel cursor-pointer w-7 h-7"
            id="close-modal"
          >
            <div style={{ width: 3 }} className="relative mx-auto h-full">
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 rotate-45"
              ></div>
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 -rotate-45"
              ></div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-4 mt-8 text-md ">
          <Link
            onClick={() => {
              hideNav();
              scrollToTop();
            }}
            to="/"
            className="hover:text-blue-500 transition-all"
          >
            {t("HomePage")}
          </Link>

          <div className="relative">
            <div
              onClick={() => {
                setShowcaseDropDown(!showcaseDropDown);
              }}
              className="flex justify-between hover:text-blue-500 max-sm:hover:text-black transition-all items-center cursor-pointer"
            >
              <p className="transition-all">{t("AboutTheCompany")}</p>
              <FaAngleDown
                className={`${
                  showcaseDropDown ? "-rotate-180" : "rotate-0"
                } transition-all `}
              />
            </div>
            {/* من نحن */}
            <ul
              className={`flex flex-col gap-0.3 text-sm mt-4 pl-3 transition-all duration-300 origin-top  `}
            >
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                className="hover:text-blue-500 transition-all"
                to={"/ceoword"}
              >
                {t("CEOword")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/aboutus"}
                className="hover:text-blue-500 transition-all"
              >
                {t("AboutTheCompany")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/ourgoal"}
                className="hover:text-blue-500 transition-all"
              >
                {t("goal")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/ourstrategy"}
                className="hover:text-blue-500 transition-all"
              >
                {t("Strategy")}
              </Link>
            </ul>

            <div
              className={`${
                showcaseDropDown ? "top-[144px]" : "top-[41px]"
              } transition-all duration-200 absolute   w-full bg-white h-65`}
            >
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to="/services"
                className="hover:text-blue-500 transition-all"
              >
                {t("Services")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/offers"}
                className="hover:text-blue-500 mt-4  transition-all w-full block"
              >
                {t("offers")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/destinations"}
                className="hover:text-blue-500 mt-4  transition-all w-full block"
              >
                {t("Destinations")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/services/5"}
                className="hover:text-blue-500 mt-4  transition-all w-full block"
              >
                {t("TourtstVisa")}
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={"/contact"}
                className="hover:text-blue-500 transition-all w-full block"
              >
                <Button
                  content={t("ContactUs")}
                  fontSize={""}
                  padding={"py-[6px] px-3"}
                  furtherClasses={" mt-4"}
                />
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
