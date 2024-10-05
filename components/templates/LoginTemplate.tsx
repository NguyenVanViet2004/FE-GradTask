import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import InputForm from '~/components/molecules/InputForm'
import LinearGradientBackground from '~/components/molecules/LinearGradientBackground'
import TextWithLink from '~/components/molecules/TextWithLink'
import useTranslation from '~/hooks/useTranslation'

const LoginTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleLogin = (): void => {
    router.replace('/(tabs)/home')
  }

  const redirectToSignUp = (): void => {
    router.push('/authentication/SignUp')
  }

  return (
    <LinearGradientBackground>
      <ScrollView showsVerticalScrollIndicator={false} >
        <SafeAreaView style={styles.container}>
          <View marginTop={'13%'}>
            <ContentTitle
              title={t('screens.login.welcomeBack')}
              subtitle={t('screens.login.loginPrompt')}
            />
          </View>

          <View marginTop={'25%'}>
            <InputForm
              visibleInputWithIcons={false}
              visibleForgotPassword={true}
              visibleSpace={true}
              onLoginPress={handleLogin}
              onLoginGooglePress={() => {}}
              positiveButtonTitle={t('screens.login.signIn')}
              negativeButtonTitle={t('screens.login.signInWithGoogle')}
            />
          </View>

          <View marginTop={'25%'} >
            <TextWithLink
              heading={t('screens.login.signupPrompt')}
              linkText={t('screens.login.joinNow')}
              onLinkPress={redirectToSignUp}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
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
