// managa data

// object that holds all tasks
const allTasks = [];

// factory function that creates tasks
const TaskFac = (title, descr, dueDate, project) => {
    
    return {title, descr, dueDate, project}
}

// MÜLLLL
const getInputData = (title) => {
    // get input value from passed dom obj's
    console.log(title.value)
}

// add 
const addTaskObj = (title, descr, dueDate, project) => {
    console.log(title)
    const tempTask = TaskFac(title, descr, dueDate, project);

    allTasks.push(tempTask)
    
    console.log(allTasks);
}



function myfunc () {
    // test
    console.log('log')
}

export {
    allTasks,
    TaskFac,
    addTaskObj,
    getInputData,
    myfunc,
}