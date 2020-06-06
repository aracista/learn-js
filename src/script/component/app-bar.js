class AppBar extends HTMLElement {
 
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <ul class="navbar navbar-expand-lg navbar-dark bg-danger justify-content-center">
            <li class="navbar-brand">
                <h2 class="nav-link">Family Meal</h2>
            </li>
        </ul>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);