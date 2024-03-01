import { GoogleLogout } from "react-google-login";

const clientId =
  "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";

import React from "react";

export default function logout() {
  const onSucces = () => {
    console.log("you have logged out succesfully");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Log out"
        onLogoutSuccess={onSucces}
      />
    </div>
  );
}
