import ImgClose from "./images/close.svg";
import Edit from "./images/pencil.svg";

import { taskOverview } from './displayTask';
import { allTasks, allProjects, rmvTsk, rmvTskByPrj, dltFromLocalPrj, dltFromLocalTsk, dltFrmLocTskOver } from "./data";
import { crtPrjForm, crtTskForm, editTskForm } from "./form.js";


// dom manipulation

const NodeFac = (nameClass, typeOfElement, parent, txt) => {
    // factory function that creates node objects with a class and appends it to
    // its parent

    // creates node and returns it
    const crtNode = () => {
        // select parent element
        const parentElement = document.querySelector(parent);

        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent = txt;
        parentElement.appendChild(createDomElement);

        // created node is returned -> element methods can be used
        return createDomElement;
    }

    return { crtNode };

}

const dltClassEle = (nameOfClass) => {
    // remove all elements with specific class 

    // get all elements you want to delete by their class names
    const classElements = document.querySelectorAll(nameOfClass);
    // iterate over them to delete them
    classElements.forEach(classElements => {
        classElements.remove();
    })
}

const dltNode = (selector) => {
    // check if element exists befor trying to delete it


    if (document.querySelector(selector)) {
        // delete node
        const node = document.querySelector(selector);
        node.remove();
    }
}

const dltNodeById = (id) => {
    if (document.getElementById(id)) {
        // delete node
        const node = document.getElementById(id);
        node.remove();
    }
}

/* ---------------------------- Buttons --------------------------------------- */
const crtPlusBtnPrj = (source, nameOfClass, nameOfId, parent) => {
    // create plus button -> create new Project
    const tempPlus = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    tempPlus.addEventListener('click', () => {
        dltClassEle('.dialog');
        crtPrjForm();
    })
}

const crtPlusBtnTsk = (source, nameOfClass, nameOfId, parent) => {
    // create plus button -> create new Project
    const tempPlus = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    tempPlus.addEventListener('click', () => {
        dltClassEle('.dialog');
        crtTskForm();
        setDefaultPrj();
        //console.log(allTasks);

    })
}


const setDefaultPrj = () => {
    // get the project name from tasks-h1 and set it as default
    // in input field

    // select input field
    const selectPrjIpt = document.getElementById('project')
    // select header of tasks overview to get title
    const prjName = document.querySelector('.tasks-h1')
    
    selectPrjIpt.value = prjName.textContent;
}

const crtPrjsBtn = (nameClass, typeOfElement, parent, txt, idOfEle) => {
    // create the projects elements in the side bar -> open project overview 
 
    // with the last argument the position of the project in the allProjects array
    // is passed and can be used with the event-argument
    const prj = NodeFac(nameClass, typeOfElement, parent, txt, idOfEle).crtNode();
    //prj.id = idOfEle;
    prj.addEventListener('click', (e) => {
        
        dltNode('.tasks-container-overview');
        // create container that holds the tasks corresponding to a project
        taskOverview(e);
        tskListByPrj(allTasks, e.target.textContent)
        //taskList(allTasks, '.tasks-container-overview');
        // create tasks container
        //NodeFac('tasks-container', 'div', '.tasks-container-overview').crtNode();
    })
    console.log(allProjects);
    console.log(allTasks);
}

const crtDltBtn = (source, nameOfClass, nameOfId, parent, nodeToDlt) => {
    // x-shaped delete button
    const closeIcon = IconFac(ImgClose, nameOfClass, nameOfId, parent).crtIcon();
    closeIcon.addEventListener('click', () => {
        dltNode(nodeToDlt)
    })
}

const crtDltBtnPrj = (source, nameOfClass, nameOfId, parent, nodeToDlt, obj) => {
    // x-shaped delete button for deleteing projects
    // not only the dom-elements have to be deleted, also the array containing 
    // all the projects has to be updated -> deleting corresponding element
    const closeIcon = IconFac(ImgClose, nameOfClass, nameOfId, parent).crtIcon();


    closeIcon.addEventListener('click', (e) => {
        // delete container with project name and the delete button
        dltNode(nodeToDlt);
        console.log(obj.title)
        // remove project from array
        rmvTsk(allProjects, obj.id);
        // remove tasks corresponding to project that will be removed from allTasks
        // array
        rmvTskByPrj(allTasks, obj.title);
        // remove task overview if it is opened
        // rmvTskOver(e);
        dltNode('.tasks-container-overview')
        //dltNode(parent)
        // console.log('allProjects');
        // console.log(allProjects);
        // console.log('allTasks');
        // console.log(allTasks)


        dltFromLocalPrj(e);
        //console.log(e.target.parentElement.firstChild.textContent)
        dltFrmLocTskOver(e.target.parentElement.firstChild.textContent);

    })
}



