import React from "react";
import { Wrapper, CommonBtn } from "../../components/commonComponents";
import styled from "styled-components";

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
`;

const TextInput = styled.input`
  width: 700px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 0px 10px;
  margin: 10px 0px;

  border: 1px solid #eee;
  box-shadow: 4px 4px 3.5px #ddd;
`;

const MM02Presenter = ({
  imagePath,
  fileUploadHandler,
  newTitle,
  newDesc,
  registerHandler,
}) => {
  return (
    <Wrapper>
      <Image src={imagePath} />
      <FileInput
        type="file"
        id="file-js"
        onChange={fileUploadHandler}
        accept=".png, .jpg, .jpeg"
      />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>
      <Wrapper margin={`40px 0px`}>
        <TextInput type="text" placeholder="Title..." {...newTitle} />
        <TextInput type="text" placeholder="Description..." {...newDesc} />
      </Wrapper>

      <Wrapper margin={`30px 0px 200px 0px`}>
        <CommonBtn isCreate={true} onClick={registerHandler}>
          저장하기
        </CommonBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
