// create the "home"-page
import { node, sidebar } from "./dom";

const home = () => {
    // create side bar
    const side = node();
    side.crtNode('sidebar-container', 'div', '#content');

    // header container
    const h1Container = node();
    h1Container.crtNode('header-container', 'div', '.sidebar-container');

    // heading sidebar
    const h1Sidebar = node();
    h1Sidebar.crtNode('header-sidebar', 'h1', '.header-container', 'TO DOs');

    // create task
    const taskBtn = node();
    taskBtn.crtNode('create-task', 'button', '.sidebar-container', '+ New Task');


}

export {
    home,
}