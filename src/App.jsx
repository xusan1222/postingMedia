import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/navbar";
import MainPage from "./Components/MainPage/mainPage";
import Profile from "./Components/Profile/profile";
import Sidebar from "./Components/Sidebar/sideBar";
import It from './Components/Types/it'
import Medicine from './Components/Types/medicine'
import Sport from './Components/Types/sport'
import Other from './Components/Types/other'

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
      <Navbar blur={blur} setBlur={setBlur}  />
      <div className="hidden md:inline">

      <Sidebar  blur={blur} />
      </div>

      <Routes>
        <Route path="/profile" element={<Profile   blur={blur} setBlur={setBlur}  clientId={userId} />} />
        <Route path="/" element={<MainPage />} />
        <Route path='/it' element={<It/>} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/others" element={<Other />} /> 
      </Routes>
    </>
  );
}

export default App;
