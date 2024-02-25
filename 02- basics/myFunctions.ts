function addTwo(num: number): number {
    return num + 2
    // return "hallo"
}


function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }


let myValue = addTwo(5)
getUpper("tesla")
signUpUser("tesla", "yo@abq.com", false)
loginUser("h", "r@r.com")


// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero: string): string => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

export { }