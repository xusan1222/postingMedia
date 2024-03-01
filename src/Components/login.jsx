// import React from "react";
// import { GoogleLogin } from "react-google-login";

// const clientId =
//   "1075831694739-skd7c65rohgfmbj7r325rcuem1stea38.apps.googleusercontent.com";

// export default function login() {
//   const onSuccess = (res) => {
//     console.log("you have logged in succesfully , you are: ", res.profileObj);
//   };
//   const onFailure = (res) => {
//     console.log("you are not logged in, res: ", res);
//   };
//   console.log(GoogleLogin, "google login ");
//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={"single_host_origin"}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }


import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";

export default function login() {
  const onSuccess = (res) => {
  console.log("you have logged in succesfully , you are: ", res.profileObj);
  // console.log(user , 'this is userrrrrrrr')
};
  const onFailure = (res) => {
    console.log("you are not logged in, res: ", res);
  };
  // console.log(GoogleLogin, "google login ");
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
