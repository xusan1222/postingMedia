import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/navbar";
import MainPage from "./Components/MainPage/mainPage";
import Profile from "./Components/Profile/profile";
import Sidebar from "./Components/Sidebar/sideBar";

import { gapi } from "gapi-script";

import { db } from './firebase';
// console.log(db ,  ' this is bdbdbdbdbdbdbdbdbdbdbd');


const userId =
  "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";

  
  function App() {
    
    
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: userId,
          scope: "",
        });
      }
      gapi.load("client:auth2", start);
    });
      const [blur , setBlur] = useState(false)

  return (
    <>
      <Navbar  blur={blur} />
      <div className="hidden md:inline">

      <Sidebar  blur={blur} />
      </div>

      <Routes>
        <Route path="/profile" element={<Profile   blur={blur} setBlur={setBlur}  clientId={userId} />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
