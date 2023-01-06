import { StyleSheet } from 'react-native';
import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets/theme';
import { HEIGHT, WIDTH } from '~constants/dimensions';

export const styles = StyleSheet.create({
  schoolDetailsContainer: {
    paddingHorizontal: ThemeLayouts.padding.l,
    paddingVertical: ThemeLayouts.padding.l,
    backgroundColor: ThemeColors.botticelli,
    flex: 1,
  },
  schoolDetailsTitleName: {
    textAlign: 'center',
    fontSize: ThemeFonts.fontSize.xxxxl,
    fontWeight: ThemeFonts.fontWeight.bold,
  },
  schoolDetailsScores: {
    paddingTop: 30,
  },
  schoolDetailsScoresContainer: {
    paddingVertical: 10,
  },
  schoolDetailsScoreItem: {
    marginVertical: ThemeLayouts.margin.xs,
    paddingHorizontal: ThemeLayouts.padding.l,
    paddingVertical: ThemeLayouts.padding.s,
    borderWidth: ThemeLayouts.borderWidth.default,
    borderRadius: ThemeLayouts.borderRadius.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  schoolDetailsScoreItemText: {
    fontWeight: ThemeFonts.fontWeight.bold,
  },
});

export default styles;
