import { ThemeColors, ThemeLayouts, ThemeFonts } from '~assets/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: ThemeColors.white,
  },
  scrollViewContentContainer: {
    marginTop: ThemeLayouts.margin.l,
  },
  schoolCard: {
    paddingVertical: ThemeLayouts.padding.xxxxl,
    paddingHorizontal: ThemeLayouts.padding.xxxxl,
    borderWidth: ThemeLayouts.borderWidth.default,
    borderRadius: ThemeLayouts.borderRadius.default,
    marginVertical: ThemeLayouts.margin.xs,
    marginHorizontal: ThemeLayouts.margin.l,
    backgroundColor: ThemeColors.backgroundBlue,
  },
  schoolName: {
    fontSize: ThemeFonts.fontSize.xxxxl,
  },
  schoolCity: {
    fontWeight: ThemeFonts.fontWeight.bold,
    paddingTop: ThemeLayouts.padding.xxxxl,
  },
});
