// managa data
import { NodeFac } from "./dom";
// object that holds all tasks
const allTasks = [
    {
        title: 'test 1',
        descr: 'testing',
        dueDate: '20.1.22',
        project: 'test project 1'
    },
    {
        title: 'test 2',
        descr: 'testing',
        dueDate: '21.1.2200',
        project: 'test project 2'
    }
];

// object that holds all tasks
const allProjects = [
    {
        title: 'Test Project 1',
    },
    {
        title: 'Test Project 2'
    }

];

// factory function that creates tasks
const TaskFac = (title, descr, dueDate, project) => {
    return {title, descr, dueDate, project}
}

// add task to global task array
const addTaskObj = (title, descr, dueDate, project) => {
    // create a new task and push it into the global object
    // gets called by clicking the submit putton
    const tempTask = TaskFac(title, descr, dueDate, project);
    allTasks.push(tempTask)
    console.log(allTasks);

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // If task has same name dont add to array
}




export {
    allTasks,
    allProjects,
    TaskFac,
    addTaskObj,
   
    //formVali,
}