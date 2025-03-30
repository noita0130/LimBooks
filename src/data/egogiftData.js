/**
 * 키워드
 * @param {group} Burn - 화상
 * @param {group} Bleed - 출혈
 * @param {group} Vibration - 진동
 * @param {group} Rupture - 파열
 * @param {group} Sinking - 침잠
 * @param {group} Breathe - 호흡
 * @param {group} Charge - 충전
 * @param {group} Slash - 참격
 * @param {group} Pierce - 관통
 * @param {group} Strike - 타격
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
            effectBase: "화상 위력, 화상 횟수, 특수 화상을 부여하는 스킬로 합 승리 시, {{formula1}}만큼 대상 적에게 화상 위력 부여",
            effects: [
                {
                    level: "기본",
                    formula1: "(남은 코인 수/2)"
                },
                {
                    level: "+",
                    formula1: "(남은 코인 수/2+1)"
                },
                {
                    level: "++",
                    formula1: "(남은 코인 수+1)"
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
            effectBase: "전투 시작 시 {{condition1}}에게 화상 위력 {{formula1}} 부여",
            effects: [
                {
                    level: "기본",
                    formula1: "2",
                    condition1: "모든 적(환상체일 경우, 모든 부위)이 화상에 걸린 경우, 적 전체(환상체일 경우, 모든 부위)"
                },
                {
                    level: "+",
                    formula1: "2",
                    condition1: "화상에 걸린 적 전체(환상체일 경우, 모든 부위)"
                },
                {
                    level: "++",
                    formula1: "3",
                    condition1: "적 전체(환상체일 경우, 모든 부위)"
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
            effectBase: "화상 효과로 적을 처치하였다면 다음 턴 시작 시, 화상 위력을 부여하는 스킬을 보유한 아군 인격 {{condition1}}이 피해량 증가 {{formula1}} 얻음",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    condition1: "둘"
                },
                {
                    level: "+",
                    formula1: "2",
                    condition1: "둘"
                },
                {
                    level: "++",
                    formula1: "2",
                    condition1: "셋"
                }
            ]
        },
        {
            id: "9102",
            name: "편광",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "아군이 대상보다 정신력이 {{condition1}} 이상 높을 경우, 화상 위력 또는 화상 횟수 또는 특수 화상을 부여하는 스킬로 입히는 피해량 {{formula1}}%",
            effects: [
                {
                    level: "기본",
                    formula1: "+7.5",
                    condition1: "30"
                },
                {
                    level: "+",
                    formula1: "+12.5",
                    condition1: "25"
                },
                {
                    level: "++",
                    formula1: "+20",
                    condition1: "15"
                }
            ]
        },
        {
            id: "9103",
            name: "울화통",
            upgrade: "yes",
            relatedAbnormality: "놋쇠황소",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition1}} 인격 전용 효과] 화상 또는 특수 화상에 걸린 적에게 스킬 효과로 화상 또는 특수 화상을 부여할 경우, 다음 턴에 신속 1 얻음. (스킬 당 1회, 턴당 최대 2회) 신속을 이미 보유한 경우, 효과가 강화되어 신속 {{formula1}}, 공격 레벨 증가 2{{formula2}} 얻음 (스킬 당 1회, 턴당 최대 2회)",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "",
                    condition1: "1번, 2번"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "",
                    condition1: "1번, 2번, 3번"
                },
                {
                    level: "++",
                    formula1: "2",
                    formula2: ", 피해량 증가 2",
                    condition1: "1번, 2번, 3번"
                }
            ]
        },
        {
            id: "9034",
            name: "일점타격논리회로",
            upgrade: "no",
            relatedAbnormality: "kqe-1j-23",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "화상 위력 또는 특수 화상을 부여하는 스킬 또는 질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 해당 스킬의 코인 수 절반만큼 추가로 화상 위력 부여.(소수는 올림하여 계산)",
            effects: []
        },
        {
            id: "9009",
            name: "작열우모",
            upgrade: "yes",
            relatedAbnormality: "살갗 예언자",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "화상 위력 또는 특수 화상을 부여하는 스킬 또는 색욕 속성의 스킬을 사용하여 대상에게 적중 시, 대상에게 화상 위력 {{formula1}} 부여. 턴 시작 시 화상 20 이상을 보유한 적의 경우, 화상이 {{formula2}}배로 증가",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "2"
                },
                {
                    level: "++",
                    formula1: "4",
                    formula2: "2.5"
                }
            ]
        },
        {
            id: "9001",
            name: "지옥나비의 꿈",
            upgrade: "yes",
            relatedAbnormality: "홍염나방",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "화상 또는 특수 화상에 걸린 적에게 스킬 효과로 화상 위력 또는 특수 화상을 부여할 경우, 모든 적에게 화상 위력 {{formula1}} 무작위로 나누어 부여. 분노 {{condition1}} 공명을 발동하였다면 전투 시작 시, 모든 적에게 화상 위력 {{formula2}} 무작위로 나누어 부여",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "5",
                    condition1: "완전"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "6",
                    condition1: "완전"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "8",
                    condition1: ""
                }
            ]
        },
        {
            id: "9155",
            name: "만년 동안 끓는 솥",
            upgrade: "no",
            relatedAbnormality: "바질리스프크",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "화상 위력, 화상 횟수 또는 특수 화상을 부여하는 스킬의 합 위력 +1",
            effects: []
        },
        {
            id: "9156",
            name: "만년 화롯불",
            upgrade: "no",
            relatedAbnormality: "바질리스프크",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "턴 종료 시, 화상 횟수를 3 이상 보유한 적이 화상을 1회 더 발동함 (화상 횟수 1 감소)",
            effects: []
        },
        {
            id: "9071",
            name: "그을린 원반",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "화상 상태인 적이 사망하였을 경우(환상체일 경우, 본체 사망 시), 남은 화상 위력 수치의 절반만큼을 다음 턴 시작 시 화상 위력 수치가 제일 적은 적 중 하나에게 부여. 턴 시작 시 화상 상태인 적에게 이번 턴 동안 공격 레벨 감소 4 부여",
            effects: []
        },
        {
            id: "9053",
            name: "먼지에서 먼지로",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "스테이지 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 {{formula1}}, 화상 횟수 {{formula2}} 부여. 나태 {{condition1}}을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 {{formula3}}, 화상 횟수 {{formula4}} 부여",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "3",
                    formula3: "3",
                    formula4: "2",
                    condition1: "완전 공명"
                },
                {
                    level: "+",
                    formula1: "6",
                    formula2: "3",
                    formula3: "4",
                    formula4: "2",
                    condition1: "완전 공명"
                },
                {
                    level: "++",
                    formula1: "8",
                    formula2: "3",
                    formula3: "4",
                    formula4: "3",
                    condition1: "공명"
                }
            ]
        },
        {
            id: "9104",
            name: "불빛꽃",
            upgrade: "no",
            relatedAbnormality: "홍염나방",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과] 아군이 적을 공격할 때 대상의 남은 체력이 최대 체력의 (보유한 화상 위력)% 이하일 경우 (환상체일 경우, 본체 체력으로 계산), 화상 위력 또는 화상 횟수 또는 특수 화상을 부여하는 공격 스킬로 입히는 피해량 +50%",
            effects: []
        },
        {
            id: "1052",
            name: "뜨거운 육즙 다리살",
            upgrade: "no",
            relatedAbnormality: "",
            grade: 3,
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9776",
            name: "잔불",
            upgrade: "no",
            relatedAbnormality: "",
            grade: 3,
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9774",
            name: "재점화 플러그",
            upgrade: "no",
            relatedAbnormality: "",
            grade: 3,
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9772",
            name: "점화 장갑",
            upgrade: "no",
            relatedAbnormality: "",
            grade: 3,
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9157",
            name: "요리 비법 전서",
            upgrade: "no",
            relatedAbnormality: "캐릭터: 봉이 아빠",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함) 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 스킬의 최종 위력 +1 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 스킬로 합 승리 시, (남은 코인 수/2+1)만큼 대상 적에게 화상 위력을 부여",
            effects: []
        },
        {
            id: "9045",
            name: "불꽃의 편린",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 종료 시, 화상 상태인 적에게 대상이 보유한 화상 횟수의 절반만큼을 소모하여 (화상 위력 × 소모한 화상 횟수 × {{formula1}})만큼 추가 분노 피해를 입힘. 불꽃의 편린 효과로 소모한 화상 횟수의 절반만큼, 다음 턴 동안 대상의 방어 레벨 감소 (최대 {{condition1}})",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    condition1: "3"
                },
                {
                    level: "+",
                    formula1: "1.5",
                    condition1: "5"
                },
                {
                    level: "++",
                    formula1: "2",
                    condition1: "8"
                }
            ]
        },
        {
            id: "9105",
            name: "업화 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "화상 위력, 화상 횟수 또는 특수 화상을 부여하는 E.G.O 스킬 사용시 발동. 소모하는 (분노 E.G.O 자원 +나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50% 분노 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 화상 횟수를 추가로 부여(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(공격 가중치/공격 대상 수×20)%",
            effects: []
        },
        {
            id: "9756",
            name: "부화하지 않은 불씨",
            upgrade: "no",
            relatedAbnormality: "",
            grade: 4,
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9088",
            name: "진혼",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "스테이지 시작 시, 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동. (E.G.O 스킬 제외, 출격 인원을 기준으로 함) 웨이브 첫 번째 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 화상 횟수 3을 부여하고 화상 위력 15를 무작위로 나누어 부여. 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 스킬의 최종 위력 +1, 코인 위력 +1, 화상 위력 부여 값 +1, 화상 횟수 부여 값 +1. 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 스킬로 합 승리 시, (남은 코인 수 + 1)만큼 대상 적에게 화상 위력을 부여",
            effects: []
        },
        {
            id: "9158",
            name: "훔쳐온 불꽃",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 화상 위력, 화상 횟수 또는 특수 화상을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 스킬(E.G.O 스킬 포함) 적중 시 대상의 화상 횟수가 3 이상이면, 대상의 화상을 1회 발동함. (화상 횟수 1 감소, 스킬당 1회 발동) 턴 종료 시, 화상 횟수를 3 이상 보유한 적이 화상을 1회 더 발동함. (화상 횟수 1 감소) 화상 상태인 적이 사망하였을 경우(환상체일 경우, 본체 사망 시), 남은 화상 위력 수치만큼을 다음 턴 시작 시 화상 위력 수치가 제일 적은 적 중 하나에게 부여. 턴 종료 시 화상 상태인 적에게 이번 턴 동안 공격 레벨 감소 4 부여. 화상을 보유한 적이 사망하였을 경우, 다음 턴 시작 시, 화상 부여 스킬을 보유한 아군 (사망한 적의 화상 위력/15)명이 피해량 증가 2 얻음 (턴 당 1회 발동)",
            effects: []
        }
    ],
    Bleed: [
        {
            id: "9089",
            name: "녹슨 입마개",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "스킬을 사용하여 적에게 적중 시 {{condition1}} 이상의 체력 피해를 입혔다면, 대상에게 출혈 위력 {{formula1}} 부여. 참격 스킬을 사용할 경우, 효과가 강화되어 출혈 {{formula2}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "2",
                    formula2: "4",
                    condition1: "12"
                },
                {
                    level: "+",
                    formula1: "3",
                    formula2: "5",
                    condition1: "12"
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "5, 출혈 횟수 1",
                    condition1: "1"
                }
            ]
        },
        {
            id: "9008",
            name: "늘어붙은 쇠말뚝",
            upgrade: "no",
            relatedAbnormality: "아파하는 테디",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "단일 코인 스킬을 사용하여 적에게 적중 시, 대상에게 출혈 위력 1 부여하고 다음 턴까지 방어 레벨 감소 2 부여. 대상이 출혈 상태일 경우, 효과가 강화되어 출혈 위력 3 부여.",
            effects: []
        },
        {
            id: "9106",
            name: "억류된 찬송",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "전투 시작 시 모든 적(환상체의 경우, 모든 부위)이 출혈에 걸린 경우, 다음 턴에 모든 아군이 {{formula1}} 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "신속 1"
                },
                {
                    level: "+",
                    formula1: "신속 1, 피해량 증가 1"
                },
                {
                    level: "++",
                    formula1: "신속 2, 피해량 증가 1, 공격 레벨 증가 2"
                }
            ]
        },
        {
            id: "9107",
            name: "옭아맨 타래",
            upgrade: "yes",
            relatedAbnormality: "머금은 목화",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "속도가 제일 빠른 아군 {{condition1}}이 출혈 위력, 출혈 횟수 또는 특수 출혈 부여하는 스킬을 사용하여 적에게 피해를 입힐 경우, 피해량 {{formula1}}%",
            effects: [
                {
                    level: "기본",
                    formula1: "+12.5",
                    condition1: "1명"
                },
                {
                    level: "+",
                    formula1: "+15",
                    condition1: "둘"
                },
                {
                    level: "++",
                    formula1: "+20",
                    condition1: "셋"
                }
            ]
        },
        {
            id: "9108",
            name: "경외심",
            upgrade: "yes",
            relatedAbnormality: "경멸의 나선",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition1}} 인격 전용 효과] 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬 사용 시, 메인 공격 대상의 출혈 횟수가 {{formula1}} 이상이면 피해량 {{formula2}}%",
            effects: [
                {
                    level: "기본",
                    formula1: "7",
                    formula2: "+10",
                    condition1: "1번, 2번"
                },
                {
                    level: "+",
                    formula1: "5",
                    formula2: "+15",
                    condition1: "1번, 2번, 3번"
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "+20",
                    condition1: "1번, 2번, 3번"
                }
            ]
        },
        {
            id: "9159",
            name: "밀라르카",
            upgrade: "no",
            relatedAbnormality: "사백송이의 장미",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬의 합 위력 +1.",
            effects: []
        },
        {
            id: "9005",
            name: "상처붙이",
            upgrade: "yes",
            relatedAbnormality: "귀곡관",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "{{condition1}}을 사용하여 적에게 적중 시, 대상에게 {{formula1}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "출혈 위력 4",
                    condition1: "출혈 위력 또는 특수 출혈을 부여하는 스킬"
                },
                {
                    level: "+",
                    formula1: "출혈 위력 5",
                    condition1: "출혈 위력 또는 특수 출혈을 부여하는 스킬 또는 분노 속성의 스킬"
                },
                {
                    level: "++",
                    formula1: "출혈 위력 5, 출혈 횟수 1",
                    condition1: "출혈 위력 또는 특수 출혈을 부여하는 스킬 또는 분노 속성의 스킬"
                }
            ]
        },
        {
            id: "9029",
            name: "작고 나쁠 인형",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "전투 시작 단계에서 출혈에 걸린 적에게 가하는 피해량 +10% 전투 시작 단계에서 출혈에 걸린 적에게 대상에게 받는 피해량 -20% 오만 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 출혈에 걸린 적에게 가하는 피해량 +20% 오만 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 출혈에 걸린 적에게 받는 피해량 -30%",
            effects: []
        },
        {
            id: "9020",
            name: "흰 목화",
            upgrade: "yes",
            relatedAbnormality: "머금은 목화",
            grade: 2,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "턴 시작 시 흐트러짐 상태인 적들이 있을 경우, 대상은 흐트러짐 상태에서 풀려나는 대신 ({{formula1}} + 흐트러짐 단계 × {{formula2}})만큼 출혈 위력을 얻고 그 수치의 {{formula3}}만큼 대상에게 {{formula4}} 부여 (동일한 적에게는 전투 당 1회 발동하며, 흐트러짐 상태에서 풀려나지 않는 특정 적에게는 발동하지 않음)",
            effects: [
                {
                    level: "기본",
                    formula1: "8",
                    formula2: "4",
                    formula3: "절반",
                    formula4: "공격 레벨 감소"
                },
                {
                    level: "+",
                    formula1: "10",
                    formula2: "5",
                    formula3: "전체",
                    formula4: "공격 레벨 감소"
                },
                {
                    level: "++",
                    formula1: "12",
                    formula2: "6",
                    formula3: "전체",
                    formula4: "공격 레벨 감소와 방어 레벨 감소"
                }
            ]
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
            id: "1055",
            name: "오염된 실과 바늘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9744",
            name: "치사랑",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9048",
            name: "녹슨 커터 나이프",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "{{condition1}} 적에게 스킬 효과로 출혈 위력 또는 특수 출혈을 부여할 때마다 대상에게 출혈 위력 {{formula1}}, 출혈 횟수 1 부여. 색욕 속성 스킬을 사용한 경우, 효과가 강화되어 출혈 위력 {{formula2}}, 출혈 횟수 {{formula3}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "3",
                    formula3: "1",
                    condition1: "흐트러짐 상태가 아닌"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "3",
                    formula3: "1",
                    condition1: ""
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "3",
                    formula3: "2",
                    condition1: ""
                }
            ]
        },
        {
            id: "9109",
            name: "안식처",
            upgrade: "no",
            relatedAbnormality: "장미 표지판",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과] 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬을 사용하여 합 승리 시 발동 (남은 코인 수/2)만큼 대상에게 출혈 횟수를 부여하고 다음 턴에 그 수치만큼 공격 레벨 증가 얻음 코인 수가 2 이하인 스킬의 경우, 효과가 강화되어 그 수치가 (남은 코인 수+3)로 적용됨",
            effects: []
        },
        {
            id: "9042",
            name: "연기와 철조망",
            upgrade: "yes",
            relatedAbnormality: "연기 전쟁 제4 전선",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "아군이 스킬 효과로 적에게 부여하는 출혈 위력 수치가 {{formula1}}배로 적용. 턴 종료 시 출혈 상태인 적들이 다음 턴에 속도가 {{formula2}}만큼 감소.",
            effects: [
                {
                    level: "기본",
                    formula1: "2",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "2.5",
                    formula2: "3"
                }
            ]
        },
        {
            id: "9160",
            name: "찢어진 피주머니",
            upgrade: "no",
            relatedAbnormality: "단수어",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "아군이 합 승리 시, 적의 출혈을 1회 발동시킴 (턴 당 3회 발동).",
            effects: []
        },
        {
            id: "9404",
            name: "갇힌 구더기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2029",
            name: "조각난 칼날",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9437",
            name: "라만차랜드 자유이용권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9438",
            name: "승리의 증표",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9161",
            name: "치성",
            upgrade: "no",
            relatedAbnormality: "귀곡관",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 속도가 가장 빠른 아군 1명의 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬의 코인 위력 +1, 피해량 +50% 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬의 최종 위력 +1",
            effects: []
        },
        {
            id: "9110",
            name: "매혹 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 E.G.O 스킬 사용 시 발동 소모하는 (색욕 E.G.O 자원 +나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50% 색욕 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 출혈 횟수를 추가로 부여(E.G.O 등급에 비례하며 ZAYIN의 경우 2, 등급이 오를수록 +1)하고 대상이 보유한 출혈 위력만큼 색욕 피해 추가로 입힘",
            effects: []
        },
        {
            id: "9050",
            name: "붉게 물든 목화",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "{{condition1}} 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 출혈 위력 {{formula1}}, 출혈 횟수 {{formula2}} 부여. 턴 시작 시 출혈 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 (출혈 위력 / {{formula3}})만큼 감소. (출혈 위력 30 스택 시, 효과 최대)",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "15",
                    formula3: "3",
                    condition1: "스테이지 첫 턴"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "15",
                    formula3: "3",
                    condition1: "웨이브 첫 턴"
                },
                {
                    level: "++",
                    formula1: "4",
                    formula2: "20",
                    formula3: "2",
                    condition1: "웨이브 첫 턴"
                }
            ]
        },
        {
            id: "9440",
            name: "퍼레이드의 가면",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9090",
            name: "피안개",
            upgrade: "no",
            relatedAbnormality: "캐릭터: 붉은안개",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "스테이지 시작 시, 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 아군이 스킬 효과로 적에게 부여하는 출혈 위력과 출혈 횟수가 2배로 적용. 턴 시작 시 편성 순서가 제일 빠른 아군의 출혈 위력, 출혈 횟수 또는 특수 출혈을 부여하는 스킬의 코인 위력 +2, 피해량 +100%. 해당 캐릭터가 공격하거나, 합을 진행한 적이 사망했으면, 사망한 적의 남은 출혈 위력을 모든 적에게 무작위로 나눠서 부여 (집중 전투인 경우, 부위로 판정) 출혈 위력, 횟수 또는 특수 출혈을 부여하는 스킬의 코인 위력 +1",
            effects: []
        },
        {
            id: "9162",
            name: "출혈성 쇼크",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 출혈 위력 또는 출혈 횟수 또는 특수 출혈을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 아군이 합 승리 시, 적의 출혈을 1회 발동시킴. (아군 1명당 턴 당 1회) 적이 출혈 피해로 흐트러질 수 있으며, 적이 합 진행 중 출혈 피해로 흐트러지면, 적의 남은 코인 수만큼 출혈을 발동시킴 모든 적이 출혈이 부여되어 있으면 방어 레벨 2 감소. 턴 종료 시 (출혈이 발동한 횟수 × 2)만큼 다음 턴에 방어 레벨 감소를 얻음 (최대 20) 스킬 효과로 출혈 위력 또는 특수 출혈을 부여할 때마다 대상에게 출혈 위력 3, 출혈 횟수 1 부여",
            effects: []
        },
        {
            id: "9416",
            name: "완전함",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9783",
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
            id: "9112",
            name: "극독성 외피",
            upgrade: "yes",
            relatedAbnormality: "울음 두꺼비",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "진동 위력 또는 진동 횟수를 부여하는 스킬(본인 또는 아군을 대상으로 하는 경우 포함)을 사용하여 합 승리 시, (남은 코인 수/{{formula1}})만큼 대상 적에게 진동 위력{{condition1}} 부여",
            effects: [
                {
                    level: "기본",
                    formula1: "2",
                    condition1: ""
                },
                {
                    level: "+",
                    formula1: "1",
                    condition1: ""
                },
                {
                    level: "++",
                    formula1: "1",
                    condition1: "과 (남은 코인 수/2)만큼 진동 횟수"
                }
            ]
        },
        {
            id: "9031",
            name: "닉시 다이버전스",
            upgrade: "yes",
            relatedAbnormality: "증기 운반 기계",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "{{condition1}} 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 진동 위력 {{formula1}}, 진동 횟수 {{formula2}} 부여. 질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 진동 위력 {{formula3}} 부여",
            effects: [
                {
                    level: "기본",
                    condition1: "스테이지 첫 턴",
                    formula1: "4",
                    formula2: "4",
                    formula3: "2"
                },
                {
                    level: "+",
                    condition1: "웨이브 첫 턴",
                    formula1: "4",
                    formula2: "4",
                    formula3: "2"
                },
                {
                    level: "++",
                    condition1: "웨이브 첫 턴",
                    formula1: "5",
                    formula2: "5",
                    formula3: "3"
                }
            ]
        },
        {
            id: "9163",
            name: "보석 진동자",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "진동 횟수를 소모한 스킬로 합 승리시, 대상에게 진동이 없다면 대상의 진동 횟수 2 증가. 해당 공격 스킬을 포함하여 나태 공명 3 이상이면, 대신 대상의 진동 횟수 3 증가",
            effects: []
        },
        {
            id: "9016",
            name: "초록빛 결실",
            upgrade: "yes",
            relatedAbnormality: "신사 요정",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "흐트러짐 상태가 아닌 적에게 탐식 속성 스킬을 사용하여 적중하였거나 또는 스킬 효과로 진동 위력을 부여할 경우, 모든 적(환상체일 경우, 모든 부위)에게 진동 위력 {{formula1}} 무작위로 나누어 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "4"
                },
                {
                    level: "+",
                    formula1: "6"
                },
                {
                    level: "++",
                    formula1: "8"
                }
            ]
        },
        {
            id: "9706",
            name: "기름때 찌든 스패너",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9165",
            name: "감합된 톱니바퀴",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 진동 위력, 진동 횟수 또는 특수 진동을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 이번 턴에 대상에게 진동 폭발을 6회 부여하였을 경우, 대상의 현재 체력 기준 0%에 새로운 흐트러짐 구간 추가 (전투 당 1회 발동). 진폭 변환, 진폭 얽힘 시 취약 1 부여 (턴 당 최대 1회)",
            effects: []
        },
        {
            id: "9114",
            name: "거울 촉각 공감각",
            upgrade: "no",
            relatedAbnormality: "길 잃은 마음",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "아군이 진동 위력 또는 진동 횟수를 부여하는 스킬(본인 또는 아군을 대상으로 하는 경우 포함)로 적을 흐트러뜨릴 경우 (E.G.O 스킬 제외), 다음 턴에 대상이 보유한 진동 위력의 1/3만큼을 다른 무작위 적들(환상체일 경우, 무작위 부위)에게 진동 위력을 나누어 부여함",
            effects: []
        },
        {
            id: "9113",
            name: "시큼한 주향",
            upgrade: "yes",
            relatedAbnormality: "신사 요정",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition1}} 인격 전용 효과] 진동 위력 또는 진동 횟수를 부여하는 스킬(본인 또는 아군을 대상으로 하는 경우 포함)의 공격 레벨 +{{formula1}} 메인 공격 대상이 진동 상태이고 흐트러진 경우, 스킬로 가하는 피해량 +(흐트러짐 단계 × {{formula2}})% 진동 위력 또는 진동 횟수를 부여하는 스킬로 적을 공격할 경우, 효과가 강화되어 피해량 +(흐트러짐 단계 × {{formula3}})%",
            effects: [
                {
                    level: "기본",
                    condition1: "1번, 2번",
                    formula1: "2",
                    formula2: "7.5",
                    formula3: "15"
                },
                {
                    level: "+",
                    condition1: "1번, 2번, 3번",
                    formula1: "2",
                    formula2: "10",
                    formula3: "20"
                },
                {
                    level: "++",
                    condition1: "1번, 2번, 3번",
                    formula1: "3",
                    formula2: "12.5",
                    formula3: "25"
                }
            ]
        },
        {
            id: "9086",
            name: "잔향",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "턴 종료 시, 진동 위력을 {{formula1}} 이상 보유한 적(환상체일 경우, 해당 부위)에게 다음 턴에 속박 {{formula2}}{{condition1}} 부여. 대상이 진동 위력을 {{formula4}} 이상 보유한 경우, 효과가 강화되어 속박 {{formula5}}, 마비 {{formula6}}{{condition2}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "10",
                    formula2: "2",
                    formula4: "20",
                    formula5: "2",
                    formula6: "1",
                    condition1: "",
                    condition2: ""
                },
                {
                    level: "+",
                    formula1: "8",
                    formula2: "2",
                    formula4: "15",
                    formula5: "2",
                    formula6: "1",
                    condition1: ", 방어 레벨 감소 2",
                    condition2: ", 방어 레벨 감소 2"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "2",
                    formula4: "10",
                    formula5: "2",
                    formula6: "1",
                    condition1: ", 방어 레벨 감소 3",
                    condition2: ", 방어 레벨 감소 4"
                }
            ]
        },
        {
            id: "9044",
            name: "진동형 팔찌",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "스킬을 사용하여 적에게 적중 시, 다음 턴에 대상에게 진동 위력 {{formula1}} 부여. 분노 속성 스킬을 사용할 경우, 효과가 강화되어 진동 위력 {{formula2}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "1",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "2",
                    formula2: "4"
                }
            ]
        },
        {
            id: "9164",
            name: "흔들리는 술통",
            upgrade: "no",
            relatedAbnormality: "주정뱅이",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "턴 시작 시, 자신의 진동 횟수가 8 이상이면 합 위력 +1 자신의 진동 횟수를 소모하는 스킬로 적으 처치하거나 흐트러짐 상태로 만들었으면, (소모된 진동 횟수 / 4)만큼 자신의 진동 횟수 증가 (스킬당 1회)",
            effects: []
        },
        {
            id: "2040",
            name: "녹슨 시계침",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2037",
            name: "빛바랜 시계 케이스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2039",
            name: "에칭 시계침",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2036",
            name: "은빛 시계 케이스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9024",
            name: "녹아내린 눈알",
            upgrade: "no",
            relatedAbnormality: "울음 두꺼비",
            grade: 3,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "진동 폭발된 적에게 다음 턴에 공격 레벨 감소 5와 방어 레벨 감소 5 부여. (턴 당 최대 3회)",
            effects: []
        },
        {
            id: "9111",
            name: "생체 맹독 바이알",
            upgrade: "yes",
            relatedAbnormality: "걷는 진주",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "진동 위력을 보유한 적이 사망할 경우, 대상이 보유한 (진동 위력과 진동 횟수의 합 × {{formula1}})만큼 다음 턴에 무작위 적 하나(환상체일 경우, 무작위 부위)에게 나태 피해를 입힘",
            effects: [
                {
                    level: "기본",
                    formula1: "0.5"
                },
                {
                    level: "+",
                    formula1: "0.75"
                },
                {
                    level: "++",
                    formula1: "1.25"
                }
            ]
        },
        {
            id: "9091",
            name: "진실의 종",
            upgrade: "yes",
            relatedAbnormality: "태엽장치시간오뚝이",
            grade: 3,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "진동 폭발이 적용된 적에게 {{condition1}} 취약 {{formula1}} 부여 (공격 스킬을 사용하여 진동 폭발 부여 시, 스킬 당 최대 1회).",
            effects: [
                {
                    level: "기본",
                    condition1: "이번 턴에",
                    formula1: "1"
                },
                {
                    level: "+",
                    condition1: "이번 턴과 다음 턴에",
                    formula1: "1"
                },
                {
                    level: "++",
                    condition1: "이번 턴과 다음 턴에",
                    formula1: "2"
                }
            ]
        },
        {
            id: "9115",
            name: "톱니바퀴 태엽",
            upgrade: "no",
            relatedAbnormality: "증기 운반 기계",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과] 진동 위력 또는 진동 횟수를 부여하는 스킬(본인 또는 아군을 대상으로 하는 경우 포함)의 합 위력 +1. 진동 상태인 적에게 진동 위력 또는 진동 횟수를 부여하는 공격 스킬로 피해를 입힐 경우, 피해량 +(적이 보유한 진동 위력+5)% (E.G.O 스킬 제외). 오만 속성 스킬일 경우, 효과가 강화되어 피해량 +(적이 보유한 진동 위력과 진동 횟수의 합+5)%",
            effects: []
        },
        {
            id: "2041",
            name: "낙수의 잔",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9166",
            name: "진원점",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 진동 위력 또는 진동 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동. (E.G.O 스킬 제외, 출격 인원을 기준으로 함) (인격이 스스로 진동 횟수를 얻는 경우에는 발동 x) 자신의 진동 횟수를 소모한 스킬로 합 승리시, 대상에게 진동이 없다면 대상의 진동 횟수 3 증가 턴 시작 시 합 위력이 (자신의 진동 횟수/5)만큼 증가. (최대 3) 자신의 진동 횟수를 소모하는 스킬을 사용했을 때, 적 처치 혹은 흐트러짐 상태로 만들 경우 (소모한 진동 횟수 / 2)만큼 자신의 진동 횟수 증가 (스킬당 1회)",
            effects: []
        },
        {
            id: "9434",
            name: "손거울",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9116",
            name: "타성 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "진동 위력 또는 진동 횟수 또는 특수 진동을 부여하는 E.G.O 스킬 사용 시 발동 소모하는 (나태 E.G.O 자원 +나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50% 나태 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 진동 횟수를 추가로 부여(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(대상이 보유한 진동 위력 x1.5)%",
            effects: []
        },
        {
            id: "9055",
            name: "폭우",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 위력을 ({{formula1}} + 현재 턴 × {{formula2}}) 부여, 진동 횟수 {{formula3}} 부여. 턴 종료 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 폭발 효과 {{formula4}}회 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "",
                    formula2: "2",
                    formula3: "2",
                    formula4: "1"
                },
                {
                    level: "+",
                    formula1: "3",
                    formula2: "2",
                    formula3: "3",
                    formula4: "1"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "2",
                    formula3: "3",
                    formula4: "2"
                }
            ]
        },
        {
            id: "9092",
            name: "연성진동",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "스테이지 시작 시, 진동 위력 또는 진동 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 웨이브 첫 턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에 진동 5, 진동 횟수 5 부여. 진동 폭발이 적용된 적에게 이번 턴과 다음 턴에 진동 위력 5, 취약 2 부여 (공격 스킬을 사용하여 진동 폭발 부여 시, 스킬 당 최대 1회). 이번 턴에 대상에게 진동 폭발을 3회 부여하였을 경우, 다음 턴 시작 시 대상을 흐트러뜨리고 현재 체력 기준 66%, 33%에 흐트러짐 구간 추가. (전투 당 1회 발동). 진폭 변환, 진폭 얽힘 시 취약 1 부여 (턴 당 최대 3회)",
            effects: []
        },
        {
            id: "9167",
            name: "무진팔방종",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 진동 위력 또는 진동 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동. (E.G.O 스킬 제외, 출격 인원을 기준으로 함) (인격이 스스로 진동 횟수를 얻는 경우에는 발동 x) 진동 위력 또는 진동 횟수를 부여하거나 자신의 진동 횟수를 소모한 스킬로 합 승리시 남은 코인만큼 대상에게 진동 위력 부여. 대상에게 진동이 없으면, 대상의 진동 횟수 3 증가 턴 시작 시 합 위력 증가를 1 + (자신의 진동 횟수/5)만큼 얻음 (최대 3) 자신의 진동 횟수를 소모하는 스킬을 사용했을 때, 적 처치 혹은 흐트러짐 상태로 만들 경우 (소모한 진동 횟수 / 2)만큼 자신의 진동 횟수 증가 (스킬당 1회) 자신의 진동 횟수를 소모하는 스킬의 피해량 +(자신이 소모한 진동 횟수 + 적이 보유한 진동 위력 + 5)% (E.G.O 스킬 제외, 최대 50%).",
            effects: []
        },
        {
            id: "2044",
            name: "회중시계: 타입 E",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2043",
            name: "회중시계: 타입 L",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2046",
            name: "회중시계: 타입 P",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2045",
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
            id: "9064",
            name: "부서진 리볼버",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 파열 상태(환상체일 경우, 부위)인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 2만큼 감소.",
            effects: [],
            note: ""
        },
        {
            id: "9013",
            name: "부적 묶음",
            upgrade: "yes",
            relatedAbnormality: "누구도 울지 않도록",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "스킬을 사용하여 적에게 적중 시 {{condition1}} 이상의 체력 피해를 입혔다면, 대상에게 파열 위력 {{formula1}} 부여. 참격 스킬을 사용할 경우, 효과가 강화되어 파열 위력 {{formula2}}{{condition2}} 부여.",
            effects: [
                {
                    level: "기본",
                    condition1: "12",
                    formula1: "2",
                    formula2: "4",
                    condition2: ""
                },
                {
                    level: "+",
                    condition1: "12",
                    formula1: "3",
                    formula2: "5",
                    condition2: ""
                },
                {
                    level: "++",
                    condition1: "1",
                    formula1: "3",
                    formula2: "5",
                    condition2: ", 파열 횟수 1 증가"
                }
            ],
            note: ""
        },
        {
            id: "9118",
            name: "뼈 말뚝",
            upgrade: "no",
            relatedAbnormality: "이빨 딱딱이",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "파열 효과가 적이 보유한 보호막에 입히는 피해량 +100%",
            effects: [],
            note: ""
        },
        {
            id: "9018",
            name: "장미 면류관",
            upgrade: "yes",
            relatedAbnormality: "장미 표지판",
            grade: 1,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "턴 시작 시, 무작위 적 {{condition}}(환상체일 경우, 모든 부위)에게 파열 위력 {{formula1}} 부여. 탐식 완전 공명을 발동하였다면 전투 시작 시, 모든 적에게 파열 위력 {{formula2}} 부여.",
            effects: [
                {
                    level: "기본",
                    condition: "하나",
                    formula1: "4",
                    formula2: "2"
                },
                {
                    level: "+",
                    condition: "둘",
                    formula1: "4",
                    formula2: "3"
                },
                {
                    level: "++",
                    condition: "셋",
                    formula1: "4",
                    formula2: "4"
                }
            ],
            note: ""
        },
        {
            id: "9169",
            name: "가시오랏줄",
            upgrade: "no",
            relatedAbnormality: "장미 사냥꾼",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 전투 중 적의 파열 횟수가 1 아래로 떨어질 때, 파열 횟수 대신 파열 위력 20을 소모 (파열 위력이 20 미만이 될 경우, 효과 종료). 전투 중 적중 시 적의 파열 횟수가 1인 경우, 파열 횟수를 부여할 때 부여량 +1 (전투 당 2회)",
            effects: [],
            note: ""
        },
        {
            id: "9047",
            name: "가시 올가미",
            upgrade: "yes",
            relatedAbnormality: "장미 사냥꾼",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 종료 시, 모든 적에게 현재 속도만큼 파열 위력을 부여. 색욕 완전 공명을 발동하였다면 전투 시작 시, 무작위 적 하나에게 파열 위력 {{formula1}}, 파열 횟수 {{formula2}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "3"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "4"
                }
            ],
            note: ""
        },
        {
            id: "9117",
            name: "유연 화약",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition}} 인격 전용 효과] 턴 종료 시 이번 턴에 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 한 번이라도 사용하였다면, 다음 턴에 신속 {{formula1}} 얻음. 자신의 속도가 {{formula2}} 이상이면, 파열 위력 또는 파열 횟수를 부여하는 공격 스킬의 피해량 +{{formula3}}%",
            effects: [
                {
                    level: "기본",
                    condition: "1번, 2번",
                    formula1: "1",
                    formula2: "6",
                    formula3: "12.5"
                },
                {
                    level: "+",
                    condition: "1번, 2번, 3번",
                    formula1: "1",
                    formula2: "5",
                    formula3: "15"
                },
                {
                    level: "++",
                    condition: "1번, 2번, 3번",
                    formula1: "1 ~ 2",
                    formula2: "4",
                    formula3: "20"
                }
            ],
            note: ""
        },
        {
            id: "9119",
            name: "해진 우산",
            upgrade: "yes",
            relatedAbnormality: "떠돌이 여우",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition}} 인격 전용 효과] 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 사용하여 합 승리 시, 대상 적에게 파열 위력 {{formula1}}, 파열 횟수 {{formula2}} 부여 (인격 별로 턴 당 1회). 대상이 파열 상태가 아닐 경우, 효과가 강화되어 파열 위력 {{formula3}}, 파열 횟수 {{formula4}} 부여",
            effects: [
                {
                    level: "기본",
                    condition: "1번, 2번",
                    formula1: "",
                    formula2: "2",
                    formula3: "3",
                    formula4: "2"
                },
                {
                    level: "+",
                    condition: "1번, 2번, 3번",
                    formula1: "2",
                    formula2: "2",
                    formula3: "4",
                    formula4: "2"
                },
                {
                    level: "++",
                    condition: "1번, 2번, 3번",
                    formula1: "4",
                    formula2: "2",
                    formula3: "6",
                    formula4: "3"
                }
            ],
            note: ""
        },
        {
            id: "9093",
            name: "형광색 램프",
            upgrade: "yes",
            relatedAbnormality: "꿈먹는 탁류",
            grade: 2,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "턴 종료 시 파열 상태인 적의 수(환상체일 경우, 모든 부위) + {{formula}} 만큼, 다음 턴에 무작위 아군 하나에게 피해량 증가 1, 신속 1 효과 {{condition}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula: "1",
                    condition: "중 하나를"
                },
                {
                    level: "+",
                    formula: "3",
                    condition: "중 하나를"
                },
                {
                    level: "++",
                    formula: "3",
                    condition: "를"
                }
            ],
            note: ""
        },
        {
            id: "9168",
            name: "종말의 파편",
            upgrade: "no",
            relatedAbnormality: "종말 달력",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "대상의 파열 위력이 15 미만이면, 파열 위력 부여 시 추가 1 부여",
            effects: [],
            note: "하드 난이도 한정"
        },
        {
            id: "9787",
            name: "괴문자 부적",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9788",
            name: "묘각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "1005",
            name: "흑단 브로치",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9033",
            name: "근무용 통상 배터리",
            upgrade: "no",
            relatedAbnormality: "충격 지네",
            grade: 3,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "스킬을 사용하여 적에게 적중 시, 대상에게 파열 위력 3 부여. 질투 속성 스킬을 사용할 경우, 효과가 강화되어 대상에게 파열 위력 5 부여",
            effects: [],
            note: ""
        },
        {
            id: "9023",
            name: "벼락가지",
            upgrade: "yes",
            relatedAbnormality: "원귀목",
            grade: 3,
            firstAppearance: "시작의 거울 (거울 던전 1)",
            effectBase: "스킬 효과로 파열 위력을 부여할 때마다 대상에게 파열 위력 {{formula1}}, 파열 횟수 {{formula2}} 부여{{condition}}",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "1",
                    condition: ""
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "1",
                    condition: ""
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "1",
                    condition: "\n우울 속성 스킬을 사용할 경우, 효과가 강화되어 파열 위력 3, 파열 횟수 2 부여"
                }
            ],
            note: ""
        },
        {
            id: "9120",
            name: "죽음바라기",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과] 파열 위력 또는 파열 횟수를 부여하는 공격 스킬의 합 위력 +1, 공격 레벨 +2, 피해량 +15% (E.G.O 스킬 제외) 단일 코인 스킬일 경우, 효과가 강화되어 합 위력 +2, 공격 레벨 +2, 피해량 +40%",
            effects: [],
            note: ""
        },
        {
            id: "9773",
            name: "가시 전투화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9775",
            name: "강화제 Mk.4",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "1053",
            name: "목이 뻑뻑 가슴살",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9790",
            name: "새겨넣어진 괴문자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9777",
            name: "잔가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9708",
            name: "크랲게 뇌수 담금주",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9170",
            name: "기괴한 석상",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 3)",
            combination: "뼈 말뚝 + 종말의 파편",
            effectBase: "스테이지 시작 시, 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 파열 효과가 적이 보유한 보호막에 입히는 피해량 +100% 대상의 파열 위력이 15 미만이면, 파열 위력 부여 시 추가 2 부여 스킬 효과로 인해 파열을 부여하지 못하는 경우 코인 위력 +1",
            effects: [],
        },
        {
            id: "9121",
            name: "욕망 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "파열 위력 또는 파열 횟수를 부여하는 E.G.O 스킬 사용시 발동 소모하는 (탐식 E.G.O 자원 +나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50% 탐식 속성 E.G.O 스킬을 사용할 경우, E.G.O 등급에 비례하여 파열 횟수를 추가로 부여(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(사용한 E.G.O 자원 종류의 수x15)%",
            effects: [],
            note: ""
        },
        {
            id: "9060",
            name: "쾌감",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 파열 위력 {{formula1}}, 파열 횟수 {{formula2}} 부여 턴 종료 시, 파열 횟수가 3 이상인 모든 적(환상체일 경우, 부위마다 별도로 판정)에게 (파열 위력 × 파열 횟수) 만큼의 탐식 피해를 입히고 대상에게 부여된 파열 횟수 {{formula3}} 감소.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "3",
                    formula3: "2"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "3",
                    formula3: "1"
                },
                {
                    level: "++",
                    formula1: "6",
                    formula2: "3",
                    formula3: ""
                }
            ],
            note: ""
        },
        {
            id: "9094",
            name: "황홀경",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            combination: "근무용 통상 배터리 + 가시오랏줄 + 부적 묶음",
            effectBase: "스테이지 시작 시, 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 스킬을 사용하여 적에게 적중 시, 대상에게 파열 위력 5 부여. 전투 중 적의 파열 횟수가 1 아래로 떨어질 때, 파열 횟수 대신 파열 위력 10을 소모 (파열 위력이 10 미만이 될 경우, 효과 종료). 대상의 파열 횟수가 3 미만이면, 파열 횟수를 부여할 때 부여량 +1 (전투 당 3회)",
            effects: [],
            
        },
        {
            id: "9171",
            name: "파탄",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "부서진 리볼버 + 벼락가지 + 기괴한 석상",
            effectBase: "스테이지 시작 시, 파열 위력 또는 파열 횟수를 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함). 파열 효과가 적이 보유한 보호막에 입히는 피해량 +150% 턴 시작 시, 파열 상태인 적 또는 부위의 공격 레벨과 방어 레벨이 (3 + 파열 위력/2) 만큼 감소. (최대 6) 스킬 효과로 파열 위력을 부여할 때마다 대상에게 파열 위력 2, 파열 횟수 1 부여. 대상의 파열 위력이 15 미만이면, 파열 위력 부여 시 추가 2 부여. 스킬 효과로 인해 파열을 부여하지 못하는 경우 코인 위력 +(4/코인 수)",
            effects: [],
            
        },
        {
            id: "9793",
            name: "이전칠자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9424",
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
            id: "9049",
            name: "가시밭길",
            upgrade: "yes",
            relatedAbnormality: "하늘 지시관의 보좌",
            grade: 1,
            firstAppearance: "거을의 거울 (거울 던전 2)",
            effectBase: "침잠 위력 또는 특수 침잠을 부여하는 스킬로 적에게 체력 피해를 입힌 경우, 턴 종료 시 대상에게 침잠 위력 {{formula1}}, 침잠 횟수 {{formula2}} 부여. (동일한 적에게는 턴당 1회 발동)\n색욕 완전 공명을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 {{formula3}}, 침잠 횟수 {{formula4}} 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "2",
                    formula3: "2",
                    formula4: "3"
                },
                {
                    level: "+",
                    formula1: "3",
                    formula2: "2",
                    formula3: "2",
                    formula4: "3"
                },
                {
                    level: "++",
                    formula1: "4",
                    formula2: "3",
                    formula3: "3",
                    formula4: "3"
                }
            ]
        },
        {
            id: "9122",
            name: "고목 함정",
            upgrade: "yes",
            relatedAbnormality: "요정초롱",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬의 피해량 +{{formula1}}% (E.G.O 스킬 제외).\n코인 수가 2개 이하인 경우, 효과가 강화되어 합 위력 +1, 피해량 +{{formula2}}%.",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "10"
                },
                {
                    level: "+",
                    formula1: "7.5",
                    formula2: "12.5"
                },
                {
                    level: "++",
                    formula1: "10",
                    formula2: "15"
                }
            ]
        },
        {
            id: "9123",
            name: "넝마",
            upgrade: "yes",
            relatedAbnormality: "불명[85]",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬을 보유한 인격이 합 승리시 정신력 {{formula1}}을 추가로 회복(턴 당 1회)하고, 정신력이 최대일 경우에는 피해량 +{{formula2}}%.\n해당 인격이 빼기 코인 스킬(E.G.O 스킬 제외)을 사용할 경우, 효과가 변경되어 스킬 사용시 정신력이 -15 이상일 경우에는 정신력이 -15로 감소하고 피해량 +(정신력 감소한 수치{{formula3}})%, 정신력이 -15 미만일 경우에는 피해량 +{{formula4}}%.",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "7.5",
                    formula3: "",
                    formula4: "15"
                },
                {
                    level: "+",
                    formula1: "6",
                    formula2: "10",
                    formula3: "+5",
                    formula4: "20"
                },
                {
                    level: "++",
                    formula1: "7",
                    formula2: "12.5",
                    formula3: "+10",
                    formula4: "25"
                }
            ]
        },
        {
            id: "9074",
            name: "머리 없는 초상화",
            upgrade: "yes",
            relatedAbnormality: "어느 날의 초상",
            grade: 1,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "전투 시작 시, 정신력이 0 미만인 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 {{formula1}}{{formula2}} 부여.\n질투 속성 스킬을 사용할 때마다 다음 턴에 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 {{formula3}} 나누어 부여.",
            effects: [
                {
                    level: "기본",
                    formula1: "2",
                    formula2: "",
                    formula3: "1"
                },
                {
                    level: "+",
                    formula1: "3",
                    formula2: "",
                    formula3: "2"
                },
                {
                    level: "++",
                    formula1: "4",
                    formula2: ", 침잠 횟수 1",
                    formula3: "3"
                }
            ]
        },
        {
            id: "9172",
            name: "칸타빌레",
            upgrade: "no",
            relatedAbnormality: "죽을 나비의 장례",
            grade: 1,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "기본 공격 스킬 사용시, 적의 침잠 위력이 5 이상이면, 대상의 (침잠 위력 / 10)만큼 자신의 정신력 회복 (최대 3)",
            effects: []
        },
        {
            id: "9054",
            name: "녹아내린 시계태엽",
            upgrade: "no",
            relatedAbnormality: "시간오리",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시 침잠 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 3만큼 감소",
            effects: []
        },
        {
            id: "9174",
            name: "뒤엉킨 뼛조각",
            upgrade: "no",
            relatedAbnormality: "뼈무덤",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작시 침잠 위력, 침잠 횟수, 혹은 특수 침잠을 부여하는 공격 스킬을 보유한 인원이 5인 이상일 때 발동. (E.G.O 스킬 제외, 출격 인원을 기준으로 함.)\n턴 시작시 침잠을 보유한 적 (환상체일 경우 모든 부위)들이 (직전 턴에 피격을 받아 소모한 침잠 횟수/3)만큼 침잠 횟수를 다시 얻음\n기본 스킬 적중 대상의 정신력이 0 미만일 경우(정신력이 없을 경우 우울 내성이 1.5 이상일 때), (침잠 위력/10)만큼 우울 속성 피해를 입힘 (최소 대미지 1, 해당 효과는 턴 당 10회 발동 가능)",
            effects: []
        },
        {
            id: "9061",
            name: "유골 부스러기",
            upgrade: "no",
            relatedAbnormality: "뼈무덤",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "전투 시작 단계에서 침잠 상태인 적에게 가하는 피해량 +12.5%, 대상에게 받는 피해량 -12.5%.\n우울 속성 스킬을 보유한 아군은 효과가 강화되어, 침잠 상태인 적에게 가하는 피해량 +20%, 대상에게 받는 피해량 -20%.",
            effects: []
        },
        {
            id: "9124",
            name: "장엄",
            upgrade: "yes",
            relatedAbnormality: "나는 비워내느니",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition}} 인격 전용 효과]\n침잠 위력과 침잠 횟수의 합이 {{formula1}} 이상인 적에게 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬로 피해를 입힐 경우, 공격 종료 시 침잠 위력 {{formula2}}, 침잠 횟수 {{formula3}} 부여 (인격별 턴 당 {{formula4}})\n집중 전투 방식의 전투 스테이지에서는 효과가 변경되어 침잠 위력 {{formula5}}, 침잠 횟수 {{formula6}} 부여 (인격별 턴 당 1회)\n색욕 완전 공명을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 2, 침잠 횟수 3 부여.",
            effects: [
                {
                    level: "기본",
                    condition: "1번, 2번",
                    formula1: "10",
                    formula2: "2",
                    formula3: "2",
                    formula4: "2회",
                    formula5: "4",
                    formula6: "2"
                },
                {
                    level: "+",
                    condition: "1번, 2번, 3번",
                    formula1: "8",
                    formula2: "3",
                    formula3: "2",
                    formula4: "2회",
                    formula5: "5",
                    formula6: "2"
                },
                {
                    level: "++",
                    condition: "1번, 2번, 3번",
                    formula1: "5",
                    formula2: "3",
                    formula3: "3",
                    formula4: "2회",
                    formula5: "5",
                    formula6: "3"
                }
            ]
        },
        {
            id: "9041",
            name: "적색 지령",
            upgrade: "yes",
            relatedAbnormality: "지네사도",
            grade: 2,
            firstAppearance: "거을의 거울 (거울 던전 2)",
            effectBase: "아군이 스킬 효과로 적에게 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여할 때마다 해당 인격이 다음 턴에 공격 레벨이 {{formula1}} 증가 (최대 {{formula2}}).\n분노 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 침잠 위력 또는 침잠 횟수를 부여할 때마다 다음 턴에 공격 레벨이 {{formula3}} 증가 (최대 {{formula4}}).",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "3",
                    formula3: "2",
                    formula4: "4"
                },
                {
                    level: "+",
                    formula1: "1",
                    formula2: "4",
                    formula3: "2",
                    formula4: "5"
                },
                {
                    level: "++",
                    formula1: "2",
                    formula2: "4",
                    formula3: "3",
                    formula4: "6"
                }
            ]
        },
        {
            id: "9173",
            name: "빛바랜 외투",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "턴 종료 시 정신력이 -45인 적이 3명 이상이면, 다음 턴에 모든 아군이 공격 레벨 증가 2 얻음",
            effects: []
        },
        {
            id: "9409",
            name: "얼어붙은 아우성",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9746",
            name: "정신 오염 가속 가스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9747",
            name: "흘러내린 엔케팔린",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9095",
            name: "고장난 나침반",
            upgrade: "yes",
            relatedAbnormality: "길 잃은 탐험가",
            grade: 3,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 침잠 횟수 ({{formula1}} + 등장한 적의 수 × {{formula2}})만큼 무작위로 나누어 부여 (환상체일 경우, 적 숫자는 본체 하나로 계산).",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "3"
                },
                {
                    level: "+",
                    formula1: "10",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "10",
                    formula2: "4"
                }
            ]
        },
        {
            id: "9125",
            name: "머나먼 별",
            upgrade: "no",
            relatedAbnormality: "불명[91]",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하거나 획득하는 기본 공격 스킬을 사용하여 적에게 적중 시, 대상이 보유한 침잠 효과(특수 침잠을 포함)를 발동시킬 때마다 턴 종료 시 자신의 정신력 3 회복 (인격 별로 턴 당 2회).\n턴 시작 시 정신력이 45일 경우 효과가 변경되어, 기본 공격 스킬을 사용하여 적에게 적중 시, 대상이 보유한 침잠 효과(특수 침잠을 포함)를 발동시킬 때마다 대상 적에게 침잠 횟수 2 부여 (인격 별로 턴 당 2회)",
            effects: []
        },
        {
            id: "9059",
            name: "한겨울 밤의 악몽",
            upgrade: "no",
            relatedAbnormality: "요정초롱",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "스킬을 사용하여 적에게 적중 시 체력 피해를 입혔다면, 대상에게 침잠 위력 3 부여.\n탐식 속성 스킬을 사용할 경우, 효과가 강화되어 대상에게 침잠 위력 5 부여.",
            effects: []
        },
        {
            id: "9750",
            name: "안식",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9432",
            name: "모형 저택 오르골",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9175",
            name: "서지 글로브",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "칸타빌레 + 빛바랜 외투",
            effectBase: "스테이지 시작 시, 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n기본 공격 스킬 사용 시, 적의 침잠 위력이 5 이상이면, 대상의 (침잠 위력 / 10)만큼 자신의 정신력 회복 (최대 5)\n턴 종료 시 정신력이 -45인 적의 수만큼 다음 턴에 모든 아군이 공격 레벨 증가 얻음 (최대 3)",
            effects: []
        },
        {
            id: "9065",
            name: "미적 감각",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "정신력 감소로 인하여 부정적 효과(사기 저하, 패닉)를 얻은 적에게 입히는 피해량 {{formula1}}% 증가.\n정신력이 없는 적에게 침잠 효과가 적용될 경우, 우울 속성 피해를 입히는 대신 이를 포함한 죄악 속성 중 가장 효과적인 속성 피해로 변경.",
            effects: [
                {
                    level: "기본",
                    formula1: "35"
                },
                {
                    level: "+",
                    formula1: "40"
                },
                {
                    level: "++",
                    formula1: "50"
                }
            ]
        },
        {
            id: "9126",
            name: "잠식 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 E.G.O 스킬 사용 시 발동\n소모하는 (우울 E.G.O 자원 +나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50%\n우울 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 침잠 횟수를 추가로 부여(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(소모한 정신력x2.5)%.",
            effects: []
        },
        {
            id: "9436",
            name: "굴절 유리관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9096",
            name: "검은 악보",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            combination: "한겨울 밤의 악몽 + 뒤엉킨 뼛조각 + 머리 없는 초상화",
            effectBase: "스테이지 시작 시, 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n스킬을 사용하여 적에게 적중 시, 대상에게 침잠 위력 5 부여.\n턴 시작 시, 모든 적(환상체일 경우, 모든 부위)들이 직전 턴에 피격을 받아 소모한 침잠 횟수의 절반만큼 침잠 횟수를 다시 얻음.\n기본 공격 스킬 적중 대상의 정신력이 0 미만일 경우(정신력이 없을 경우, 우울 내성이 1.2 이상일 때), (침잠 위력/10)만큼 우울 속성 피해를 입힘 (최소 대미지 1. 해당 효과는 턴 당 10회 발동 가능).",
            effects: []
        },
        {
            id: "9176",
            name: "덮칠 파도",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "가시밭길 + 머나먼 별 + 서지 글로브",
            effectBase: "스테이지 시작 시, 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하는 스킬을 사용하여 적에게 적중 시 체력 피해를 입혔다면, 턴 종료 시 대상에게 침잠 위력 4, 침잠 횟수 3 부여 (적 1명 당 턴 당 1회 발동)\n우울 또는 색욕 완전 공명을 발동하였다면, 전투 시작 시, 모든 적 (환상체일 경우, 무작위 부위 하나)에게 침잠 위력 3, 침잠 횟수 3 부여.\n기본 공격 스킬 사용 시, 적의 침잠 위력이 10 이상이면, 대상의 (침잠 위력 / 10)만큼 자신의 정신력 회복, 대상에게 방어 레벨 감소 부여 (최대 5. 적 1명 당 턴 당 1회 발동)\n턴 종료 시 정신력이 -45이거나 정신력이 없는 적의 수만큼 다음 턴에 모든 아군이 공격 레벨 증가 얻음 (최대 6)\n침잠 위력, 침잠 횟수 또는 특수 침잠을 부여하거나 획득하는 기본 공격 스킬을 사용하여 적에게 적중 시, 대상이 보유한 침잠 효과(특수 침잠을 포함)를 발동시킬 때마다 턴 종료 시 자신의 정신력 5 회복 (인격 별로 턴 당 2회).\n턴 시작 시 정신력이 45일 경우 효과가 변경되어, 기본 공격 스킬을 사용하여 적에게 적중 시, 대상이 보유한 침잠 효과(특수 침잠을 포함)를 발동시킬 때마다 대상 적에게 침잠 횟수 3 부여 (인격 별로 턴 당 2회)",
            effects: []
        },
        {
            id: "9410",
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
            id: "9128",
            name: "녹빛 겉날개",
            upgrade: "yes",
            relatedAbnormality: "키다리 요정",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "웨이브 첫 턴 시작 시, 속도가 제일 빠른 아군 하나가 호흡 위력 {{formula1}}, 호흡 횟수 {{formula2}} 얻음.\n질투 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 호흡 위력 {{formula3}}, 호흡 횟수 {{formula4}} 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "2",
                    formula3: "4",
                    formula4: "3"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "4",
                    formula3: "5",
                    formula4: "5"
                },
                {
                    level: "++",
                    formula1: "4",
                    formula2: "4",
                    formula3: "5",
                    formula4: "5"
                }
            ]
        },
        {
            id: "9127",
            name: "데블스 셰어",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "턴 종료 시, 호흡 위력이 제일 높은 아군 하나와 호흡 횟수가 제일 높은 아군 하나에게 다음 턴에 신속 {{formula1}} 부여. (같은 인격일 경우 중복 가능)\n색욕 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 신속 {{formula2}} 부여. (E.G.O 스킬 제외)",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "1",
                    formula2: "2"
                },
                {
                    level: "++",
                    formula1: "1",
                    formula2: "2"
                }
            ]
        },
        {
            id: "9097",
            name: "장식된 편자",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "턴 시작 시, 호흡 상태가 아닌 무작위 아군 {{condition1}}에게 호흡 위력 {{formula1}} 부여.\n모든 아군이 호흡 상태일 경우, 효과가 변경되어 모든 아군에게 호흡 횟수 {{formula2}} 부여.",
            effects: [
                {
                    level: "기본",
                    condition1: "하나",
                    formula1: "2",
                    formula2: "1"
                },
                {
                    level: "+",
                    condition1: "하나",
                    formula1: "3",
                    formula2: "2"
                },
                {
                    level: "++",
                    condition1: "둘",
                    formula1: "3",
                    formula2: "3"
                }
            ]
        },
        {
            id: "9063",
            name: "추억의 펜던트",
            upgrade: "yes",
            relatedAbnormality: "흉탄의 사수",
            grade: 1,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "전투 시작 시, 무작위 아군 {{condition1}}이 호흡 위력 {{formula1}} 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정).\n우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 {{formula1}} 얻고 호흡 횟수 {{formula2}} 증가.",
            effects: [
                {
                    level: "기본",
                    condition1: "하나",
                    formula1: "3",
                    formula2: "2"
                },
                {
                    level: "+",
                    condition1: "하나",
                    formula1: "4",
                    formula2: "3"
                },
                {
                    level: "++",
                    condition1: "둘",
                    formula1: "4",
                    formula2: "3"
                }
            ]
        },
        {
            id: "9709",
            name: "털방울 모자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9129",
            name: "낡은 목각 인형",
            upgrade: "yes",
            relatedAbnormality: "누구도 울지 않도록",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition1}}, {{condition2}} 인격 전용 효과]\n적에게 치명타 피해를 입힐 때마다 다음 턴에 방어 레벨 감소 1 부여 (인격별로 턴 당 {{formula1}}회까지 부여 가능).",
            effects: [
                {
                    level: "기본",
                    condition1: "1번",
                    condition2: "2번",
                    formula1: "3"
                },
                {
                    level: "+",
                    condition1: "1번",
                    condition2: "2번",
                    condition3: "3번",
                    formula1: "4"
                },
                {
                    level: "++",
                    condition1: "1번",
                    condition2: "2번",
                    condition3: "3번",
                    formula1: "6"
                }
            ]
        },
        {
            id: "9066",
            name: "네뷸라이저",
            upgrade: "yes",
            relatedAbnormality: "지난 날의 침낭",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "{{condition1}} 시작시 모든 아군이 호흡 위력 {{formula1}} 얻고 호흡 횟수 {{formula2}} 증가\n오만 {{condition2}} 공명을 발동하였다면 전투 시작 시, 모든 아군이 호흡 위력 {{formula3}} 얻고 호흡 횟수 {{formula4}} 증가.\n- [중첩 발동 불가] 흉통 료슈 E.G.O 패시브 「숨」발동시, 이 효과가 발동하지 않음.",
            effects: [
                {
                    level: "기본",
                    condition1: "스테이지 첫 턴",
                    condition2: "완전",
                    formula1: "4",
                    formula2: "4",
                    formula3: "2",
                    formula4: "2"
                },
                {
                    level: "+",
                    condition1: "웨이브 첫 턴",
                    condition2: "완전",
                    formula1: "5",
                    formula2: "4",
                    formula3: "3",
                    formula4: "2"
                },
                {
                    level: "++",
                    condition1: "웨이브 첫 턴",
                    condition2: "",
                    formula1: "5",
                    formula2: "5",
                    formula3: "3",
                    formula4: "3"
                }
            ]
        },
        {
            id: "9051",
            name: "돌무덤",
            upgrade: "yes",
            relatedAbnormality: "탑돌이",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "아군이 스킬 효과로 획득하는 호흡 위력 수치가 {{formula1}}배로 적용.\n아군이 {{condition1}} 적을 처치하였다면, 다음 턴 시작 시 호흡 위력 {{formula2}}, 호흡 횟수 {{formula3}} 획득. (턴당 1회)",
            effects: [
                {
                    level: "기본",
                    condition1: "나태 속성 스킬을 사용하여",
                    formula1: "1.5",
                    formula2: "2",
                    formula3: "2"
                },
                {
                    level: "+",
                    condition1: "",
                    formula1: "1.5",
                    formula2: "3",
                    formula3: "2"
                },
                {
                    level: "++",
                    condition1: "",
                    formula1: "2",
                    formula2: "4",
                    formula3: "2"
                }
            ]
        },
        {
            id: "9046",
            name: "물부리",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 호흡 상태인 아군이 공격 위력 증가 1 얻음.\n호흡 횟수를 5 이상 보유한 아군의 경우에는 효과가 강화되어, 공격 위력 증가 2 얻음.",
            effects: []
        },
        {
            id: "9177",
            name: "어느 날의 기억",
            upgrade: "no",
            relatedAbnormality: "어느 날의 초상",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스킬을 사용(E.G.O 스킬 제외)하여 호흡 위력 또는 호흡 횟수를 획득하는 인격이 사용하는 스킬 3의 최종 위력 +2",
            effects: []
        },
        {
            id: "9178",
            name: "엔젤스 컷",
            upgrade: "no",
            relatedAbnormality: "주정뱅이",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "턴 종료 시, 각 아군이 자신의 호흡 위력이 20을 초과했으면, 호흡 위력을 1 소모하여 호흡 횟수 1 증가",
            effects: []
        },
        {
            id: "9710",
            name: "거대한 선물 보따리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9770",
            name: "톱니 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9429",
            name: "작살 의족",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9056",
            name: "네잎클로버",
            upgrade: "no",
            relatedAbnormality: "키다리 요정",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "전투 시작 단계에서 호흡 상태인 아군이 스킬을 사용하여 적에게 치명타 피해를 입힐 경우, 다음 턴 시작 시 호흡 위력 5 얻고 호흡 횟수 2 증가. (턴당 1회 발동)\n탐식 속성 스킬을 사용한 경우에는 효과가 강화되어, 다음 턴 시작 시 호흡 위력 7 얻고 호흡 횟수 3 증가.",
            effects: []
        },
        {
            id: "9130",
            name: "미련",
            upgrade: "no",
            relatedAbnormality: "불명[106]",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과]\n턴 시작 시, 호흡 위력과 호흡 횟수의 합이 10 이상인 아군이 합 위력 +1, 피해량 증가 1 얻음.\n수치의 합이 20 이상인 경우, 효과가 강화되어 합 위력 +1, 피해량 증가 3 얻음.\n수치의 합이 40 이상인 경우, 효과가 최대로 강화되어 합 위력 +2, 피해량 증가 3 얻음.",
            effects: []
        },
        {
            id: "9073",
            name: "엔도르핀 키트",
            upgrade: "yes",
            relatedAbnormality: "꿈먹는 탁류",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "스킬 효과로 호흡 위력을 획득할 때마다 대상이 호흡 위력 {{formula1}}, 호흡 횟수 {{formula2}} 얻음.\n질투 속성의 스킬을 사용할 경우, 효과가 강화되어 호흡 위력 {{formula3}}, 호흡 횟수 {{formula4}} 얻음",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "1",
                    formula3: "2",
                    formula4: "2"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "2",
                    formula3: "3",
                    formula4: "3"
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "3",
                    formula3: "4",
                    formula4: "4"
                }
            ]
        },
        {
            id: "9771",
            name: "근접 전술 교본",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "2030",
            name: "부서진 칼날",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9179",
            name: "추억",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "어느 날의 기억 + 추억의 팬던트",
            effectBase: "스테이지 시작 시, 호흡 위력 또는 호흡 횟수를 부여 또는 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n스킬을 사용(E.G.O 스킬 제외)하여 호흡 위력 또는 호흡 횟수를 획득하는 인격이 사용하는 스킬 3의 코인 위력 +1\n전투 시작 시, 무작위 아군 하나가 호흡 위력 3 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정). 우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 3 얻고 호흡 횟수 2 증가.",
            effects: []
        },
        {
            id: "9131",
            name: "교만 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "호흡 위력 또는 호흡 횟수를 부여 또는 획득하는 E.G.O 스킬 사용 시 발동\n소모하는 (오만 E.G.O 자원 + 나머지 E.G.O 자원의 합/3)만큼 최종 위력이 증가, 피해량 +50%\n오만 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 호흡 횟수를 추가로 획득(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(소모한 E.G.O 자원의 합x8)%",
            effects: []
        },
        {
            id: "9070",
            name: "명경지수",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "아군이 치명타로 가하는 피해량이 1.2배에서 {{formula1}}배로 증가.\n치명타가 발생하여 호흡 횟수를 소모하였을 경우, 다음 턴에 해당 인격이 공격 레벨 증가 {{formula2}} 얻음 (인격별로 턴 당 1회 발동).",
            effects: [
                {
                    level: "기본",
                    formula1: "1.7",
                    formula2: "10"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "12"
                },
                {
                    level: "++",
                    formula1: "2.5",
                    formula2: "15"
                }
            ]
        },
        {
            id: "2034",
            name: "해진 삿갓",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9428",
            name: "고래의 심장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9098",
            name: "복주머니",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            combination: "네잎클로버 + 장식된 편자 + 추억",
            effectBase: "스테이지 시작 시, 호흡 위력 또는 호흡 횟수를 부여 또는 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n전투 시작 단계에서 호흡 상태인 무작위 아군이 스킬을 사용하여 적에게 치명타 피해를 입힐 경우, 다음 턴 시작 시 모든 아군이 호흡 위력 7 얻고 호흡 횟수 7 증가 (턴 당 1회 발동).\n호흡 위력 또는 호흡 횟수를 획득하는 인격이 사용하는 3스킬의 최종 위력 +3, 코인 위력 +(12/코인 수), 피해량 +(50/코인 수)%.\n전투 시작 시, 무작위 아군 하나가 호흡 위력 3 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정). 우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 3 얻고 호흡 횟수 2 증가.",
            effects: []
        },
        {
            id: "9180",
            name: "캐스크 스피리츠",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "데블스 셰어 + 엔젤스 컷 + 엔도르핀 키트",
            effectBase: "스테이지 시작 시, 호흡 위력 또는 호흡 횟수를 부여 또는 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n턴 종료 시, 각 아군이 자신의 호흡 위력이 20을 초과했으면, 호흡 위력을 1 소모하여 호흡 횟수 1 증가\n턴 종료 시, 호흡 위력이 제일 높은 아군 하나와 호흡 횟수가 제일 높은 아군 하나에게 다음 턴에 신속 2, 공격 레벨 증가 1 부여 (같은 인격일 경우 중복 가능)\n스킬 효과로 호흡 위력을 획득할 때마다 해당 캐릭터가 호흡 위력 2, 호흡 횟수 2 얻음. 보유한 호흡 위력과 호흡 횟수의 합이 20 미만이면, 대신 호흡 위력 3, 호흡 횟수 3 얻음.\n턴 종료 시, 자신의 호흡 위력이 40을 초과하면, 호흡 위력을 15 소모하여 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬을 1개 버림 (캐릭터 당, 턴 당 1회)",
            effects: []
        },
        {
            id: "9765",
            name: "기쁜 봉제인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9430",
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
            id: "9132",
            name: "무정전 전원장치",
            upgrade: "yes",
            relatedAbnormality: "환상체: kqe-1j-23",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "턴 종료 시 충전 횟수가 {{formula1}} 미만인 경우에는 다음 턴 시작 시 충전 횟수 {{formula2}} 증가.\n턴 종료 시 충전 횟수가 {{formula1}} 이상인 경우에는 다음 턴 시작 시 피해량 증가 {{formula3}} 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "3",
                    formula3: "1"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "3",
                    formula3: "1"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "4",
                    formula3: "2"
                }
            ]
        },
        {
            id: "9069",
            name: "손목 보호대",
            upgrade: "yes",
            relatedAbnormality: "환상체: 악수의 악수",
            grade: 1,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 충전 횟수와 특수 충전을 합하여 {{formula1}} 이상 보유한 아군이 피해량 증가 {{formula2}} 얻음.\n오만 속성 공격 스킬을 보유한 아군의 경우에는 효과가 강화되어, 피해량 증가 {{formula3}} 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "1",
                    formula3: "2"
                },
                {
                    level: "+",
                    formula1: "3",
                    formula2: "1",
                    formula3: "2"
                },
                {
                    level: "++",
                    formula1: "1",
                    formula2: "2",
                    formula3: "3"
                }
            ]
        },
        {
            id: "9062",
            name: "이력서",
            upgrade: "yes",
            relatedAbnormality: "환상체: 죽을 나비의 장례",
            grade: 1,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 종료 시, 충전 횟수와 특수 충전을 합하여 7 이상 보유한 아군이 다음 턴에 신속 {{formula1}} 얻음.\n우울 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 다음 턴에 신속 {{formula2}}, 공격 위력 증가 1 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "1",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "2",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "3",
                    formula2: "4"
                }
            ]
        },
        {
            id: "9133",
            name: "제한 풀린 제세동기",
            upgrade: "yes",
            relatedAbnormality: "환상체: 충격 지네",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 N번 인격 전용 효과]\n턴 종료 시, 이번 턴에 공격 스킬을 사용하여 소모한 충전 횟수와 특수 충전의 합{{formula1}}만큼 체력과 정신력을 회복.\n남은 체력이 최대 체력의 {{condition1}}일 경우, 회복되는 수치가 {{formula2}}배로 적용.",
            effects: [
                {
                    level: "기본",
                    formula1: "",
                    condition1: "절반 이하",
                    formula2: "1.5"
                },
                {
                    level: "+",
                    formula1: "+1",
                    condition1: "절반 이하",
                    formula2: "2"
                },
                {
                    level: "++",
                    formula1: "+2",
                    condition1: "75% 이하",
                    formula2: "2"
                }
            ]
        },
        {
            id: "9182",
            name: "1B 타입 팔각 볼트",
            upgrade: "no",
            relatedAbnormality: "환상체: 당신은 강해졌나요",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "스테이지 시작 시, 충전 횟수 또는 특수 충전을 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n턴 시작 시, (충전 횟수와 특수 충전의 합 / 10)만큼 피해량 증가를 얻음 (최대 2, 올림하여 처리)\n턴 종료 시 충전 역장이 없으면, 충전 역장 1 얻음.",
            effects: []
        },
        {
            id: "9043",
            name: "사원증",
            upgrade: "yes",
            relatedAbnormality: "환상체: 버려진 직원",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "{{condition1}} 분노 완전 공명을 발동하였거나 충전 횟수 또는 특수 충전을 획득하거나 부여하는 스킬을 사용할 경우, 다음 턴 시작 시 모든 아군이 충전 횟수 {{formula1}} 증가. (턴 당 1회 발동)",
            effects: [
                {
                    level: "기본",
                    condition1: "",
                    formula1: "3"
                },
                {
                    level: "+",
                    condition1: "분노 공명을 발동하였거나",
                    formula1: "3"
                },
                {
                    level: "++",
                    condition1: "분노 공명을 발동하였거나",
                    formula1: "4"
                }
            ]
        },
        {
            id: "9134",
            name: "순찰용 손전등",
            upgrade: "yes",
            relatedAbnormality: "환상체: 길 잃은 승객",
            grade: 2,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 {{condition1}} 인격 전용 효과]\n턴 시작 시 효과 적용 대상 인격이 충전 횟수 또는 특수 충전을 획득하거나 소모하는 스킬을 보유하였다면, 충전 역장 상태일 때 대상의 1스킬 합 위력 +1, 피해량 +{{formula1}}%.\n턴 종료 시 효과 대상 인격이 충전 역장을 보유하지 않았다면 다음 턴에 충전 역장 {{formula2}} 부여",
            effects: [
                {
                    level: "기본",
                    condition1: "1번, 2번",
                    formula1: "10",
                    formula2: "2"
                },
                {
                    level: "+",
                    condition1: "1번, 2번, 3번",
                    formula1: "15",
                    formula2: "3"
                },
                {
                    level: "++",
                    condition1: "1번, 2번, 3번",
                    formula1: "25",
                    formula2: "4"
                }
            ]
        },
        {
            id: "9057",
            name: "야간투시경",
            upgrade: "no",
            relatedAbnormality: "환상체: 차원산화변이체",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 충전 횟수가 15 이상인 인격이 있을 경우 발동.\n전투 시작 시, 해당 인격이 충전 횟수를 3 소모하고 이번 턴 동안 공격 레벨 5 증가.",
            effects: []
        },
        {
            id: "9052",
            name: "휴대용 전지 소켓",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 2,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "턴 시작 시, 무작위 아군 {{condition1}}이 충전 횟수 {{formula1}} 증가 (스킬을 사용하여 충전 횟수 또는 특수 충전을 획득하는 인격을 우선으로 지정).\n나태 {{condition2}} 공명을 발동하였다면 전투 시작 시, 무작위 아군 하나가 충전 횟수 {{formula2}} 증가.",
            effects: [
                {
                    level: "기본",
                    condition1: "둘",
                    formula1: "2",
                    condition2: "완전",
                    formula2: "3"
                },
                {
                    level: "+",
                    condition1: "둘",
                    formula1: "3",
                    condition2: "",
                    formula2: "3"
                },
                {
                    level: "++",
                    condition1: "셋",
                    formula1: "3",
                    condition2: "",
                    formula2: "5"
                }
            ]
        },
        {
            id: "9181",
            name: "미니어처 전봇대",
            upgrade: "no",
            relatedAbnormality: "환상체: 골목파수견",
            grade: 2,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            effectBase: "자신의 충전 횟수를 7 이상 소모한 공격 스킬 종료 시 대상이 사망한 경우, (해당 스킬로 소모한 충전 횟수/4)만큼 자신의 충전 횟수 증가",
            effects: []
        },
        {
            id: "9736",
            name: "생체 발전형 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9737",
            name: "심장 리액트 모듈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9738",
            name: "의체관절 서보모터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9745",
            name: "어긋난 트랜지스터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9135",
            name: "모조발전기",
            upgrade: "no",
            relatedAbnormality: "불명[112]",
            grade: 3,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "[편성 1번, 2번 인격 전용 효과]\n턴 시작 시 충전 횟수와 특수 충전의 합이 10 이상인 경우 발동.\n충전 횟수 또는 특수 충전을 획득하거나 소모하는 3스킬의 코인 위력 +1.\n해당 스킬의 기본 위력이 5 미만일 경우 피해량 +25%, 기본 위력이 5 이상일 경우 코인 위력 추가로 +1",
            effects: []
        },
        {
            id: "9099",
            name: "물리 간섭 보호장",
            upgrade: "yes",
            relatedAbnormality: "환상체: 메트로폴라리스의 주민",
            grade: 3,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            effectBase: "웨이브 첫 턴 시작 시, 모든 아군이 충전 역장 {{formula1}} 얻음.",
            effects: [
                {
                    level: "기본",
                    formula1: "3"
                },
                {
                    level: "+",
                    formula1: "5"
                },
                {
                    level: "++",
                    formula1: "7"
                }
            ]
        },
        {
            id: "9072",
            name: "피뢰침",
            upgrade: "yes",
            relatedAbnormality: "불명[126]",
            grade: 3,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "스테이지 시작 시, 모든 아군의 충전 횟수 {{formula1}} 증가.\n질투 속성 스킬을 보유하고 있는 아군이 전투에 둘 이상 참여한 경우 효과가 강화되어, 모든 아군의 충전 횟수 {{formula2}} 증가.",
            effects: [
                {
                    level: "기본",
                    formula1: "3",
                    formula2: "5"
                },
                {
                    level: "+",
                    formula1: "4",
                    formula2: "6"
                },
                {
                    level: "++",
                    formula1: "5",
                    formula2: "7"
                }
            ]
        },
        {
            id: "9735",
            name: "휴대용 역장 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9734",
            name: "E식 차원 단검",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9183",
            name: "인슐레이터",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 3,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "무정전 전원장치 + 미니어처 전봇대",
            effectBase: "스테이지 시작 시, 충전 횟수 또는 특수 충전을 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n자신의 충전 횟수를 소모한 스킬 공격 종료 시 대상이 사망한 경우, (해당 스킬로 소모한 충전 횟수/3)만큼 자신의 충전 횟수 증가\n턴 시작 시 충전 횟수가 3 미만인 경우, 충전 횟수 3 증가. 턴 시작 시 충전 횟수가 3 이상인 경우, 피해량 증가 1 얻음.)",
            effects: []
        },
        {
            id: "9136",
            name: "마찰 조각",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "충전 횟수 또는 특수 충전을 획득하거나 소모하는 E.G.O 스킬 사용시 발동\n소모하는 (질투 E.G.O 자원 + 나머지 E.G.O 자원 / 3)만큼 최종 위력이 증가, 피해량 +50%\n질투 속성 E.G.O 스킬의 경우, 효과가 강화되어 공격 시작 전에 충전 횟수를 추가로 획득(ZAYIN의 경우 2, 등급이 오를수록 +1)하고 피해량 +(보유한 충전 횟수와 특수 충전의 합×5)%",
            effects: []
        },
        {
            id: "9075",
            name: "충전식 장갑",
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "거울의 거울 (거울 던전 2)",
            effectBase: "충전 횟수 최대치 +10.\n스테이지 시작 시, 모든 아군의 충전 횟수 {{formula1}} 증가.\n턴 시작 시, 모든 아군의 충전 횟수 {{formula2}} 증가.",
            effects: [
                {
                    level: "기본",
                    formula1: "5",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula1: "6",
                    formula2: "3"
                },
                {
                    level: "++",
                    formula1: "8",
                    formula2: "4"
                }
            ]
        },
        {
            id: "9100",
            name: "제 1종 영구기관",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "호수의 거울 (거울 던전 3)",
            combination: "물리 간섭 보호장 + 1B 타입 팔각 볼트 + 손목 보호대",
            effectBase: "스테이지 시작 시, 충전 횟수 또는 특수 충전을 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n웨이브 첫 턴 시작 시, 모든 아군이 충전 역장 7 얻음.\n턴 시작 시, 아군이 (충전 횟수와 특수 충전의 합 / 5 + 1)만큼 피해량 증가 얻음 (최대 9. 올림하여 처리)\n각 인격마다 (이번 전투 동안 공격 스킬을 사용하여 누적 소모한 충전 횟수/4)만큼 턴 시작 시, 공격 레벨 증가 얻음 (충전 횟수 40 소모 시, 효과 최대)\n각 인격마다 충전 횟수를 20 소모할 때마다 충전 위력 1 얻음.(전투 당 인격별로 2회. 특수 충전 제외)\n자신의 충전 횟수를 소모한 스킬의 공격 종료 시 (충전 위력 - 1)만큼 방어 레벨 감소 부여 (턴 당 적 1명당 최대 5회 발동. 방어 레벨 감소 1회 최대 부여 값: 3)",
            effects: []
        },
        {
            id: "9184",
            name: "제 5종 영구기관",
            upgrade: "no",
            relatedAbnormality: "불명",
            grade: 4,
            firstAppearance: "꿈결의 거울 (거울 던전 5)",
            combination: "이력서 + 피뢰침 + 인슐레이터",
            effectBase: "스테이지 시작 시, 충전 횟수 또는 특수 충전을 획득하는 공격 스킬을 보유한 인격이 5인 이상일 때 발동 (E.G.O 스킬 제외, 출격 인원을 기준으로 함).\n턴 시작 시 충전 횟수가 3 미만인 경우, 충전 횟수 5 증가. 턴 시작 시 충전 횟수가 5 이상인 경우, 속도 최솟값, 속도 최댓값 +2, 공격 위력 증가 1, 피해량 증가 2 얻음.\n자신의 충전 횟수를 소모한 스킬 공격 종료 시 대상이 사망한 경우, (해당 스킬로 소모한 충전 횟수/3)만큼 자신의 충전 횟수 증가, 다음 턴에 더하기 코인 강화 1 얻음 (캐릭터당 턴 당 1회).\n자신의 충전 횟수를 소모한 스킬 3 공격 종료 시 대상이 사망하였거나 충전이 3 이상이면, 스킬 3 1개를 다음 턴에 사용할 스킬 목록에 추가함. (아군당 턴 당 1회 발동, 특수 충전은 제외)",
            effects: []
        },
        {
            id: "9741",
            name: "과충전된 배터리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9742",
            name: "영구동력 서보모터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9740",
            name: "자율 작동식 관절",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9743",
            name: "하츠 파워드 쥬얼",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        }
    ],
    Slash: [
        {
            id: "9193",
            name: "닳고 닳은 숫돌",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9137",
            name: "수술용 메스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9138",
            name: "위장된 화평",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9140",
            name: "결의",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9032",
            name: "꿈을 꾸는 전기양",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9139",
            name: "재단용 가위",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9194",
            name: "짧은 케인 소드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9195",
            name: "구름무늬 호리병",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9141",
            name: "선고의 순간",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9791",
            name: "그림자 삿갓",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2028",
            name: "녹슨 칼자루",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2031",
            name: "붉은 색술",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9196",
            name: "깨어진 대검",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9142",
            name: "잘려나간 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2035",
            name: "낡은 도포",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9785",
            name: "떼구름",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2033",
            name: "부동",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2032",
            name: "장관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9784",
            name: "탁마",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        }

    ],
    Pierce: [
        {
            id: "9197",
            name: "고탄성강 신발",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9019",
            name: "끈적거리는 진액",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9143",
            name: "목공용 대못",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9030",
            name: "수집하는 해골",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9198",
            name: "증명의 깃털",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9145",
            name: "찢어진 밴돌리어",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9144",
            name: "축복이었던",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9146",
            name: "벼려진 가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9199",
            name: "튿어진 소매",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9768",
            name: "평등",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9767",
            name: "흑염 파이프",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9147",
            name: "구멍난 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9200",
            name: "듀엘교본 3권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        }
    ],
    Strike: [

        {
            id: "9148",
            name: "동티",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9201",
            name: "차원분리수거함",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9027",
            name: "가장 낮은 별",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9150",
            name: "시간 굴레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9149",
            name: "압박 붕대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9012",
            name: "오늘의 표정",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9202",
            name: "포켓 암기 노트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9786",
            name: "강화 문신 - 중지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9151",
            name: "굳게 쥔 상",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9203",
            name: "차원지각변환체",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9789",
            name: "의리 사슬",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9152",
            name: "바스라진 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9204",
            name: "앙갚음 장부",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9792",
            name: "영속하는 인연 사슬",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        }

    ],
    General: [
        {
            id: "9002",
            name: "도착증",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9040",
            name: "내일의 운세",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9192",
            name: "덧붙인 반창고",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9017",
            name: "문자 석판",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9010",
            name: "블러디 가젯",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9035",
            name: "저주 인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9021",
            name: "쪽빛 지포라이터",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9028",
            name: "편견",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9004",
            name: "혈액 포집팩",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9732",
            name: "일반석 할인 바우처",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9759",
            name: "불 꺼진 랜턴",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9762",
            name: "포장용 상자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9078",
            name: "게걸스러운 망치",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9015",
            name: "고혈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9039",
            name: "귀로",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9026",
            name: "대기만성형 타투",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9185",
            name: "리베이트 토큰",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9080",
            name: "생존의 이정표",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9186",
            name: "신상품 팜플렛",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9153",
            name: "오라클",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9007",
            name: "주홍 나방떼",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9077",
            name: "진통제",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9025",
            name: "잿빛 코트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9036",
            name: "카르밀라",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9006",
            name: "커피와 종이학",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9187",
            name: "특별 카탈로그",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9037",
            name: "플라스크 속의 아이",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9079",
            name: "황금색 항아리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2027",
            name: "검은 장부",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9739",
            name: "결정화된 혈액",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2038",
            name: "경고장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9408",
            name: "귀신 들린 신발",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9707",
            name: "반짝이는 폐품",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9769",
            name: "신속한 지휘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9733",
            name: "아이스크림 통조림",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9407",
            name: "오더메이드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "1034",
            name: "핏빛 갈기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9755",
            name: "경멸의 시선의 경멸",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9423",
            name: "깨진 안경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9757",
            name: "대양전 접지 플러그",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9427",
            name: "마을을 지킬 작살",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9439",
            name: "먹어치우는 큐브",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9753",
            name: "메트로놈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9751",
            name: "뱀 허물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9435",
            name: "버틀러식 포박술",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9760",
            name: "불 꺼진 촛대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9154",
            name: "강요된 무게",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9014",
            name: "녹슨 기념 주화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9058",
            name: "디스크 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9189",
            name: "리뉴얼 굿즈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9188",
            name: "사전 예약 할인권",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9068",
            name: "성대한 환대",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9011",
            name: "여우비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9190",
            name: "체험형 플랜 가이드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9067",
            name: "특별 계약",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9191",
            name: "프레스티지 카드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9038",
            name: "환상 사냥",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9022",
            name: "환상통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9076",
            name: "휴대용 구급상자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9749",
            name: "가시나무 관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9748",
            name: "고초",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "1056",
            name: "날카로운 실과 바늘",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9420",
            name: "만화경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9766",
            name: "묵시적 계약 갱신",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9419",
            name: "생강꽃 가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "2042",
            name: "선불 시간 영수증",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9711",
            name: "슬픈 봉제인형",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9779",
            name: "작전 승인 카드",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9794",
            name: "찰랑이는 연료통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9433",
            name: "치프 버틀러의 비급서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "1054",
            name: "탱고 닭양념장",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9778",
            name: "통상 작전용 장비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9782",
            name: "낡은 칼자루",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9431",
            name: "부서진 바이올린",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9781",
            name: "원목 술잔",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9763",
            name: "포장용 끈",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9761",
            name: "그림자 괴물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9081",
            name: "믿음",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9085",
            name: "비밀 유지 서약서",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9084",
            name: "오래된 조각상",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9082",
            name: "인연 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9752",
            name: "거짓 광배",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9754",
            name: "굴레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9758",
            name: "왕의 잔재",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9780",
            name: "고위험 작전용 장비",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9764",
            name: "선물",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        },
        {
            id: "9083",
            name: "달의 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: [
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                },
                {
                    level: "",
                    formula1: ""
                }
            ]
        }

    ]
};

export default egogiftData;