import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '학점은행제',
      subTitle: '컴퓨터공학 학사 졸업',
      startedAt: '2018-03',
      endedAt: '2019-02',
    },
    {
      title: '대림대학교',
      subTitle: '컴퓨터소프트웨어(중퇴)',
      startedAt: '2013-03',
      endedAt: '2017-06',
    },
    {
      title: '시흥고등학교',
      subTitle: '졸업',
      startedAt: '2011-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
