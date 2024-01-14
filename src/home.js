// create the "home"-page
import {
  NodeFac,
  crtChevronDownDef,
  crtChevronDownPrj,
  crtPlusBtnPrj,
  dltNode,
  crtPlusBtnTsk,
} from "./dom";
import { crtTskForm } from "./form";

import ChevronDown from "./images/chevron-down.svg";
import Plus from "./images/plus.svg";

const home = () => {
  // this html gets created the first time the side is used
  // its the default starting page

  // --------------------- SIDEBAR --------------------------
  // sidebar-container
  const sideCon = NodeFac("sidebar-container", "div", "#content").crtNode();

  // header container
  const headerCon = NodeFac(
    "heading-container",
    "div",
    ".sidebar-container"
  ).crtNode();
  // heading sidebar
  const sidebarH1 = NodeFac(
    "heading-sidebar",
    "h1",
    ".heading-container",
    "To Do's"
  ).crtNode();

  // Projects nav con
  const projectsCon = NodeFac(
    "prj-nav-con",
    "div",
    ".sidebar-container"
  ).crtNode();

  // // personal -> all projects go into personal
  // const persH1Con = NodeFac('pers-h1-con', 'div', '.prj-nav-con').crtNode();
  // const persH1 = NodeFac('heading-personal', 'h1', '.pers-h1-con', 'Projects').crtNode();
  // // create plus button for adding new tasks
  // crtPlusBtnTsk(Plus, 'icon', 'icon-plus', persH1Con);

  // projects
  const prjH1Con = NodeFac("prj-h1-con", "div", ".prj-nav-con").crtNode();
  const projectH1 = NodeFac(
    "heading-project",
    "h1",
    ".prj-h1-con",
    "Projects"
  ).crtNode();
  // create plus button for adding new projects
  crtPlusBtnPrj(Plus, "icon", "icon-plus", prjH1Con);
};

export { home };
