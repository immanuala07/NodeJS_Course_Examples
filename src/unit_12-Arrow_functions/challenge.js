//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() { // concised normal function

        // const incompletedTask = this.tasks.filter((tasks) => {
        //     // return !tasks.completed
        //     // or
        //     return tasks.completed === false
        // })
        // return incompletedTask

        // or 

        return this.tasks.filter((tasks) => tasks.completed === false) // No need of return in one statement filter function
    }
}

console.log(tasks.getTasksToDo())
