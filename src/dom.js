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

// create chevron up button
const crtChevronUpDef = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    // purpose of button ist to close the dropdown
    // 1. delete list of task
    // 2. delete button and add chevron up button
    tempChevron.addEventListener('click', () => {
        // delete task list
        dltNode('.default-tasks');
        crtChevronDownDef(ChevronDown, 'icon-chevron', 'icon-chevron-down-def', parent);
        // delete chevron up
        dltNode('#icon-chevron-up-def');

    })
}
// create chevron down button for Default Projects
const crtChevronDownDef = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();

    tempChevron.addEventListener('click', () => {
        // create container for tasks
        const defaultTasks = NodeFac('default-tasks', 'div', '.def-nav-con').crtNode();
        // display tasks in sidebar
        taskList(allTasks, '.default-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUpDef(ChevronUp, 'icon-chevron', 'icon-chevron-up-def', parent);

        // delete chevron down
        dltNode('#icon-chevron-down-def');
    })
};

const crtChevronUpPrj = (source, nameOfClass, nameOfId, parent) => {
    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    // purpose of button ist to close the dropdown
    // 1. delete list of task
    // 2. delete button and add chevron up button
    tempChevron.addEventListener('click', () => {
        // delete task list
        dltNode('.projects-tasks');
        crtChevronDownPrj(ChevronDown, 'icon-chevron', 'icon-chevron-down-prj', parent);
        // delete chevron up
        dltNode('#icon-chevron-up-prj');
    })
}

// create chevron up button for Default Projects
const crtChevronDownPrj = (source, nameOfClass, nameOfId, parent) => {

    const tempChevron = IconFac(source, nameOfClass, nameOfId, parent).crtIcon();
    tempChevron.addEventListener('click', () => {
        // create container for tasks
        const defaultProjects = NodeFac('projects-tasks', 'div', '.prj-nav-con').crtNode();
        // display tasks in sidebar
        projectsList(allProjects, '.projects-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUpPrj(ChevronUp, 'icon-chevron', 'icon-chevron-up-prj', parent);

        // delete chevron down
        dltNode('#icon-chevron-down-prj');
    })
};

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
        tskListByPrj(allTasks, '.tasks-container-overview', e.target.textContent)
        dltNode('.tasks-container-overview');
        taskOverview(e);
    })
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
    closeIcon.addEventListener('click', () => {
        dltNode(nodeToDlt);
        rmvEle(allProjects, obj.title);
        console.log(allProjects);
    })
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

const taskList = (arr, parent) => {
    // display all tasks in sidebar
    for (let i = 0; i < arr.length; i++) {
        // 
        const newTask = NodeFac('task', 'div', parent, `${arr[i].title} - ${arr[i].dueDate}`).crtNode();
        newTask.setAttribute('data', `${arr[i].title}`);
    }
}

const tskListByPrj = (arr, parent, projectName) => {
    console.log(projectName)
    
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].title)
        if (arr[i].project === projectName) {
            console.log('yes');
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
        crtDltBtnPrj(ImgClose, 'close', 'icon-close', tempPrjCon, `.projects-container-${i}`, arr[i]);
    }
}



export {
    NodeFac,
    dltNode,
    IconFac,
    taskList,
    projectsList,
    crtChevronDownDef,
    crtChevronUpDef,
    crtChevronDownPrj,
    crtChevronUpPrj,
    dltClassEle,
    crtDltBtn,
    crtPlusBtnPrj,
    crtPlusBtnTsk,
}