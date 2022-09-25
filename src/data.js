// managa data

// object that holds all tasks
const allTasks = {};

// factory function for tasks
const TaskFac = (title, descr, dueDate, priority) => {
    console.log(title, descr, dueDate, priority);
    return {title, descr, dueDate, priority}
}


function myfunc () {
    console.log('log')
}

export {
    allTasks,
    TaskFac,
    myfunc
}