// components/DetailPanel.jsx
import React, { memo, useState, useEffect } from 'react';
import { backgroundTransition, textTransition, buttonTransition } from '../TransitionStyles';

// 그룹 타입을 확인하는 헬퍼 함수
const getGroupType = (gift, egogiftData) => {
  // 어떤 그룹에 속하는지 확인
  let groupType = '';
  for (const [group, gifts] of Object.entries(egogiftData || {})) {
    if (gifts && gifts.some(g => g.id === gift.id)) {
      groupType = group;
      break;
    }
  }
  return groupType; // 원본 영어 그대로 반환
};

// 수정된 LevelButton 컴포넌트
const LevelButton = ({ level, isActive, onClick, darkMode }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md mr-2 text-sm ${buttonTransition}
        ${isActive 
          ? `${darkMode ? 'bg-neutral-600' : 'bg-neutral-400'} font-bold ${darkMode ? 'text-white' : 'text-black'}` 
          : `${darkMode ? 'bg-neutral-700' : 'bg-neutral-200'} ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}`}
    >
      {level}
    </button>
  );
};

// 커스텀 EffectText 컴포넌트
const EffectText = ({ effectBase, effectData, darkMode }) => {
  if (!effectBase) return null;
  
  // 강조할 텍스트의 색상 클래스
  const getColorClass = () => {
    return darkMode ? 'text-yellow-400 font-bold' : 'text-yellow-600 font-bold';
  };

  // 효과 텍스트 파싱 및 렌더링하는 함수
  const renderEffectText = () => {
    // 줄바꿈으로 텍스트 분리
    const lines = effectBase.split('\n');
    
    return lines.map((line, lineIndex) => {
      // 템플릿 변수를 찾아서 처리
      let segments = [];
      let lastIndex = 0;
      let match;
      
      // 정규표현식으로 모든 템플릿 변수 매칭 ({{formula1}}, {{condition1}} 등)
      const regex = /{{(formula|condition)([1-7])}}/g;
      
      while ((match = regex.exec(line)) !== null) {
        const fullMatch = match[0]; // 예: {{formula1}}
        const type = match[1];     // 예: formula
        const num = match[2];      // 예: 1
        const key = `${type}${num}`;
        const value = effectData[key];
        
        // 템플릿 변수 이전의 일반 텍스트 추가
        if (match.index > lastIndex) {
          segments.push({
            type: 'text',
            content: line.substring(lastIndex, match.index)
          });
        }
        
        // 템플릿 변수에 해당하는 값이 있으면 추가
        if (value !== undefined && value !== null && value !== '') {
          segments.push({
            type: 'highlight',
            content: value
          });
        }
        
        lastIndex = match.index + fullMatch.length;
      }
      
      // 마지막 템플릿 변수 이후의 텍스트 추가
      if (lastIndex < line.length) {
        segments.push({
          type: 'text',
          content: line.substring(lastIndex)
        });
      }
      
      // 세그먼트 렌더링
      const renderedSegments = segments.map((segment, index) => {
        if (segment.type === 'highlight') {
          return (
            <span key={index} className={getColorClass()}>
              {segment.content}
            </span>
          );
        }
        return <span key={index}>{segment.content}</span>;
      });
      
      // 각 줄마다 div로 감싸서 줄바꿈 효과
      return (
        <div key={lineIndex} className="mb-1">
          {renderedSegments.length > 0 ? renderedSegments : <br />}
        </div>
      );
    });
  };

  return (
    <div className={`${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
      {renderEffectText()}
    </div>
  );
};

const DetailPanel = memo(({ gift, darkMode, isSmallScreen }) => {
  const [activeLevel, setActiveLevel] = useState('기본');
  
  // gift가 변경될 때마다 activeLevel을 '기본'으로 리셋
  useEffect(() => {
    setActiveLevel('기본');
  }, [gift]);
  
  const detailCardStyle = `${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-white'}
    rounded-lg shadow-md overflow-hidden h-full p-4`;

  // 그룹 타입 가져오기
  const groupType = getGroupType(gift, window.egogiftData);

  // 현재 레벨에 따른 효과 데이터
  const getCurrentEffectData = () => {
    if (!gift.effects || gift.effects.length === 0) {
      return { 
        formula1: '', 
        formula2: '', 
        formula3: '', 
        formula4: '', 
        formula5: '', 
        formula6: '', 
        formula7: '', 
        condition1: '', 
        condition2: '', 
        condition3: '' 
      };
    }
    
    const effect = gift.effects.find(e => e.level === activeLevel);
    if (!effect) {
      return { 
        formula1: '', 
        formula2: '', 
        formula3: '', 
        formula4: '', 
        formula5: '', 
        formula6: '', 
        formula7: '', 
        condition1: '', 
        condition2: '', 
        condition3: '' 
      };
    }
    
    return { 
      formula1: effect.formula1 || '', 
      formula2: effect.formula2 || '',
      formula3: effect.formula3 || '',
      formula4: effect.formula4 || '',
      formula5: effect.formula5 || '',
      formula6: effect.formula6 || '',
      formula7: effect.formula7 || '',
      condition1: effect.condition1 || '',
      condition2: effect.condition2 || '',
      condition3: effect.condition3 || ''
    };
  };

  const effectData = getCurrentEffectData();

  // 모바일 버전과 데스크톱 버전 구분
  const panelClass = isSmallScreen 
    ? 'w-full py-4' // 모바일에서는 전체 너비
    : 'h-full'; // 데스크톱에서는 부모 요소에서 너비 제어

  return (
    <div className={panelClass}>
      <div className={detailCardStyle}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${textTransition} 
            ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </h2>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="w-32 h-32 overflow-hidden mr-4 mb-4 sm:mb-0 relative">
              <img
                src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/egogift/square/${gift.id}.webp`}
                alt={gift.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/100x100/gray/white?text=No+Image';
                }}
              />
              
              {/* 랭크 표시 (왼쪽 상단) - 이미지 컨테이너 내부에 위치 */}
              {gift.grade && (
                <div className="absolute top-1 left-1 w-8 h-8 z-16 overflow-hidden">
                  <img 
                    src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/rank_${gift.grade}.webp`} 
                    alt={`Rank ${gift.grade}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/24x24/orange/white?text=${gift.grade}`;
                    }}
                  />
                </div>
              )}

              {/* 그룹 표시 (오른쪽 하단) - 이미지 컨테이너 내부에 위치 */}
              {groupType != "General" && (
                <div className="absolute bottom-1 right-1 w-8 h-8 z-10 overflow-hidden">
                  <img 
                    src={`https://raw.githubusercontent.com/noita0130/LimBooksImg/master/Keyword/${groupType}.webp`}
                    alt={groupType}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/24x24/blue/white?text=${groupType.charAt(0).toUpperCase()}`;
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <p className={`mb-1 ${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="font-semibold">관련 환상체:</span> {gift.relatedAbnormality || '없음'}
              </p>
              <p className={`mb-1 ${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="font-semibold">등급:</span> {gift.grade}
              </p>
              <p className={`mb-1 ${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="font-semibold">첫 등장:</span> {gift.firstAppearance}
              </p>
              <p className={`mb-1 ${textTransition} ${darkMode ? 'text-white' : 'text-black'}`}>
                <span className="font-semibold">강화:</span> {gift.upgrade === 'yes' ? '가능' : '불가'}
              </p>
            </div>
          </div>

          {/* 효과 레벨 선택 버튼 */}
          <div className="flex mt-4 mb-2">
            <LevelButton 
              level="기본" 
              isActive={activeLevel === '기본'}
              onClick={() => setActiveLevel('기본')}
              darkMode={darkMode}
            />
            
            {gift.effects && gift.effects.some(e => e.level === '+') && (
              <LevelButton 
                level="+" 
                isActive={activeLevel === '+'}
                onClick={() => setActiveLevel('+')}
                darkMode={darkMode}
              />
            )}
            
            {gift.effects && gift.effects.some(e => e.level === '++') && (
              <LevelButton 
                level="++" 
                isActive={activeLevel === '++'}
                onClick={() => setActiveLevel('++')}
                darkMode={darkMode}
              />
            )}
          </div>

          {/* 효과 정보 */}
          <div className={`mt-2 p-3 rounded-md border border-opacity-20 
                        border-gray-400 ${backgroundTransition} ${darkMode ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
            <p className={`mb-2 font-semibold ${textTransition} ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {activeLevel} 효과:
            </p>
            
            {/* 기존 dangerouslySetInnerHTML 대신 새로운 EffectText 컴포넌트 사용 */}
            <EffectText 
              effectBase={gift.effectBase} 
              effectData={effectData} 
              darkMode={darkMode} 
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailPanel;