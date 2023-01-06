import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SCREENS } from '~constants';
import { SCHOOL_DETAILS_MOCK } from '~containers/SchoolDetails/MOCK';
import { ISchoolDetails, NavigationProps } from '~types';

const useSchoolCard = () => {
  const [visibilityModal, setVisibilityModal] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  const isAvailableDetailInformation = (id: string) => {
    return SCHOOL_DETAILS_MOCK.find((item: ISchoolDetails) => item.dbn === id);
  };

  const changeVisibilityModal = () => setVisibilityModal(!visibilityModal);

  const goToSchoolDetails = (id: string) => {
    const school = isAvailableDetailInformation(id);

    if (school) {
      navigation.navigate(SCREENS.SCHOOL_DETAILS, { school });
    } else {
      changeVisibilityModal();
    }
  };

  return { goToSchoolDetails, visibilityModal, changeVisibilityModal };
};

export default useSchoolCard;
