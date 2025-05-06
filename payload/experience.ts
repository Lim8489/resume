import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '알티세븐파트너스',
      positions: [
        {
          title: '웹,EVM 개발자',
          startedAt: '2022-04',
          endedAt: '2022-12',
          descriptions: [
            '블록체인 프로젝트 스타트업 (5~10명, 개발팀 1~3명)',
            '해당 프로젝트 웹사이트(Web3) 개발 및 유지보수',
            'evm Contract Dev & Transaction Test',
            'Development Project Management',
          ],
          skillKeywords: [
            'PHP',
            'JavaScript',
            'TypeScript',
            'HTML/CSS',
            'AWS',
            'MYSQL',
            'Solidity',
            'Truffle',
            'Hardhat',
          ],
        },
      ],
    },
    {
      title: '케이웨더',
      positions: [
        {
          title: '운영개발팀 웹,서버 개발자',
          startedAt: '2016-08',
          endedAt: '2022-03',
          descriptions: [
            '날씨정보 IT 서비스 기업 (50~100명, 개발팀 5~8명)',
            '호스팅 서비스 및 홈페이지 관리 및 개발 ',
            '리눅스 서버 관리 및 트러블 슈팅',
            '날씨 데이터 Raw Data(txt,Json,XML) 제공 자동화 프로그램 개발',
            '날씨 앱/웹에 필요한 데이터 모델링 및 RESTful API 개발',
            'KLOS, TWS(잔디관리프로그램) 개발 및 유지보수',
            'Borealis(기상 이미지 렌더링 프로그램) 유지보수',
            '수천만 날씨데이터 데이터베이스(MYSQL,ORACLE) 설계 및 운영',
          ],
          skillKeywords: [
            'PHP',
            'JavaScript',
            'HTML/CSS',
            'Linux',
            'MYSQL',
            'MSSQL',
            'ORACLE',
            'JAVA',
            'CORS',
            'RestFUL API',
            'Security',
            'Automation',
          ],
        },
      ],
    },
    // {
    //   title: 'Ls 산전',
    //   positions: [
    //     {
    //       title: 'HMI 연구팀(파견직)',
    //       startedAt: '2015-01',
    //       endedAt: '2015-08',
    //       descriptions: [
    //         'SW(XP-BUILER, XP-REMOTE, XP-MANAGER) 테스트',
    //         'HW(HMI, PLC) 테스트',
    //         '시험기준서 작성, 도움말 웹 수정',
    //       ],
    //       skillKeywords: ['HTML', 'CSS'],
    //     },
    //   ],
    // },
  ],
};

export default experience;
