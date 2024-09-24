import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'
import { RADIUS_BUTTON } from '~/constants/Constants'

type Props = {
  title: string
  onPress?: () => void
} & ButtonProps
const PrimaryButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      fontWeight={'bold'}
      fontSize={16}
      borderRadius={RADIUS_BUTTON}
      alignItems="center"
      onPress={props.onPress}
      color={colors.blueSapphire}>
      {props.title}
    </Button>
  )
}

export default PrimaryButton
