import ChevronDown from './images/chevron-down.svg';
import ChevronUp from './images/chevron-up.svg';
import { allTasks } from "./data";

// dom manipulation

const NodeFac = (nameClass, typeOfElement, parent, txt) => {
    // factory function that creates node objects with a class and appends it to
    // its parent


    // creates node and returns it
    const crtNode = ()=> {
        // select parent element
        const parentElement = document.querySelector(parent);   

        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent= txt;
        parentElement.appendChild(createDomElement);

        // created node is returned -> element methods can be used
        return createDomElement;
    }

    return {crtNode};

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
    console.log(tempChevron)
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
    console.log(tempChevron)
    tempChevron.addEventListener('click', () => {
        // create container for tasks
        const defaultTasks = NodeFac('default-tasks', 'div', '.prj-nav-con').crtNode();
        // display tasks in sidebar
        //taskList(allTasks, '.default-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUpPrj(ChevronUp, 'icon-chevron', 'icon-chevron-up-prj', parent);
        
        // delete chevron down
        dltNode('#icon-chevron-down-prj');
    })
};

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
    return {crtIcon}
}

const taskList = (arr, parent) => {
    // display tasks in sidebar
    for (let i = 0;i < arr.length; i++) {
        console.log(arr[i].title)
       
        const newTask = NodeFac('task', 'div', parent, `${arr[i].title} - Due ${arr[i].dueDate}`).crtNode();
        newTask.setAttribute('data', `${arr[i].title}`);
    }

}

export {
    NodeFac,
    dltNode,
    IconFac,
    taskList,
    crtChevronDownDef,
    crtChevronUpDef,
    crtChevronDownPrj,
    crtChevronUpPrj,
    dltClassEle,
}