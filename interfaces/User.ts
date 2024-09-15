import { type GenderEnum } from '~/interfaces/enum/Gender'
import { type Role } from '~/interfaces/enum/Role'
import type Membership from '~/interfaces/Membership'

export default interface User {
  _id: string
  avatarUrl: string | null
  email: string
  password: string
  phoneNumber: string
  address: string | null
  gender: GenderEnum
  dateOfBirth: Date | null
  fullName: string
  role: Role
  membership: Membership
  point: number
  token: string
}
