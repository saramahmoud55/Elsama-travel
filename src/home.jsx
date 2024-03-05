import HomePage from "../components/home-page-components/homePage";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("Name");
  }, []);
  return <HomePage />;
};

export default Home;
