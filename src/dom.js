// dom manipulation

const NodeFac = (nameClass, typeOfElement, parent, txt) => {
    // factory function that creates node objects with a class and appends it to
    // its parent


    // creates node and returns it
    const crtNode = ()=> {
        // select parent element
        const parentElement = document.querySelector(parent);   

        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent= txt;
        parentElement.appendChild(createDomElement);

        // created node is returned -> element methods can be used
        return createDomElement;
    }

    return {crtNode};
}


export {
    NodeFac,

}