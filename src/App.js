import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import SoftwareSystemAndDevelopment from "./components/SoftwareSystemAndDevelopment/SoftwareSystemAndDevelopment";
import AppDevelopment from "./components/AppDevelopment/AppDevelopment";
import WebsiteDesignAndDevelopment from "./components/WebsiteDesignAndDevelopment/WebsiteDesignAndDevelopment";
import DomainAndHosting from "./components/DomainAndHosting/DomainAndHosting";
import BPOSupport from "./components/BPOSupport/BPOSupport";
import OnlineMarketing from "./components/OnlineMarketing/OnlineMarketing";
import ContentDevelopment from "./components/ContentDevelopment/ContentDevelopment";
import GraphicDesign from "./components/GraphicDesign/GraphicDesign";
import UIUXDesign from "./components/UIUXDesign/UIUXDesign";
import SocialMediaManagement from "./components/SocialMediaManagement/SocialMediaManagement";
import MarketResearch from "./components/MarketResearch/MarketResearch";
import WhiteLabelSolution from "./components/WhiteLabelSolution/WhiteLabelSolution";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/Software",
          element: (
            <SoftwareSystemAndDevelopment></SoftwareSystemAndDevelopment>
          ),
        },
        {
          path: "/AppDevelopment",
          element: <AppDevelopment></AppDevelopment>,
        },
        {
          path: "/Website",
          element: <WebsiteDesignAndDevelopment></WebsiteDesignAndDevelopment>,
        },
        {
          path: "/DomainAndHosting",
          element: <DomainAndHosting></DomainAndHosting>,
        },
        {
          path: "/BPOSupport",
          element: <BPOSupport></BPOSupport>,
        },
        {
          path: "/OnlineMarketing",
          element: <OnlineMarketing></OnlineMarketing>,
        },
        {
          path: "/ContentDevelopment",
          element: <ContentDevelopment></ContentDevelopment>,
        },
        {
          path: "/GraphicDesign",
          element: <GraphicDesign></GraphicDesign>,
        },
        {
          path: "/UIUXDesign",
          element: <UIUXDesign></UIUXDesign>,
        },
        {
          path: "/SocialMediaManagement",
          element: <SocialMediaManagement></SocialMediaManagement>,
        },
        {
          path: "/MarketResearch",
          element: <MarketResearch></MarketResearch>,
        },
        {
          path: "/WhiteLabelSolution",
          element: <WhiteLabelSolution></WhiteLabelSolution>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
