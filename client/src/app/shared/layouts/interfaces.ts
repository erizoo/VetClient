export interface User {
  email: string
  password: string
}

export interface Message {
  message: string
}

export interface Category {
  name: string
  imageSrc?: string
  user?: string
  _id?: string
}

export interface Position {
  name: string
  cost: number
  category: string
  user?: string
  _id?: string
}

export interface Client {
  _id?: string
  firstName: string
  lastName: string
  middleName: string
  passport: string
  numberMobile: string
  homePhoneNumber: string
  workPhoneNumber: string
  email: string
  city: string
  address: string
  numberHouseOrFlat: string
}



