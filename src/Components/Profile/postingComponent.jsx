import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export default function PostingComponent() {
  const clientId =
    "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";
  const [postContent, setPostContent] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const [type, setType] = useState("IT");
  const now = new Date();
  const time = {
    hour: now.getHours(),
    minute: now.getMinutes(),
  };
  // const userName = user
  const data = {
    userEmail: userEmail,
    userName: userName,
    userImg: img,
    post: postContent,
    time: time,
    type:type,
  };

  const handleInfo = (info) => {
    setUserEmail(info.email);
    setUserName(info.name);
    setImg(info.imageUrl);
  };
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId,
        })
        .then(() => {
          const auth2 = gapi.auth2.getAuthInstance().currentUser.le.profileObj;

          handleInfo(auth2);
        });
    });
  }, [clientId]);

  // async function createPost() {
  //   const UsersCollectionRef = doc(db, "backenddata", userName);
  //   await addDoc(collection(UsersCollectionRef, "posts"), { Content: data });
  //   setPostContent("");

  //   // console.log(getDocs(doc(collection(db, "backenddata"), "A0zdS9L9BhTZUE0ybxXx")))
  // }
  // useEffect(() => {
  //   gapi.load("client:auth2", () => {
  //     gapi.client
  //       .init({
  //         clientId,
  //       })
  //       .then(() => {
  //         const auth2 = gapi.auth2.getAuthInstance().currentUser.le.profileObj;

  //         handleInfo(auth2);
  //       });
  //   });
  // }, [clientId]);

    async function createPost() {
      const UsersCollectionRef = collection(db, "backenddata");
      await addDoc(UsersCollectionRef, { Content: data });
      setPostContent("");

      // console.log(getDocs(doc(collection(db, "backenddata"), "A0zdS9L9BhTZUE0ybxXx")))

    }
  console.log(type);
  return (
    <div>
      <div className="w-96 h-96 p-12" id="postingComponent">
        <textarea
          placeholder="post here..."
          name="Content"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          cols="40"
          rows="10"
        ></textarea>
        {/* <label for="type">Choose the type</label> */}
        <div className="flex justify-between items-center">
          {" "}
          <select
          className="outline-sky-600 outline-2 border-2 border-sky-600  h-12"
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="type"
            id="cars"
          >
            <option value="It">IT</option>
            <option value="Medicine">Medicine</option>
            <option value="Sport">Sport</option>
            <option value="Other">Other</option>
          </select>
          <button
            className="h-12 border-2 border-blue-400 w-[40%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400"
            onClick={createPost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
