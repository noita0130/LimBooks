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
  return groupType; // 원본 영어 그대로 반환
};

const LevelButton = ({ level, isActive, onClick, darkMode }) => {
  const inactiveColor = darkMode 
    ? 'bg-neutral-700 text-neutral-300' 
    : 'bg-neutral-200 text-neutral-600';
  
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md mr-2 text-sm transition-all duration-300 
        ${isActive ? `${darkMode ? 'bg-neutral-600' : 'bg-neutral-400'} font-bold` : inactiveColor}`}
    >
      {level}
    </button>
  );
};

const DetailPanel = memo(({ gift, darkMode, isSmallScreen }) => {
  const [activeLevel, setActiveLevel] = useState('기본');
  
  const detailCardStyle = `${backgroundTransition}
    ${darkMode ? 'bg-neutral-800' : 'bg-white'}
    rounded-lg shadow-md overflow-hidden h-full p-4`;

  // 그룹 타입 가져오기
  const groupType = getGroupType(gift, window.egogiftData);

  // 현재 레벨에 따른 효과 데이터
  const getCurrentEffectData = () => {
    if (!gift.effects || gift.effects.length === 0) {
      return { 
        formula: '', 
        formula2: '', 
        formula3: '', 
        formula4: '', 
        formula5: '', 
        formula6: '', 
        formula7: '', 
        condition: '', 
        condition2: '', 
        condition3: '' 
      };
    }
    
    const effect = gift.effects.find(e => e.level === activeLevel);
    if (!effect) {
      return { 
        formula: '', 
        formula2: '', 
        formula3: '', 
        formula4: '', 
        formula5: '', 
        formula6: '', 
        formula7: '', 
        condition: '', 
        condition2: '', 
        condition3: '' 
      };
    }
    
    return { 
      formula: effect.formula || '', 
      formula2: effect.formula2 || '',
      formula3: effect.formula3 || '',
      formula4: effect.formula4 || '',
      formula5: effect.formula5 || '',
      formula6: effect.formula6 || '',
      formula7: effect.formula7 || '',
      condition: effect.condition || '',
      condition2: effect.condition2 || '',
      condition3: effect.condition3 || ''
    };
  };

  const effectData = getCurrentEffectData();

  // 효과 베이스를 템플릿 변수로 변환
  const formatEffectBase = () => {
    if (!gift.effectBase) return '';
    
    let formattedText = gift.effectBase;
    
    // 템플릿 변수 치환 (formula 1-7)
    for (let i = 1; i <= 7; i++) {
      const formulaKey = i === 1 ? 'formula' : `formula${i}`;
      if (effectData[formulaKey]) {
        const placeholder = `{{${formulaKey}}}`;
        if (formattedText.includes(placeholder)) {
          formattedText = formattedText.replace(placeholder, 
            `<span class="${getColorClass()}">${effectData[formulaKey]}</span>`);
        }
      }
    }
    
    // 템플릿 변수 치환 (condition 1-3)
    for (let i = 1; i <= 3; i++) {
      const conditionKey = i === 1 ? 'condition' : `condition${i}`;
      if (effectData[conditionKey]) {
        const placeholder = `{{${conditionKey}}}`;
        if (formattedText.includes(placeholder)) {
          formattedText = formattedText.replace(placeholder, 
            `<span class="${getColorClass()}">${effectData[conditionKey]}</span>`);
        }
      }
    }
    
    return formattedText;
  };

  // 수식에 대한 색상 클래스
  const getColorClass = () => {
    return darkMode ? 'text-yellow-400 font-bold' : 'text-yellow-600 font-bold'
  };

  // 조건에 대한 색상 클래스
  const getConditionColorClass = () => {
    return darkMode ? 'text-green-400' : 'text-green-600';
  };

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
              {groupType && (
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
              <p className="mb-1"><span className="font-semibold">관련 환상체:</span> {gift.relatedAbnormality || '없음'}</p>
              <p className="mb-1"><span className="font-semibold">등급:</span> {gift.grade}</p>
              <p className="mb-1"><span className="font-semibold">첫 등장:</span> {gift.firstAppearance}</p>
              <p className="mb-1"><span className="font-semibold">강화 가능:</span> {gift.upgrade === 'yes' ? '가능' : '불가'}</p>
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
          <div className="mt-2 p-3 rounded-md border border-opacity-20 
                        border-gray-400 transition-all duration-300">
            <p className={`mb-2 font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {activeLevel} 효과:
            </p>
            
            {/* HTML을 직접 삽입하는 대신 dangerouslySetInnerHTML 사용 */}
            <div 
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: formatEffectBase() }}
            />
            
            {/* 템플릿에 포함되지 않은 조건(condition)들을 별도 표시 */}
            {effectData.condition && !gift.effectBase.includes('{{condition}}') && (
              <p className="mt-2 text-sm">
                <span className="font-semibold">조건: </span>
                <span className={getColorClass()}>{effectData.condition}</span>
              </p>
            )}
            
            {effectData.condition2 && !gift.effectBase.includes('{{condition2}}') && (
              <p className="mt-1 text-sm">
                <span className="font-semibold">조건 2: </span>
                <span className={getColorClass()}>{effectData.condition2}</span>
              </p>
            )}
            
            {effectData.condition3 && !gift.effectBase.includes('{{condition3}}') && (
              <p className="mt-1 text-sm">
                <span className="font-semibold">조건 3: </span>
                <span className={getColorClass()}>{effectData.condition3}</span>
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