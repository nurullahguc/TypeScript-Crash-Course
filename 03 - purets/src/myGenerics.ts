const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val
}


function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type) {
    return val
}


// identityThree(true)

function identityFour<T>(val: T) {
    return val
}

interface Boottle {
    brand: string,
    type: number,
}

// identityFour<Boottle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations 
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations 
    const myIndex = 4
    return products[myIndex]
}