declare const extendedClient: import("@prisma/client/runtime/client").DynamicClientExtensionThis<import("../generated/prisma/internal/prismaNamespace").TypeMap<import("@prisma/client/runtime/client").InternalArgs & {
    result: {};
    model: {
        $allModels: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        type: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        status: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        paymentMethod: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        role: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        menu: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        rolePermission: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        user: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        session: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        account: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        verification: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        category: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        product: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        productVariant: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        warehouse: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        warehouseStock: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        address: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        promoCoupon: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        order: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        orderItem: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        statusLog: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        productReview: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
    };
    query: {};
    client: {
        $accelerate: () => {
            invalidate: (input: import("@prisma/extension-accelerate").AccelerateInvalidateInput) => Promise<{
                requestId: string;
            }>;
            invalidateAll: () => Promise<{
                requestId: string;
            }>;
        };
    };
}, import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig>, import("../generated/prisma/internal/prismaNamespace").TypeMapCb<import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig>, {
    result: {};
    model: {
        $allModels: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        type: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        status: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        paymentMethod: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        role: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        menu: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        rolePermission: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        user: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        session: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        account: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        verification: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        category: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        product: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        productVariant: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        warehouse: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        warehouseStock: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        address: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        promoCoupon: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        order: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        orderItem: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        statusLog: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
        productReview: {
            aggregate: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "aggregate"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, const ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "aggregate">>;
            count: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "count"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "count">>;
            findFirst: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirst"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirst"> | null>;
            findFirstOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findFirstOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findFirstOrThrow">>;
            findMany: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findMany"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args?: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findMany">>;
            findUnique: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUnique"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUnique"> | null>;
            findUniqueOrThrow: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "findUniqueOrThrow"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; } & (ActualArgs extends {
                select: unknown;
                include: unknown;
            } ? "Please either choose `select` or `include`." : ActualArgs extends {
                select: unknown;
                omit: unknown;
            } ? "Please either choose `select` or `omit`." : unknown)) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "findUniqueOrThrow">>;
            groupBy: () => <This, FormalArgs extends import("@prisma/client/runtime/client").Args<This, "groupBy"> & import("@prisma/extension-accelerate").PrismaCacheStrategy, ActualArgs extends FormalArgs>(this: This, args: { [key in keyof ActualArgs]: key extends keyof FormalArgs ? ActualArgs[key] : never; }) => import("@prisma/extension-accelerate").AcceleratePromise<import("@prisma/client/runtime/client").Result<This, ActualArgs, "groupBy">>;
        };
    };
    query: {};
    client: {
        $accelerate: () => {
            invalidate: (input: import("@prisma/extension-accelerate").AccelerateInvalidateInput) => Promise<{
                requestId: string;
            }>;
            invalidateAll: () => Promise<{
                requestId: string;
            }>;
        };
    };
}>;
type ExtendedPrismaClient = typeof extendedClient;
export declare const prisma: ExtendedPrismaClient;
export {};
//# sourceMappingURL=client.d.ts.map