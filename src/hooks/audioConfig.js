/**
 * 오디오 관련 상수 및 설정값
 */

// 오디오 기본 경로 - 사용하는 경로를 여기서 중앙 관리
export const AUDIO_PATHS = {
    PERSONALITY: 'https://cdn.jsdelivr.net/gh/noita0130/LimbusVoice@master/personalityVoice',

    EGO: 'https://cdn.jsdelivr.net/gh/noita0130/LimbusVoice@master/personalityVoice',
    
    ANNOUNCER: 'https://cdn.jsdelivr.net/gh/noita0130/LimbusVoice@master/announcer'
  };
  
  // 기본 볼륨 설정
  export const DEFAULT_VOLUME = 0.7;
  
  // 볼륨 저장소 키
  export const VOLUME_STORAGE_KEY = 'voicePlayerVolume';
  
  // 오디오 확장자
  export const AUDIO_EXTENSION = 'wav';