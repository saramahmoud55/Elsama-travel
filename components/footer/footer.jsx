
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <footer
        style={{ maxWidth: 1200 }}
        className="mx-auto flex justify-between gap-20 max-lg:flex-col py-20 px-8 max-sm:px-5  "
      >
        <div className="flex flex-col items-start h-auto justify-between gap-16 w-2/4 max-lg:w-full pr-10 max-sm:pr-0">
          <div className="flex flex-col text-lg items-start  justify-between gap-10 ">
            <a href="/">
              <img src="/Sama-Toursim-Group.png" className="w-36" alt="Elsama-logo" />
            </a>
            <p style={{ color: "#fff" }}>
            {t("address")}
            </p>
         
            <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
              <Link
                onClick={scrollToTop}
                className="hover:text-blue-500 transition-all"
                to="/"
              >
                {t("HomePage")}
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-blue-500 transition-all"
                to="/services"
              >
                 {t("Services")}
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-blue-500 transition-all"
                to="/aboutus"
              >
                 {t("AboutUs")}
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-blue-500 transition-all"
                to="/contact"
              >
                {t("ContactUs")}
              </Link>
            </ul>
          </div>
          <p style={{ color: "#696969" }}>{t("Rights")}</p>
        </div>

        <div
          id="contact"
          className="w-2/4 max-lg:w-full flex flex-col h-auto justify-between items-start gap-10 "
        >
          <h1 className="text-3xl text-white">Get in Touch</h1>
          <div className="name w-full gap-8 text-white max-sm:flex-col max-sm:gap-10 mt-3 flex">
          <div className="flex text-xl justify-start items-center gap-10 text-blue-500">
              <Link target="_blank" to={"https://facebook.com"}>
                <FaFacebookF />
              </Link>
              <Link target="_blank" to={"https://www.instagram.com/samatravel.group/"}>
                <FaInstagram />
              </Link>
              <Link target="_blank" to={"https://twitter.com"}>
                <FaTwitter />
              </Link>
              <Link target="_blank" to={"https://api.whatsapp.com/send/?phone=966501652999&text&app_absent=0"}>
                <FaWhatsapp />
              </Link>
            </div>
           </div>
          <div className="flex text-xl justify-start items-center gap-10 text-white  hover:text-blue-500">
              <Link target="_blank" to={"tel: +966568767441"}>
              {t("phone1")}
              </Link>
             
            </div>
          <div className="flex text-xl justify-start items-center gap-10  text-white  hover:text-blue-500">
              <Link target="_blank" to={"tel: +966501652999"}>
              {t("phone2")}
              </Link>
             
            </div>
          <div className="flex text-xl justify-start items-center gap-10  text-white  hover:text-blue-500">
              <Link target="_blank" to={"info@samatravel-group.com"}>
              <a href = "mailto:info@samatravel-group.com">

              info@samatravel-group.com
              </a>
              </Link>
             
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
