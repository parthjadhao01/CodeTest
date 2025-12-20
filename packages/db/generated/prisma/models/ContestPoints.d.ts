import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model ContestPoints
 *
 */
export type ContestPointsModel = runtime.Types.Result.DefaultSelection<Prisma.$ContestPointsPayload>;
export type AggregateContestPoints = {
    _count: ContestPointsCountAggregateOutputType | null;
    _avg: ContestPointsAvgAggregateOutputType | null;
    _sum: ContestPointsSumAggregateOutputType | null;
    _min: ContestPointsMinAggregateOutputType | null;
    _max: ContestPointsMaxAggregateOutputType | null;
};
export type ContestPointsAvgAggregateOutputType = {
    point: number | null;
    rank: number | null;
};
export type ContestPointsSumAggregateOutputType = {
    point: number | null;
    rank: number | null;
};
export type ContestPointsMinAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    userId: string | null;
    point: number | null;
    rank: number | null;
};
export type ContestPointsMaxAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    userId: string | null;
    point: number | null;
    rank: number | null;
};
export type ContestPointsCountAggregateOutputType = {
    id: number;
    contestId: number;
    userId: number;
    point: number;
    rank: number;
    _all: number;
};
export type ContestPointsAvgAggregateInputType = {
    point?: true;
    rank?: true;
};
export type ContestPointsSumAggregateInputType = {
    point?: true;
    rank?: true;
};
export type ContestPointsMinAggregateInputType = {
    id?: true;
    contestId?: true;
    userId?: true;
    point?: true;
    rank?: true;
};
export type ContestPointsMaxAggregateInputType = {
    id?: true;
    contestId?: true;
    userId?: true;
    point?: true;
    rank?: true;
};
export type ContestPointsCountAggregateInputType = {
    id?: true;
    contestId?: true;
    userId?: true;
    point?: true;
    rank?: true;
    _all?: true;
};
export type ContestPointsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContestPoints to aggregate.
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestPoints to fetch.
     */
    orderBy?: Prisma.ContestPointsOrderByWithRelationInput | Prisma.ContestPointsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContestPointsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestPoints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestPoints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContestPoints
    **/
    _count?: true | ContestPointsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContestPointsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContestPointsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContestPointsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContestPointsMaxAggregateInputType;
};
export type GetContestPointsAggregateType<T extends ContestPointsAggregateArgs> = {
    [P in keyof T & keyof AggregateContestPoints]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContestPoints[P]> : Prisma.GetScalarType<T[P], AggregateContestPoints[P]>;
};
export type ContestPointsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContestPointsWhereInput;
    orderBy?: Prisma.ContestPointsOrderByWithAggregationInput | Prisma.ContestPointsOrderByWithAggregationInput[];
    by: Prisma.ContestPointsScalarFieldEnum[] | Prisma.ContestPointsScalarFieldEnum;
    having?: Prisma.ContestPointsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContestPointsCountAggregateInputType | true;
    _avg?: ContestPointsAvgAggregateInputType;
    _sum?: ContestPointsSumAggregateInputType;
    _min?: ContestPointsMinAggregateInputType;
    _max?: ContestPointsMaxAggregateInputType;
};
export type ContestPointsGroupByOutputType = {
    id: string;
    contestId: string;
    userId: string;
    point: number;
    rank: number;
    _count: ContestPointsCountAggregateOutputType | null;
    _avg: ContestPointsAvgAggregateOutputType | null;
    _sum: ContestPointsSumAggregateOutputType | null;
    _min: ContestPointsMinAggregateOutputType | null;
    _max: ContestPointsMaxAggregateOutputType | null;
};
type GetContestPointsGroupByPayload<T extends ContestPointsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContestPointsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContestPointsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContestPointsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContestPointsGroupByOutputType[P]>;
}>>;
export type ContestPointsWhereInput = {
    AND?: Prisma.ContestPointsWhereInput | Prisma.ContestPointsWhereInput[];
    OR?: Prisma.ContestPointsWhereInput[];
    NOT?: Prisma.ContestPointsWhereInput | Prisma.ContestPointsWhereInput[];
    id?: Prisma.StringFilter<"ContestPoints"> | string;
    contestId?: Prisma.StringFilter<"ContestPoints"> | string;
    userId?: Prisma.StringFilter<"ContestPoints"> | string;
    point?: Prisma.IntFilter<"ContestPoints"> | number;
    rank?: Prisma.IntFilter<"ContestPoints"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ContestPointsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ContestPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_contestId?: Prisma.ContestPointsUserIdContestIdCompoundUniqueInput;
    AND?: Prisma.ContestPointsWhereInput | Prisma.ContestPointsWhereInput[];
    OR?: Prisma.ContestPointsWhereInput[];
    NOT?: Prisma.ContestPointsWhereInput | Prisma.ContestPointsWhereInput[];
    contestId?: Prisma.StringFilter<"ContestPoints"> | string;
    userId?: Prisma.StringFilter<"ContestPoints"> | string;
    point?: Prisma.IntFilter<"ContestPoints"> | number;
    rank?: Prisma.IntFilter<"ContestPoints"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_contestId">;
export type ContestPointsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    _count?: Prisma.ContestPointsCountOrderByAggregateInput;
    _avg?: Prisma.ContestPointsAvgOrderByAggregateInput;
    _max?: Prisma.ContestPointsMaxOrderByAggregateInput;
    _min?: Prisma.ContestPointsMinOrderByAggregateInput;
    _sum?: Prisma.ContestPointsSumOrderByAggregateInput;
};
export type ContestPointsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContestPointsScalarWhereWithAggregatesInput | Prisma.ContestPointsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContestPointsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContestPointsScalarWhereWithAggregatesInput | Prisma.ContestPointsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContestPoints"> | string;
    contestId?: Prisma.StringWithAggregatesFilter<"ContestPoints"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ContestPoints"> | string;
    point?: Prisma.IntWithAggregatesFilter<"ContestPoints"> | number;
    rank?: Prisma.IntWithAggregatesFilter<"ContestPoints"> | number;
};
export type ContestPointsCreateInput = {
    id?: string;
    contestId: string;
    point: number;
    rank: number;
    user: Prisma.UserCreateNestedOneWithoutContestPointInput;
};
export type ContestPointsUncheckedCreateInput = {
    id?: string;
    contestId: string;
    userId: string;
    point: number;
    rank: number;
};
export type ContestPointsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutContestPointNestedInput;
};
export type ContestPointsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsCreateManyInput = {
    id?: string;
    contestId: string;
    userId: string;
    point: number;
    rank: number;
};
export type ContestPointsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsListRelationFilter = {
    every?: Prisma.ContestPointsWhereInput;
    some?: Prisma.ContestPointsWhereInput;
    none?: Prisma.ContestPointsWhereInput;
};
export type ContestPointsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContestPointsUserIdContestIdCompoundUniqueInput = {
    userId: string;
    contestId: string;
};
export type ContestPointsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type ContestPointsAvgOrderByAggregateInput = {
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type ContestPointsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type ContestPointsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type ContestPointsSumOrderByAggregateInput = {
    point?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type ContestPointsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput> | Prisma.ContestPointsCreateWithoutUserInput[] | Prisma.ContestPointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContestPointsCreateOrConnectWithoutUserInput | Prisma.ContestPointsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContestPointsCreateManyUserInputEnvelope;
    connect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
};
export type ContestPointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput> | Prisma.ContestPointsCreateWithoutUserInput[] | Prisma.ContestPointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContestPointsCreateOrConnectWithoutUserInput | Prisma.ContestPointsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContestPointsCreateManyUserInputEnvelope;
    connect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
};
export type ContestPointsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput> | Prisma.ContestPointsCreateWithoutUserInput[] | Prisma.ContestPointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContestPointsCreateOrConnectWithoutUserInput | Prisma.ContestPointsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContestPointsUpsertWithWhereUniqueWithoutUserInput | Prisma.ContestPointsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContestPointsCreateManyUserInputEnvelope;
    set?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    disconnect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    delete?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    connect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    update?: Prisma.ContestPointsUpdateWithWhereUniqueWithoutUserInput | Prisma.ContestPointsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContestPointsUpdateManyWithWhereWithoutUserInput | Prisma.ContestPointsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContestPointsScalarWhereInput | Prisma.ContestPointsScalarWhereInput[];
};
export type ContestPointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput> | Prisma.ContestPointsCreateWithoutUserInput[] | Prisma.ContestPointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContestPointsCreateOrConnectWithoutUserInput | Prisma.ContestPointsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContestPointsUpsertWithWhereUniqueWithoutUserInput | Prisma.ContestPointsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContestPointsCreateManyUserInputEnvelope;
    set?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    disconnect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    delete?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    connect?: Prisma.ContestPointsWhereUniqueInput | Prisma.ContestPointsWhereUniqueInput[];
    update?: Prisma.ContestPointsUpdateWithWhereUniqueWithoutUserInput | Prisma.ContestPointsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContestPointsUpdateManyWithWhereWithoutUserInput | Prisma.ContestPointsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContestPointsScalarWhereInput | Prisma.ContestPointsScalarWhereInput[];
};
export type ContestPointsCreateWithoutUserInput = {
    id?: string;
    contestId: string;
    point: number;
    rank: number;
};
export type ContestPointsUncheckedCreateWithoutUserInput = {
    id?: string;
    contestId: string;
    point: number;
    rank: number;
};
export type ContestPointsCreateOrConnectWithoutUserInput = {
    where: Prisma.ContestPointsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput>;
};
export type ContestPointsCreateManyUserInputEnvelope = {
    data: Prisma.ContestPointsCreateManyUserInput | Prisma.ContestPointsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ContestPointsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContestPointsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContestPointsUpdateWithoutUserInput, Prisma.ContestPointsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ContestPointsCreateWithoutUserInput, Prisma.ContestPointsUncheckedCreateWithoutUserInput>;
};
export type ContestPointsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContestPointsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContestPointsUpdateWithoutUserInput, Prisma.ContestPointsUncheckedUpdateWithoutUserInput>;
};
export type ContestPointsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ContestPointsScalarWhereInput;
    data: Prisma.XOR<Prisma.ContestPointsUpdateManyMutationInput, Prisma.ContestPointsUncheckedUpdateManyWithoutUserInput>;
};
export type ContestPointsScalarWhereInput = {
    AND?: Prisma.ContestPointsScalarWhereInput | Prisma.ContestPointsScalarWhereInput[];
    OR?: Prisma.ContestPointsScalarWhereInput[];
    NOT?: Prisma.ContestPointsScalarWhereInput | Prisma.ContestPointsScalarWhereInput[];
    id?: Prisma.StringFilter<"ContestPoints"> | string;
    contestId?: Prisma.StringFilter<"ContestPoints"> | string;
    userId?: Prisma.StringFilter<"ContestPoints"> | string;
    point?: Prisma.IntFilter<"ContestPoints"> | number;
    rank?: Prisma.IntFilter<"ContestPoints"> | number;
};
export type ContestPointsCreateManyUserInput = {
    id?: string;
    contestId: string;
    point: number;
    rank: number;
};
export type ContestPointsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestPointsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    userId?: boolean;
    point?: boolean;
    rank?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestPoints"]>;
