import ChevronDown from './images/chevron-down.svg';
import ChevronUp from './images/chevron-up.svg';
import ImgClose from "./images/close.svg";

import { taskOverview } from './displayTask';
import { allTasks, allProjects, rmvEle } from "./data";
import { crtPrjForm, crtTskForm } from "./form.js";


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

    })
}

const setDefaultPrj = () => {
    // get the project name from tasks-h1 and set it as default
    // in input field

    // select input field
    const selectPrjIpt = document.getElementById('project')
    // select header of tasks overview to get title
    const prjName = document.querySelector('.tasks-h1')
    console.log(prjName)
    selectPrjIpt.value = prjName.textContent;
}

const crtPrjsBtn = (nameClass, typeOfElement, parent, txt, idOfEle) => {
    // create the projects elements in the side bar -> open project overview 

    // with the last argument the position of the project in the allProjects array
    // is passed and can be used with the event-argument
    const prj = NodeFac(nameClass, typeOfElement, parent, txt, idOfEle).crtNode();
    prj.id = idOfEle;
    prj.addEventListener('click', (e) => {
        //console.log(e.target.textContent)
        
        dltNode('.tasks-container-overview');
        // create container that holds the tasks corresponding to a project
        taskOverview(e);
        tskListByPrj(allTasks, e.target.textContent)
        //taskList(allTasks, '.tasks-container-overview');
        // create tasks container
        //NodeFac('tasks-container', 'div', '.tasks-container-overview').crtNode();
    })
}

const crtDltBtn = (source, nameOfClass, nameOfId, parent, nodeToDlt) => {
    // x-shaped delete button
    const closeIcon = IconFac(ImgClose, nameOfClass, nameOfId, parent).crtIcon();
    closeIcon.addEventListener('click', () => {
        dltNode(nodeToDlt)
    })
}

const crtDltBtnPrj = (source, nameOfClass, nameOfId, parent, nodeToDlt, nodeToDlt2, obj) => {
    // x-shaped delete button for deleteing projects
    // not only the dom-elements have to be deleted, also the array containing 
    // all the projects has to be updated -> deleting corresponding element
    const closeIcon = IconFac(ImgClose, nameOfClass, nameOfId, parent).crtIcon();
    closeIcon.addEventListener('click', (e) => {
        // delete node where the button is located
        dltNode(nodeToDlt);
        // delete projects container;
        //dltNode(nodeToDlt2);
        console.log(nodeToDlt2)
        // remove project from array
        rmvEle(allProjects, obj.title);
        // remove task overview if it is opened
        rmvTskOver(e);
        //dltNode(parent)
        console.log('hi');
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

        // remove project from array
        rmvEle(allTasks, obj.title);


        console.log(allTasks);
    })
}


// remove task overview of corresponding porject when the project gets deleted
const rmvTskOver = (e) => {
    //console.log(e.target.parentElement.firstChild.textContent);
    dltNode(`#${e.target.parentElement.firstChild.textContent}`);
}


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
    console.log(projectName)
    // create the div that holds the tasks -> its needed to delete tasks
    const tasksContainer =  NodeFac('tasks-container', 'div', '.tasks-container-overview').crtNode();
    
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].title)
        if (arr[i].project === projectName) {
            console.log('yes');
            // create the task-div that holds task and dlt-button
            const tempTaskCon = NodeFac(`tasks-container-${i}`, 'div', '.tasks-container').crtNode();
            tempTaskCon.classList.add('tsks-con');
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
        // create project div -> open overview containing corresponding tasks 
        crtPrjsBtn('project', 'div', `.projects-container-${i}`, `${arr[i].title}`, `${i}`);
        // create delete Button that deletes html element and objects in allPrjs. array 
        crtDltBtnPrj(ImgClose, 'close', 'icon-close', tempPrjCon, `.projects-container-${i}`, '.tasks-container-overview', arr[i]);
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