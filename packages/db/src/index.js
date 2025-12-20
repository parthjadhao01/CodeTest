"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_js_1 = require("../generated/prisma/client.js");
var adapter_pg_1 = require("@prisma/adapter-pg");
var prismaClientSingleton = function () {
    var adapter = new adapter_pg_1.PrismaPg({
        connectionString: process.env.DATABASE_URL,
    });
    return new client_js_1.PrismaClient({ adapter: adapter });
};
// eslint-disable-next-line
var globalForPrisma = globalThis;
var prisma = globalForPrisma.prisma
    ? globalForPrisma.prisma
    : prismaClientSingleton();
exports.default = prisma;
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
