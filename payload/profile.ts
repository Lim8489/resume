import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/hyunbinlim.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '임현빈',
    small: '(Hyunbin Lim)',
  },
  contact: [
    {
      title: 'hyunbin8489@gmail.com',
      link: 'mailto:hyunbin8489@gmail.com',
      icon: faEnvelope,
    },
    {
      // title: '010-7490-8486',
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/lim8489',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '안녕하세요! 저는 6년차 개발자 임현빈입니다.',
    icon: faBell,
  },
};

export default profile;
