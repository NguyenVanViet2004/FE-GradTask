import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from 'tamagui'

import getColors from '~/constants/Colors'
import { useAppFonts } from '~/hooks/useAppFonts'

interface Props {
  content: string
  imgBackground: number
}

const { width } = Dimensions.get('window')

const OnboardingItem = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { fonts } = useAppFonts()
  return (
    <View width={width}>
      <ImageBackground
        source={props.imgBackground}
        style={styles.background}
      >
        <View
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor={colors.lightTransparentBlack} />

        <View marginHorizontal={16} marginTop={'60%'}>
          <Text
            fontFamily={fonts.JetBrainsMonoBold}
            fontSize={33}
            color={colors.white}
            textAlign="left"
          >
            {props.content}
          </Text>
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  }
})

export default OnboardingItem
