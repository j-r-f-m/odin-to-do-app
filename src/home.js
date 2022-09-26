// create the "home"-page
import { NodeFac, setIcon } from "./dom";
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

    // create all task summary
    const defaultCon = NodeFac('def-nav-con', 'div', '.sidebar-container').crtNode();
    const defH1Con = NodeFac('def-h1-con', 'div', '.def-nav-con').crtNode();
    const defaultH1 = NodeFac('heading-default', 'div', '.def-h1-con', 'Default').crtNode();
    //set icon 




    const defIcon = setIcon(ChevronDown, 'icon-chevron', defaultCon);


    // create project nav container
    const projectsCon = 
        NodeFac('prj-nav-con', 'div', '.sidebar-container')
        .crtNode();
    const prjH1Con = NodeFac('prj-h1-con', 'div', '.prj-nav-con').crtNode();    
    const projectH1 = 
        NodeFac('heading-project', 'div', '.prj-h1-con', 'Projects')
        .crtNode();
    //set icon 
    const icnChevDwnPrj = new Image();
    icnChevDwnPrj.src = ChevronDown;
    icnChevDwnPrj.className = 'icon-chevron';
    projectsCon.appendChild(icnChevDwnPrj);
}

export {
    home,
}