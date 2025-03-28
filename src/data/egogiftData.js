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
            effectBase: "화상 위력, 화상 횟수, 특수 화상을 부여하는 스킬로 합 승리 시, {{formula}}만큼 대상 적에게 화상 위력 부여",
            effects: [
                {
                    level: "기본",
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
                    level: "기본",
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
                    level: "기본",
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
            upgrade: "yes",
            relatedAbnormality: "불명",
            grade: 1,
            firstAppearance: "폭풍의 거울 (거울 던전 4)",
            effectBase: "아군이 대상보다 정신력이 {{condition}} 이상 높을 경우, 화상 위력 또는 화상 횟수 또는 특수 화상을 부여하는 스킬로 입히는 피해량 {{formula}}%",
            effects: [
                {
                    level: "기본",
                    formula: "+7.5",
                    condition: "30"
                },
                {
                    level: "+",
                    formula: "+12.5",
                    condition: "25"
                },
                {
                    level: "++",
                    formula: "+20",
                    condition: "15"
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
            effectBase: "[편성 {{condition}} 인격 전용 효과] 화상 또는 특수 화상에 걸린 적에게 스킬 효과로 화상 또는 특수 화상을 부여할 경우, 다음 턴에 신속 1 얻음. (스킬 당 1회, 턴당 최대 2회) 신속을 이미 보유한 경우, 효과가 강화되어 신속 {{formula}}, 공격 레벨 증가 2{{formula2}} 얻음 (스킬 당 1회, 턴당 최대 2회)",
            effects: [
                {
                    level: "기본",
                    formula: "1",
                    formula2: "",
                    condition: "1번, 2번"
                },
                {
                    level: "+",
                    formula: "2",
                    formula2: "",
                    condition: "1번, 2번, 3번"
                },
                {
                    level: "++",
                    formula: "2",
                    formula2: ", 피해량 증가 2",
                    condition: "1번, 2번, 3번"
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
            effectBase: "화상 위력 또는 특수 화상을 부여하는 스킬 또는 색욕 속성의 스킬을 사용하여 대상에게 적중 시, 대상에게 화상 위력 {{formula}} 부여. 턴 시작 시 화상 20 이상을 보유한 적의 경우, 화상이 {{formula2}}배로 증가",
            effects: [
                {
                    level: "기본",
                    formula: "3",
                    formula2: "2"
                },
                {
                    level: "+",
                    formula: "4",
                    formula2: "2"
                },
                {
                    level: "++",
                    formula: "4",
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
            effectBase: "화상 또는 특수 화상에 걸린 적에게 스킬 효과로 화상 위력 또는 특수 화상을 부여할 경우, 모든 적에게 화상 위력 {{formula}} 무작위로 나누어 부여. 분노 {{condition}} 공명을 발동하였다면 전투 시작 시, 모든 적에게 화상 위력 {{formula2}} 무작위로 나누어 부여",
            effects: [
                {
                    level: "기본",
                    formula: "3",
                    formula2: "5",
                    condition: "완전"
                },
                {
                    level: "+",
                    formula: "4",
                    formula2: "6",
                    condition: "완전"
                },
                {
                    level: "++",
                    formula: "5",
                    formula2: "8",
                    condition: ""
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
            effectBase: "스테이지 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 {{formula}}, 화상 횟수 {{formula2}} 부여. 나태 {{condition}}을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 {{formula3}}, 화상 횟수 {{formula4}} 부여",
            effects: [
                {
                    level: "기본",
                    formula: "5",
                    formula2: "3",
                    formula3: "3",
                    formula4: "2",
                    condition: "완전 공명"
                },
                {
                    level: "+",
                    formula: "6",
                    formula2: "3",
                    formula3: "4",
                    formula4: "2",
                    condition: "완전 공명"
                },
                {
                    level: "++",
                    formula: "8",
                    formula2: "3",
                    formula3: "4",
                    formula4: "3",
                    condition: "공명"
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
            effectBase: "턴 종료 시, 화상 상태인 적에게 대상이 보유한 화상 횟수의 절반만큼을 소모하여 (화상 위력 × 소모한 화상 횟수 × {{formula}})만큼 추가 분노 피해를 입힘. 불꽃의 편린 효과로 소모한 화상 횟수의 절반만큼, 다음 턴 동안 대상의 방어 레벨 감소 (최대 {{condition}})",
            effects: [
                {
                    level: "기본",
                    formula: "1",
                    condition: "3"
                },
                {
                    level: "+",
                    formula: "1.5",
                    condition: "5"
                },
                {
                    level: "++",
                    formula: "2",
                    condition: "8"
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9109",
            name: "안식처",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9042",
            name: "연기와 철조망",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9160",
            name: "찢어진 피주머니",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9110",
            name: "매혹 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9050",
            name: "붉게 물든 목화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9162",
            name: "출혈성 쇼크",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9031",
            name: "닉시 다이버전스",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9163",
            name: "보석 진동자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9016",
            name: "초록빛 결실",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9114",
            name: "거울 촉각 공감각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9113",
            name: "시큼한 주향",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9086",
            name: "잔향",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9044",
            name: "진동형 팔찌",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9164",
            name: "흔들리는 술통",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9111",
            name: "생체 맹독 바이알",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9091",
            name: "진실의 종",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9115",
            name: "톱니바퀴 태엽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9055",
            name: "폭우",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9092",
            name: "연성진동",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9167",
            name: "무진팔방종",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9013",
            name: "부적 묶음",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9118",
            name: "뼈 말뚝",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9018",
            name: "장미 면류관",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9169",
            name: "가시오랏줄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9047",
            name: "가시 올가미",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9117",
            name: "유연 화약",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9119",
            name: "해진 우산",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9093",
            name: "형광색 램프",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9168",
            name: "종말의 파편",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9023",
            name: "벼락가지",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9120",
            name: "죽음바라기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9121",
            name: "욕망 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9060",
            name: "쾌감",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9094",
            name: "황홀경",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9171",
            name: "파탄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9122",
            name: "고목 함정",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9123",
            name: "넝마",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9074",
            name: "머리 없는 초상화",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9172",
            name: "칸타빌레",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9054",
            name: "녹아내린 시계태엽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9174",
            name: "뒤엉킨 뼛조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9061",
            name: "유골 부스러기",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9124",
            name: "장엄",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9041",
            name: "적색 지령",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9173",
            name: "빛바랜 외투",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9125",
            name: "머나먼 별",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9059",
            name: "한겨울 밤의 악몽",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9065",
            name: "미적 감각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9126",
            name: "잠식 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9176",
            name: "덮칠 파도",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9127",
            name: "데블스 셰어",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9097",
            name: "장식된 편자",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9063",
            name: "추억의 펜던트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9066",
            name: "네뷸라이저",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9051",
            name: "돌무덤",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9046",
            name: "물부리",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9177",
            name: "어느 날의 기억",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9178",
            name: "엔젤스 컷",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9130",
            name: "미련",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9073",
            name: "엔도르핀 키트",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9131",
            name: "교만 조각",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9070",
            name: "명경지수",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
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
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9180",
            name: "캐스크 스피리츠",
            upgrade: "",
            relatedAbnormality: "",
            grade: "",
            firstAppearance: "",
            effectBase: "",
            effects: []
        },
        {
            id: "9711",
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
            id: "9069",
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
            id: "9062",
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
            id: "9133",
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
            id: "9182",
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
            id: "9043",
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
            id: "9134",
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
            id: "9057",
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
            id: "9052",
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
            id: "9181",
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
            id: "9736",
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
            id: "9737",
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
            id: "9738",
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
            id: "9745",
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
            id: "9135",
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
            id: "9099",
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
            id: "9072",
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
            id: "9735",
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
            id: "9734",
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
            id: "9183",
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
            id: "9136",
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
            id: "9075",
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
            id: "9100",
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
            id: "9184",
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
            id: "9741",
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
            id: "9742",
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
            id: "9740",
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
            id: "9743",
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