export interface Product {
  id: number
  name: string
  price: number
  category: string
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  company: {
    name: string
  }
}
