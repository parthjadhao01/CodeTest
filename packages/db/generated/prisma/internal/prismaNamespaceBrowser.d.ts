import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map