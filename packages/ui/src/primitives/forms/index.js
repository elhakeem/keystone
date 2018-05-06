// @flow

import React, { type Ref } from 'react';
import ReactSelect from 'react-select';

import { colors, gridSize } from '../../theme';
import { alpha } from '../../theme/color-utils';
export {
  Checkbox,
  CheckboxPrimitive,
  CheckboxGroup,
  Radio,
  RadioPrimitive,
  RadioGroup,
} from './Controls';

const borderRadius = '0.3em';

export const buttonAndInputBase = {
  appearance: 'none',
  background: 'none',
  border: '1px solid transparent',
  borderRadius: borderRadius,
  fontSize: 14,
  lineHeight: '17px',
  margin: 0,
  padding: `${gridSize}px ${gridSize * 1.5}px`,
  transition: 'box-shadow 100ms linear',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

type InputProps = { innerRef: Ref<*>, isMultiline: boolean };
export const Input = ({ innerRef, isMultiline, ...props }: InputProps) => {
  const css = {
    ...buttonAndInputBase,
    backgroundColor: 'white',
    borderColor: colors.N20,
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    color: 'inherit',
    width: '100%',

    ':hover': {
      borderColor: colors.N30,
      outline: 0,
    },
    ':focus': {
      borderColor: colors.primary,
      boxShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 0 3px ${alpha(colors.primary, 0.2)}`,
      outline: 0,
    },
  };
  return isMultiline ? (
    <textarea
      ref={innerRef}
      css={{ ...css, lineHeight: 'inherit', height: 'auto' }}
      {...props}
    />
  ) : (
    <input ref={innerRef} css={css} {...props} />
  );
};

export const selectStyles = {
  control: (base: any, { isFocused }: { isFocused: Boolean }) => ({
    ...base,
    backgroundColor: 'white',
    color: 'inherit',
    borderRadius: '0.3rem',
    borderColor: isFocused ? colors.primary : colors.N20,
    boxShadow: isFocused
      ? `inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 0 3px ${alpha(colors.primary, 0.2)}`
      : 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    fontFamily: 'inherit',
    fontSize: 14,
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.N30,
    },
  }),
  option: (base: any) => ({
    ...base,
    fontSize: 14,
  }),
  singleValue: (base: any) => ({
    ...base,
    color: 'inherit',
    fontSize: 14,
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: 'inherit',
    fontSize: 14,
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    svg: {
      height: '100%',
    },
  }),
};

export const Select = (props: any) => (
  <ReactSelect styles={selectStyles} isClearable {...props} />
);