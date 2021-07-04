let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetize(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetize(str){
      this._courses.appetizers=str;
    },
    set mains(str){
      this._courses.mains=str;
    },
    set desserts(str){
      this._courses.desserts=str;
    },
  get courses(){
    return this._courses;
  },
  addDishToCourse(courseName,dishName,dishPrice){
    let dish = {
      'name': dishName,
      'price': dishPrice
    }
    if(courseName==='appetizers'){
      this._courses.appetizers.push(dish);
    } else if (courseName==='mains'){
      this._courses.mains.push(dish);
    } else if (courseName==='desserts'){
      this._courses.desserts.push(dish);
    } 
  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let dishInd = Math.floor(Math.random()*dishes.length);
    return dishes[dishInd];
  },
  generateRandomMeal(){
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var dessert = this.getRandomDishFromCourse('desserts');
    var totalprice = appetizer.price+main.price+dessert.price;
    return `The dishes are ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of ${totalprice}`;
  },
}

menu.addDishToCourse('mains', 'hotpot', 40);
menu.addDishToCourse('mains', 'dumplings', 20);
menu.addDishToCourse('appetizers', 'cold kimichi', 5);
menu.addDishToCourse('appetizers', 'beef soup', 8);
menu.addDishToCourse('desserts', 'tiramisu', 16);
menu.addDishToCourse('desserts', 'chocolate cake', 10);

var meal = menu.generateRandomMeal();
console.log(meal);
