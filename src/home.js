// create the "home"-page
import { NodeFac } from "./dom";
import { TaskFac } from "./data";
import { crtTskForm } from "./form";

import ChevronDown from './images/chevron-down.svg';

const home = () => {

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

    // create project nav container
    const projectsCon = 
        NodeFac('prj-nav-con', 'div', '.sidebar-container')
        .crtNode();
    const prjH1Con = NodeFac('prj-h1-con', 'div', '.prj-nav-con').crtNode();    
    const projectH1 = 
        NodeFac('heading-project', 'div', '.prj-h1-con', 'Projects')
        .crtNode();
    //set icon 
    const iconChevronDown = new Image();
    iconChevronDown.src = ChevronDown;
    iconChevronDown.className = 'icon-chevron';
    projectsCon.appendChild(iconChevronDown);
}

export {
    home,
}