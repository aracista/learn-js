class MealItem extends HTMLElement {

    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.innerHTML = `

        <ul class="nav nav-tabs" id="myTab" role="tablist" style="width: 48rem;margin-bottom: 10px;">
            <li class="nav-item">
                <a class="nav-link active" id="a${this._meal.idMeal}-tab" data-toggle="tab" href="#a${this._meal.idMeal}" role="tab" aria-controls="a${this._meal.idMeal}" aria-selected="true">Main</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="abc${this._meal.idMeal}-tab" data-toggle="tab" href="#abc${this._meal.idMeal}" role="tab" aria-controls="abc${this._meal.idMeal}" aria-selected="false">Description</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="ab${this._meal.idMeal}-tab" data-toggle="tab" href="#ab${this._meal.idMeal}" role="tab" aria-controls="ab${this._meal.idMeal}" aria-selected="false">Ingrediens</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="a${this._meal.idMeal}" role="tabpanel" aria-labelledby="a${this._meal.idMeal}-tab">
                <div class="card" style="width: 48rem;margin-bottom: 10px;">
                    <img class="card-img-top" src="${this._meal.strMealThumb}" alt="image meal">
                        <div class="card-body">
                            <h2 class="card-title text-center">${this._meal.strMeal}</h2>
                        </div>
                </div>
            </div>
            <div class="tab-pane fade" id="abc${this._meal.idMeal}" role="tabpanel" aria-labelledby="abc${this._meal.idMeal}-tab">
                <div class="card" style="width: 48rem;margin-bottom: 10px;">
                        <div class="card-body">
                            <h2 class="card-title text-center">${this._meal.strMeal}</h2>
                            <h5 class="card-subtitle mb-2 text-muted">Category:${this._meal.strCategory}</h5>
                            <h5 class="card-subtitle mb-2 text-muted">Area&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:${this._meal.strArea}</h5>
                            <p class="card-subtitle mb-2 text-muted text-right">tags: ${this._meal.strTags}</p>
                            <p class="card-text">${this._meal.strInstructions}</p>  
                        </div>
                </div>
            </div>
            <div class="tab-pane fade" id="ab${this._meal.idMeal}" role="tabpanel" aria-labelledby="ab${this._meal.idMeal}-tab">
                <div class="card" style="width: 48rem;margin-bottom: 10px;">
                        <div class="card-body">
                            <h2 class="card-title text-center">${this._meal.strMeal}</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <table>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient1}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure1}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient2}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure2}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient3}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure3}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient4}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure4}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient5}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure5}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient6}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure6}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient7}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure7}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient8}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure8}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient9}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure9}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient10}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure10}</p></td>
                                        </tr>                               
                                    </table>
                                </div>
                                <div class="col-md-6">
                                <table>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient11}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure11}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient12}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure12}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient13}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure13}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient14}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure14}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient15}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure15}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient16}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure16}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient17}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure17}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient18}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure18}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient19}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure19}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p class="card-text">${this._meal.strIngredient20}</p></td>
                                            <td>&nbsp</td>
                                            <td><p class="card-text">${this._meal.strMeasure20}</p></td>
                                        </tr>                                      
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div> `;
    }
 }
  
 customElements.define("meal-item", MealItem);