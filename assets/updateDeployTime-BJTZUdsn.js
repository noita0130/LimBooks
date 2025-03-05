const o={},t=new Date,e=t.toLocaleString("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),i=`// 이 파일은 자동 생성됩니다. 수정하지 마세요.
export const DEPLOY_TIME = "${e}";
`,n=o.resolve(process.cwd(),"dist"),s=o.join(n,"deployTime.js");o.writeFileSync(s,i);console.log(`배포 시간 업데이트 완료: ${e}`);
