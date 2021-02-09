import React, { useState } from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../Hooks/useInput";
import { TRY_LOGIN, CHEKC_SECRET_CODE } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";

const MM04Container = ({ history }) => {
  ////////// VARIABLE     ////////

  ////////// USE STATE    ////////
  const inputEmail = useInput(``);
  const assignment = useInput(``);
  const [tab, setTab] = useState(0);

  ////////// USE REF      ////////

  ////////// USE CONTEXT  ////////

  ////////// USE QUERY    ////////

  ////////// USE MUTATION ////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHEKC_SECRET_CODE);

  ////////// USE EFFECT   ////////

  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode.result) {
      alert("로그인 성공!");
      sessionStorage.setItem("EVJD!@dZPXVvZPE", data.checkSecretCode.objectId);
      history.push("/");

      window.location.reload();
    } else {
      alert("인증코드가 잘못되었습니다.");
    }
  };

  return (
    <MM04Presenter
      inputEmail={inputEmail}
      assignment={assignment}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignmentCheckHandler={assignmentCheckHandler}
    />
  );
};

export default MM04Container;
