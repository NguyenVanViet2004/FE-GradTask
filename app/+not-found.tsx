import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Text, View } from 'tamagui'

export default function NotFoundScreen (): JSX.Element {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View margin={10}>
        <Text>This screen doesn&apos;t exist.</Text>
        <Link href="/" style={styles.link}>
          <Text color="#2e78b7">Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15
  }
})
