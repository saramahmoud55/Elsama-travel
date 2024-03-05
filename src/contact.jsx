import { useEffect } from "react";
import ContactPage from "../components/contact-page-component/contact-page";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${ t("Services")} - ${t("Name")}  `;
  }, []);
  return (
    <div className="overflow-hidden">
      <ContactPage />
    </div>
  );
};

export default Contact;
