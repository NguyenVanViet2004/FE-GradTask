import { type Router, useRouter } from 'expo-router'
import { isNil } from 'lodash'
import React, { useRef, useState } from 'react'
import { Animated, FlatList, StyleSheet, useColorScheme, useWindowDimensions, type ViewToken } from 'react-native'
import { Spacer, View } from 'tamagui'

import PrimaryButton from '~/components/atoms/PrimaryButton'
import TransparentButton from '~/components/atoms/TransparentButton'
import OnboardingItem from '~/components/molecules/OnboardingItem'
import getColors from '~/constants/Colors'
import useDataOnboarding from '~/constants/DataOnboarding'
import useTranslation from '~/hooks/useTranslation'

const useHandleLogin = (router: Router): VoidFunction => {
  return () => {
    router.replace('/authentication/Login')
  }
}

const Paginator = (
  { data, scrollX }:
  { data: any, scrollX: Animated.Value }): React.ReactElement => {
  const { width } = useWindowDimensions()
  const colors = getColors(useColorScheme())
  return (
    <View
      flexDirection="row"
      position="absolute"
      bottom={100}
      width={'100%'}
      justifyContent="center">
      {
        data.map((_: any, i: number) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

          const dotWidth = scrollX.interpolate({
            extrapolate: 'clamp',
            inputRange,
            outputRange: [7, 7, 7]
          })

          const opacity = scrollX.interpolate({
            extrapolate: 'clamp',
            inputRange,
            outputRange: [0.3, 1, 0.3]
          })
          return (
            <Animated.View
              style={[
                styles.dot,
                {
                  backgroundColor: colors.white,
                  opacity,
                  width: dotWidth
                }
              ]}
              key={i.toString()}
            >
            </Animated.View>
          )
        })
      }

    </View>
  )
}

const scrollToNext = (
  dataOnboading: any[],
  currentIndex: number,
  slideRef: React.RefObject<FlatList<number>>,
  router: Router
): VoidFunction => {
  return () => {
    if (slideRef.current != null) {
      if (currentIndex < dataOnboading.length - 1) {
        slideRef
          .current
          .scrollToIndex({ animated: true, index: currentIndex + 1 })
      } else {
        setTimeout(() => {
          router.replace('/authentication/Login')
        }, 1000)
      }
    }
  }
}

const OnboardingTemplate = (): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [buttonText, setButtonText] = useState<string>('Get Started')
  const scrollX = useRef(new Animated.Value(0)).current
  const slideRef = useRef<FlatList<number>>(null)
  const { t } = useTranslation()
  const dataOnboading = useDataOnboarding()
  const router = useRouter()

  const viewableItemsChanged = useRef(({ viewableItems }:
  { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index ?? 0)
    if (!isNil(viewableItems[0].index)) {
      if (viewableItems[0]?.index >= 1 && viewableItems[0]?.index < 4) {
        setButtonText(t('screens.onboarding.next'))
      } else {
        setButtonText(t('screens.onboarding.getStarted'))
      }
    }
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View flex={1}>
      <FlatList
        data={dataOnboading}
        renderItem={({ item }) => (
          <OnboardingItem
            content={item.content}
            imgBackground={item.backgroungImg}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        decelerationRate={'fast'}
      />
      {Paginator({ data: dataOnboading, scrollX })}
      <View
        position="absolute"
        bottom={20}
        flexDirection="row"
        paddingHorizontal={16}
        justifyContent="space-between"
      >
        <View flex={1} >
          <TransparentButton
            title={t('screens.onboarding.login')}
            onPress={useHandleLogin(router)} />
        </View>
        <Spacer height={23} />
        <View flex={1}>
          <PrimaryButton
            title={buttonText}
            onPress={scrollToNext(
              dataOnboading,
              currentIndex,
              slideRef,
              router)} />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    borderRadius: 14,
    height: 7,
    marginRight: 5
  }
})

export default OnboardingTemplate
