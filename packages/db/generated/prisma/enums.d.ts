export declare const TestCaseResult: {
    readonly AC: "AC";
    readonly FAIL: "FAIL";
    readonly TLE: "TLE";
    readonly COMPILATION_ERROR: "COMPILATION_ERROR";
    readonly PENDING: "PENDING";
};
export type TestCaseResult = (typeof TestCaseResult)[keyof typeof TestCaseResult];
export declare const SubmissionResult: {
    readonly AC: "AC";
    readonly REJECTED: "REJECTED";
    readonly PENDING: "PENDING";
};
export type SubmissionResult = (typeof SubmissionResult)[keyof typeof SubmissionResult];
export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const Difficulty: {
    readonly EASY: "EASY";
    readonly MEDIUM: "MEDIUM";
    readonly HARD: "HARD";
};
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];
//# sourceMappingURL=enums.d.ts.map