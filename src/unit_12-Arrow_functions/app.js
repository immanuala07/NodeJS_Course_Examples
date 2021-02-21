// const square = function(x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['jen', 'ben', 'rob'],
    // privateGuestList: () => { // Arrow functons doesnt suit or work on this property
    //     console.log(`Guest list for ${this.name}`)
    // },

    // privateGuestList: function() { // Standard functons suit or work on this property
    //     console.log(`Guest list for ${this.name}`)
    // },

    privateGuestList() { // Concised Standard functons suit or work on this property and it is not arrow function
        console.log(`Guest list for ${this.name}`)
            // this.guestList.forEach(function(guest) { // The output of the this.name will be undefined
            //     console.log(`${guest} is attending ${this.name}`) 
            // })

        // Arrow Functions:
        // Does not have its own bindings to this or super, and should not be used as methods.
        // Does not have arguments, or new.target keywords.
        // Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
        // Can not be used as constructors.
        // Can not use yield [used to pause and resume a generator function (function* or legacy generator function)], within its body.
        this.guestList.forEach((guest) => { // Since this.name is already accessed in privateGuestList function so we can use arrow functions
            console.log(`${guest} is attending ${this.name}`)
        })
    }
}

event.privateGuestList()
