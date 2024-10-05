import React from 'react'
import { Alert, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ScrollView, Text } from 'tamagui'

import LinearGradientBackground from '~/components/molecules/LinearGradientBackground'
import getColors from '~/constants/Colors'
import { GenderEnum } from '~/interfaces/enum/Gender'
import { Role } from '~/interfaces/enum/Role'
import User from '~/interfaces/User'
import type Membership from '~/interfaces/Membership'
import { Rank } from '~/interfaces/enum/Rank'
import UserProfile from '~/components/molecules/UserProfile'
import SettingList from '~/components/organisms/SettingList'
import { LogOut } from '@tamagui/lucide-icons'
import useTranslation from '~/hooks/useTranslation'
import { TFunction } from 'i18next'
import { Router, useRouter } from 'expo-router'

const useHandleLogout = (
  t: TFunction<'translation', undefined>,
  router: Router,
  removeCachedData: VoidFunction
): VoidFunction => {
  return () => {
    Alert.alert(t('common.warning'), t('common.DoYouWantToLogout'), [
      {
        onPress: () => {
          removeCachedData()
          router.replace('/authentication/Login')
        },
        text: t('button.confirm')
      },
      {
        style: 'cancel',
        text: t('button.cancel')
      }
    ])
  }
}

const ProfileTemplate = (): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()
  const router = useRouter()
  const membership: Membership = {
    name: Rank.BRONZE,
    point: 0
  }
  const userExample: User = {
    fullName: 'Baby shark',
    phoneNumber: '+1 (123) 456-7890',
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
    _id: '',
    email: '',
    password: '',
    address: null,
    gender: GenderEnum.MALE,
    dateOfBirth: null,
    role: Role.USER,
    membership: membership,
    point: 0,
    token: 'hehe boy :)'
  }

  return (
    <LinearGradientBackground>
      <ScrollView fullscreen showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>

          <UserProfile user={userExample} />
          <SettingList colors={colors} />

          <Button
            backgroundColor='$colorTransparent'
            borderWidth={1}
            borderRadius="$2"
            borderColor="red"
            onPress={useHandleLogout(t, router, () => {
              // Remove cached data here
            })}
            icon={<LogOut color="$danger" />}
            justifyContent="center">
            <Text color="$danger" fontWeight="600">
              {t('screens.profile.logout')}
            </Text>
          </Button>
        </SafeAreaView>
      </ScrollView>
    </LinearGradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 150,
    gap: 30
  }
})

export default ProfileTemplate
