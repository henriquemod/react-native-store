/* eslint-disable react/display-name */
import * as React from 'react'
import {
  TextInput as RNTextInput,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  type TextInputProps,
} from 'react-native'

import { appColors } from 'src/presentation/style'
import fixedValues from 'src/presentation/style/fixed-values'

export namespace NTextInput {
  export interface Props extends TextInputProps {}
}

const TextInput = React.forwardRef<RNTextInput, NTextInput.Props>(
  (props: NTextInput.Props, ref) => {
    const [value, setValue] = React.useState('')

    const handleChangeTextInputBase = (
      e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
      setValue(e.nativeEvent.text)
    }

    return (
      <RNTextInput
        ref={ref}
        style={{
          width: '100%',
          height: 40,
          borderColor: appColors.gray,
          borderWidth: 1,
          borderRadius: fixedValues.borderRadius,
        }}
        value={value}
        onChange={handleChangeTextInputBase}
        {...props}
      />
    )
  },
)

export default TextInput
