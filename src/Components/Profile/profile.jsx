import React from "react";
import { useState, useEffect } from "react";

import Login from "../login";
import Logout from "../logout";
import PostingComponent from "./postingComponent";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Logo from "../images/Logo.png";

export default function profile({ clientId, blur, setBlur }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [img, setImg] = useState();



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

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (open) {
    setBlur(true);
  } else {
    setBlur(false);
  }

  //  console.log(blur, 'this is the state of the posting')

  return (
    <div className={blur ? "blur" : undefined}>
      <div className=" mt-[25%] w-[80%] md:w-[50%] lg:mt-[10%] lg:w-[50%] mx-auto ">
        {isSignedIn ? (
          <div>
            <div className="flex lg:justify-between flex-col lg:flex-row w-[100%]">
              <div className="flex ">
                <img src={Logo} alt="" className="h-8 w-8 rounded-full mr-4" />
                <div>
                  <h4>Xusan Ibragimov</h4>
                  <span>nimadrla bilan shugullanadi </span>
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  create post
                  <AddIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <PostingComponent />
                </Menu>
              </div>
            </div>
            <div className=" mt-[5%]">
              <Box sx={{ typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <div className=" border-gray-600">
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        sx={{ margin: "0 auto", width: "auto" }}
                      >
                        <Tab label="Posts" value="1" />
                        <Tab label="Saved" value="2" />
                      </TabList>
                    </div>
                  </Box>
                  <TabPanel value="1">Posts </TabPanel>
                  <TabPanel value="2">Saved</TabPanel>
                </TabContext>
              </Box>
              <Logout />
            </div>
          </div>
        ) : (
          <Login  />
        )}
      </div>
    </div>
  );
}
