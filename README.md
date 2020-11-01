![oowlish] (https://www.oowlish.com/wp-content/uploads/2017/10/header-logo-dark.png)

# Drivers & Rides
this project provides a GraphQL API that manipulates data from Drivers and Rides. The project was divided into 2 modules:

**Back end:** creates a server to provide API with [GraphQL](https://graphql.org/) + [Prisma](https://github.com/prisma/prisma)

**Front end:** creates a simple client to access the backend with [Apollo Client](https://github.com/apollographql/apollo-client/) + [React JS](https://reactjs.org/)

## Documentation

**rides related to the Rides created by Prisma**

```graphql
type Drivers {
  id: ID!
  name: String!
  age: Int!
  dateCreation: Date!
  rides: [Rides]
} 
```
 
 **driverId is a Foreign Key to Drivers**

```graphql
type Rides {
  id: Int!
  from: String!
  to: String!
  driverId: Int!
  driver: Drivers
  value: Float!
}
```


