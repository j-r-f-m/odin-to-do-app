// create from to create task
import { NodeFac, dltNode } from "./dom";


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
    // tag
    const labelTag = NodeFac('label', 'label', '.input-form', 'Tag: ').crtNode();
    labelTag.setAttribute('for', 'tag');
    const inputTag = NodeFac('input', 'input', '.input-form').crtNode();
    inputTag.setAttribute('type', 'text');
    inputTag.setAttribute('name', 'tag');
    inputTag.setAttribute('id', 'tag');
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

    // show modal
    inputModal.showModal();
}

export {
    crtTskForm,
}