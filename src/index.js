import './style.css';

import { home } from './home'
import { allTasks, allProjects, loadData } from './data'
import { projectsList2 } from './dom'

(() => {
    home();
    allTasks;
    loadData();
    // display tasks in sidebar
    projectsList2(allProjects, '.projects-tasks');
})();
