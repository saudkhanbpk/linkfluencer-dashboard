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
];

export const COUNTRIES = [{ name: 'EN' }, { name: 'FR' }, { name: 'ES' }];
