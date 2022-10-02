import { NodeFac, IconFac, dltNode, crtDltBtn, } from "./dom";
import { allProjects } from "./data";
import ImgClose from "./images/close.svg";
// displays task to a corresponding project


const taskOverview = (e) => {
       // tasks-container
       const tskCon = NodeFac('tasks-container-overview', 'div', '#content').crtNode();
       // headgin container
       const headCon = NodeFac('tsk-heading-con', 'div', '.tasks-container-overview').crtNode();
       // index of object clicked in the allProjects-array
       const idx = parseFloat(e.target.id);
       //tasks-heading
       const tskh1 = NodeFac('tasks-h1','h1','.tsk-heading-con', `${allProjects[idx].title}`).crtNode();
       // close button
       crtDltBtn(ImgClose, 'close', 'icon-close', headCon, '.tasks-container-overview');
}

export {
    taskOverview,
}