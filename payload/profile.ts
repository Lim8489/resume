import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

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
      link: 'https://github.com/kimchiPPower',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title:
      "04/07 기억하겠다..",
    icon: faBell,
  },
};

export default profile;
