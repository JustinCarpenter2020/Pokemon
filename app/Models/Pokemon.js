export default class Pokemon{
  constructor(data){
    this.name = data.name
    this.weight = data.weight
    this.height = data.height
    this.checked = data.checked || false
  }



  get Template(){
    return /*html*/`<div class="card">
    <div class="card-body">
        <h1>${this.name}</h1>
    </div>
    <div class="form-check">
        <p>I Want Him: </p> <input type="checkbox" onclick="app.pokemonController.toggle('${this.name}')" class="form-check-input" name="" id="" value="" ${this.checked ? "checked" : ''} />
    </div>
</div>`
  }
}