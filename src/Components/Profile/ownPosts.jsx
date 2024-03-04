import React, { use, useEffect, useState } from "react";

import Comment from "../MainPage/comment";
import Comments from "../MainPage/comments";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

import { allPosts } from "../allPosts";

import { db } from "../../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default function ownPosts() {
  const [isComment, setIsComment] = useState(false);
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "backenddata");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");

  const handleInfo = (info) => {
    setUserEmail(info.email);
    setUserName(info.name);
    setImg(info.imageUrl);
  };

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
      const auth = gapi.auth2.getAuthInstance().currentUser.le.profileObj;

      handleInfo(auth);
    };

    getUsersData();
  }, []);

  const deletePost = async (id) => {
    const userDoc = doc(db, "backenddata", id);
    console.log(id.toString());
    await deleteDoc(userDoc);
    window.location.reload();
  };

  return users.map(
    (user) =>
      user.Content.userEmail === userEmail ? (
        <div
          key={user.id}
          className="p-4 bg-white rounded shadow-md mx-auto md:w-[50%] md:mt-[15%] w-[80%]  border-2 border-sky-200 mt-[20%] lg:mt-[5%] "
        >
          <div className="profileInfo flex items-center   justify-between p-4">
            <div className="flex items-center ">
              {/* this is profile photo */}
              <img
                src={user.Content.userImg}
                alt="Profile"
                className="h-8 w-8 rounded-full mr-4"
              />
              {/* this is user name */}
              <span className="mr-2 text-xl ">{user.Content.userName}</span>
            </div>
            {/* this is posted time */}
            <p className="items-end ">
              posted {user.Content.time.hour}:{user.Content.time.minute}
            </p>
          </div>
          <hr color="black" />
          <div className="mx-auto w-[80%]">
            <h1>topic</h1>
            <p className="tracking-tight">
              {user.Content.post}
              {/* {user.Content.id} */}
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="actions flex justify-around mx-auto w-50=[50%]">
            <button>
              <FavoriteBorderIcon />
            </button>
            <button onClick={() => setIsComment(!isComment)}>
              <ChatBubbleOutlineIcon />
            </button>
            <button>
              <TurnedInNotIcon />
            </button>
            <button
              onClick={() => {
                deletePost(user.id);
              }}
            >
              <DeleteIcon />
            </button>
          </div>
          {isComment && (
            <Comment
              isComment={isComment}
              setIsComment={setIsComment}
              id={user.id}
            />
          )}
          <Comments id={user.id} />
        </div>
      ):(
        <div>
        <h1>you have not posted yet</h1>
        </div>
      )
  );
}
