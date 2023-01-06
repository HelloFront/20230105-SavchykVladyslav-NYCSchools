import { ThemeColors, ThemeLayouts } from '~assets/theme';

export const styleOptions = () => {
  return {
    headerStyle: {
      backgroundColor: ThemeColors.bayouxBlue,
      borderBottomWidth: ThemeLayouts.borderWidth.default,
      borderBottomColor: ThemeColors.black,
    },
    headerBackTitleVisible: false
  };
};
