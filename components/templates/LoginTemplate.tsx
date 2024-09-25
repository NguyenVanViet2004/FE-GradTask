import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import AuthButtonsGroup from '~/components/molecules/AuthButtonsGroup'
import Footer from '~/components/molecules/common/Footer'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const LoginTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  const ButtonLogin = (): void => {
    router.replace('/(tabs)/home')
  }

  return (
    <SafeAreaView
      style={[styles.container,
        { backgroundColor: colors.backGround }]}>

      <View gap={100} marginTop={30}>
        <ContentTitle
          title={t('screens.login.welcomeBack')}
          subtitle={t('screens.login.loginPrompt')}
        />

        <InputForm
          visibleInputWithIcons={false}
          visibleForgotPassword={true}
        />

        <AuthButtonsGroup
          onLoginPress={ButtonLogin}
          onLoginGooglePress={ButtonLogin}
        />
      </View>

      <View flex={1} justifyContent="flex-end" >
        <Footer
          title={t('screens.login.signupPrompt')}
          subtitle={t('screens.login.joinNow')}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20
  }
})

export default LoginTemplate
