export default interface Voucher {
  _id: string
  name: string
  percent: number
  expirationDate: Date
  isActive: boolean
}
