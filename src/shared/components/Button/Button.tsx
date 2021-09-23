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
  children: React.ReactNode;
  [prop: string]: any;
};

function Button({ mode, icon, children, ...props }: ButtonProps & any) {
  return (
    <BaseButton icon={icon} mode={mode} style={styles.button} {...props}>
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  mode: 'outlined',
};

export default Button;
