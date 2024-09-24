import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import Footer from '~/components/molecules/common/Footer'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const LoginTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.white }]}>

      <View marginTop={30}>
        <ContentTitle
          title={t('screens.login.welcomeBack')}
          subtitle={t('screens.login.loginPrompt')}
        />
      </View>

      <View justifyContent="center" marginTop={20}>
        <InputForm
          visibleInputWithIcons={false}
          visibleForgotPassword={true}

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
    gap: 20,
    flex: 1,
    padding: 20
  }
})

export default LoginTemplate
