import useTranslation from '~/hooks/useTranslation'

interface DataOnboarding {
  id: string
  content: string
  backgroungImg: number
}
const useDataOnboarding = (): DataOnboarding[] => {
  const { t } = useTranslation()
  const dataOnboarding: DataOnboarding[] = [
    {
      backgroungImg: require('assets/images/onboardingImg1.png'),
      content: t('screens.onboarding.step1'),
      id: '1'
    },
    {
      backgroungImg: require('assets/images/onboardingImg2.png'),
      content: t('screens.onboarding.step2'),
      id: '2'
    },
    {
      backgroungImg: require('assets/images/onboardingImg3.png'),
      content: t('screens.onboarding.step3'),
      id: '3'
    },
    {
      backgroungImg: require('assets/images/onboardingImg4.png'),
      content: t('screens.onboarding.step4'),
      id: '4'
    }
  ]
  return dataOnboarding
}

export default useDataOnboarding
