import React from "react";

const MainPage = React.lazy(() => Promise.resolve({
  default: ({ darkMode }) => (
    <div>
      <div className={`my-10 py-4 `}>
        <h1 className="text-center text-4xl font-bold mb-4">환영합니다</h1>
        <p className={`text-center }`}>
          LimBooks에서 다양한 이야기를 만나보세요.
        </p>
      </div>
      <div className={`my-10 py-4 `}>
        <h1 className="text-center text-2xl font-bold mb-4">제작중인 사항</h1>
        <p className="text-center ">
          1. 수감자 대사집 <br />
          2. 인격스토리 (미정)<br />
          3. 스토리 화자 수정 <br />
          3-1. 1~3장 수정 완료
        </p>
      </div>
    </div>
  )
}));

export default MainPage;