export default interface Review {
  _id: string
  appointmentId: string
  userId: string
  rating: number
  stylistId: string
  comment: string | null
  image: string | null
  createdAt: string
  updatedAt: string | null
}
