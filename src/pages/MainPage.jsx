import React, { useState, useEffect } from "react";
import useDarkMode from '../hooks/useDarkmode';
import {
  backgroundTransition,
  textTransition,
  buttonTransition,
  getBgStyle,
  getTextStyle,
  getSubTextStyle
} from '../components/TransitionStyles';
import { Home, Book, BookOpen, UserRound, Mic, Youtube, Twitter, MessageCircle, Users, ExternalLink, Globe } from "lucide-react";

const MainPage = React.lazy(() => Promise.resolve({
  default: () => {
    const { darkMode } = useDarkMode();
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

    // 공통 카드 스타일링 함수
    const getCardStyle = () => {
      return `
        ${getBgStyle(darkMode)} 
        rounded-xl 
        shadow-lg 
        p-4
        md:p-6 

        ${backgroundTransition}
        ${darkMode ? 'border border-neutral-700' : 'border border-neutral-200'}
        hover:shadow-xl
        ${backgroundTransition}
      `;
    };

    // 섹션 제목 스타일링 함수
    const getSectionTitleStyle = () => {
      return `
        text-center 
        text-xl
        md:text-2xl 
        font-bold 
        mb-4 
        ${getTextStyle(darkMode)}
      `;
    };

    // 섹션 내용 스타일링 함수
    const getSectionContentStyle = () => {
      return `
        text-center 
        ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}
        text-sm
        md:text-base
      `;
    };

    // 소셜 미디어 버튼 스타일
    const getSocialButtonStyle = (color) => {
      return `
        w-full 
        flex 
        items-center 
        justify-center 
        p-3 
        rounded-lg 
        ${buttonTransition}
        hover:opacity-80
        focus:outline-none
        focus:ring-2
        ${darkMode ? 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}
      `;
    };

    return (
      <div className={`rounded-2xl ${getBgStyle(darkMode)} ${backgroundTransition} py-4 px-4`}>
  {/* 주요 기능 - 상단에 위치 */}
  <div className={`w-full mb-4 ${getCardStyle()}`}>
    <h2 className={getSectionTitleStyle()}>
      <span className="mr-2">📊</span>
      사이트 소개
    </h2>

    {/* flex row로 변경 */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
      
      {/* 카드 1 */}
      <div className={`p-1 md:p-4 rounded-lg flex flex-col justify-center items-center text-center w-full md:w-1/3 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
        <div className="flex items-center mb-2">
          <Book className="w-5 h-5 mr-2 text-blue-500" />
          <span className={`font-semibold ${getTextStyle(darkMode)}`}>스토리</span>
        </div>
        <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          메인스토리 및 인격스토리
        </p>
      </div>

      {/* 카드 2 */}
      <div className={`p-1 md:p-4 rounded-lg flex flex-col justify-center items-center text-center w-full md:w-1/3 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
        <div className="flex items-center mb-2">
          <BookOpen className="w-5 h-5 mr-2 text-green-500" />
          <span className={`font-semibold ${getTextStyle(darkMode)}`}>수감자 정보</span>
        </div>
        <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          E.G.O 및 수감자 대사
        </p>
      </div>

      {/* 카드 3 */}
      <div className={`p-1 md:p-4 rounded-lg flex flex-col justify-center items-center text-center w-full md:w-1/3 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 mr-2 text-purple-500" />
          <span className={`font-semibold ${getTextStyle(darkMode)}`}>아나운서</span>
        </div>
        <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          아나운서 대사집 및 재생기능
        </p>
      </div>

    </div>
  </div>

        {/* 메인 컨텐츠 섹션 - 높이 맞춤 */}
        <div className="flex flex-col lg:flex-row justify-center w-full gap-4 mb-4">
          {/* 왼쪽: 유튜브 영상 */}
          <div className="w-full lg:w-2/3">
            <div className={`${getBgStyle(darkMode)} rounded-xl shadow-lg p-3 md:p-6 h-full
            ${backgroundTransition}
            ${darkMode ? 'border border-neutral-700' : 'border border-neutral-200'}`}>
              <div className="flex justify-center h-full">
                <div className="w-full max-w-3xl aspect-video">
                  <iframe width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5JnZTjwwcJ0?si=MMHZ7N-pDyue6ziB"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 링크 영역 - 높이 맞춤 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {/* 협업 사이트 섹션 */}
            <div className={`flex-1 ${getCardStyle()}`}>
              <h2 className={`text-center text-lg md:text-xl font-bold mb-3 ${getTextStyle(darkMode)}`}>
                <span className="mr-2">🤝</span>
                협업
              </h2>
              <div className="flex flex-col items-center gap-3 justify-center py-2">
                {/* 아이콘 */}
                <a
                  href="https://baslimbus.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group w-[100px] h-auto"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}dantesoop.png`}
                    alt="단빵숲 로고"
                    className="block w-full h-auto"
                  />
                </a>
                <p className={`${getSectionContentStyle()} text-xs md:text-sm text-center px-2`}>
                  단빵숲
                </p>
              </div>
            </div>
            {/* 공식 계정 섹션 */}
            <div className={`flex-1 ${getCardStyle()}`}>
              <h2 className={`text-center text-lg md:text-xl font-bold mb-3 ${getTextStyle(darkMode)}`}>
                PM 공식계정
              </h2>
              <div className="flex flex-col gap-2 md:gap-3 justify-center py-2">
                <a
                  href="https://www.youtube.com/@ProjectMoonOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full 
                    flex 
                    items-center 
                    justify-center 
                    p-2 md:p-2.5
                    rounded-lg 
                    text-sm md:text-base
                    ${buttonTransition}
                    hover:opacity-80
                    focus:outline-none
                    focus:ring-2
                    ${darkMode ? 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}
                  `}
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="ml-2">YouTube</span>
                </a>
                <a
                  href="https://x.com/projmoonstudio?lang=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full 
                    flex 
                    items-center 
                    justify-center 
                    p-2 md:p-2.5
                    rounded-lg 
                    text-sm md:text-base
                    ${buttonTransition}
                    hover:opacity-80
                    focus:outline-none
                    focus:ring-2
                    ${darkMode ? 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}
                  `}
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="ml-2">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
            <div className={`mb-4 ${getCardStyle()}`}>
              <h2 className={getSectionTitleStyle()}>
                <span className="mr-2">✅</span>
                업데이트 목록
              </h2>
              <p className={`text-left ${getSectionContentStyle()}`}>
                2025.08.17.  홍원군주 홍루 추가<br />
                2025.08.03.  T사 오티스 추가<br />
                2025.07.18.  제 6회 발푸밤 인격 및 에고 추가<br />
                2025.07.07.  8장 스토리누락 수정<br />
                2025.07.06.  N사 E.G.O::흉탄 추가<br />
                

              </p>
            </div>
      </div>
    );
  }
}));

export default MainPage;