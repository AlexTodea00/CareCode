export type CurrentUser = {
  id: string
  fullName: string
  dob: string
  conditions: string[]
  allergies: string[]
  medications: string[]
  bloodType: string
  additionalInfo: string
  emergencyContacts: EmergencyContact[]
}

export type EmergencyContact = {
  id: string
  contactName: string
  phoneNumber: string
  relationship
}
