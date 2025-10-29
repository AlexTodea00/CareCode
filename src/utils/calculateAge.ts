export const calculateAge = (dob: string): number => {
  const now = new Date()
  const birthDate = new Date(dob)
  let years = now.getFullYear() - birthDate.getFullYear()

  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() == birthDate.getMonth() &&
      now.getDate() < birthDate.getDate())
  ) {
    years--
  }

  return years
}
