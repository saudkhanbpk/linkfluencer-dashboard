import { ROUTES } from '../routes/constants';

export const sidebarData = [
  {
    label: 'Dashboard',
    icon: '/assets/dashboardIcon.svg',
    route: ROUTES.HOME,
    type:['influencer', 'brand']
  },
  {
    label: 'My Links',
    icon: '/assets/linkIcon.svg',
    route: ROUTES.MY_LINKS,
    type:['influencer', 'brand']
  },
  {
    label: 'Bulk Upload',
    icon: '/assets/uploadIcon.svg',
    route: ROUTES.BULK_UPLOAD,
    type:['influencer', 'brand']
  },
  {
    label: 'Analytics',
    icon: '/assets/analyticsIcon.svg',
    route: ROUTES.ANALYTICS,
    type:['influencer', 'brand']
  },
  {
    label: 'User Management',
    icon: '/assets/users.svg',
    route: ROUTES.USER_MANAGEMENT,
    type:['brand']
  },
  {
    label: 'Campaign',
    icon: '/assets/compaignIcon.svg',
    type:['influencer', 'brand'],
    route: undefined,
  },
  
];

export const COUNTRIES = [{ name: 'EN' }, { name: 'FR' }, { name: 'ES' }];
