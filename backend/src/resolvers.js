import {
  rides,
  createRide,
  deleteRide,
  updateRide
} from './rides/ridesResolvers';

import {
  drivers,
  createDriver,
  deleteDriver
} from './drivers/driversResolvers';

const resolvers = {
  Query: {
    drivers,
    rides,
  },

  Mutation: {
    createDriver,
    createRide,
    updateRide,
    deleteRide,
    deleteDriver,
  }
}

export default resolvers;
