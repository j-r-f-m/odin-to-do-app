// managa data
import { NodeFac } from "./dom";
// object that holds all tasks
const allTasks = [];

// object that holds all tasks
const allProjects = [];

// count the total number of created tasks
// the tasks need an unique id so we can delete it 
// when clicking the task submit button the taskCount gets increased by 1
let taskCount = 0;

const increaseTaskCount = () => {
    taskCount += 1;
}

// count total number of projects to create a unique identifier
let prjsCount = 0;

const increasePrjsCount = () => {
    prjsCount += 1;
}

// factory function that creates tasks
const TaskFac = (title, descr, dueDate, project, id) => {
    // the id is needed to keep track of our overall created tasks
    // the tasks will be deleted by the id
    return {title, descr, dueDate, project, id}
}

// add task to global task array
const addTaskObj = (title, descr, dueDate, project) => {
    // create a new task and push it into the global object
    // gets called by clicking the submit putton

    const taskId = taskCount;  

    const tempTask = TaskFac(title, descr, dueDate, project, taskId);
    allTasks.push(tempTask)
    //console.log(allTasks);
    
    return tempTask
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // If task has same name dont add to array
}

const PrjFact = (title, id) => {
    return {title, id}
}

const addPrjObj = (title) => {
    // create a new project and push it into the allProjects-array
    // gets called by clicking the submit putton

    const prjId = prjsCount;
    const tempPrj = PrjFact(title, prjsCount);
    allProjects.push(tempPrj)
}

const rmvEle = (array, nameOfEle) => {
    console.log('array: ')
    console.log(array)
    console.log('name of Ele: ' + nameOfEle)
    // removes element from array
    const testfunc = (ele) => ele.title === nameOfEle
        
    const idxObj = array.findIndex(testfunc);
    console.log(idxObj)
    array.splice(idxObj, 1);
}

const rmvTsk = (array, identifier) => {
    // delete task that user clicked on by id

    // identifier is a string a needs to be converted to a number
    const ident = parseInt(identifier) 
    // removes task from allTasks
    const testfunc = (ele) => ele.id === ident;

    const idxObj = array.findIndex(testfunc);

    array.splice(idxObj, 1);
}

const rmvTskByPrj = (array, title) => {
        // delete all tasks corresponding to an object
        const testfunc = (ele) => ele.title === title;
        const idxObj = array.findIndex(testfunc);
        array.splice(idxObj, 1);
}

const idxOfObj = (array, identifier) => {
    // get array index of the object
    const testfunc = (ele) => ele.id === identifier;
    const idxObj = array.findIndex(testfunc);
    return idxObj; 
}

export {
    allTasks,
    allProjects,
    TaskFac,
    addTaskObj,
    PrjFact, 
    addPrjObj,
    rmvEle,
    rmvTsk,
    increaseTaskCount,
    increasePrjsCount,
    idxOfObj,
    rmvTskByPrj,
    taskCount
}