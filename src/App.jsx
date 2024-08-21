import React from "react";

// state를 여러개 만들고, 특정 state가 변경되어 리렌더링이 일어났을 때
// 모니터링 하는 방법
const App = () => {
  const [count, setCount] = useState(0);
  return <div>App</div>;
};

export default App;
