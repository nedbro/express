
const add = <A extends number, B extends number>(a: A, b: B) => {
    return a + b;
};

type Helper = 1 | 2 | 3 | 4 | 5;

type add1<A extends Helper> = A extends 1 ? 2 :
    (A extends 2 ? 3 :
        (A extends 3 ? 4 :
            (A extends 4 ? 5 :
                (A extends 5 ? 6 : never))));

type add2<A extends Helper> = A extends 1 ? 3 :
    (A extends 2 ? 4 :
        (A extends 3 ? 5 :
            (A extends 4 ? 6 :
                (A extends 5 ? 7 : never))));

type add3<A extends Helper> = A extends 1 ? 4 :
    (A extends 2 ? 5 :
        (A extends 3 ? 6 :
            (A extends 4 ? 7 :
                (A extends 5 ? 8 : never))));

type add4<A extends Helper> = A extends 1 ? 5 :
    (A extends 2 ? 6 :
        (A extends 3 ? 7 :
            (A extends 4 ? 8 :
                (A extends 5 ? 9 : never))));

type add5<A extends Helper> = A extends 1 ? 6 :
    (A extends 2 ? 7 :
        (A extends 3 ? 8 :
            (A extends 4 ? 9 :
                (A extends 5 ? 10 : never))));


type Add<A extends Helper, B extends Helper> = A extends 1 ? add1<B> :
    (A extends 2 ? add2<B> :
        (A extends 3 ? add3<B> :
            (A extends 4 ? add4<B> :
                (A extends 5 ? add5<B> : never))));

type result1 = Add<1, Add<1, 2>>;

type createArray<Length, Element, Array extends Element[] = []> =
    Array['length'] extends Length ? Array :
    createArray<Length, Element, [Element, ...Array]>

type Add2<A extends number, B extends number> = [...createArray<A, 1>, ...createArray<B, 1>]['length'];

type result2 = Add2<5, Add2<5, 5>>;