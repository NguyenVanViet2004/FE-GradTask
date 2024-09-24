import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  content: string
  imgBackground: number
}

const { width } = Dimensions.get('window')

const OnboardingItem = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())

  return (
    <View width={width}>
      <ImageBackground
        source={props.imgBackground}
        style={styles.background}
      >
        <View style={styles.overlay} backgroundColor={'rgba(0, 0, 0, 0.3)'} />
        <View flex={1}>
          <View flex={3} />
          <View flex={2} marginHorizontal={16}>
            <Text
              fontSize={33}
              color={colors.white}
              fontWeight={'bold'}
              textAlign="left"
            >
              {props.content}
            </Text>
          </View>
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
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  }
})

export default OnboardingItem
