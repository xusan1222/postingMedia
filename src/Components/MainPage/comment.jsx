// import React, { useState } from 'react'

// import { db } from "../../firebase";
// import { collection, doc, updateDoc, arrayUnion} from "firebase/firestore";

// export default function comment(props) {

//   const {isComment , setIsComment}= props
//   const [comment , setComment] = useState('')

//   console.log(isComment , "this is comment state")

//   async function addObjectToArray() {
//     try {
//         const docRef = doc(collection(db, "backenddata"), props.id);
//         await updateDoc(docRef, {
//           comments: arrayUnion({
//                 // Object you want to add to the array
//                 key: "hommmm",
//                 anotherKey: "hommm"
//             })
//         });
//         console.log("Object added to 'comm' array in 'nimaduradee' successfully!");
//     } catch (error) {
//         console.error("Error adding object to 'comm' array:", error);
//     };
//     setComment(' ')
// }

//   return (
//     <div>
//         <textarea  className='focus:outline-sky-600 border-2 mx-auto border-black-200 w-[100%]  cursor-pointer'  value={comment} onChange={e =>setComment(e.target.value)} placeholder='comments here' name="" id=""  rows="3"></textarea>
//         <button onClick={()=> setIsComment(!isComment) } className='border-2 rounded-md border-blue-600 text-blue-600 w-36 h-8'>
//             Do not comment
//         </button>
//         <button onClick={ addObjectToArray} className='bg-blue-600 text-white w-28 rounded h-8 ml-4'>
//             submit
//         </button>
//     </div>
//   )
// }

////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import { db } from "../../firebase";
import {
  collection,
  doc,
  updateDoc,
  arrayUnion,
  addDoc,
} from "firebase/firestore";

export default function comment(props) {
  const clientId =
    "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";

  const { isComment, setIsComment } = props;
  const [comment, setComment] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [img, setImg] = useState();
  const now = new Date();
  const time = {
    hour: now.getHours(),
    minute: now.getMinutes(),
  };
  const infoCom = {
    userEmail: userEmail,
    userName: userName,
    userImg: img,
    comments: comment,
    time: time,
  }

  async function createComment() {
    const parentDocRef = doc(db, "backenddata", props.id);
    await addDoc(collection(parentDocRef, "comments"), { Content: infoCom });
    setComment("");
    setIsComment(false)
  }
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

  return (
    <div>
      <textarea
        className="focus:outline-sky-600 border-2 mx-auto border-black-200 w-[100%]  cursor-pointer"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="comments here"
        name=""
        id=""
        rows="3"
      ></textarea>
      <button
        onClick={() => setIsComment(!isComment)}
        className="border-2 rounded-md border-blue-600 text-blue-600 w-36 h-8"
      >
        Do not comment
      </button>
      <button
        onClick={createComment}
        className="bg-blue-600 text-white w-28 rounded h-8 ml-4"
      >
        submit

      </button>
    </div>
  );
}
