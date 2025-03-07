// 이 파일은 프로젝트 루트 폴더에 저장하세요 (package.json과 같은 위치)
const fs = require('fs');
const path = require('path');

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

// dist 폴더에 파일 생성
const filePath = path.resolve(__dirname, './dist/deployTime.js');
fs.writeFileSync(filePath, deployTimeContent);

console.log(`배포 시간 업데이트 완료: ${deployTime}`);