export type ContestPointsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    userId?: boolean;
    point?: boolean;
    rank?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestPoints"]>;
export type ContestPointsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    userId?: boolean;
    point?: boolean;
    rank?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestPoints"]>;
export type ContestPointsSelectScalar = {
    id?: boolean;
    contestId?: boolean;
    userId?: boolean;
    point?: boolean;
    rank?: boolean;
};
export type ContestPointsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contestId" | "userId" | "point" | "rank", ExtArgs["result"]["contestPoints"]>;
export type ContestPointsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContestPointsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContestPointsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ContestPointsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContestPoints";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contestId: string;
        userId: string;
        point: number;
        rank: number;
    }, ExtArgs["result"]["contestPoints"]>;
    composites: {};
};
export type ContestPointsGetPayload<S extends boolean | null | undefined | ContestPointsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload, S>;
export type ContestPointsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContestPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContestPointsCountAggregateInputType | true;
};
export interface ContestPointsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContestPoints'];
        meta: {
            name: 'ContestPoints';
        };
    };
    /**
     * Find zero or one ContestPoints that matches the filter.
     * @param {ContestPointsFindUniqueArgs} args - Arguments to find a ContestPoints
     * @example
     * // Get one ContestPoints
     * const contestPoints = await prisma.contestPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestPointsFindUniqueArgs>(args: Prisma.SelectSubset<T, ContestPointsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ContestPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestPointsFindUniqueOrThrowArgs} args - Arguments to find a ContestPoints
     * @example
     * // Get one ContestPoints
     * const contestPoints = await prisma.contestPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestPointsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContestPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContestPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsFindFirstArgs} args - Arguments to find a ContestPoints
     * @example
     * // Get one ContestPoints
     * const contestPoints = await prisma.contestPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestPointsFindFirstArgs>(args?: Prisma.SelectSubset<T, ContestPointsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContestPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsFindFirstOrThrowArgs} args - Arguments to find a ContestPoints
     * @example
     * // Get one ContestPoints
     * const contestPoints = await prisma.contestPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestPointsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContestPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ContestPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestPoints
     * const contestPoints = await prisma.contestPoints.findMany()
     *
     * // Get first 10 ContestPoints
     * const contestPoints = await prisma.contestPoints.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contestPointsWithIdOnly = await prisma.contestPoints.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContestPointsFindManyArgs>(args?: Prisma.SelectSubset<T, ContestPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ContestPoints.
     * @param {ContestPointsCreateArgs} args - Arguments to create a ContestPoints.
     * @example
     * // Create one ContestPoints
     * const ContestPoints = await prisma.contestPoints.create({
     *   data: {
     *     // ... data to create a ContestPoints
     *   }
     * })
     *
     */
    create<T extends ContestPointsCreateArgs>(args: Prisma.SelectSubset<T, ContestPointsCreateArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ContestPoints.
     * @param {ContestPointsCreateManyArgs} args - Arguments to create many ContestPoints.
     * @example
     * // Create many ContestPoints
     * const contestPoints = await prisma.contestPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContestPointsCreateManyArgs>(args?: Prisma.SelectSubset<T, ContestPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ContestPoints and returns the data saved in the database.
     * @param {ContestPointsCreateManyAndReturnArgs} args - Arguments to create many ContestPoints.
     * @example
     * // Create many ContestPoints
     * const contestPoints = await prisma.contestPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContestPoints and only return the `id`
     * const contestPointsWithIdOnly = await prisma.contestPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContestPointsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContestPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ContestPoints.
     * @param {ContestPointsDeleteArgs} args - Arguments to delete one ContestPoints.
     * @example
     * // Delete one ContestPoints
     * const ContestPoints = await prisma.contestPoints.delete({
     *   where: {
     *     // ... filter to delete one ContestPoints
     *   }
     * })
     *
     */
    delete<T extends ContestPointsDeleteArgs>(args: Prisma.SelectSubset<T, ContestPointsDeleteArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ContestPoints.
     * @param {ContestPointsUpdateArgs} args - Arguments to update one ContestPoints.
     * @example
     * // Update one ContestPoints
     * const contestPoints = await prisma.contestPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContestPointsUpdateArgs>(args: Prisma.SelectSubset<T, ContestPointsUpdateArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ContestPoints.
     * @param {ContestPointsDeleteManyArgs} args - Arguments to filter ContestPoints to delete.
     * @example
     * // Delete a few ContestPoints
     * const { count } = await prisma.contestPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContestPointsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContestPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContestPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestPoints
     * const contestPoints = await prisma.contestPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContestPointsUpdateManyArgs>(args: Prisma.SelectSubset<T, ContestPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContestPoints and returns the data updated in the database.
     * @param {ContestPointsUpdateManyAndReturnArgs} args - Arguments to update many ContestPoints.
     * @example
     * // Update many ContestPoints
     * const contestPoints = await prisma.contestPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContestPoints and only return the `id`
     * const contestPointsWithIdOnly = await prisma.contestPoints.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ContestPointsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContestPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ContestPoints.
     * @param {ContestPointsUpsertArgs} args - Arguments to update or create a ContestPoints.
     * @example
     * // Update or create a ContestPoints
     * const contestPoints = await prisma.contestPoints.upsert({
     *   create: {
     *     // ... data to create a ContestPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestPoints we want to update
     *   }
     * })
     */
    upsert<T extends ContestPointsUpsertArgs>(args: Prisma.SelectSubset<T, ContestPointsUpsertArgs<ExtArgs>>): Prisma.Prisma__ContestPointsClient<runtime.Types.Result.GetResult<Prisma.$ContestPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ContestPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsCountArgs} args - Arguments to filter ContestPoints to count.
     * @example
     * // Count the number of ContestPoints
     * const count = await prisma.contestPoints.count({
     *   where: {
     *     // ... the filter for the ContestPoints we want to count
     *   }
     * })
    **/
    count<T extends ContestPointsCountArgs>(args?: Prisma.Subset<T, ContestPointsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContestPointsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ContestPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestPointsAggregateArgs>(args: Prisma.Subset<T, ContestPointsAggregateArgs>): Prisma.PrismaPromise<GetContestPointsAggregateType<T>>;
    /**
     * Group by ContestPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestPointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ContestPointsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContestPointsGroupByArgs['orderBy'];
    } : {
        orderBy?: ContestPointsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContestPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContestPoints model
     */
    readonly fields: ContestPointsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ContestPoints.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContestPointsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ContestPoints model
 */
export interface ContestPointsFieldRefs {
    readonly id: Prisma.FieldRef<"ContestPoints", 'String'>;
    readonly contestId: Prisma.FieldRef<"ContestPoints", 'String'>;
    readonly userId: Prisma.FieldRef<"ContestPoints", 'String'>;
    readonly point: Prisma.FieldRef<"ContestPoints", 'Int'>;
    readonly rank: Prisma.FieldRef<"ContestPoints", 'Int'>;
}
/**
 * ContestPoints findUnique
 */
export type ContestPointsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter, which ContestPoints to fetch.
     */
    where: Prisma.ContestPointsWhereUniqueInput;
};
/**
 * ContestPoints findUniqueOrThrow
 */
export type ContestPointsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter, which ContestPoints to fetch.
     */
    where: Prisma.ContestPointsWhereUniqueInput;
};
/**
 * ContestPoints findFirst
 */
export type ContestPointsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter, which ContestPoints to fetch.
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestPoints to fetch.
     */
    orderBy?: Prisma.ContestPointsOrderByWithRelationInput | Prisma.ContestPointsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContestPoints.
     */
    cursor?: Prisma.ContestPointsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestPoints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestPoints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContestPoints.
     */
    distinct?: Prisma.ContestPointsScalarFieldEnum | Prisma.ContestPointsScalarFieldEnum[];
};
/**
 * ContestPoints findFirstOrThrow
 */
export type ContestPointsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter, which ContestPoints to fetch.
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestPoints to fetch.
     */
    orderBy?: Prisma.ContestPointsOrderByWithRelationInput | Prisma.ContestPointsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContestPoints.
     */
    cursor?: Prisma.ContestPointsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestPoints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestPoints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContestPoints.
     */
    distinct?: Prisma.ContestPointsScalarFieldEnum | Prisma.ContestPointsScalarFieldEnum[];
};
/**
 * ContestPoints findMany
 */
export type ContestPointsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter, which ContestPoints to fetch.
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestPoints to fetch.
     */
    orderBy?: Prisma.ContestPointsOrderByWithRelationInput | Prisma.ContestPointsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContestPoints.
     */
    cursor?: Prisma.ContestPointsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestPoints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestPoints.
     */
    skip?: number;
    distinct?: Prisma.ContestPointsScalarFieldEnum | Prisma.ContestPointsScalarFieldEnum[];
};
/**
 * ContestPoints create
 */
