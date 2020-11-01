import { gql } from '@apollo/client';

export const READ_RIDES = gql`
  query {
    rides{
      id
      from
      to
      value
      driver{
        id
        name
        age
      }
    }
  }
`; 

export const CREATE_RIDE = gql`
  mutation createRide($driver: Int!, $from: String!, $to: String!, $value: Float!){
    createRide(driver: $driver, from: $from, to: $to, value: $value){
      id
    }
  }
`;

export const DELETE_RIDE = gql`
  mutation deleteRide($id: Int!) {
    deleteRide(id: $id) 
  }
`;