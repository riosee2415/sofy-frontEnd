import React, { useState } from "react";
import storageRef from "../../firebase";
import MM02Presenter from "./MM02Presenter";
import useInput from "../../Hooks/useInput";
import { REGISTER_VIDEO } from "./MM02Queries";
import { useMutation } from "react-apollo-hooks";

const MM02Container = ({ history }) => {
  ////////// VARIABLE     ////////

  ////////// USE STATE    ////////
  const [imagePath, setImagePath] = useState(``);

  const newTitle = useInput(``);
  const newDesc = useInput(``);

  ////////// USE REF      ////////

  ////////// USE CONTEXT  ////////

  ////////// USE QUERY    ////////

  ////////// USE MUTATION ////////
  const [registerVideoMutation] = useMutation(REGISTER_VIDEO);

  ////////// USE EFFECT   ////////

  ////////// FUNCTION HANDLER   ////////

  const fileUploadHandler = async (e) => {
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbnail/${uploadFileName}`
      );

      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {
      console.log(e);
    }
  };

  const registerHandler = async () => {
    const { data } = await registerVideoMutation({
      variables: {
        path: imagePath,
        title: newTitle.value,
        desc: newDesc.value,
      },
    });

    if (data.registerVideo) {
      alert("영상 업로드 성공!");
      history.push("/");
    } else {
      alert("영상 업로드 실패!");
    }
  };

  return (
    <MM02Presenter
      imagePath={imagePath}
      fileUploadHandler={fileUploadHandler}
      newTitle={newTitle}
      newDesc={newDesc}
      registerHandler={registerHandler}
    />
  );
};

export default MM02Container;
