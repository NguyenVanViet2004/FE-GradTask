import { isNil } from 'lodash'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Input, type InputProps, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  iconRight?: JSX.Element
  iconLeft?: JSX.Element
} & InputProps

const InputWithIcons: React.FC<Props> = (props: Props) => {
  const colors = getColors(useColorScheme())
  const [isFocused, setIsFocused] = useState(false)

  const inputContainerStyle = {
    backgroundColor: isFocused ? colors.white : colors.lightMist,
    borderColor: isFocused ? colors.primaryTeal : colors.lightMist,
    borderWidth: isFocused ? 1 : 0
  }

  return (
    <XStack
      alignItems="center"
      borderRadius={10}
      paddingHorizontal={24}
      style={inputContainerStyle}

    >
      {!isNil(props.iconRight) && props.iconRight}

      <Input
        {...props}
        unstyled
        marginHorizontal={18}
        height={54}
        fontSize={16}
        color={'#156778'}
        flex={1}
        onFocus={() => { setIsFocused(true) }}
        onBlur={() => { setIsFocused(false) }}
      />

      {!isNil(props.iconLeft) && props.iconLeft}
    </XStack>
  )
}

export default InputWithIcons
