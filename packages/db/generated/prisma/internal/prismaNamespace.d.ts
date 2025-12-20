import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.ts";
import { type PrismaClient } from "./class.ts";
export type * from '../models.ts';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.2.0
 * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Contest: "Contest";
    readonly ContestProblem: "ContestProblem";
    readonly Problem: "Problem";
    readonly DefaultCode: "DefaultCode";
    readonly Submission: "Submission";
    readonly Language: "Language";
    readonly TestCase: "TestCase";
    readonly ContestSubmission: "ContestSubmission";
    readonly ContestPoints: "ContestPoints";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "contest" | "contestProblem" | "problem" | "defaultCode" | "submission" | "language" | "testCase" | "contestSubmission" | "contestPoints";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Contest: {
            payload: Prisma.$ContestPayload<ExtArgs>;
            fields: Prisma.ContestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                findFirst: {
                    args: Prisma.ContestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                findMany: {
                    args: Prisma.ContestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>[];
                };
                create: {
                    args: Prisma.ContestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                createMany: {
                    args: Prisma.ContestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>[];
                };
                delete: {
                    args: Prisma.ContestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                update: {
                    args: Prisma.ContestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                deleteMany: {
                    args: Prisma.ContestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>[];
                };
                upsert: {
                    args: Prisma.ContestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPayload>;
                };
                aggregate: {
                    args: Prisma.ContestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContest>;
                };
                groupBy: {
                    args: Prisma.ContestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestCountAggregateOutputType> | number;
                };
            };
        };
        ContestProblem: {
            payload: Prisma.$ContestProblemPayload<ExtArgs>;
            fields: Prisma.ContestProblemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContestProblemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContestProblemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                findFirst: {
                    args: Prisma.ContestProblemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContestProblemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                findMany: {
                    args: Prisma.ContestProblemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>[];
                };
                create: {
                    args: Prisma.ContestProblemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                createMany: {
                    args: Prisma.ContestProblemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContestProblemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>[];
                };
                delete: {
                    args: Prisma.ContestProblemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                update: {
                    args: Prisma.ContestProblemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                deleteMany: {
                    args: Prisma.ContestProblemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContestProblemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContestProblemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>[];
                };
                upsert: {
                    args: Prisma.ContestProblemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestProblemPayload>;
                };
                aggregate: {
                    args: Prisma.ContestProblemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContestProblem>;
                };
                groupBy: {
                    args: Prisma.ContestProblemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestProblemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContestProblemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestProblemCountAggregateOutputType> | number;
                };
            };
        };
        Problem: {
            payload: Prisma.$ProblemPayload<ExtArgs>;
            fields: Prisma.ProblemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProblemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                findFirst: {
                    args: Prisma.ProblemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                findMany: {
                    args: Prisma.ProblemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>[];
                };
                create: {
                    args: Prisma.ProblemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                createMany: {
                    args: Prisma.ProblemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>[];
                };
                delete: {
                    args: Prisma.ProblemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                update: {
                    args: Prisma.ProblemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                deleteMany: {
                    args: Prisma.ProblemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProblemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>[];
                };
                upsert: {
                    args: Prisma.ProblemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProblemPayload>;
                };
                aggregate: {
                    args: Prisma.ProblemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProblem>;
                };
                groupBy: {
                    args: Prisma.ProblemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProblemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProblemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProblemCountAggregateOutputType> | number;
                };
            };
        };
        DefaultCode: {
            payload: Prisma.$DefaultCodePayload<ExtArgs>;
            fields: Prisma.DefaultCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DefaultCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DefaultCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                findFirst: {
                    args: Prisma.DefaultCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DefaultCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                findMany: {
                    args: Prisma.DefaultCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>[];
                };
                create: {
                    args: Prisma.DefaultCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                createMany: {
                    args: Prisma.DefaultCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DefaultCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>[];
                };
                delete: {
                    args: Prisma.DefaultCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                update: {
                    args: Prisma.DefaultCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                deleteMany: {
                    args: Prisma.DefaultCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DefaultCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DefaultCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>[];
                };
                upsert: {
                    args: Prisma.DefaultCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DefaultCodePayload>;
                };
                aggregate: {
                    args: Prisma.DefaultCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDefaultCode>;
                };
                groupBy: {
                    args: Prisma.DefaultCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DefaultCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DefaultCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DefaultCodeCountAggregateOutputType> | number;
                };
            };
        };
        Submission: {
            payload: Prisma.$SubmissionPayload<ExtArgs>;
            fields: Prisma.SubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.SubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                findMany: {
                    args: Prisma.SubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                create: {
                    args: Prisma.SubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                createMany: {
                    args: Prisma.SubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                delete: {
                    args: Prisma.SubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                update: {
                    args: Prisma.SubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.SubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.SubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubmission>;
                };
                groupBy: {
                    args: Prisma.SubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubmissionCountAggregateOutputType> | number;
                };
            };
        };
        Language: {
            payload: Prisma.$LanguagePayload<ExtArgs>;
            fields: Prisma.LanguageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LanguageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findFirst: {
                    args: Prisma.LanguageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findMany: {
                    args: Prisma.LanguageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                create: {
                    args: Prisma.LanguageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                createMany: {
                    args: Prisma.LanguageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                delete: {
                    args: Prisma.LanguageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                update: {
                    args: Prisma.LanguageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                deleteMany: {
                    args: Prisma.LanguageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LanguageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                upsert: {
                    args: Prisma.LanguageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                aggregate: {
                    args: Prisma.LanguageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLanguage>;
                };
                groupBy: {
                    args: Prisma.LanguageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LanguageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageCountAggregateOutputType> | number;
                };
            };
        };
        TestCase: {
            payload: Prisma.$TestCasePayload<ExtArgs>;
            fields: Prisma.TestCaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestCaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                findFirst: {
                    args: Prisma.TestCaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                findMany: {
                    args: Prisma.TestCaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>[];
                };
                create: {
                    args: Prisma.TestCaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                createMany: {
                    args: Prisma.TestCaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>[];
                };
                delete: {
                    args: Prisma.TestCaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                update: {
                    args: Prisma.TestCaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                deleteMany: {
                    args: Prisma.TestCaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestCaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestCaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>[];
                };
                upsert: {
                    args: Prisma.TestCaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestCasePayload>;
                };
                aggregate: {
                    args: Prisma.TestCaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestCase>;
                };
                groupBy: {
                    args: Prisma.TestCaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestCaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestCaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestCaseCountAggregateOutputType> | number;
                };
            };
        };
        ContestSubmission: {
            payload: Prisma.$ContestSubmissionPayload<ExtArgs>;
            fields: Prisma.ContestSubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContestSubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContestSubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.ContestSubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContestSubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                findMany: {
                    args: Prisma.ContestSubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[];
                };
                create: {
                    args: Prisma.ContestSubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                createMany: {
                    args: Prisma.ContestSubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContestSubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[];
                };
                delete: {
                    args: Prisma.ContestSubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                update: {
                    args: Prisma.ContestSubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.ContestSubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContestSubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContestSubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.ContestSubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestSubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.ContestSubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContestSubmission>;
                };
                groupBy: {
                    args: Prisma.ContestSubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestSubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContestSubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestSubmissionCountAggregateOutputType> | number;
                };
            };
        };
        ContestPoints: {
            payload: Prisma.$ContestPointsPayload<ExtArgs>;
            fields: Prisma.ContestPointsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContestPointsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContestPointsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                findFirst: {
                    args: Prisma.ContestPointsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContestPointsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                findMany: {
                    args: Prisma.ContestPointsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>[];
                };
                create: {
                    args: Prisma.ContestPointsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                createMany: {
                    args: Prisma.ContestPointsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContestPointsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>[];
                };
                delete: {
                    args: Prisma.ContestPointsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                update: {
                    args: Prisma.ContestPointsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                deleteMany: {
                    args: Prisma.ContestPointsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContestPointsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContestPointsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>[];
                };
                upsert: {
                    args: Prisma.ContestPointsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContestPointsPayload>;
                };
                aggregate: {
                    args: Prisma.ContestPointsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContestPoints>;
                };
                groupBy: {
                    args: Prisma.ContestPointsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestPointsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContestPointsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContestPointsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly token: "token";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly role: "role";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ContestScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly startTime: "startTime";
    readonly hidden: "hidden";
    readonly endTime: "endTime";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly leaderBoard: "leaderBoard";
};
export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum];
export declare const ContestProblemScalarFieldEnum: {
    readonly id: "id";
    readonly constestId: "constestId";
    readonly problemId: "problemId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly index: "index";
    readonly solved: "solved";
};
export type ContestProblemScalarFieldEnum = (typeof ContestProblemScalarFieldEnum)[keyof typeof ContestProblemScalarFieldEnum];
export declare const ProblemScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly hidden: "hidden";
    readonly slug: "slug";
    readonly solved: "solved";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum];
export declare const DefaultCodeScalarFieldEnum: {
    readonly id: "id";
    readonly languageId: "languageId";
    readonly problemId: "problemId";
    readonly code: "code";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DefaultCodeScalarFieldEnum = (typeof DefaultCodeScalarFieldEnum)[keyof typeof DefaultCodeScalarFieldEnum];
export declare const SubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly problemId: "problemId";
    readonly userId: "userId";
    readonly languageId: "languageId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly code: "code";
    readonly fullCode: "fullCode";
    readonly activeContestId: "activeContestId";
    readonly status: "status";
    readonly memory: "memory";
    readonly time: "time";
};
export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum];
export declare const LanguageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly judge0id: "judge0id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];
export declare const TestCaseScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly status: "status";
    readonly index: "index";
    readonly submissionId: "submissionId";
    readonly mermory: "mermory";
    readonly time: "time";
    readonly judge0TrackingId: "judge0TrackingId";
};
export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum];
export declare const ContestSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly contestId: "contestId";
    readonly problemId: "problemId";
    readonly userId: "userId";
    readonly points: "points";
    readonly rank: "rank";
};
export type ContestSubmissionScalarFieldEnum = (typeof ContestSubmissionScalarFieldEnum)[keyof typeof ContestSubmissionScalarFieldEnum];
export declare const ContestPointsScalarFieldEnum: {
    readonly id: "id";
    readonly contestId: "contestId";
    readonly userId: "userId";
    readonly point: "point";
    readonly rank: "rank";
};
export type ContestPointsScalarFieldEnum = (typeof ContestPointsScalarFieldEnum)[keyof typeof ContestPointsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'SubmissionResult'
 */
export type EnumSubmissionResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionResult'>;
/**
 * Reference to a field of type 'SubmissionResult[]'
 */
export type ListEnumSubmissionResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionResult[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'TestCaseResult'
 */
export type EnumTestCaseResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestCaseResult'>;
/**
 * Reference to a field of type 'TestCaseResult[]'
 */
export type ListEnumTestCaseResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestCaseResult[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    contest?: Prisma.ContestOmit;
    contestProblem?: Prisma.ContestProblemOmit;
    problem?: Prisma.ProblemOmit;
    defaultCode?: Prisma.DefaultCodeOmit;
    submission?: Prisma.SubmissionOmit;
    language?: Prisma.LanguageOmit;
    testCase?: Prisma.TestCaseOmit;
    contestSubmission?: Prisma.ContestSubmissionOmit;
    contestPoints?: Prisma.ContestPointsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map