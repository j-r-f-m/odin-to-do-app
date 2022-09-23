// dom manipulation

const node = () => {
    
    // create dom Node
    const crtNode = (nameClass, typeOfElement, parent, txt)=> {
        // select parent element
        const parentElement = document.querySelector(parent);   
        // create element
        const createDomElement = document.createElement(typeOfElement);
        createDomElement.className = nameClass;
        createDomElement.textContent= txt;
        parentElement.appendChild(createDomElement);
    }

    return {crtNode};
}


export {
    node,

}