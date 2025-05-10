import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '앞으로 나아가는 개발자 ',
    '6년차 웹 Front-End, Back-End 개발, 리눅스 서버 관리, DBA 등 다양한 분야에서 일한 경험이 있습니다. 신 기술에 대해 겁내지 않고 열정적으로 받아들이며, 업무 특성상 다양한 팀과 협업하여 프로젝트를 이행하였습니다. ',
    '배움에는 끝이 없지만 항상 최신의 기술이 BEST라고 생각하지 않습니다. 신기술과 Legacy 기술을 조화롭게 사용함을 추구합니다.',
    '기획-설계-개발-테스트-배포-운영/유지보수 단계까지의 모든 과정을 경험했습니다.',
    '항상 사용자 중심의 서비스를 개발하는 것을 목표로 삼고 있습니다. 팀 내외의 원활한 커뮤니케이션에 적극 참여하며, 동료들의 의견을 경청하고 협력하여 문제를 해결하는 데 중점을 둡니다. 지속적인 개선 노력을 통해 사용자 경험을 향상시키고, 더 나은 서비스 제공에 기여하고자 합니다.',
  ],
  sign: 'Hyunbin Lim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
