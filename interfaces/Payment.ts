import { type PaymentMethod } from '~/interfaces/enum/Payment'
import { type Status } from '~/interfaces/enum/Status'

export default interface Payment {
  _id: string
  appointmentId: string
  paymentMethod: PaymentMethod
  paymentStatus: Status
  totalAmount: string
  paymentDate: Date
  voucherId: string | null
}
