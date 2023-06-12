//* This file is used to create a single instance of the Prisma Client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;