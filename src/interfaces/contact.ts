export interface Contact {
  created_at: string
  first_name: string
  id: number
  last_name: string
  phones: phone[]
}

interface phone {
  number: string
}
