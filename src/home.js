// create the "home"-page
import { NodeFac, crtChevronDownDef, crtChevronDownPrj, crtPlusBtnPrj, dltNode,  } from "./dom";
import { crtTskForm } from "./form";

import ChevronDown from './images/chevron-down.svg';
import Plus from './images/plus.svg';

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
    // const taskBtn = NodeFac
    //     ('btn', 'button', '.sidebar-container', '+ Create Task')
    //     .crtNode();
    // taskBtn.setAttribute('id', 'create-taskBtn')
    // taskBtn.addEventListener('click', () => {
    //     dltNode('.dialog');
    //     crtTskForm();
    //     //dltNode('.tasks-container-overview');
    // });

    // create task nav container
    // const defaultCon = NodeFac('def-nav-con', 'div', '.sidebar-container').crtNode();
    // const defH1Con = NodeFac('def-h1-con', 'div', '.def-nav-con').crtNode();
    // const defaultH1 = NodeFac('heading-default', 'h1', '.def-h1-con', 'Default').crtNode();
    

    // create chevron down button for default
    //crtChevronDownDef(ChevronDown, 'icon-chevron', 'icon-chevron-down-def', defH1Con);

    // create chevron down button for projects
    // create project nav container
    const projectsCon = NodeFac('prj-nav-con', 'div', '.sidebar-container').crtNode();
    const prjH1Con = NodeFac('prj-h1-con', 'div', '.prj-nav-con').crtNode();    
    const projectH1 = NodeFac('heading-project', 'h1', '.prj-h1-con', 'Projects').crtNode();
    // create plus button for adding new projects
    crtPlusBtnPrj(Plus, 'icon', 'icon-plus', prjH1Con);
    //create chevron down for projects 
    // crtChevronDownPrj(ChevronDown, 'icon-chevron', 'icon-chevron-down-prj', prjH1Con);

    

}

export {
    home,
}