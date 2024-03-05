import { useEffect } from "react";
import ServicesComponent from "../components/services-page-components/services";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${ t("Services")} - ${t("Name")}  `;
  }, []);
  return (
    <div className="overflow-hidden">
      <ServicesComponent />
    </div>
  );
};

export default Services;
