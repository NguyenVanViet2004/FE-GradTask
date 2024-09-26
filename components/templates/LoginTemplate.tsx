import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import LinearGradientBackground from '~/components/molecules/LinearGradientBackground'
import InputForm from '~/components/molecules/InputForm'
import TextWithLink from '~/components/molecules/TextWithLink'
import useTranslation from '~/hooks/useTranslation'

const LoginTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const router = useRouter()

  const ButtonLogin = (): void => {
    router.replace('/(tabs)/home')
  }

  return (
    <LinearGradientBackground>

      <SafeAreaView
        style={styles.container}>

        <View marginTop={50}>
          <ContentTitle
            title={t('screens.login.welcomeBack')}
            subtitle={t('screens.login.loginPrompt')}
          />
        </View>

        <View marginTop={'25%'}>
          <InputForm
            visibleInputWithIcons={false}
            visibleForgotPassword={true}
            visibleSeparator={true}
            onLoginPress={ButtonLogin}
            onLoginGooglePress={ButtonLogin}
          />
        </View>

        <View flex={1} justifyContent="center" >
          <TextWithLink
            heading={t('screens.login.signupPrompt')}
            linkText={t('screens.login.joinNow')}
          />
        </View>

      </SafeAreaView>

    </LinearGradientBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})

export default LoginTemplate
