import { gql } from "@apollo/client"

export const GET_CONTACT_LIST = gql`
  query GetPhoneList($limit: Int = 10, $offset: Int = 0) {
    phone(limit: $limit, offset: $offset) {
      contact {
        last_name
        first_name
        id
      }
      number
    }
  }
`
