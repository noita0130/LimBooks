const d=[{id:"get_10910_1",desc:"인격 획득",dlg:"후우… 쉴 만큼 쉬었으니까, 다시 가볼까? 다들, 옷 단단히 여미고~"},{id:"lobby_morning_10910_1",desc:"아침 인사",dlg:`으으, 이 지방은 해가 떠도 너무 춥단 말이지… 야영하다가 죽는 거 아닌가 싶어.
뭐, 진짜 죽을 것 같이 체온이 내려가면 가방이 알아서 온열기능을 켜버리겠지만…`},{id:"lobby_noon_10910_1",desc:"점심 인사",dlg:"자, 체크포인트 17까지 왔네… 으~ 오늘 점심은 여기서 먹자구. 매번 걸으면서 에너지바로 처리하는 것도 지겹잖아? 플루, 가방 열어."},{id:"lobby_night_10910_1",desc:"저녁 인사",dlg:`해 떨어지면 빨리 잘 준비를 해야 해. 지반도 좀 다져놓고…
저번에도 배달 시간이 살짝 촉박해서 밤까지 움직였다가, 크레바스에 빠져서 죽을 뻔했다니까?`},{id:"smalltalk_10910_1",desc:"대화 1",dlg:`배달일이 재밌어서 하는 건 아니지. 뭐, 처음엔 로망도 있고 그러긴 했지만…
아, 그래도 돌아다니면서 바뀌는 풍경을 보는 건 아직도 즐겁긴 해.`},{id:"smalltalk_10910_2",desc:"대화 2",dlg:"이 가방에는 뭐든지 들어간다구~ 물론 한도가 있긴 하지만… 그래도 아무리 무거운 걸 넣더라도 가방의 무게가 바뀌지 않는다는 건 장점이지! <color=#9eada4><size=60%><i>[주의. 허가된 배달품 외의 물품 보관은-]</i></size></color> 에헤이~ 플루, 쉿?"},{id:"smalltalk_10910_3",desc:"대화 3",dlg:"아… 이 가방? 개인용으로 새거가 지급되고 그러는 건 아니고. 글쎄~ 이게 몇 대째 물건일까… 배달 나갔다가 죽어버린 사람의 가방을 회수해서 쓰고, 또 쓰고… 그러는 거거든. 하하."},{id:"smalltalk_10910_4",desc:"동기화 후 대화 1",dlg:"좋아~ 이 정도면 금방 처리하고 떠날 수 있겠다. 너희들도 밍기적거리지 말고! 괜히 배달비 삭감된다고 나중에 툴툴대지 말고~"},{id:"smalltalk_10910_5",desc:"동기화 후 대화 2",dlg:"아우 무거워… 남부 애들은 수트케이스 같은 걸 갖고 다닌다던데, 우리는 왜 이렇게 무거운 걸 쓰나 몰라… 한 번 휘두를 때마다 어깨가 빠질 것 같단 말이야."},{id:"neglect_10910_1",desc:"방치",dlg:"후우… 요 근처에 육포를 숨겨뒀던 것 같은데… <color=#9eada4><size=60%><i>[배달 좌표 이외에서의 잠금 해제를 확인]</i></size></color> 앗, 기록 삭제 버튼이 어디 있더라?! <color=#9eada4><size=60%><i>[권한 없음]</i></size></color>"},{id:"gacksung_10910_1",desc:"동기화 진행",dlg:"딜리버리 캐리어 작동 1단계… 자, 3단계까지 가기 전에 끝낸다!"},{id:"formation_10910_1",desc:"인격 편성 1",dlg:"일 들어왔네… 플루, 가볼까? <color=#9eada4><size=60%><i>[기동음]</i></size></color>"},{id:"formation_10910_2",desc:"인격 편성 2",dlg:"이번 플루드니차는 재미없긴 해도 착실한 것 같네~"},{id:"battleentry_10910_1",desc:"입장",dlg:"늦겠다, 뛰자!"},{id:"battle_select_10910_1",desc:"전투 중 인격 선택",dlg:"이따가 얘기해. 배달 시간 끌면 위험해서."},{id:"battle_endcommand_10910_1",desc:"공격 시작",dlg:"길 좀 막지 마!"},{id:"battle_enemy_break_10910_1",desc:"적 흐트러질 시 대사",dlg:"시간 끌지 말고…"},{id:"battle_break_10910_1",desc:"흐트러질 시 대사",dlg:"윽…"},{id:"battle_kill_10910_1",desc:"적 처치",dlg:"길에서 비켜!"},{id:"battle_dead_10910_1",desc:"본인 사망 1",dlg:"아… 이렇게 나도 가방만… 남기게 되나…"},{id:"battle_dead_10910_2",desc:"본인 사망 2",dlg:"아, 안돼! 여기서 금방 벗어날 테니까 <color=#9eada4><size=60%><i>[가방 작동]</i></size></color>"},{id:"choice_success_p_10910_2",desc:"선택지 성공",dlg:"자, 됐지? 시간 없는데 이런걸 시켜…"},{id:"choice_fail_n_10910_1",desc:"선택지 실패",dlg:"아… 이런 거 잘 못하는데, 시간만 뺏고 말이야…"},{id:"battle_clear_10910_1",desc:"전투 승리",dlg:"생각보다 시간을 너무 썼는데… 뭐, 배달 가방에 먹히는 것보단 낫지. 자, 바로 뛴다!"},{id:"battle_clear_ex_10910_1",desc:"EX CLEAR 전투 승리",dlg:"음~ 여유로웠어. 아예 여기서 밥 좀 먹다가 출발해도 될 것 같은데? 다들 식량 꺼내!"},{id:"battle_defeat_10910_1",desc:"전투 패배",dlg:"…빨리, 빨리 다시 싸워야 해. 이러다가 진짜… 배달을… 못 마칠지도 몰라… 그렇게 되면…"}],e={dataList:d};export{d as dataList,e as default};
