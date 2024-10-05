import { LogOut } from '@tamagui/lucide-icons'
import { type Router, useRouter } from 'expo-router'
import { type TFunction } from 'i18next'
import React from 'react'
import { Alert, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ScrollView, Text } from 'tamagui'

import LinearGradientBackground from '~/components/molecules/LinearGradientBackground'
import UserProfile from '~/components/molecules/UserProfile'
import SettingList from '~/components/organisms/SettingList'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'
import { GenderEnum } from '~/interfaces/enum/Gender'
import { Rank } from '~/interfaces/enum/Rank'
import { Role } from '~/interfaces/enum/Role'
import type Membership from '~/interfaces/Membership'
import type User from '~/interfaces/User'

const useHandleLogout = (
  t: TFunction<'translation', undefined>,
  router: Router,
  removeCachedData: VoidFunction
): VoidFunction => {
  return () => {
    Alert.alert(t('common.warning'), t('common.doYouWantToLogout'), [
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
    _id: '',
    address: null,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
    dateOfBirth: null,
    email: '',
    fullName: 'Baby shark',
    gender: GenderEnum.MALE,
    membership,
    password: '',
    phoneNumber: '+1 (123) 456-7890',
    point: 0,
    role: Role.USER,
    token: 'hehe boy :)'
  }

  return (
    <LinearGradientBackground>
      <ScrollView fullscreen showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>

          <UserProfile user={userExample} />
          <SettingList colors={colors} />

          <Button
            backgroundColor="$colorTransparent"
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
    gap: 30,
    paddingBottom: 150,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})

export default ProfileTemplate
