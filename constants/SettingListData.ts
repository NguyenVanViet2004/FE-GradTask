import { AlertCircle, BellRing, Globe, Heart, Lock, User2 } from '@tamagui/lucide-icons'
import { useExpoRouter } from 'expo-router/build/global-state/router-store'

import useTranslation from '~/hooks/useTranslation'
import type SettingsList from '~/interfaces/SettingsList'

export const SettingListData = (): SettingsList[] => {
  const { t } = useTranslation()
  const router = useExpoRouter()

  return [
    {
      items: [
        {
          icon: User2,
          onPress: () => {
            router.navigate('/profile')
          },
          title: t('user.userInfo')
        },
        {
          icon: Heart,
          onPress: () => {},
          title: t('user.yourFavorite')
        },
        {
          icon: Lock,
          onPress: () => {},
          title: t('screens.profile.changePassword')
        }
      ],
      key: 'card1'
    },
    {
      items: [
        {
          icon: BellRing,
          onPress: () => {},
          title: t('permissions.NOTIFICATION.title')
        },
        {
          icon: Globe,
          onPress: () => {},
          title: t('screens.profile.language')
        },
        {
          icon: AlertCircle,
          onPress: () => {},
          title: t('screens.profile.about')
        }
      ],
      key: 'card2'
    }
  ]
}
