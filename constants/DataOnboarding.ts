interface DataOnboarding {
  id: string
  content: string
  backgroungImg: number
}
const dataOnboarding: DataOnboarding[] = [
  {
    backgroungImg: require('assets/images/onboardingImg1.png'),
    content: 'Schedule your Appointment ' +
      'with the best Hair Stylist in your Town.',
    id: '1'
  },
  {
    backgroungImg: require('assets/images/onboardingImg2.png'),
    content: 'Schedule the Appointmentin the best Salon for yourKids.',
    id: '2'
  },
  {
    backgroungImg: require('assets/images/onboardingImg3.png'),
    content: 'Book yourself a massage therapist to release all your stress.',
    id: '3'
  },
  {
    backgroungImg: require('assets/images/onboardingImg4.png'),
    content: 'Search for the best parlournear ' +
      'you to fulfil all your beauty needs',
    id: '4'
  }
]
export default dataOnboarding
