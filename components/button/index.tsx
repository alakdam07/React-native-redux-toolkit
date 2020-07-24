import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';


const appearances = {
  "primary": css`
    background-color: #845EC2;
    border-color: #845EC2;
  `,
  "secondary": css`
    background-color: red;
    border-color: red;
  `,
  "warning": css`
    background-color: grey;
    border-color: grey;
  `
};

const buttonSizes = {
  "small": `
    height: 34px;
  `,
  "medium": `
    height: 42px;
  `,
  "large": `
    width: 48px;
    height: 48px;
  `
};

const textColors = {
  "primary": css`
    color:  white;
  `,
  "secondary": css`
    color: white;
  `,
  "warning": css`
    color:  white;
  `
};

const textSizes = {
  "small": `
    font-size: 13px;
    font-weight: 500;
  `,
  "medium": `
    font-size: 15px;
    font-weight: 600;
  `,
  "large": `
    font-size: 16px;
    font-weight: 700;
  `
};

const ButtonContainer = styled.TouchableOpacity<{
  appearance: IButton["appearance"];
  size: IButton["size"];
}>`
  border-width: 2px;
  border-color: transparent;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  ${({ appearance }) => appearances[appearance]}
  ${({ size }) => buttonSizes[size]}
`;

const Label = styled.Text<{
  appearance: IButton["appearance"];
  size: IButton["size"];
}>`
  font-weight: 700;
  ${({ appearance }) => textColors[appearance]}
  ${({ size }) => textSizes[size]}
`;

export interface IButton {
  appearance?: "primary" | "secondary" | "warning";
  size?: "small" | "medium" | "large";
  children?: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  onPress?: () => void;
}

const Button = ({
  appearance = `primary`,
  size = `medium`,
  children,
  disabled,
  loading,
  style,
  onPress,
  className }: IButton) => {


  return (
    <View style={disabled ? { "opacity": .5 } : null}>
      <ButtonContainer
        className={className}
        onPress={onPress}
        style={style}
        disabled={disabled || loading}
        {...{ appearance, size }}
      >
        {loading ?
          <ActivityIndicator
            size="small"

          /> :
          <Label {...{ appearance, size }}>{children}</Label>
        }
      </ButtonContainer>
    </View>
  );
};

export default Button;
