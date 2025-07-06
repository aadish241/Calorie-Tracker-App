function calcalcfunc(){
    document.getElementById("calorie-calc-page").style.display = "block";
    document.getElementById("calorie-count-page").style.display = "none";
    document.getElementById("meal-plan-page").style.display = "none";

}
function calcountfunc(){
    document.getElementById("calorie-calc-page").style.display = "none";
    document.getElementById("calorie-count-page").style.display = "block";
    document.getElementById("meal-plan-page").style.display = "none";
}
function mealplanfunc(){
    document.getElementById("calorie-calc-page").style.display = "none";
    document.getElementById("calorie-count-page").style.display = "none";
    document.getElementById("meal-plan-page").style.display = "block";
}
let weight;
let height;
let age;
document.getElementById("submitstatsm").onclick= function(){
weight =document.getElementById("weight-val").value;
height =document.getElementById("height-val").value;
age =document.getElementById("age-val").value;
weight=Number(weight);
height=Number(height);
age=Number(age);
let mbmr = 10*weight + 6.25*height - 5*age + 5;
mbmr=Number(mbmr);
document.getElementById("calresult").textContent= `Your maintenance calories are: ${mbmr*1.375} cal`;
document.getElementById("weightlosscal").textContent= ` ${mbmr*1.375 - 500} cal`;
document.getElementById("weightgaincal").textContent= ` ${mbmr*1.375 + 300} cal`;
}
document.getElementById("submitstatsf").onclick= function(){
weight =document.getElementById("weight-val").value;
height =document.getElementById("height-val").value;
age =document.getElementById("age-val").value;
weight=Number(weight);
height=Number(height);
age=Number(age);
let fbmr = 10 * weight + 6.25 * height - 5 * age - 161;
fbmr=Number(fbmr);
document.getElementById("calresult").textContent= `Your maintenance calories are: ${fbmr*1.375} cal`;
document.getElementById("weightlosscal").textContent= ` ${fbmr*1.375 - 500} cal`;
document.getElementById("weightgaincal").textContent= ` ${fbmr*1.375 + 300} cal`;
}