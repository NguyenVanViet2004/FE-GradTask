import { useColorScheme } from 'react-native'
import { Button, type ButtonProps, Text } from 'tamagui'

import getColors from '~/constants/Colors'
import { RADIUS_BUTTON } from '~/constants/Constants'
import { useAppFonts } from '~/hooks/useAppFonts'

type Props = {
  title: string
  onPress?: () => void
} & ButtonProps
const PrimaryButton = (props: Props): React.ReactElement => {
  const { fonts } = useAppFonts()
  const colors = getColors(useColorScheme())
  return (
    <Button
      borderRadius={RADIUS_BUTTON}
      alignItems="center"
      onPress={props.onPress}
    >
      <Text
        color={colors.blueSapphire}
        fontFamily={fonts.JetBrainsMonoBold}
        fontSize={16}>
        {props.title}
      </Text>
    </Button>
  )
}

export default PrimaryButton
