import { PrismaClient } from "@prisma/client";

export const createClient = () => new PrismaClient();

export const prisma = createClient();
