const DisplayArea = document.getElementById('displayCars');
const inputBrand = document.getElementById('brand');
const inputYear = document.getElementById('year');
const inputColor = document.getElementById('color');
const submitBtn =document.getElementById('submit')
const garage = [];


function Car(brand, year, color){
  this.brand=brand;
  this.prodYear=year;
  this.color=color;

}

Car.prototype.getName=function() {
  return this.brand+" "+"            "+ this.prodYear+"-"+this.color;
}

function DisplayCars(){
  DisplayArea.textContent="";
  
  garage.forEach((car, index) => {
    const carToDisplay = document.createElement('div');
    carToDisplay.textContent=car.getName();

    const delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.addEventListener('click',  ()=> {

    garage.splice(index,1)
    DisplayCars();
    })
    carToDisplay.appendChild(delBtn);

    DisplayArea.appendChild(carToDisplay);
    

  })

}

function clearInputs() {
  inputBrand.value = "";
  inputYear.value = "";
  inputColor.value = "";
}

function addCarsFromInput(){
  const brand = inputBrand.value.trim();
  const year = inputYear.value.trim();
  const color = inputColor.value.trim();

  if (!brand || !year || !color){
    alert(" please enter all field"); return;
  }

  if (isNaN(year)){
    alert('please enter a nuber for the year'); return;
  }

  const car = new Car(brand, year, color);
  garage.push(car);
  DisplayCars();
  clearInput();
}
  submitBtn.addEventListener('click', ()=> addCarsFromInput());
