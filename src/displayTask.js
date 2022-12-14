import { NodeFac, crtPlusBtnTsk, crtDltBtn } from "./dom";
import { allProjects, idxOfObj } from "./data";
import ImgClose from "./images/close.svg";
import Plus from "./images/plus.svg";
// displays task to a corresponding project

const taskOverview = (e) => {
  // tasks-container
  const tskCon = NodeFac(
    "tasks-container-overview",
    "div",
    "#content"
  ).crtNode();

  // headgin container
  const headCon = NodeFac(
    "tsk-heading-con",
    "div",
    ".tasks-container-overview"
  ).crtNode();
  // index of object clicked in the allProjects-array
  // the index is in the parent id of the clicked project button in a string
  // string needs to cleaned of non numeric characters

  // id of the project-object
  let idStr = e.target.parentElement.id;
  idStr = idStr.replace(/\D/g, "");
  // conver to int
  let idInt = parseInt(idStr);

  const idx = idxOfObj(allProjects, idInt);
  // add id
  tskCon.id = `task-overview-${allProjects[idx].title}`;
  //tasks-heading
  const tskH1 = NodeFac(
    "tasks-h1",
    "h1",
    ".tsk-heading-con",
    `${allProjects[idx].title}`
  ).crtNode();
  // container that holds the close and the add buttons
  const conBtns = NodeFac(
    "container-buttons",
    "div",
    ".tsk-heading-con"
  ).crtNode();
  // create plus button for adding new tasks
  crtPlusBtnTsk(Plus, "icon", "icon-plus", conBtns);
  // close button
  crtDltBtn(
    ImgClose,
    "close",
    "icon-close",
    conBtns,
    ".tasks-container-overview"
  );
};

export { taskOverview };
