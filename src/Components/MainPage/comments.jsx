import React, { useEffect, useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";

import { db } from "../../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default function comments(props) {
  const [comments, setComments] = useState([]);
  const UsersCollectionRef = doc(db, "backenddata", props.id);
  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(collection(UsersCollectionRef, "comments"));
      setComments(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };

    getUsersData();
  }, []);
  const deleteComment = async (id) => {
    const comm = doc(db, "backenddata", props.id);
    const delCom = doc(collection(comm, "comments"), id)
    await deleteDoc(delCom);
    window.location.reload();
  };

  return comments.map((comment) => (
    <div key={comment.id}>
      <div className="w-[85%] bg-sky-200 h-auto ml-[15%] mt-8 rounded p-2">
        <div className="profileInfo flex items-center   justify-between p-4">
          <div className="flex items-center ">
            <img
              src={comment.Content.userImg}
              alt="Profile"
              className="h-8 w-8 rounded-full mr-4"
            />
            <span className="mr-2 text-xl ">{comment.Content.userName}</span>
          </div>
          <p className="items-end">
            {comment.Content.time.hour}:{comment.Content.time.minute}
          </p>
        </div>
        <hr />
        <p className="p-4 tracking-tight">{comment.Content.comments}</p>
        <hr />
        <div className="actions flex justify-around mt-2 mx-auto ml-[80%] w-[20%]">
          <button>
            <FavoriteBorderIcon />
          </button>

          <button onClick={() => deleteComment(comment.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  ));
  // }
}
