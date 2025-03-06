import React, { useState, useEffect } from "react";

const MainPage = React.lazy(() => Promise.resolve({
  default: ({ darkMode }) => {
    const [deployTime, setDeployTime] = useState("로딩 중...");

    useEffect(() => {
      // 배포 시간 정보를 동적으로 불러옵니다
      import('../../updateDeployTime.cjs')
        .then(module => {
          setDeployTime(module.DEPLOY_TIME);
        })
        .catch(error => {
          console.error("배포 시간을 불러오는데 실패했습니다:", error);
          setDeployTime("정보 없음");
        });
    }, []);

    return (
      <div>
        <div className={`my-10 py-4 `}>
          <h1 className="text-center text-4xl font-bold mb-4">환영합니다</h1>
          <p className={`text-center }`}>
            림버스 컴퍼니의 스토리 리더 입니다<br />
            <br />
            최근 업데이트<br />
            2025.03.06.
            {/*deployTime*/}
          </p>
        </div>
        <div className={`my-10 py-4`}>
          <div className="flex flex-col md:flex-row justify-center w-full gap-6">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-center text-2xl font-bold mb-4">✅업데이트 목록</h1>
              <p className="text-center">
                1. 인격 스토리 추가<br />
                2. 대사집 추가<br />
                3. 3장까지의 스토리 화자 수정완료
                
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-center text-2xl font-bold mb-4">🔨제작중인 사항</h1>
              <p className="text-center">
                1. 수감자 대사 음성재생기능 <br />
                2. 4장 이후 스토리 화자 수정 <br />
                3. 육참골단Bokgak 이후 인격 추가예정
                
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}));

export default MainPage;