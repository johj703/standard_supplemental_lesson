import React from "react";
import { useSearchParams } from "react-router-dom";

const MyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  console.log(name);
  console.log(age);
  return (
    <div>
      {name}님 안녕하세요. {age}살 이시군요.
      <button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        onClick={function () {
          setSearchParams();
        }}
      >
        40살로 변경
      </button>
    </div>
  );
};

export default MyPage;
