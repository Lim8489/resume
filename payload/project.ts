import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '블록체인 프로젝트 개발',
      startedAt: '2022-04',
      endedAt: '2022-11',
      where: 'RT7 파트너스',
      descriptions: [
        {
          content: 'simple dao 사이트 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '레딧을 벤치마킹한 web3 프로젝트' },
            { content: '사용자가 web3 wallet 연결 시 아이디 생성 페이지 개발' },
            { content: '각 ID를 식별 사용하여 채널, 부 채널 CRUD' },
            { content: 'Admin 페이지 개발을 통해 사용자 및 게시물 관리' },
          ],
        },
        {
          content: '토큰런칭 사이트 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '새로운 토큰이 런칭했을 때 해당 사이트를 통해 권한이 있는 사용자들이 구입할수 있게 만든 사이트',
            },
            { content: '사용자가 web3 wallet 연결 시 해당 토큰에 구매권한이 있는지 확인' },
            { content: '실시간 가중되는 트래픽을 방지하기 위해 AWS 로드밸런서 사용' },
          ],
        },
      ],
    },
    {
      title: 'AirMap 웹사이트 개발',
      startedAt: '2018-06',
      endedAt: '2019-01',
      where: '케이웨더',
      descriptions: [
        {
          content: '대한민국 공기질(PM10, PM2.5) 데이터 정보 제공사이트',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Google map API를 사용하여 지도페이지 개발' },
            { content: '격자 데이터 추출을 통해 지역별로 클릭이 가능하게 polygon 개발' },
            { content: '실시간(매 분)마다 공기질 TOP 10 지역 표출 전광판 개발' },
            { content: '지역 별 공기질 데이터 팝업 페이지 제공' },
          ],
        },
      ],
    },
    {
      title: '기상데이터 제공 및 유지보수',
      startedAt: '2016-08',
      endedAt: '2022-03',
      where: '케이웨더',
      descriptions: [
        {
          content: '4000여개 회원사에 특화된 맞춤 기상데이터 관리 및 제공',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'FCT,ODAM 등 기상청 데이터 DATABASE 설계 및 관리' },
            {
              content:
                '기상청자료, 케이웨더 내 기상 데이터를 회원사 요청에 따른 기상데이터 제공(xml,json)',
            },
            { content: '서버 내 crontab에 등록하여 자동화' },
          ],
        },
      ],
    },
    {
      title: '케이웨더 DATABASE & SERVER OPERATION',
      startedAt: '2016-08',
      endedAt: '2022-03',
      where: '케이웨더',
      descriptions: [
        {
          content: 'DB 및 서버 문제 발생 시 메세지 보내주는 텔레그램 봇 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'PHP에 telegram 채널,bot key를 받아 문제 발생 시에 bot이 채널에 공유해주는 형식',
            },
            { content: '서버 내 crontab에 등록하여 자동화' },
            { content: '문제 발생 시 신속한 대응에 용이' },
          ],
        },
        {
          content: '서버 운영 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Fandora FMS, Zabbix를 통한 서버 모니터링' },
            { content: '서버 내 crontab에 등록하여 자동화' },
          ],
        },
      ],
    },
  ],
};

export default project;
