// create from to create task
import { NodeFac } from "./dom";


const crtTskForm = () => {
    console.log('lol');
    const taskCon = NodeFac('crt-tsk-con', 'div', '#content', 'Form').crtNode();
    const inputModal = NodeFac('dialog', 'dialog', '.crt-tsk-con').crtNode();
    inputModal.setAttribute('id', 'ipt-Dialog');

    // form
    const form = NodeFac('input-form', 'form', '.dialog').crtNode();
    form.setAttribute('method', 'dialog');
    const labelTitle = NodeFac('label', 'label', '.input-form', 'Title').crtNode();

}

export {
    crtTskForm,
}