/**
 * Returns the current date formatted as a string in the format 'DD/MM/YYYY'.
 *
 * @returns A string representing the current date in the format 'DD/MM/YYYY'.
 */

export default function getCurrentDateFormatted (): string {
  const date: Date = new Date()
  const day: string = String(date.getDate()).padStart(2, '0')
  const month: string = String(date.getMonth() + 1).padStart(2, '0')
  const year: number = date.getFullYear()
  return `${day}/${month}/${year}`
}
