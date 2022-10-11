// managa data

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
const TaskFac = (title, descr, dueDate, project, id, priority) => {
    // the id is needed to keep track of our overall created tasks
    // the tasks will be deleted by the id
    return {title, descr, dueDate, project, id, priority}
}

// add task to global task array
const addTaskObj = (title, descr, dueDate, project, priority) => {
    // create a new task and push it into the global object
    // gets called by clicking the submit putton

    const taskId = taskCount;  

    const tempTask = TaskFac(title, descr, dueDate, project, taskId, priority);
    allTasks.push(tempTask)
    //console.log(allTasks);
    
    return tempTask
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // If task has same name dont add to array
}

const PrjFact = (title, id) => {
    // create project objects
    return {title, id}
}

const addPrjObj = (title) => {
    // create a new project and push it into the allProjects-array
    // gets called by clicking the submit putton

    const prjId = prjsCount;
    const tempPrj = PrjFact(title, prjsCount);
    allProjects.push(tempPrj)
}

const editTskObj = (idxOfObj,editTitle, editDescr, editDueDate, editProject) => {
    // edit task object
    // access object user wants to edit with the passed index
    console.log(allTasks)
    console.log(allTasks[idxOfObj])

    allTasks[idxOfObj].title = editTitle;
    allTasks[idxOfObj].descr = editDescr;
    allTasks[idxOfObj].dueDate = editDueDate;
    allTasks[idxOfObj].project = editProject;
    return allTasks[idxOfObj];
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
    // get array index of the object by id
    const testfunc = (ele) => ele.id === identifier;
    const idxObj = array.findIndex(testfunc);
    return idxObj; 
}

// --------------------save tasks and projects to local storage ----------------



const saveTolocalTsk = (array) => {

    // save all projects to local storage
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

        localStorage.setItem(`${array[i].id}`, 
            JSON.stringify({
                'title': array[i].title,
                'descr': array[i].descr,
                'dueDate': array[i].dueDate,
                'project': array[i].project,
                'id': array[i].id,
                'priority': array[i].priority,
            }))
    }
}

const saveTolocalPrj = (array) => {

    // save all projects to local storage
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);

        localStorage.setItem(`prj-${array[i].id}`, 
            JSON.stringify({
                'title': array[i].title,
                'id': array[i].id,
            }))
    }
}

const dltFromLocalPrj = (e) => {
    // remove project from local storage by id
    localStorage.removeItem(e.target.parentElement.id);
}

const dltFromLocalTsk = (e) => {
    // remove task from local storage by id
    localStorage.removeItem(e.target.parentElement.id);
}

const dltFrmLocTskOver = () => {
    // when a project is deleted also its tasks need to be deleted from local

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
    editTskObj,
    taskCount,
    saveTolocalPrj,
    saveTolocalTsk,
    dltFromLocalPrj,
    dltFromLocalTsk,
}