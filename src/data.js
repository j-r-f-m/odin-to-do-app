// managa data

// object that holds all tasks
const allTasks = {};

// factory function for tasks
const TaskFac = (title, descr, dueDate, tag) => {
    console.log(title, descr, dueDate, tag);
    return {title, descr, dueDate, tag}
}


function myfunc () {
    console.log('log')
}

export {
    allTasks,
    TaskFac,
    myfunc
}