import { gql } from "@apollo/client"

export const GET_CONTACT_LIST = gql`
  query GetContactList(
    $limit: Int = 10
    $offset: Int
    $where: contact_bool_exp
    $order_by: [contact_order_by!]
  ) {
    contact(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $order_by
    ) {
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
