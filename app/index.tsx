import { useRouter } from 'expo-router'
import { isNil } from 'lodash'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import Loading from '~/components/atoms/Loading'
import OnboardingTemplate from '~/components/templates/OnboardingTemplate'
import useStorage from '~/hooks/useStorage'

export default function Home (): React.ReactElement {
  const { getItem, setItem } = useStorage()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [firstTime, setFirstTime] = useState<boolean>(false)
  const FIRST_TIME_USE_APP = 'FIRST-TIME-USE-APP'
  const router = useRouter()
  useEffect(() => {
    const checkFirstTime = async (): Promise<void> => {
      const user = await getItem(FIRST_TIME_USE_APP)
      if (isNil(user)) {
        setFirstTime(true)
        setItem(FIRST_TIME_USE_APP, 'false').catch(e => {
          console.error(e)
        })
      }
      setIsLoading(false)
    }

    checkFirstTime().catch(e => {
      console.error(e)
    })
  }, [])

  useLayoutEffect(() => {
    if (!isLoading && !firstTime) {
      router.replace('/(tabs)/home')
    }
  }, [isLoading])

  if (isLoading) {
    <Loading/>
  }
  return (
    <OnboardingTemplate/>
  )
}
