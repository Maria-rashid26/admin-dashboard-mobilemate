import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userprovider from "./Compnents/MainDashboard/Users/UserProvider";
import Profile from "./Compnents/MainDashboard/Profile/Profile";
import UserActivity from "./Compnents/MainDashboard/Users/UserActivity";
import Services from "./Compnents/MainDashboard/Services/Services";
import About from "./Compnents/MainDashboard/About/About";
import FAQ from "./Compnents/MainDashboard/FAQ's/FAQ";
import Ads from "./Compnents/MainDashboard/Ads/Ads";
import MobileBrandDetails from "./Compnents/MainDashboard/MobileDetails/MobileBrandDetails";
import Reviews from "./Compnents/MainDashboard/reviews/Reviews";
import Users from "./Compnents/MainDashboard/Users/Users";
import Layout from "./Compnents/Layout/Layout";
import MainDashboard from "./Compnents/MainDashboard/DasboardPannel/MainDashboard";
import HitsGraph from "./Compnents/MainDashboard/Graphs/HitsGraph";
import MainNewsConatainer from "./Compnents/MainDashboard/news/MainNewsConatainer";
import NewsDetails from "./Compnents/MainDashboard/news/NewsDetails";
import AllPendingNews from "./Compnents/MainDashboard/news/AllPendingNews";
import AllRejectedNews from "./Compnents/MainDashboard/news/AllRejectedNews";
import MobileBrandsMainSec from "./Compnents/MainDashboard/Brands/MobileBrandsMainSec";
import AddNewsForm from "./Compnents/MainDashboard/news/AddNewsForm";
import MainMobileComp from "./Compnents/MainDashboard/Mobiles/MainMobileComp";
import AllPublishNews from "./Compnents/MainDashboard/news/AllPublishNews";
import EveryBrandMobiles from "./Compnents/MainDashboard/Mobiles/EveryBrandMobiles";
import MobileDetails from "./Compnents/MainDashboard/Mobiles/MobileDetails";



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <Userprovider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                toggleSidebar={toggleSidebar}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          >
            <Route index element={<MainDashboard />} />
            <Route
              path="mobileBrandsMainSec"
              element={<MobileBrandsMainSec />}
            />
            <Route path="users" element={<Users />} />
            <Route path="hitsgraph" element={<HitsGraph />} />
            <Route path="MobileBrandDetails" element={<MobileBrandDetails />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="profile" element={<Profile />} />
            <Route path="ads" element={<Ads />} />
            <Route path="useractivity" element={<UserActivity />} />
            <Route path="mainNewsContainer" element={<MainNewsConatainer />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="newsdetails/:id" element={<NewsDetails />} />
            <Route path="news" element={<AllPublishNews />} />
            <Route path="allPendingNews" element={<AllPendingNews />} />
            <Route path="allRejectedNews" element={<AllRejectedNews />} />
            <Route path="addNewsForm" element={<AddNewsForm />} />
            <Route path="MainMobileComp" element={<MainMobileComp />} />
            <Route path="EveryBrandMobiles" element={<EveryBrandMobiles />} />
            <Route path="MobileDetails" element={<MobileDetails />} />
      
          </Route>
        </Routes>
      </BrowserRouter>
    </Userprovider>
  );
}

export default App;
