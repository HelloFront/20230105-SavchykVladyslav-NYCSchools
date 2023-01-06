import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { RootStackParamsList } from '~types';
import { SCREENS } from '~constants';
import styles from './styles';

const SchoolDetailsView = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamsList, SCREENS.SCHOOL_DETAILS>>();
  const [selectedSchool, _] = useState(params?.school);

  const { quantityTests, writing, reading, math } = useMemo(
    () => ({
      quantityTests: selectedSchool?.num_of_sat_test_takers,
      writing: selectedSchool?.sat_writing_avg_score,
      reading: selectedSchool?.sat_critical_reading_avg_score,
      math: selectedSchool?.sat_math_avg_score,
    }),
    [selectedSchool],
  );

  return (
    <View style={styles.schoolDetailsContainer}>
      <Text>School name:</Text>
      <Text style={styles.schoolDetailsTitleName}>
        {selectedSchool?.school_name}
      </Text>

      <Text style={styles.schoolDetailsScores}>Scores:</Text>

      <View style={styles.schoolDetailsScoresContainer}>
        <View style={styles.schoolDetailsScoreItem}>
          <Text>Quantity tests: </Text>
          <Text style={styles.schoolDetailsScoreItemText}>{quantityTests}</Text>
        </View>
        <View style={styles.schoolDetailsScoreItem}>
          <Text>Writing: </Text>
          <Text style={styles.schoolDetailsScoreItemText}>{writing}</Text>
        </View>

        <View style={styles.schoolDetailsScoreItem}>
          <Text>Math: </Text>
          <Text style={styles.schoolDetailsScoreItemText}>{math}</Text>
        </View>
        <View style={styles.schoolDetailsScoreItem}>
          <Text>Reading: </Text>
          <Text style={styles.schoolDetailsScoreItemText}>{reading}</Text>
        </View>
      </View>
    </View>
  );
};

export default SchoolDetailsView;
