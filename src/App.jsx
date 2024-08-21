import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Like from "./pages/Like";
import MyPage from "./pages/MyPage";
import MyPageDetail from "./pages/MyPageDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 어디로 오면 어디로 보낼지!!! */}
        {/* 1. 어디로 오면 : path */}
        {/* 2. 어디로 보낼지 : element */}

        {/* TDOO: Route를 이용해서 about, like, mypage 페이지 만들기 */}
        {/* 별도 컴포넌트 파일을 만들지 말고 App.jsx 안에서 바로 작성하기 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/like" element={<Like />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/:name" element={<MyPageDetail />} />
        <Route path="/mypage/:name/:age" element={<MyDetailDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
