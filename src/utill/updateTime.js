// src/utill/updateDeployTime.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 획득
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 현재 시간을 가져옵니다
const now = new Date();
const deployTime = now.toLocaleString('ko-KR', { 
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

// 배포 시간을 저장할 파일 생성
const deployTimeContent = `// 이 파일은 자동 생성됩니다. 수정하지 마세요.
export const DEPLOY_TIME = "${deployTime}";
`;

// 상대 경로를 계산합니다. src/utill에서 dist로 가기 위해 ../../dist로 이동합니다.
const filePath = path.resolve(__dirname, '../../dist/deployTime.js');
fs.writeFileSync(filePath, deployTimeContent);

console.log(`배포 시간 업데이트 완료: ${deployTime}`);