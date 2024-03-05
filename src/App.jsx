import Footer from "../components/footer/footer";
import Destinations from "./destinations";
import NavBar from "../components/navbar-component/navbar";
import Services from "./services";
import Offers from "./offers";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutDestination from "../components/project-page-components/aboutDestination";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Contact from "./contact";
import withRoot from '../components/withRoot'
import AboutOffer from "../components/offer-page-components/aboutOffer";
import CEOword from "../components/about-the-company-components/CEOword/CEOword";
import AboutUs from "../components/about-the-company-components/aboutUs/aboutUs";
import OurStrategy from "../components/about-the-company-components/OurStrategy/OurStrategy";
import OurGoal from "../components/about-the-company-components/OurGoal/OurGoal";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/ceoword",
    element: (
      <>
        <NavBar navBar2={true} />
        <CEOword />
        <Footer />
      </>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <>
        <NavBar navBar2={true} />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  
  {
    path: "/ourgoal",
    element: (
      <>
        <NavBar navBar2={true} />
        <OurGoal />
        <Footer />
      </>
    ),
  },
  {
    path: "/ourstrategy",
    element: (
      <>
        <NavBar navBar2={true} />
        <OurStrategy />
        <Footer />
      </>
    ),
  },
 
  {
    path: "/services/:id",
    element: (
      <>
        <NavBar />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    
    path: "/destinations",
    element: (
      <>
        <NavBar showCase1Page={true} />

        <Destinations />
        <Footer />
      </>
    ),
  },
 
  {
    path: "/destinations/:id",
    element: (
      <>
        <NavBar />
        <AboutDestination />
        <Footer />
      </>
    ),
  },
  {
    path: "/offers",
    element: (
      <>
        <NavBar />
        <Offers />
        <Footer />
      </>
    ),
  },
  {
    path: "/offers/:id",
    element: (
      <>
        <NavBar />
        <AboutOffer/>
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {

  return <RouterProvider router={router} />;
}
export default withRoot(App);

// export default App;
