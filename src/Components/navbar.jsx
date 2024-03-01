import React, { useEffect, useState } from "react";

import Logo from "./images/Logo.png";
import Login from "./login";
import MiniSidebar from './Sidebar/miniSidebar'

import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation } from "react-router-dom";


const clientId = "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";



export default function navbar(blur) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const lokatsiya = useLocation()
  
  const profilePageCreate = lokatsiya.pathname === "/profile"

  useEffect(() => {
    const handleSignInChange = (signedIn) => {
      setIsSignedIn(signedIn);
    };
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId,
        })
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          handleSignInChange(auth2.isSignedIn.get());
          auth2.isSignedIn.listen(handleSignInChange);
        });
      });
    }, [clientId]);
    
  return (
      <nav className={blur.blur ? 'bg-blue-900 text-white p-4 flex justify-between items-center fixed top-0 z-10 w-full h-[10%] blur' : 'bg-blue-900 text-white p-4 flex justify-between items-center fixed top-0 z-10 w-full h-[10%]'}>
      {/* Logo */}
      <div className="flex items-center">
        <div className="inline md:hidden">
      <MiniSidebar />
        </div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 xl:ml-14 md:ml-8" />
        </Link>
      </div>

      {/* Profile Button */}
      <div className="flex items-center">
        <Link to='/profile'>
        {/* User Name */}
        <span className=" mr-2 hidden md:inline  ">userName</span>

        {/* User Profile Picture */}
              </Link>
              <Link to='/profile'>
        <img src={Logo} alt="Profile" className="h-8 w-8 rounded-full mr-4" />
        {/* Profile Button */}
              </Link>
        {isSignedIn ? (
        <div>
            {!profilePageCreate && (
            
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400">
                <span className="hidden md:inline"> Create post</span>
                <AddIcon />
              </button>
            
             )} 
            </div>
        ) : (
          // !profilePageLogin && (
            !profilePageCreate && 
            <Login />
          // )
        )} 
          </div>
    </nav>
  );
}
