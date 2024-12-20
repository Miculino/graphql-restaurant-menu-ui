// GraphQL
import { gql } from "@apollo/client";

export const GET_MENUS = gql`
  query Menus {
    menus {
      id
    }
  }
`;

export const GET_MENU = gql`
  query Menu($id: ID!) {
    menu(id: $id) {
      id
      sections {
        id
        label
        display_order
        isAvailable
        items {
          id
          label
          description
          type
          price
          thumbnail_url
          display_order
          isAvailable
        }
      }
    }
  }
`;
