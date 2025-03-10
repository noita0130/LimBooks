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
            2025.03.11.
            {/*deployTime*/}
          </p>
        </div>
        <div className={`my-10 py-4`}>
          <div className="flex flex-col md:flex-row justify-center w-full gap-6">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-center text-2xl font-bold mb-4">✅업데이트 목록</h1>
              <p className="text-center">
                1. 리우 이상, 불주먹 그렉, 동섕돈 스토리추가<br />
                2. 수감자 대사 음성재생기능 추가
                3. 메인스토리 검수 90%완료
                4. 아나운서 추가
                
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-center text-2xl font-bold mb-4">🔨제작중인 사항</h1>
              <p className="text-center">
                1. 와히스 6장 전/후 대사변경<br />
                2. 제뱌찌 플루드니차 대사추가<br />
                3. 특수대사 (실장돈키, 선장마엘, 츠이스 등) 추가
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}));

export default MainPage;