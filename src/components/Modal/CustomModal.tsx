import React from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import Modal from 'react-native-modal/dist/modal';

import styles from './styles';
import { ThemeColors } from '~assets';

interface IProps {
  isVisible: boolean;
  close: (event?: GestureResponderEvent) => void;
  action?: (event: GestureResponderEvent) => void;
  icon?: JSX.Element;
  text?: string;
  textClose: string;
  textAction?: string;
  withButtons?: boolean;
  modalHeight?: number;
  withOneButton?: boolean;
  customTextComponent?: JSX.Element | null;
  children?: JSX.Element;
}

const CustomModal = ({
  isVisible,
  close,
  action,
  text,
  textClose,
  textAction,
  withButtons = true,
  modalHeight,
  withOneButton = false,
  customTextComponent,
  children,
}: IProps) => {
  const keyboardOffset = Platform.select({ ios: 0, android: -1000 });

  const onBackdropPress = () => close();

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={onBackdropPress}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardOffset}
        behavior="position"
        style={styles.centeredView}
        contentContainerStyle={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            !withButtons &&
              styles.withoutButtons &&
              !withOneButton &&
              styles.withoutButtons,
            modalHeight ? { height: modalHeight } : null,
          ]}>
          <View style={styles.wrapper}>
            <View style={styles.textWrapper}>
              {!text && customTextComponent && customTextComponent}
              {!customTextComponent && !!text && (
                <Text style={styles.modalText}>{text}</Text>
              )}
            </View>
            {children}

            {withOneButton && (
              <View style={styles.buttonOneWrapper}>
                <View style={styles.buttonContainer}>
                  <Button
                    color={ThemeColors.white}
                    title={textClose}
                    onPress={action}>
                    {textAction}
                  </Button>
                </View>
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomModal;
