import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets/theme';
import { WIDTH } from '~constants/dimensions';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  centeredView: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonOneWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: WIDTH,
    height: 185,
  },
  wrapper: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    borderTopLeftRadius: ThemeLayouts.borderRadius.xl,
    borderTopRightRadius: ThemeLayouts.borderRadius.xl,
  },
  withoutButtons: {
    height: 100,
  },
  buttonContainer: {
    width: 240,
    backgroundColor: ThemeColors.darkBlue,
    borderRadius: ThemeLayouts.borderRadius.default,
  },
  textWrapper: {
    marginBottom: ThemeLayouts.margin.xxxl,
    marginTop: 44,
    alignItems: 'center',
  },
  modalText: {
    fontWeight: ThemeFonts.fontWeight.medium,
    fontSize: ThemeFonts.fontSize.xxxl,
    textAlign: 'center',
    color: ThemeColors.darkBlue,
    width: '80%',
    minHeight: 42,
  },
});

export default styles;
