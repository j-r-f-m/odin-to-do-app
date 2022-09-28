// create the "home"-page
import { NodeFac, IconFac, taskList, crtChevronUp, dltNode } from "./dom";
import { allTasks } from "./data";
import { crtTskForm } from "./form";

import ChevronDown from './images/chevron-down.svg';
import ChevronUp from './images/chevron-up.svg';

const home = () => {
    // this html gets created the first time the side is used
    // its the default starting page

    // --------------------- SIDEBAR --------------------------
    // sidebar-container
    const sideCon = NodeFac('sidebar-container', 'div', '#content').crtNode();

    // header container
    const headerCon = 
        NodeFac('heading-container', 'div', '.sidebar-container').
        crtNode();
    // heading sidebar
    const sidebarH1 = NodeFac
        ('heading-sidebar', 'h1', '.heading-container', "To Do's")
        .crtNode();

    // create task btn
    const taskBtn = NodeFac
        ('btn', 'button', '.sidebar-container', '+ Create Task')
        .crtNode();
    taskBtn.setAttribute('id', 'create-taskBtn')
    taskBtn.addEventListener('click', crtTskForm);

    // create all task summary
    const defaultCon = NodeFac('def-nav-con', 'div', '.sidebar-container').crtNode();
    const defH1Con = NodeFac('def-h1-con', 'div', '.def-nav-con').crtNode();
    const defaultH1 = NodeFac('heading-default', 'div', '.def-h1-con', 'Default').crtNode();
    
    //set icon 
    const defIconDwn = IconFac(ChevronDown, 'icon-chevron', 'icon-chevron-down', defH1Con).crtIcon();
    // need id to delete it later
   
    defIconDwn.addEventListener('click', () => {
        // create container for tasks
        const defaultTasks = NodeFac('default-tasks', 'div', '.def-nav-con').crtNode();
        // display tasks in sidebar
        taskList(allTasks, '.default-tasks');
        // create "chevron-up" to minimize the default tasks, add id to delete it later
        crtChevronUp(ChevronUp, 'icon-chevron', 'icon-chevron-up', defH1Con);
        
        // delete chevron down
        dltNode('#icon-chevron-down');
    })

    // create project nav container
    const projectsCon = 
        NodeFac('prj-nav-con', 'div', '.sidebar-container')
        .crtNode();
    const prjH1Con = NodeFac('prj-h1-con', 'div', '.prj-nav-con').crtNode();    
    const projectH1 = 
        NodeFac('heading-project', 'div', '.prj-h1-con', 'Projects')
        .crtNode();
    //set icon 
    const prjIcon = IconFac(ChevronDown, 'icon-chevron', 'icon-chevron-down', prjH1Con).crtIcon();
    
    // prjIcon.addEventListener('click', () => {
    //     console.log('lol')
    // })

}

export {
    home,
}