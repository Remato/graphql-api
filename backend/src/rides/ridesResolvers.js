import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const rides = async() => {
  const allRides = await prisma.rides.findMany({
    include: {
      driver: true,
    }
  });

  return allRides;
}

export const createRide = async(_, { from, to, value, driver }) => {
  const driverExists = await prisma.drivers.findOne({
    where:{
      id: driver,
    }
  });

  if(!driverExists){
    return null;
  }

  const ride = await prisma.rides.create({
    data: {
      from,
      to,
      value,
      driver: {
        connect: {
          id: driver,
        }
      }
    }
  });

  return ride;
}

export const updateRide = async(_, { id, driver, from, to, value } ) => {
  const rideExists = await prisma.rides.findOne({
    where: {
      id,
    }
  });

  if(!rideExists || !rideExists.driverId){
    return null;
  }

  const ride = await prisma.rides.update({
    where: {
      id,
    },
    data: {
      from,
      to,
      value,
      driver: {
        connect: {
          id: driver,
        }
      }
    }
  });

  return ride;
}


export const deleteRide = async(_, { id }) => {
  const rideExists = await prisma.rides.findOne({
    where: {
      id,
    }
  });

  if(!rideExists){
    return false;
  }

  await prisma.rides.delete({
    where: {
      id,
    }
  });

  return true;
}
