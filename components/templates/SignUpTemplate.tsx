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

const SignUpTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleSignUp = (): void => {
    router.replace('/(tabs)/home')
  }

  const redirectToLogin = (): void => {
    router.back()
  }

  return (
    <LinearGradientBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View marginTop={'13%'}>
            <ContentTitle
              title={t('screens.signUp.createAnAccount')}
              subtitle={t('screens.signUp.signUpPrompt')}
            />
          </View>

          <View marginTop={'15%'}>
            <InputForm
              visibleInputWithIcons={true}
              visibleForgotPassword={false}
              visibleSpace={false}
              onLoginPress={handleSignUp}
              onLoginGooglePress={handleSignUp}
              positiveButtonTitle={t('screens.login.joinNow')}
              negativeButtonTitle={t('screens.signUp.joinWithGoogle')}
            />
          </View>
          <View marginTop={'18%'} >
            <TextWithLink
              heading={t('screens.signUp.alreadyHaveAnAccount')}
              linkText={t('screens.login.signIn')}
              onLinkPress={redirectToLogin}
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

export default SignUpTemplate
