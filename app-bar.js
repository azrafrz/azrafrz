class AppBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
        :host {
            display: block;
            width: 100%;
            color: white;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
            font-family: 'Quicksand';
            font-size: 30px;
            text-align: center;
        }
        
        div {
            padding: 100px 50px;
        }
        
        .brand-name {
            margin: 0;
            font-size: 80px;
            text-align: center
        }

        nav {
            background-color: #cfc8d1;;
            padding: 5px;
            position: sticky;
            top: 0;
        }
        nav ul {
            padding-inline: 4rem;
            display: flex;
            gap: 2rem;
        }
        
        nav li {
            list-style-type: none;
        }
        nav a {
            font-size: 28px;
            font-weight: 400;
            text-decoration: none ;
            color: white;
        }
        
        nav a:hover {
            font-weight: bold;
        }
    `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML ='';
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();
        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML +=`
        <div>
        <h1 class="brand-name">KOMUNIKASI MULTIMEDIA</h1>
        <p> Materi Perkuliahan Mata Kuliah Komunikasi Multimedia </p>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="lesson.html">Lesson</a></li>
                <li><a href="assignment.html">Assignment</a></li>
                <li><a href="#exam">Exam</a></li>
            </ul>
        </nav>
        `
    }
}

customElements.define('app-bar', AppBar);