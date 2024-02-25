/* const User = {
    name: "Tesla",
    email: "test@example.com",
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "niko", isPaid: false, email: "h@h.com" }
createUser(newUser)



function createCourse(): { name: string, price: number } {
    return { name: "react.js", price: 49.99 }
}



type User = {
    name: string;
    email: string;
    isActive: boolean;
}


function createUserx(user: User): User {
    return { name: "", email: "", isActive: false }
}

createUserx({ name: "", email: "", isActive: false })*/




type User = {
    readonly _id: string
    name: string
    email: string
    isActvie: boolean
    creditCardDetails: cardDetails
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActvie: false,
    creditCardDetails: {
        cardNumber: "1234",
        cardDate: "123",
        cvv: 123
    }
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id= "3324"



export { }