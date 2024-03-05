import { useEffect } from "react";
import Section from "../components/destinations-components/section";
import { destination } from "../constants/destinations";
import { useTranslation } from "react-i18next";

const destinations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${ t("Destinations")} - ${t("Name")}  `;

  }, []);
  return (
    <div className="overflow-hidden">
      {destination.map((e, i) => {
        return (
          <Section
            key={i}
            url={e.coverImage}
            href={`/destinations/${e.id}`}
            title={e.city}
            titleAR={e.cityAr}
            desc={e.shortDescription}
            descAR={e.shortDescriptionAR}
            attachment={e.id % 2 !== 0 ? "bg-fixed" : ""}
          />
        );
      })}
    </div>
  );
};

export default destinations;
