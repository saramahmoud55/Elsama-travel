import OffersCard from "../components/offers-components/offersCard";
import { offers } from "../constants/offers";
import OffersHeroSection from "../components/offers-components/offersHeroSecion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${ t("offers")} - ${t("Name")}  `;
  }, []);
  return (
    <div className="overflow-hidden">
      <OffersHeroSection />
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-2 grid-cols-3 max-lg:grid-rows-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-6 p-10 max-md:px-5 "
      >
        {offers.map((e, i) => {
          return (
            <OffersCard
              href={`/offers/${e.id}`}
              src={e.coverImage}
              title={e.city}
              titleAR={e.cityAr}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
