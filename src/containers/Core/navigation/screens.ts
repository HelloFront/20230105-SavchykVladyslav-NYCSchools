import { SCREENS } from '~constants';
import { SchoolDetailsView, SchoolsView } from '~containers';

export const AppScreens = [
  {
    name: SCREENS.SCHOOLS,
    component: SchoolsView,
  },
  {
    name: SCREENS.SCHOOL_DETAILS,
    component: SchoolDetailsView,
  },
];
