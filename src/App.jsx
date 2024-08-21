import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 어디로 오면 어디로 보낼지!!! */}
        {/* 1. 어디로 오면 : path */}
        {/* 2. 어디로 보낼지 : element */}

        {/* TDOO: Route를 이용해서 about, like, mypage 페이지 만들기 */}
        {/* 별도 컴포넌트 파일을 만들지 말고 App.jsx 안에서 바로 작성하기 */}
        <Route path="/about" element={<div>about 페이지 입니다.</div>} />
        <Route path="/like" element={<div>like 페이지 입니다.</div>} />
        <Route path="/mypage" element={<div>mypage 페이지 입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
