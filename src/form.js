// create from to create task
import { NodeFac, dltNode } from "./dom";
import { TaskFac, addTaskObj,getInputData } from './data';



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
    //description
    const labeDescr = NodeFac('label', 'label', '.input-form', 'Description').crtNode();
    labeDescr.setAttribute('for', 'description');
    const inputDescr = NodeFac('input', 'input', '.input-form').crtNode();
    inputDescr.setAttribute('type', 'text');
    inputDescr.setAttribute('name', 'description');
    inputDescr.setAttribute('id', 'task-description');
    // due date
    const labelDue = NodeFac('label', 'label', '.input-form', 'Due Date').crtNode();
    labelDue.setAttribute('for', 'due-date');
    const inputDue = NodeFac('input', 'input', '.input-form').crtNode();
    inputDue.setAttribute('type', 'text');
    inputDue.setAttribute('name', 'due-date');
    inputDue.setAttribute('id', 'due-date');
    // Project
    const labelproject = NodeFac('label', 'label', '.input-form', 'Project: ').crtNode();
    labelproject.setAttribute('for', 'Project');
    const inputProject = NodeFac('input', 'input', '.input-form').crtNode();
    inputProject.setAttribute('type', 'text');
    inputProject.setAttribute('name', 'project');
    inputProject.setAttribute('id', 'project');
    // cancel button
    const cancelBtn = NodeFac('btn', 'button', '.input-form', 'Cancel').crtNode();
    cancelBtn.addEventListener('click', () => {
        console.log('cancel')
        // delete dialog
        dltNode('ipt-dialog');
        inputModal.close();
    })
    // confirm button
    const confirmBtn = NodeFac('btn', 'button', '.input-form', 'Confirm').crtNode();
    confirmBtn.addEventListener('click', () => {
        // const joe =  TaskFac(inputTitle.value, inputDescr.value, inputDue.value, inputProject.value);
        // console.log(joe)
        // console.log(joe.title)

        addTaskObj(inputTitle.value, inputDescr.value, inputDue.value, inputProject.value);
        dltNode('ipt-dialog');
    })

    // show modal
    inputModal.showModal();
}

export {
    crtTskForm,
}