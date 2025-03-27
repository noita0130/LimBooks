// components/DetailPanel.jsx
import React, { memo, useState } from 'react';
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
  return groupType.toLowerCase();
};

const LevelButton = ({ level, isActive, onClick, darkMode }) => {
  // 레벨에 따른 색상
  const getLevelColor = () => {
    if (level === '기본 효과') return darkMode ? 'bg-blue-800' : 'bg-blue-200';
    if (level === '+') return darkMode ? 'bg-green-800' : 'bg-green-200';
    if (level === '++') return darkMode ? 'bg-purple-800' : 'bg-purple-200';
    return '';
  };
  
  const activeColor = getLevelColor();
  const inactiveColor = darkMode 
    ? 'bg-neutral-700 text-neutral-300' 
    : 'bg-neutral-200 text-neutral-600';
  
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md mr-2 text-sm transition-all duration-300 
        ${isActive ? `${activeColor} font-bold` : inactiveColor}`}
    >
      {level}
    </button>
  );
};

const DetailPanel = memo(({ gift, darkMode, onClose, isSmallScreen }) => {
  const [activeLevel, setActiveLevel] = useState('기본 효과');
  
  const detailCardStyle = `${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-white'}
    rounded-lg shadow-md overflow-hidden h-full p-4`;

  // 그룹 타입 가져오기
  const groupType = getGroupType(gift, window.egogiftData);

  // 현재 레벨에 따른 효과 데이터
  const getCurrentEffectData = () => {
    if (!gift.effects || gift.effects.length === 0) {
      return { formula: '', condition: '' };
    }
    
    const effect = gift.effects.find(e => e.level === activeLevel);
    if (!effect) {
      return { formula: '', condition: '' };
    }
    
    return { 
      formula: effect.formula || '', 
      condition: effect.condition || '' 
    };
  };

  const effectData = getCurrentEffectData();

  // 효과 베이스를 템플릿 변수로 변환
  const formatEffectBase = () => {
    if (!gift.effectBase) return '';
    
    let formattedText = gift.effectBase;
    
    // 템플릿 변수 치환
    if (effectData.formula) {
      formattedText = formattedText.replace('{{formula}}', 
        `<span class="${getFormulaColorClass()}">${effectData.formula}</span>`);
    }
    
    if (effectData.condition) {
      formattedText = formattedText.replace('{{condition}}', 
        `<span class="${getConditionColorClass()}">${effectData.condition}</span>`);
    }
    
    return formattedText;
  };

  // 레벨에 따른 효과 색상
  const getLevelColorClass = () => {
    if (activeLevel === '기본 효과') return darkMode ? 'text-blue-300' : 'text-blue-800';
    if (activeLevel === '+') return darkMode ? 'text-green-300' : 'text-green-800';
    if (activeLevel === '++') return darkMode ? 'text-purple-300' : 'text-purple-800';
    return '';
  };

  // 수식에 대한 색상 클래스
  const getFormulaColorClass = () => {
    if (activeLevel === '기본 효과') return darkMode ? 'text-blue-300 font-bold' : 'text-blue-800 font-bold';
    if (activeLevel === '+') return darkMode ? 'text-green-300 font-bold' : 'text-green-800 font-bold';
    if (activeLevel === '++') return darkMode ? 'text-purple-300 font-bold' : 'text-purple-800 font-bold';
    return '';
  };

  // 조건에 대한 색상 클래스
  const getConditionColorClass = () => {
    if (activeLevel === '기본 효과') return darkMode ? 'text-blue-300 font-bold' : 'text-blue-800 font-bold';
    if (activeLevel === '+') return darkMode ? 'text-green-300 font-bold' : 'text-green-800 font-bold';
    if (activeLevel === '++') return darkMode ? 'text-purple-300 font-bold' : 'text-purple-800 font-bold';
    return '';
  };

  // 모바일 버전과 데스크톱 버전 구분
  const panelClass = isSmallScreen 
    ? 'w-full py-4' // 모바일에서는 전체 너비
    : 'h-min md:w-1/2 transition-all duration-300'; // 데스크톱에서는 절반 너비

  return (
    <div className={panelClass}>
      <div className={detailCardStyle}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${textTransition} 
            ${darkMode ? 'text-white' : 'text-black'}`}>
            {gift.name}
          </h2>

          <button
            onClick={onClose}
            className={`p-2 rounded-full ${buttonTransition} 
              ${darkMode ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-200 hover:bg-neutral-300'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
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
                <div className="absolute top-1 left-1 w-6 h-6 z-10 rounded-full overflow-hidden">
                  <img 
                    src={`/icons/rank/${gift.grade}.png`} 
                    alt={`Rank ${gift.grade}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/24x24/orange/white?text=${gift.grade}`;
                    }}
                  />
                </div>
              )}

              {/* 그룹 표시 (오른쪽 하단) - 이미지 컨테이너 내부에 위치 */}
              {groupType && (
                <div className="absolute bottom-1 right-1 w-6 h-6 z-10 rounded-full overflow-hidden">
                  <img 
                    src={`/icons/group/${groupType}.png`}
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
              <p className="mb-1"><span className="font-semibold">관련 환상체:</span> {gift.relatedAbnormality || '없음'}</p>
              <p className="mb-1"><span className="font-semibold">등급:</span> {gift.grade}</p>
              <p className="mb-1"><span className="font-semibold">첫 등장:</span> {gift.firstAppearance}</p>
              <p className="mb-1"><span className="font-semibold">강화 가능:</span> {gift.upgrade === 'yes' ? '가능' : '불가'}</p>
            </div>
          </div>

          {/* 효과 레벨 선택 버튼 */}
          <div className="flex mt-4 mb-2">
            <LevelButton 
              level="기본 효과" 
              isActive={activeLevel === '기본 효과'}
              onClick={() => setActiveLevel('기본 효과')}
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
          <div className="mt-2 p-3 rounded-md border border-opacity-20 
                        border-gray-400 transition-all duration-300">
            <p className={`mb-2 font-semibold ${getLevelColorClass()}`}>
              {activeLevel} 효과:
            </p>
            
            {/* HTML을 직접 삽입하는 대신 dangerouslySetInnerHTML 사용 */}
            <div 
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: formatEffectBase() }}
            />
            
            {/* 조건이 템플릿에 포함되지 않은 경우에만 별도 표시 */}
            {effectData.condition && !gift.effectBase.includes('{{condition}}') && (
              <p className="mt-2 text-sm">
                <span className="font-semibold">조건: </span>
                <span className={getConditionColorClass()}>{effectData.condition}</span>
              </p>
            )}
          </div>

          {gift.nameTranslations && (
            <div className="mt-4">
              <p className="font-semibold mb-1">이름 번역:</p>
              <p>영어: {gift.nameTranslations.en}</p>
              <p>일본어: {gift.nameTranslations.ja}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default DetailPanel;