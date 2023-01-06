import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SCREENS } from '~constants';
import { ISchoolDetails } from '~types/school';

export type RootStackParamsList = {
  [SCREENS.SCHOOLS]: { hideBackButton?: boolean; rightBtnLabel?: string };
  [SCREENS.SCHOOL_DETAILS]: {
    hideBackButton?: boolean;
    rightBtnLabel?: string;
    school: ISchoolDetails;
  };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;
