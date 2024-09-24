import React from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, View, YStack } from 'tamagui'

import { PositiveButton } from '~/components/atoms/PositiveButton'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

import { NegativeButton } from '../atoms/NegativeButton'

interface Props {
  onLoginPress?: () => void
  onLoginGooglePress?: () => void
}

const AuthButtonsGroup: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  return (
    <YStack gap={20}>
      <PositiveButton
        onPress={props.onLoginPress}
        title={t('screens.login.signIn')}/>

      <View flexDirection="row" alignItems="center" justifyContent="center">
        <View borderWidth={0.5} flex={1} borderColor={colors.slateGray} />

        <Text marginHorizontal={20} color={colors.slateGray} >or</Text>

        <View borderWidth={0.5} flex={1} borderColor={colors.slateGray} />
      </View>

      <NegativeButton
        onPress={props.onLoginGooglePress}
        title={t('screens.login.signInWithGoogle')}
        icon={
          <Image src={require('~/assets/images/iconGoogle.png')} />
        }
      />
    </YStack>
  )
}

export default AuthButtonsGroup
