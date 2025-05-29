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
import { Home, Book, BookOpen, UserRound, Mic, Youtube, Twitter, MessageCircle } from "lucide-react";

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
        rounded-lg 
        shadow-md 
        p-3
        md:p-6 
        mb-6 
        ${backgroundTransition}
        ${darkMode ? 'border border-neutral-700' : 'border border-neutral-200'}
      `;
    };

    // 섹션 제목 스타일링 함수
    const getSectionTitleStyle = () => {
      return `
        text-center 
        text-2xl 
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
        ${darkMode ? 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-200'}
      `;
    };

    return (
      <div className={`min-h-screen rounded-2xl ${getBgStyle(darkMode)} ${backgroundTransition} py-4 px-4`}>
        {/* 유튜브 영상 섹션 */}
        <div className={`${getBgStyle(darkMode)} rounded-lg shadow-md p-1 md:p-6 mb-6 
        ${backgroundTransition}
        ${darkMode ? 'border border-neutral-700' : 'border border-neutral-200'} mb-8`}>
          <div className="flex justify-center">
            <div className=" w-full max-w-3xl aspect-video">
              <iframe width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q8aayN94mAE?si=kG2OLow4sSV04OTW" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 업데이트 및 작업 중인 사항 섹션 */}
        <div className="flex flex-col md:flex-row justify-center w-full gap-6">
          <div className={`w-full md:w-1/2 ${getCardStyle()}`}>
            <h2 className={getSectionTitleStyle()}>
              <span className="mr-2">✅</span>
              업데이트 목록
            </h2>
            <p className={getSectionContentStyle()}>
              2025.05.29.<br />
              8장 하편 업데이트<br />
              홍루 아나운서 추가 <br />
              자공/자로 아나운서 추가 <br />
            </p>
          </div>

          <div className={`w-full md:w-1/2 ${getCardStyle()}`}>
            <h2 className={getSectionTitleStyle()}>
              <span className="mr-2">🔨</span>
              작업중/예정인 사항
            </h2>
            <p className={getSectionContentStyle()}>
              스토리 Img<br/>
              대사관련
            </p>
          </div>
        </div>

        {/* 공식 계정 섹션 */}
        <div className={`${getCardStyle()} flex flex-col items-center`}>
          <h2 className={getSectionTitleStyle()}>공식 계정</h2>
          <div className="flex justify-center space-x-4 w-full max-w-md">
            <a
              href="https://www.youtube.com/@ProjectMoonOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-[150px] ${getSocialButtonStyle()}`}
            >
              <div className="flex items-center justify-center w-full">
                <Youtube className="w-8 h-8" />
              </div>
            </a>
            <a
              href="https://x.com/projmoonstudio?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-[150px] ${getSocialButtonStyle()}`}
            >
              <div className="flex items-center justify-center w-full">
                <Twitter className="w-8 h-8" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}));

export default MainPage;