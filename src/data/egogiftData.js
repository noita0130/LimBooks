/**
 * 키워드
 * @param {group} Burn - 화상
 * @param {group} Laceration - 출혈
 * @param {group} Vibration - 진동
 * @param {group} Burst - 파열
 * @param {group} Sinking - 침잠
 * @param {group} Breath - 호흡
 * @param {group} Combustion - 충전
 * @param {group} Public - 공용
 */
const egogiftData = {
    Burn: [
        {
            id: "9101",
            name: "융해된 파라핀",
            upgrade: "yes",
            relatedAbnormality: "살갗 예언자",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "화상 위력, 화상 횟수, 특수 화상을 부여하는 스킬로 합 승리 시, {{formula}}만큼 대상 적에게 화상 위력 부여",
            effects: [
                {
                    level: "기본 효과",
                    formula: "(남은 코인 수/2)"
                },
                {
                    level: "+",
                    formula: "(남은 코인 수/2+1)"
                },
                {
                    level: "++",
                    formula: "(남은 코인 수+1)"
                }
            ]
        },
        {
            id: "9003",
            name: "재에서 재로",
            upgrade: "yes",
            relatedAbnormality: "밀려오는 재",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "전투 시작 시 {{condition}}에게 화상 위력 {{formula}} 부여",
            effects: [
                {
                    level: "기본 효과",
                    formula: "2",
                    condition: "모든 적(환상체일 경우, 모든 부위)이 화상에 걸린 경우, 적 전체(환상체일 경우, 모든 부위)"
                },
                {
                    level: "+",
                    formula: "2",
                    condition: "화상에 걸린 적 전체(환상체일 경우, 모든 부위)"
                },
                {
                    level: "++",
                    formula: "3",
                    condition: "적 전체(환상체일 경우, 모든 부위)"
                }
            ]
        },
        {
            id: "9087",
            name: "타오르는 지성",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "화상 효과로 적을 처치하였다면 다음 턴 시작 시, 화상 위력을 부여하는 스킬을 보유한 아군 인격 {{condition}}이 피해량 증가 {{formula}} 얻음",
            effects: [
                {
                    level: "기본 효과",
                    formula: "1",
                    condition: "둘"
                },
                {
                    level: "+",
                    formula: "2",
                    condition: "둘"
                },
                {
                    level: "++",
                    formula: "2",
                    condition: "셋"
                }
            ]
        },
        {
            id: "9102",
            name: "편광",
            upgrade: "no",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9103",
            name: "울화통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9034",
            name: "일점타격논리회로",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9009",
            name: "작열우모",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9001",
            name: "지옥나비의 꿈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9155",
            name: " 만 년 동안 끓는 솥",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9156",
            name: " 만년 화롯불",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9071",
            name: "그을린 원판",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9053",
            name: "먼지에서 먼지로",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9104",
            name: "불빛꽃",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9701",
            name: " 뜨거운 육즙 다리살",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9776",
            name: " 잔불",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9774",
            name: " 재점화 플러그",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9772",
            name: " 점화 장갑",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9157",
            name: " 요리 비법 전서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9045",
            name: "불꽃의 편린",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9105",
            name: "업화 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9756",
            name: " 부화하지 않은 불씨",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9088",
            name: "진혼",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9158",
            name: " 훔쳐온 불꽃",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Bleed: [
        {
            id: "9089",
            name: "녹슨 입마개",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9008",
            name: "늘어붙은 쇠말뚝",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9106",
            name: "억류된 찬송",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9107",
            name: "옭아맨 타래",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9108",
            name: "경외심",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9159",
            name: "밀라르카",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9005",
            name: "상처붙이",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9029",
            name: "작고 나쁠 인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9020",
            name: "흰 목화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9413",
            name: "못과 망치의 책",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9415",
            name: "불결함",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "오염된 실과 바늘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "치사랑",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "녹슨 커터 나이프",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "안식처",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "연기와 철조망",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "찢어진 피주머니",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "갇힌 구더기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "조각난 칼날",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "라만차랜드 자유이용권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "승리의 증표",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "치성",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "매혹 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "붉게 물든 목화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "퍼레이드의 가면",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "피안개",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "출혈성 쇼크",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "완전함",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "절경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Vibration: [
        {
            id: "",
            name: "극독성 외피",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "닉시 다이버전스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "보석 진동자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "초록빛 결실",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "기름때 찌든 스패너",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "감합된 톱니바퀴",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "거울 촉각 공감각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "시큼한 주향",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "잔향",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "진동형 팔찌",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "흔들리는 술통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "녹슨 시계침",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "빛바랜 시계 케이스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "에칭 시계침",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "은빛 시계 케이스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "녹아내린 눈알",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "생체 맹독 바이알",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "진실의 종",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "톱니바퀴 태엽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "낙수의 잔",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "진원점",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "손거울",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "타성 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "폭우",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "연성진동",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "무진팔방종",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "회중시계: 타입 E",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "회중시계: 타입 L",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "회중시계: 타입 P",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "회중시계: 타입 Y",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Rupture: [
        {
            id: "",
            name: "부서진 리볼버",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "부적 묶음",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "뼈 말뚝",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "장미 면류관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "가시오랏줄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "가시 올가미",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "유연 화약",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "해진 우산",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "형광색 램프",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "종말의 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "괴문자 부적",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "묘각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "흑단 브로치",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "근무용 통상 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "벼락가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "죽음바라기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "가시 전투화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "강화제 Mk.4",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "목이 뻑뻑 가슴살",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "새겨넣어진 괴문자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "잔가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "크랲게 뇌수 담금주",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "기괴한 석상",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "욕망 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "쾌감",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "황홀경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "파탄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "이전칠자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "부치지 못한 편지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Sinking: [
        {
            id: "",
            name: "가시밭길",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "고목 함정",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "넝마",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "머리 없는 초상화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "칸타빌레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "녹아내린 시계태엽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "뒤엉킨 뼛조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "유골 부스러기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "장엄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "적색 지령",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "빛바랜 외투",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "얼어붙은 아우성",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "정신 오염 가속 가스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "흘러내린 엔케팔린",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "고장난 나침반",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "머나먼 별",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "한겨울 밤의 악몽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "안식",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "모형 저택 오르골",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "서지 글로브",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "미적 감각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "잠식 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "굴절 유리관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "검은 악보",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "덮칠 파도",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "서릿발 발자국",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Breathe: [
        {
            id: "",
            name: "녹빛 겉날개",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "데블스 셰어",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "장식된 편자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "추억의 펜던트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "털방울 모자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "낡은 목각 인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "네뷸라이저",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "돌무덤",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "물부리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "어느 날의 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "엔젤스 컷",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "거대한 선물 보따리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "톱니 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "작살 의족",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "네잎클로버",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "미련",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "엔도르핀 키트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "근접 전술 교본",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "부서진 칼날",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "추억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "교만 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "명경지수",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "해진 삿갓",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "고래의 심장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "복주머니",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "캐스크 스피리츠",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "기쁜 봉제인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "",
            name: "앞을 비추는 가스등",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Charge: [
        {
            id: "",
            name: "무정전 전원장치",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "손목 보호대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "이력서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "제한 풀린 제세동기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "1B 타입 팔각 볼트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "사원증",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "순찰용 손전등",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "야간투시경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "휴대용 전지 소켓",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "미니어처 전봇대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "생체 발전형 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "심장 리액트 모듈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "의체관절 서보모터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "어긋난 트랜지스터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "모조발전기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "물리 간섭 보호장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "피뢰침",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "휴대용 역장 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "E식 차원 단검",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "인슐레이터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "마찰 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "충전식 장갑",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "제 1종 영구기관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "제 5종 영구기관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "과충전된 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "영구동력 서보모터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "자율 작동식 관절",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "하츠 파워드 쥬얼",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        }

    ],
    Slash: [
        {
            id: "",
            name: "닳고 닳은 숫돌",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "수술용 메스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "위장된 화평",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "결의",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "꿈을 꾸는 전기양",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "재단용 가위",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "짧은 케인 소드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "구름무늬 호리병",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "선고의 순간",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "그림자 삿갓",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "녹슨 칼자루",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "붉은 색술",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "깨어진 대검",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "잘려나간 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "낡은 도포",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "떼구름",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "부동",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "장관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "탁마",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        }

    ],
    Pierce: [
        // First set of items
        {
            id: "",
            name: "고탄성강 신발",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "끈적거리는 진액",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "목공용 대못",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "수집하는 해골",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "증명의 깃털",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "찢어진 밴돌리어",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "축복이었던",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "벼려진 가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "튿어진 소매",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "평등",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "흑염 파이프",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "구멍난 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "듀엘교본 3권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        }
    ],
    Strike: [

        {
            id: "",
            name: "동티",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "차원분리수거함",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "가장 낮은 별",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "시간 굴레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "압박 붕대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "오늘의 표정",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "포켓 암기 노트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "강화 문신 - 중지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "굳게 쥔 상",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "차원지각변환체",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "의리 사슬",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "바스라진 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "앙갚음 장부",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "영속하는 인연 사슬",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        }

    ],
    General: [
        {
            id: "",
            name: "도착증",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "내일의 운세",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "덧붙인 반창고",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "문자 석판",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "블러디 가젯",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "저주 인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "쪽빛 지포라이터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "편견",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "혈액 포집팩",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "일반석 할인 바우처",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "불 꺼진 랜턴",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "포장용 상자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "게걸스러운 망치",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "고혈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "귀로",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "대기만성형 타투",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "리베이트 토큰",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "생존의 이정표",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "신상품 팜플렛",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "오라클",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "주홍 나방떼",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "진통제",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "잿빛 코트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "카르밀라",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "커피와 종이학",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "특별 카탈로그",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "플라스크 속의 아이",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "황금색 항아리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "검은 장부",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "결정화된 혈액",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "경고장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "귀신 들린 신발",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "반짝이는 폐품",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "신속한 지휘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "아이스크림 통조림",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "오더메이드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "핏빛 갈기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "경멸의 시선의 경멸",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "깨진 안경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "대양전 접지 플러그",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "마을을 지킬 작살",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "먹어치우는 큐브",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "메트로놈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "뱀 허물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "버틀러식 포박술",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "불 꺼진 촛대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "강요된 무게",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "녹슨 기념 주화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "디스크 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "리뉴얼 굿즈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "사전 예약 할인권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "성대한 환대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "여우비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "체험형 플랜 가이드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "특별 계약",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "프레스티지 카드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "환상 사냥",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "환상통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "휴대용 구급상자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "가시나무 관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "고초",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "날카로운 실과 바늘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "만화경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "묵시적 계약 갱신",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "생강꽃 가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "선불 시간 영수증",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "슬픈 봉제인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "작전 승인 카드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "찰랑이는 연료통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "치프 버틀러의 비급서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "탱고 닭양념장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "통상 작전용 장비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "낡은 칼자루",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "부서진 바이올린",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "원목 술잔",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "포장용 끈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "그림자 괴물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "믿음",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "비밀 유지 서약서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "오래된 조각상",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "인연 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "거짓 광배",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "굴레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "왕의 잔재",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "고위험 작전용 장비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "선물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        },
        {
            id: "",
            name: "달의 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                },
                {
                    level: "",
                    formula: ""
                }
            ]
        }

    ]
};

export default egogiftData;

function getFullEffectDescription(item, level) {
    const effect = item.effects.find(e => e.level === level);
    if (!effect) return null;

    return item.effectBase.replace('{{formula}}', effect.formula);
}