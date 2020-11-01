import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const drivers = async () => {
  const allDrivers = await prisma.drivers.findMany({
    include: {
      rides: true,
    }
  });

  return allDrivers;
}

export const createDriver = async(_, { name, age }) => {
  const driver = await prisma.drivers.create({
    data: {
      name,
      age
    }
  });

  return driver;
}

export const deleteDriver = async(_, { id }) => {
  const driverExists = await prisma.drivers.findOne({
    where: {
      id,
    }
  });

  if(!driverExists){
    return false;
  }

  await prisma.drivers.delete({
    where: {
      id,
    }
  });

  return true;
}
