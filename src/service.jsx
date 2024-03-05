import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ServicePage from "../components/service-component/service";
import { servicesData } from "../constants/servicesData";

const Service = () => {
  const navigate = useNavigate();
  const params = useParams();
  const serviceData = servicesData[params.id - 1];

  useEffect(() => {
    const serviceData = servicesData.findIndex((e, i) => {
      return e.id == params.id;
    });
    if (serviceData === -1) {
      navigate("/*");
    }
  }, []);
  useEffect(() => {
    document.title = `Services - ${serviceData.title} `;
  }, []);
  return (
    <ServicePage
      id={serviceData.id}
      title={serviceData.title}
      titleAR={serviceData.titleAR}
      breif={serviceData.shortDescription}
      descr={serviceData.mainDescription}
      imageSrc={serviceData.image}
    />
  );
};

export default Service;
