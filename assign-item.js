class AssignItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _note = {
      id: null,
      title: null,
      body: null,
      deadline: null,
      link: null,
    };
   
    constructor() {
      super();
   
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
      if (this._shadowRoot) {
        this._shadowRoot.appendChild(this._style);
    }
    }
   
    _emptyContent() {
      this._shadowRoot.innerHTML = '';
    }
   
    set note(value) {
      this._note = value;
   
      // Render ulang
      this.render();
    }
   
    get note() {
      return this._note;
    }
   
    _updateStyle() {
      this._style.textContent = `
        :host {
          display: block;
          border-radius: 8px;
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
          overflow: hidden;
          font-family: 'Sans-serif';
          background: rgb(247, 247, 240);
          margin-top: 20px;
        }
   
        .note-info {
          padding: 16px 24px;
        }
   
        .note-info__title h2 {
          font-weight: lighter;
          color: rgb(166, 218, 165);
        }
   
        .note-info__body p {
          display: -webkit-box;
          margin-top: 10px;
          
          overflow: hidden;
   
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5; /* number of lines to show */
        }
      `;
    }
   
    render() {
      this._emptyContent();
      this._updateStyle();
   
      this._shadowRoot.appendChild(this._style);
      this._shadowRoot.innerHTML += `
        <div class="card">
          <div class="note-info">
            <div class="note-info__title">
              <h2>${this._note.title}</h2>
            </div>
            <div class="note-info__body">
              <p>${this._note.body}</p>
            </div>
            <div class="note-info__created-at">
              <p>Deadline: ${this._note.deadline}</p>
            </div>
            <div class="note-info__archived">
              <p>Link: ${this._note.link}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
   
  customElements.define('assign-item', AssignItem);