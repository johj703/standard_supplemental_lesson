import { useParams, useNavigate } from "react-router-dom";

const MyDetailDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const name = params.name;
  const age = params.age;

  return (
    <div>
      {age}살이신 {name}님 안녕하세요!
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
};

export default MyDetailDetailPage;
