// create from to create task
import { NodeFac, dltNode, tskListByPrj, projectsList } from "./dom";
import { addTaskObj, addPrjObj, allProjects, allTasks, increaseTaskCount, increasePrjsCount, idxOfObj, editTskObj, saveTolocalPrj, saveTolocalTsk } from './data';

const crtTskForm = () => {
    // create a new task
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
    const inputDescr = NodeFac('textarea', 'textarea', '.input-form').crtNode();
    //inputDescr.setAttribute('type', 'text');
    inputDescr.setAttribute('name', 'description');
    inputDescr.setAttribute('id', 'task-description');
    inputDescr.required = true;
    // due date
    const labelDue = NodeFac('label', 'label', '.input-form', 'Due Date').crtNode();
    labelDue.setAttribute('for', 'due-date');
    const inputDue = NodeFac('input', 'input', '.input-form').crtNode();
    inputDue.setAttribute('type', 'date');
    inputDue.setAttribute('name', 'due-date');
    inputDue.setAttribute('id', 'due-date');
    inputDue.required = true;
    // Priority
    const labelPri = NodeFac('label', 'label', '.input-form', 'Priority').crtNode();
    labelPri.setAttribute('for', 'priority');
    const selectPri = NodeFac('select', 'select', '.input-form').crtNode();
    selectPri.setAttribute('name', 'priority');
    const optHigh = NodeFac('option-priority', 'option', '.select', 'High').crtNode();
    optHigh.setAttribute('value', 'High');
    optHigh.setAttribute('selected','');
    const optMedium = NodeFac('option-priority', 'option', '.select', 'Medium').crtNode();
    optMedium.setAttribute('value', 'Medium');
    const optLow = NodeFac('option-priority', 'option', '.select', 'Low').crtNode();
    optLow.setAttribute('Value','Low');

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

    confirmBtn.addEventListener('click', (e) => {
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
            console.log(selectPri.options[selectPri.selectedIndex].value);
            console.log(allTasks);
            const newTsk = addTaskObj(inputTitle.value, inputDescr.value, inputDue.value, inputProject.value, selectPri.options[selectPri.selectedIndex].value);
            // delete old dialog
            dltNode('#ipt-dialog');
            dltNode('.default-tasks');
            dltNode('.tasks-container');
            // create tasklist for specified project
            tskListByPrj(allTasks, newTsk.project);
            // increase task count when new task was created
            increaseTaskCount();

            // save tasks to local storage
            saveTolocalTsk(allTasks);
        }
    })




    // show modal
    inputModal.showModal();
}

const editTskForm = (e) => {
    // edit a new task
    // create input form with model to get data for task

    // id of task object that user wants to edit
    const idObjStr = e.target.parentElement.id;
    console.log(idObjStr)
    
    // conver from string to int
    const idObjInt = parseInt(idObjStr);
    console.log(typeof(idObjInt))

    // get index of object that user wants to edit
    const idxOfObject = idxOfObj(allTasks, idObjInt);
    console.log(idxOfObject)

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
    inputTitle.value = allTasks[idxOfObject].title;
    inputTitle.required = true;
    // description
    const labeDescr = NodeFac('label', 'label', '.input-form', 'Description').crtNode();
    labeDescr.setAttribute('for', 'description');
    const inputDescr = NodeFac('textarea', 'textarea', '.input-form').crtNode();
    //inputDescr.setAttribute('type', 'text');
    inputDescr.setAttribute('name', 'description');
    inputDescr.setAttribute('id', 'task-description');
    inputDescr.value = allTasks[idxOfObject].descr;
    inputDescr.required = true;
    // due date
    const labelDue = NodeFac('label', 'label', '.input-form', 'Due Date').crtNode();
    labelDue.setAttribute('for', 'due-date');
    const inputDue = NodeFac('input', 'input', '.input-form').crtNode();
    inputDue.setAttribute('type', 'date');
    inputDue.setAttribute('name', 'due-date');
    inputDue.setAttribute('id', 'due-date');
    inputDue.value = allTasks[idxOfObject].dueDate;
    inputDue.required = true;
    // priority
    const labelPri = NodeFac('label', 'label', '.input-form', 'Priority').crtNode();
    labelPri.setAttribute('for', 'priority');
    const selectPri = NodeFac('select', 'select', '.input-form').crtNode();
    selectPri.setAttribute('name', 'priority');
    const optHigh = NodeFac('option-priority', 'option', '.select', 'High').crtNode();
    optHigh.setAttribute('value', 'High');
    const optMedium = NodeFac('option-priority', 'option', '.select', 'Medium').crtNode();
    optMedium.setAttribute('value', 'Medium');
    const optLow = NodeFac('option-priority', 'option', '.select', 'Low').crtNode();
    optLow.setAttribute('Value','Low');
    selectPri.value = allTasks[idxOfObject].priority;

    // Project
    const labelproject = NodeFac('label', 'label', '.input-form', 'Project: ').crtNode();
    labelproject.setAttribute('for', 'Project');
    const inputProject = NodeFac('input', 'input', '.input-form').crtNode();
    inputProject.setAttribute('type', 'text');
    inputProject.setAttribute('name', 'project');
    inputProject.setAttribute('id', 'project');
    inputProject.value = allTasks[idxOfObject].project;
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

    confirmBtn.addEventListener('click', (e) => {
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
            const newTsk = editTskObj( idxOfObject, inputTitle.value, inputDescr.value, inputDue.value, inputProject.value, selectPri.options[selectPri.selectedIndex].value);
            //editTskObj
            // delete old dialog
            dltNode('#ipt-dialog');
            dltNode('.default-tasks');
            dltNode('.tasks-container');

            tskListByPrj(allTasks, newTsk.project);
            
            // console.log('after edit');
            // console.log(allTasks);

            // save tasks to local storage
            saveTolocalTsk(allTasks);

        }
    })

    // show modal
    inputModal.showModal();
}

const crtPrjForm = () => {
        // create a new project

        //modal - create dialog
        const inputModal = NodeFac('dialog', 'dialog', '#content').crtNode();
        inputModal.setAttribute('id', 'ipt-dialog');
        // form    
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

        // cancel button
        const cancelBtn = NodeFac('btn', 'button', '.input-form', 'Cancel').crtNode();
        cancelBtn.addEventListener('click', () => {
            // delete dialog
            dltNode('#ipt-dialog');
            inputModal.close();
        })

        // confirm button
        const confirmBtn = NodeFac('btn', 'input', '.input-form', 'Confirm').crtNode();
        confirmBtn.setAttribute('type', 'submit');

            // get parent of the default tasks list heading in order to add new chevron 
        // down icons
        const defH1Con = document.querySelector('.def-h1-con');
        const prjH1Con = document.querySelector('.prj-h1-con');

        confirmBtn.addEventListener('click', () => {
            // Form validation
            if (inputTitle.value === '') {
                return
            } else {

                // console.log('allProjects')
                // console.log(allProjects);


                // if validation is passed then create new task object
                addPrjObj(inputTitle.value);
                dltNode('#ipt-dialog');
                dltNode('.projects-tasks');

                // create container for prjects 
                const defaultProjects = NodeFac('projects-tasks', 'div', '.prj-nav-con').crtNode();
                // display tasks in sidebar
                projectsList(allProjects, '.projects-tasks');
                // increase projects count -> next project can have a unique identifer
                increasePrjsCount();


     
                saveTolocalPrj(allProjects);
            }
        })

        inputModal.showModal();
}







export {
    crtTskForm,
    crtPrjForm,
    editTskForm
}