class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Hello World</h1>";
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class','card_left')
        const author = document.createElement('span');
        author.textContent = "By " + (this.getAttribute('author') || "By Anonymous")
        cardLeft.appendChild(author);


        const linkTitle = document.createElement('a');
        cardLeft.appendChild(linkTitle);
        const newsContent = document.createElement('p');
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class','card_right')
        const image = document.createElement('img');
        cardRight.appendChild(image);

        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','card');
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }
    styles(){}
}

customElements.define("card-news", CardNews)