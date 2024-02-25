interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string,
    //startTrail(): () => string,
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const tesla: Admin = {
    dbId: 22,
    role: "admin",
    email: "test",
    githubToken: "123",
    userId: 12,
    startTrail: () => {
        return "trails started"
    },
    getCoupon: (name: "sadf", off: 45) => {
        return 10
    }
}

tesla.email = "asdf"
// tesla.dbId = 12

