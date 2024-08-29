import { ROUTES } from '../routes/constants';

export const sidebarData = [
  {
    label: 'Dashboard',
    icon: '/assets/dashboardIcon.svg',
    route: ROUTES.HOME,
  },
  {
    label: 'My Links',
    icon: '/assets/linkIcon.svg',
    route: ROUTES.MY_LINKS,
  },
  {
    label: 'Bulk Upload',
    icon: '/assets/uploadIcon.svg',
    route: ROUTES.BULK_UPLOAD,
  },
  {
    label: 'Analytics',
    icon: '/assets/analyticsIcon.svg',
    route: ROUTES.ANALYTICS,
  },
  {
    label:'User Management',
    icon:'/assets/users.svg',
    route:ROUTES.USER_MANAGEMENT,
  },
  {
    label:'Compaign',
    icon:'/assets/compaignIcon.svg',
    route:undefined
  }
];

export const COUNTRIES = [{ name: 'EN' }, { name: 'FR' }, { name: 'ES' }];
