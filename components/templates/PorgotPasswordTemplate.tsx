import { Mail, Phone } from '@tamagui/lucide-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TamaguiProvider, YStack } from 'tamagui'

import ContentTitle from '~/components/atoms/ContentTitle'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'
import config from '~/tamagui.config'

import InputWithIcons from '../atoms/InputWithIcons'
import { PositiveButton } from '../atoms/PositiveButton'
import { TextTitle } from '../atoms/TextTitle'

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
      <SafeAreaView style={styles.flex}>
        {colorScheme === 'dark'
          ? (
            <LinearGradient
              colors={[colors.colorDarkModeTop, colors.colorDarkModeBottom]}
              style={styles.flex}
            >
              <YStack gap="$10" mt="$3" px="$4" marginTop="$space.12" flex={1}>
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

                <PositiveButton title={t('screens.forgot.sendCode')} />
              </YStack>
            </LinearGradient>)
          : (
            <YStack
              gap="$10"
              mt="$3"
              px="$4"
              marginTop="$space.12"
              flex={1}
              style={{ backgroundColor: colors.white }}
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

              <PositiveButton title={t('screens.forgot.sendCode')} />
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
