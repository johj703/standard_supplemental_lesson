import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MyDetailDetailPage = () => {
  const params = useParams();
  const name = params.name;
  const age = params.age;

  const GoHome = () => {
    useNavigate("/Home");
  };
  return (
    <div>
      {age}살이신 {name}님 안녕하세요!
      <button onClick={GoHome}>홈으로</button>
    </div>
  );
};

export default MyDetailDetailPage;
