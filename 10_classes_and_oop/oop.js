// object Literals
const user = {
    username: " shivam",
    loginCount: 8,
    signedIT: true,
    getUserDetails: function() {
        // console.log("User")

        // console.log(`Username: ${this.username} `)
        console.log(this)
    }
}
// console.log(user.getUserDetails())
console.log(user.username)
// console.log(this)





