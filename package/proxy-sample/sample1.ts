interface User {
    name: string
    age: number
    [key: string]: string | number
}

const user: User = {
    name: 'John',
    age: 30,
}

const userProxy = new Proxy(user, {
    get(target: User, prop: string | Symbol, receiver: any) {
        console.log(`Getting property: ${String(prop)}`)
        console.log(`Target: ${target}`)
        const result = Reflect.get(target, String(prop), receiver);
        console.log(`Result: ${result}`)
        return target[prop as keyof User]
    },
    set(target: User, prop: string | Symbol, value: any, receiver: any) {
        console.log(`Setting property: ${String(prop)} to ${value}`)
        console.log(`Target: ${target}`)
        target[prop as keyof User] = value
        return true
    }
})

console.log(userProxy.name)
userProxy.age = 31

//default proxy
console.log('default proxy--------------------')
const userProxy2 = new Proxy(user, {})
console.log(userProxy2.name)
userProxy2.age = 31
console.log(userProxy2)

//normal object
console.log('normal object--------------------')
const user2 = {
    name: 'John',
    age: 30,
}
console.log(user2.name)
user2.age = 31
console.log(user2)

