![oowlish](https://www.oowlish.com/wp-content/uploads/2017/10/header-logo-dark.png)

# Drivers & Rides
This project provides a GraphQL API that manipulates data from Drivers and Rides. The project was divided into 2 modules:

**Back end:** creates a server to provide API with [GraphQL](https://graphql.org/) + [Prisma](https://github.com/prisma/prisma)

**Front end:** creates a simple client to access the backend with [Apollo Client](https://github.com/apollographql/apollo-client/) + [React JS](https://reactjs.org/)

## Documentation
### Types definitions

```graphql
type Drivers {
  id: ID!
  name: String!
  age: Int!
  dateCreation: Date!
  rides: [Rides]
} 
```
 **rides: is the relation to the Rides created by Prisma**

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
 **driverId: is a Foreign Key to Drivers**

### List of Queries
```graphql
drivers: [Drivers!]!
```

```graphql
rides: [Rides!]
```

### List of Mutations

```graphql
createDriver(
  name: String!
  age: Int!
): Drivers
```

```graphql
createRide(
  driver: Int!
  from: String!
  to: String!
  value: Float!
): Rides
```

```graphql
updateRide(
  id: Int!
  driver: Int!
  from: String!
  to: String!
  value: Float!
): Rides
```

```graphql
deleteDriver(
  id: Int!
): Boolean!
```

```graphql
deleteRide(
  id: Int!
): Boolean!
```

**Boolean mutations returns true if the query it's sucefully executed otherwise false.**

## Quickstart

**set your database on backend/prisma/.env**

```prisma
postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```


* [Automatic]: at the root of the project and run
  ```sh
  ./backend.sh
  ```

  ```sh
  ./frontend.sh
  ```

* [Manually]: at the root of the project and run this code:*
  ```sh
  cd backend && yarn && npx prisma migration up --experimental && yarn dev
  ```
  **starts back end!**

  ```sh
  cd frontend && yarn && yarn start
  ``` 
  **starts front end!**

  * cd backend && yarn ( install dependencies )
  * npx prisma migration up --experimental ( up database )
  * yarn dev ( run back end )
  * cd ../frontend && yarn ( install dependencies )
  * yarn start ( run fron end )
  
