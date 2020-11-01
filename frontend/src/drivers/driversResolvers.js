import { gql } from '@apollo/client';

export const READ_DRIVERS = gql`
  query {
    drivers{
      id
      name
      age
      dateCreation
      rides {
        id
        from
        to
        value
      }
    }
  }
`;

export const CREATE_DRIVER = gql`
  mutation createDriver($name: String!, $age: Int!) {
    createDriver(name: $name, age: $age) {
      id
    }
  }
`;


export const DELETE_DRIVER = gql`
  mutation deleteDriver($id: Int!) {
    deleteDriver(id: $id)
  }
`;