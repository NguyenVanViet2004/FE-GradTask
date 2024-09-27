import { Mail, Phone } from '@tamagui/lucide-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TamaguiProvider, YStack } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import InputWithIcons from '~/components/atoms/InputWithIcons'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import { TextTitle } from '~/components/atoms/TextTitle'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'
import config from '~/tamagui.config'

const ForgotTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colorScheme = useColorScheme()
  const colors = getColors(colorScheme)
  const [isPhoneEmail, setIsPhoneEmail] = useState<boolean>(true)

  const toggleMailPhone = (): void => {
    setIsPhoneEmail(!isPhoneEmail)
  }

  const IconVisibleForgot = isPhoneEmail
    ? <Mail size={16} color={colors.primaryTeal} />
    : <Phone size={16} color={colors.primaryTeal} />

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={colorScheme === 'dark'
            ? colors.colorDarkModeTop
            : colors.white}
        />

        {colorScheme === 'dark'
          ? (
            <LinearGradient
              colors={[colors.colorDarkModeTop, colors.colorDarkModeBottom]}
              style={styles.flex}
            >
              <YStack gap="$10" mt="$3" px="$4" marginTop="$space.12">
                <ContentTitle
                  title={t('screens.forgot.forgotPassword')}
                  subtitle={t('screens.forgot.titleForgot')}
                />

                <YStack space="$4">
                  <InputWithIcons
                    iconRight={IconVisibleForgot}
                    placeholder={
                      isPhoneEmail
                        ? t('screens.forgot.emailAddress')
                        : t('screens.forgot.phoneNumber')
                    }
                  />

                  <TextTitle
                    onPress={toggleMailPhone}
                    mt="$2"
                    textAlign="right"
                    text={
                      isPhoneEmail
                        ? t('screens.forgot.usePhoneNumber')
                        : t('screens.forgot.useEmailAddress')
                    }
                  />
                </YStack>

                <PositiveButton
                  title={t('screens.forgot.sendCode')}
                  onPress={() => {}}
                />
              </YStack>
            </LinearGradient>)
          : (
            <YStack
              gap="$10"
              mt="$3"
              px="$4"
              marginTop="$space.12"
              flex={1}
            >
              <ContentTitle
                title={t('screens.forgot.forgotPassword')}
                subtitle={t('screens.forgot.titleForgot')}
              />

              <YStack space="$4">
                <InputWithIcons
                  iconRight={IconVisibleForgot}
                  placeholder={
                    isPhoneEmail
                      ? t('screens.forgot.emailAddress')
                      : t('screens.forgot.phoneNumber')
                  }
                />

                <TextTitle
                  onPress={toggleMailPhone}
                  mt="$2"
                  textAlign="right"
                  text={
                    isPhoneEmail
                      ? t('screens.forgot.usePhoneNumber')
                      : t('screens.forgot.useEmailAddress')
                  }
                />
              </YStack>

              <PositiveButton
                title={t('screens.forgot.sendCode')}
                onPress={() => {}}
              />
            </YStack>)}
      </SafeAreaView>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})

export default ForgotTemplate
