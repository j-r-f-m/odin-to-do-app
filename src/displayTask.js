import { NodeFac, crtPlusBtnTsk, crtDltBtn, } from "./dom";
import { allProjects } from "./data";
import ImgClose from "./images/close.svg";
import Plus from "./images/plus.svg"
// displays task to a corresponding project


const taskOverview = (e) => {
        // tasks-container
        const tskCon = NodeFac('tasks-container-overview', 'div', '#content').crtNode();
        // headgin container
        const headCon = NodeFac('tsk-heading-con', 'div', '.tasks-container-overview').crtNode();
        // index of object clicked in the allProjects-array
        const idx = parseFloat(e.target.id);
        //tasks-heading
        const tskH1 = NodeFac('tasks-h1','h1','.tsk-heading-con', `${allProjects[idx].title}`).crtNode();
        // container that holds the close and the add buttons
        const conBtns = NodeFac('container-buttons', 'div', '.tsk-heading-con').crtNode();
        // create plus button for adding new projects
        crtPlusBtnTsk(Plus, 'icon', 'icon-plus', conBtns);   
        // close button
        crtDltBtn(ImgClose, 'close', 'icon-close', conBtns, '.tasks-container-overview');
}

export {
    taskOverview,
}