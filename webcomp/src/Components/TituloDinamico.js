class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const componentRoot = document.createElement('h1');

        const style = document.createElement('style');
        componentRoot.textContent = 'Fig';
        style.textContent = `h1{color:red}`
        
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }

}

customElements.define('titulo-dinamico', TituloDinamico)