export type ContestPointsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * The data needed to create a ContestPoints.
     */
    data: Prisma.XOR<Prisma.ContestPointsCreateInput, Prisma.ContestPointsUncheckedCreateInput>;
};
/**
 * ContestPoints createMany
 */
export type ContestPointsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestPoints.
     */
    data: Prisma.ContestPointsCreateManyInput | Prisma.ContestPointsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ContestPoints createManyAndReturn
 */
export type ContestPointsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * The data used to create many ContestPoints.
     */
    data: Prisma.ContestPointsCreateManyInput | Prisma.ContestPointsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ContestPoints update
 */
export type ContestPointsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * The data needed to update a ContestPoints.
     */
    data: Prisma.XOR<Prisma.ContestPointsUpdateInput, Prisma.ContestPointsUncheckedUpdateInput>;
    /**
     * Choose, which ContestPoints to update.
     */
    where: Prisma.ContestPointsWhereUniqueInput;
};
/**
 * ContestPoints updateMany
 */
export type ContestPointsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestPoints.
     */
    data: Prisma.XOR<Prisma.ContestPointsUpdateManyMutationInput, Prisma.ContestPointsUncheckedUpdateManyInput>;
    /**
     * Filter which ContestPoints to update
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * Limit how many ContestPoints to update.
     */
    limit?: number;
};
/**
 * ContestPoints updateManyAndReturn
 */
