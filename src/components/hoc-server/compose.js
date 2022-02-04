const compose =
    (...funcs) =>
    (comp) =>
        funcs.reduceRight(
            (Wrapped, func) =>
                func(Wrapped),
            comp
        );

export { compose };
