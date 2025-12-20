import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Contest
 *
 */
export type Contest = Prisma.ContestModel;
/**
 * Model ContestProblem
 *
 */
export type ContestProblem = Prisma.ContestProblemModel;
/**
 * Model Problem
 *
 */
export type Problem = Prisma.ProblemModel;
/**
 * Model DefaultCode
 *
 */
export type DefaultCode = Prisma.DefaultCodeModel;
/**
 * Model Submission
 *
 */
export type Submission = Prisma.SubmissionModel;
/**
 * Model Language
 *
 */
export type Language = Prisma.LanguageModel;
/**
 * Model TestCase
 *
 */
export type TestCase = Prisma.TestCaseModel;
/**
 * Model ContestSubmission
 *
 */
export type ContestSubmission = Prisma.ContestSubmissionModel;
/**
 * Model ContestPoints
 *
 */
export type ContestPoints = Prisma.ContestPointsModel;
//# sourceMappingURL=client.d.ts.map