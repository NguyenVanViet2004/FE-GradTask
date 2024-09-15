import { type GenderEnum } from '~/interfaces/enum/Gender'

export default interface Stylist {
  _id: string
  fullName: string
  experience: string
  rating: number
  avatarUrl: string | null
  phoneNumber: string
  email: string | null
  workSchedule: string
  position: string
  gender: GenderEnum
  isActive: boolean
}
