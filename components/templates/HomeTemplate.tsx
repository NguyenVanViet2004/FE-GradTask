import React, { useEffect } from 'react'
import { Text, View } from 'tamagui'

import { request } from '~/apis/HttpClient'
import { useAppFonts } from '~/hooks/useAppFonts'

const HomeTemplate = (): React.ReactElement => {
  const { fonts } = useAppFonts()

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const res = await request.get('/vouchers')
        console.log(res)
      } catch (e: any) {
        console.error(e)
      }
    }
    void getData()
  }, [])

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Text
        fontSize={20}
        fontFamily={fonts.JetBrainsMonoBold}>
        HomeTemplate
      </Text>
    </View>
  )
}

export default HomeTemplate
