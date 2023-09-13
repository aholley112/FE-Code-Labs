// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name,) {
//         this.name = name
       
//     }
// }
// // You will always use the builder. You will only use the name to pass into user and then create methods to create age, address, and phone.

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name)
//     }
    
//     setAge(age) {
//         this.user.age = age
//         return this
//     }

//     setPhone(phone) {
//         this.user.phone = phone
//         return this
//     }

//     setAddress(address) {
//         this.user.address = address 
            return this

//     }
  // CREATING THE BUILD METHOD
//     build() {
//         return this.user
//     }
// }
// Chain them together.
// let user = new UserBuilder('Bob').setAge(10).setPhone("111111").build()
// console.log(user)

// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, {age,phone,address } = {}) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address 
    
// //     }
// // }

// // let user = new User('Bob', {age: 10, phone: '1111', address: new Address ('1', 'Main')})
// // console.log(user)

// // To default a variable
// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, {age, phone, address } = {}) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// let user = new User('Bob', {age: 10, phone: '1111', address: new Address('1', 'Main')})

// console.log(user)

// //OR for defaults somewhere you can remove the paramater and it will come up undefined. In this instance phone is removed and phone will list undefined. You can default the number to something specific if you change it in class User. 

// let user = new User('Bob', {age: 10, address: new Address('1', 'Main')})

// console.log(user)