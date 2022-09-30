// create from to create task
import { NodeFac, dltNode, dltClassEle, crtChevronDownDef, crtChevronDownPrj } from "./dom";
import { addTaskObj } from './data';

import ChevronDown from './images/chevron-down.svg';
import ChevronUp from './images/chevron-up.svg';


const crtTskForm = () => {
    // create input form with model to get data for task

    //modal - create dialog
    const inputModal = NodeFac('dialog', 'dialog', '#content').crtNode();
    inputModal.setAttribute('id', 'ipt-dialog');

    //------------------------------- form ------------------------------
    const form = NodeFac('input-form', 'form', '.dialog').crtNode();
    form.setAttribute('method', 'dialog');
    // title
    const labelTitle = NodeFac('label', 'label', '.input-form', 'Title').crtNode();
    labelTitle.setAttribute('for', 'title');
    const inputTitle = NodeFac('input', 'input', '.input-form').crtNode();
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('id', 'task-title');
    inputTitle.required = true;
    //description
    const labeDescr = NodeFac('label', 'label', '.input-form', 'Description').crtNode();
    labeDescr.setAttribute('for', 'description');
    const inputDescr = NodeFac('input', 'input', '.input-form').crtNode();
    inputDescr.setAttribute('type', 'text');
    inputDescr.setAttribute('name', 'description');
    inputDescr.setAttribute('id', 'task-description');
    inputDescr.required = true;
    // due date
    const labelDue = NodeFac('label', 'label', '.input-form', 'Due Date').crtNode();
    labelDue.setAttribute('for', 'due-date');
    const inputDue = NodeFac('input', 'input', '.input-form').crtNode();
    inputDue.setAttribute('type', 'text');
    inputDue.setAttribute('name', 'due-date');
    inputDue.setAttribute('id', 'due-date');
    inputDue.required = true;
    // Project
    const labelproject = NodeFac('label', 'label', '.input-form', 'Project: ').crtNode();
    labelproject.setAttribute('for', 'Project');
    const inputProject = NodeFac('input', 'input', '.input-form').crtNode();
    inputProject.setAttribute('type', 'text');
    inputProject.setAttribute('name', 'project');
    inputProject.setAttribute('id', 'project');
    inputProject.required = true;
    // cancel button
    const cancelBtn = NodeFac('btn', 'button', '.input-form', 'Cancel').crtNode();
    cancelBtn.addEventListener('click', () => {
        // delete dialog
        dltNode('#ipt-dialog');
        inputModal.close();
    })


    // get parent of the default tasks list heading in order to add new chevron 
    // down icons
    const defH1Con = document.querySelector('.def-h1-con');
    const prjH1Con = document.querySelector('.prj-h1-con');

    // confirm button
    const confirmBtn = NodeFac('btn', 'input', '.input-form', 'Confirm').crtNode();
    confirmBtn.setAttribute('type', 'submit');

    confirmBtn.addEventListener('click', () => {
        // Form validation
        if (inputTitle.value === '') {
            return
        } else if (inputDescr.value === '') {
            return
        } else if (inputDue.value === '') {
            return 
        } else if (inputProject.value === '') {
            return
        } else {
            // if validation is passed then create new task object
            addTaskObj(inputTitle.value, inputDescr.value, inputDue.value, inputProject.value);
            dltNode('#ipt-dialog');
            dltNode('.default-tasks');

            dltClassEle('.icon-chevron');
            // dltNode('#icon-chevron-up');
            // dltNode('#icon-chevron-down');
            crtChevronDownDef(ChevronDown, 'icon-chevron', 'icon-chevron-down-def', defH1Con);
            crtChevronDownPrj(ChevronDown, 'icon-chevron', 'icon-chevron-down-prj', prjH1Con);
            //crtChevronDown(ChevronDown, 'icon-chevron', 'icon-chevron-down', prjH1Con);
        }
    })

    // show modal
    inputModal.showModal();
}

export {
    crtTskForm,
}