export type ContestPointsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * The data used to update ContestPoints.
     */
    data: Prisma.XOR<Prisma.ContestPointsUpdateManyMutationInput, Prisma.ContestPointsUncheckedUpdateManyInput>;
    /**
     * Filter which ContestPoints to update
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * Limit how many ContestPoints to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ContestPoints upsert
 */
export type ContestPointsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * The filter to search for the ContestPoints to update in case it exists.
     */
    where: Prisma.ContestPointsWhereUniqueInput;
    /**
     * In case the ContestPoints found by the `where` argument doesn't exist, create a new ContestPoints with this data.
     */
    create: Prisma.XOR<Prisma.ContestPointsCreateInput, Prisma.ContestPointsUncheckedCreateInput>;
    /**
     * In case the ContestPoints was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContestPointsUpdateInput, Prisma.ContestPointsUncheckedUpdateInput>;
};
/**
 * ContestPoints delete
 */
export type ContestPointsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
    /**
     * Filter which ContestPoints to delete.
     */
    where: Prisma.ContestPointsWhereUniqueInput;
};
/**
 * ContestPoints deleteMany
 */
export type ContestPointsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContestPoints to delete
     */
    where?: Prisma.ContestPointsWhereInput;
    /**
     * Limit how many ContestPoints to delete.
     */
    limit?: number;
};
/**
 * ContestPoints without action
 */
export type ContestPointsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestPoints
     */
    select?: Prisma.ContestPointsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestPoints
     */
    omit?: Prisma.ContestPointsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestPointsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ContestPoints.d.ts.map