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

    //console.log('adding project');

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


// LÖSCHEN ????????????????????? Überprüfen ob das raus kann
/* const rmvEle = (array, nameOfEle) => {
    console.log('array: ')
    console.log(array)
    console.log('name of Ele: ' + nameOfEle)
    // removes element from array
    const testfunc = (ele) => ele.title === nameOfEle
        
    const idxObj = array.findIndex(testfunc);
    console.log(idxObj)
    array.splice(idxObj, 1);
} */

const rmvTsk = (array, identifier) => {
    // delete task that user clicked on by id

    // identifier is a string a needs to be converted to a number
    const ident = parseInt(identifier) 
    // removes task from allTasks
    const testfunc = (ele) => ele.id === ident;

    const idxObj = array.findIndex(testfunc);

    array.splice(idxObj, 1);
}

const rmvTskByPrj = (array, projectName) => {
    // delete all tasks corresponding to an object from allTasks array
    console.log(projectName)
    let i = 0;
    while (i < array.length) {
        if (array[i].project === projectName) {
        // remove from local storage
        let idOfTsk = array[i].id;
        console.log(idOfTsk);
        // remove task from allTask array and from local storage
        localStorage.removeItem(array[i].id);
        array.splice(i, 1);


        } else {
        ++i;
        }
    }
    console.log('allTasks');
    console.log(allTasks);
    return array;
}

const idxOfObj = (array, identifier) => {
    // get array index of the object by id
    const testfunc = (ele) => ele.id === identifier;
    const idxObj = array.findIndex(testfunc);
    return idxObj; 
}

// --------------------save tasks and projects to local storage ----------------


const saveTolocalTsk = (array) => {
    // save task to local storage using the id
    for (let i = 0; i < array.length; i++) {
        // local storage saves in the JSON data format
        // the objects need to be turned into strings
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
        // turn object to string
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

const loadData = () => {
    // repopulate allTasks and allProjects arrays by iterating over local storage
    // 
/*     console.log('refresh');
    console.log('local Storage')
    console.log(localStorage);
    console.log('allTasks');
    console.log(allTasks);
    console.log('allProjects');
    console.log(allProjects); */
    
    // get all keys of objects that are in local storage
    const keys = Object.keys(localStorage);
    for (let key of keys) {
        // check if localStorage object is project or task
        // the id of the projects in storage beginn with p
        if (key[0] === 'p') {
            // turn json string into js-object
            const obj = JSON.parse(localStorage.getItem(key));
            //console.log('project');
            // console.log(localStorage.getItem(key));
            // console.log(obj);
            // push object from local storage into allProjects array
            allProjects.push(obj);

        } else {
            // convert string to object and push it into allTasks array
            allTasks.push(JSON.parse(localStorage.getItem(key)));
        }
    }
    // set task counter to keep id's unique
    // taskCount = allTasks.length;
    taskCount = nextId(allTasks);
    prjsCount = nextId(allProjects);



    console.log('prjsCount')
    console.log(prjsCount)
    console.log('projects');
    console.log(allProjects);
    console.log('allTasks');
    console.log(allTasks);
}

const nextId = (array) => {
    // in order to keep adding unique id's to the object we create, we need to
    // keep increasing the id count. To achieve this we need to get the highest 
    // id that is available in the allProjects or allTasks array

    
    console.log('array')
    console.log(array)

    if (array.length === 0) {
        console.log('array length 0')
        return 0;
    } else {
        // save id's of the objects in the given array
        const idArray = [];

        // get highest id
        for (let i = 0; i < array.length; i++) {
            idArray.push(array[i].id);
            console.log('highest id')
            console.log(idArray)
        }


        // get highest id-attribute of object in array
        const maxVal = Math.max(...idArray);
        console.log('maxVal');
        console.log(maxVal);
        return maxVal+1;
    }


}  

// not finished !!!!!!!!!!!!!!!!! DOEES not work
const checkName = (newName, array, inputTitleObj) => {
    console.log(array);
    // check if the project- or taskname has already been taken
    // look if newName is already a title in allTask or allProjects array

    if (array === undefined) {
        // check if allProjects or allTasks has elements
        console.log('array has no length');
    } else {
        for (let i; i <= array.length; i++) {



            if (newName === array[i].title) {
                console.log('already taken');
                // set the value of the input field to an empty string
                // the form will not pass validation because name was already taken
                //inputTitleObj.value = '';
            } else {
                console.log('name not taken');
            }
        }
    }


    


};

export {
    allTasks,
    allProjects,
    TaskFac,
    addTaskObj,
    PrjFact, 
    addPrjObj,
    //rmvEle,
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
    loadData,
    prjsCount,
    checkName,
    
}