const crtDltBtnTsk = (source, nameOfClass, nameOfId, parent, nodeToDlt, obj) => {
    // x-shaped delete button for deleteing tasks
    // not only the dom-elements have to be deleted, also the array containing 
    // all the projects has to be updated -> deleting corresponding element
    const closeIcon = IconFac(ImgClose, nameOfClass, nameOfId, parent).crtIcon();
    closeIcon.addEventListener('click', (e) => {
        // delete node where the button is located
        dltNode(nodeToDlt);
        // delete projects container;

        // remove task from array
        
        rmvTsk(allTasks, e.target.parentElement.id);

        //console.log(document.querySelector('.tasks-h1').textContent)
        //console.log(allTasks);

        dltFromLocalTsk(e);
    })
}

const crtEditBtnTsk = (source, nameOfClass, nameOfId, parent) => {
    const editIcon = IconFac(Edit, nameOfClass, nameOfId, parent).crtIcon();
    editIcon.addEventListener('click', (e) => {

        dltClassEle('.dialog');
        console.log(e.target.parentElement.id)
        editTskForm(e);
        //setDefaultPrj();
        //console.log(allTasks);
    })
}

// remove task overview of corresponding porject when the project gets deleted
// const rmvTskOver = (e) => {
    
//     dltNodeById(`task-overview-${e.target.parentElement.firstChild.textContent}`);
// }


//const addPrj = IconFac();
const IconFac = (source, nameOfClass, nameOfId, parent) => {
    // create icon

    const crtIcon = () => {
        const icon = new Image();
        icon.src = source;
        icon.id = nameOfId
        icon.className = nameOfClass;
        parent.appendChild(icon);
        return icon;
    }
    return { crtIcon }
}

const tskListByPrj = (arr, projectName) => {
    // create the tasklist corresponding to a project
    // iterate over the allTasks array and display the tasks corresponding to the project

    // create the div that holds the tasks -> its needed to delete tasks
    const tasksContainer =  NodeFac('tasks-container', 'div', '.tasks-container-overview').crtNode();
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].project === projectName) {
            
            // create the task-div that holds task and dlt-button
            const tempTaskCon = NodeFac(`tasks-container-${i}`, 'div', '.tasks-container').crtNode();
            tempTaskCon.classList.add('tsks-con');
            tempTaskCon.id = `${arr[i].id}`;
            // create Edit Button
            crtEditBtnTsk(Edit, 'edit', 'icon-edit', tempTaskCon, `.tasks-container-${i}`);
            // display the title of the task and the due date
            const newTask = NodeFac('task', 'div', `.tasks-container-${i}`, `${arr[i].title} - ${arr[i].dueDate}`).crtNode();
            // create delete Button that deletes html element and objects in allPrjs. array 
            crtDltBtnTsk(ImgClose, 'close', 'icon-close', tempTaskCon, `.tasks-container-${i}`, '.tasks-container-overview', arr[i]);
        }
    }
}

const projectsList = (arr, parent) => {
    // display all projects in sidebar
    for (let i = 0; i < arr.length; i++) {
        // create the project-div that holds project and dlt-button
        const tempPrjCon = NodeFac(`projects-container-${i}`, 'div', '.projects-tasks').crtNode();
        tempPrjCon.classList.add('projects-container');
        tempPrjCon.id = `prj-${arr[i].id}`;

        // create project div -> open overview containing corresponding tasks 
        crtPrjsBtn('project', 'div', `.projects-container-${i}`, `${arr[i].title}`, `${i}`);
        // create delete Button that deletes html element and objects in allPrjs. array 
        crtDltBtnPrj(ImgClose, 'close', 'icon-close', tempPrjCon, `.projects-container-${i}`,  arr[i]);
    }
}



export {
    NodeFac,
    dltNode,
    IconFac,
    tskListByPrj,
    projectsList,
    dltClassEle,
    crtDltBtn,
    crtPlusBtnPrj,
    crtPlusBtnTsk,
}