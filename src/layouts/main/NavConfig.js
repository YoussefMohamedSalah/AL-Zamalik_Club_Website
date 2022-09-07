// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'الرئيسية',
    path: '/',
    icon: getIcon('eva:home-outline'),
  },

  {
    title: 'الأخبار',
    path: '/news',
    icon: getIcon('wpf:news'),
  },
  {
    title: 'تاريخ النادي',
    path: '/history',
    icon: getIcon('ant-design:history-outlined'),
  },
  {
    title: 'جدول المباريات',
    path: '/',
    icon: getIcon('akar-icons:schedule'),
  },
  {
    title: 'فريق العمل',
    path: '/team',
    icon: getIcon('fluent:people-team-16-regular'),
  },
];

export default navConfig;
