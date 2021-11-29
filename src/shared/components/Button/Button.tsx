import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { Button as ButtonType } from 'react-native-paper/lib/typescript/index';
import theme from 'shared/config/theme/default';

const styles = StyleSheet.create({
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
});

type ButtonProps = typeof ButtonType.propTypes & {
  children: React.ReactElement;
};

const Button = (props: ButtonProps & any) => {
  const { mode, icon, children } = props;

  return (
    <BaseButton
      icon={icon}
      mode={mode}
      style={mode === 'outlined' ? styles.button : mode}
      {...(props as any)}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  mode: 'outlined' || 'contained' || 'text',
};

export default Button;
