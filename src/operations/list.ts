import { gql } from "@apollo/client"

export const GET_CONTACT_LIST = gql`
  query GetContactList(
    $limit: Int = 20
    $offset: Int = 0
    $where: contact_bool_exp
  ) {
    contact(limit: $limit, offset: $offset, where: $where) {
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`
