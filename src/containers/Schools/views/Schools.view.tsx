import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { CustomModal } from '~components';
import { useSchoolCard } from '../hooks';
import { SCHOOLS_MOCK } from '../MOCK';
import { styles } from './styles';
import { ISchool } from '~types';

const SchoolsView = () => {
  const { goToSchoolDetails, visibilityModal, changeVisibilityModal } =
    useSchoolCard();

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.scrollViewContentContainer}>
      {SCHOOLS_MOCK.map((school: ISchool) => {
        return (
          <Pressable
            key={school.dbn}
            style={styles.schoolCard}
            onPress={() => goToSchoolDetails(school.dbn)}>
            <Text style={styles.schoolName}>{school.school_name}</Text>
            <Text style={styles.schoolCity}>{school.city}</Text>
          </Pressable>
        );
      })}

      <CustomModal
        close={changeVisibilityModal}
        action={changeVisibilityModal}
        withOneButton
        textClose={'Close'}
        isVisible={visibilityModal}
        text={'Details is not available'}
      />
    </ScrollView>
  );
};

export default SchoolsView;
