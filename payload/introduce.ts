import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '앞으로 나아가는 개발자 ',
    '7년차 웹 Front-End, Back-End 개발, 리눅스 서버 관리, DBA 등 다양한 분야에서 일한 경험이 있습니다. 신 기술에 대해 겁내지 않고 열정적으로 받아들이며, 업무 특성상 다양한 팀과 협업하여 프로젝트를 이행하였습니다. ',
    '배움에는 끝이 없지만 항상 최신의 기술이 BEST라고 생각하지 않습니다. 신기술과 Regacy 기술을 조화롭게 사용합니다.'    
  ],
  sign: 'Hyunbin Lim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
