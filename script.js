function calcalcfunc(){
    document.getElementById("calorie-calc-page").style.display = "block";
    document.getElementById("calorie-count-page").style.display = "none";
    document.getElementById("meal-plan-page").style.display = "none";
    document.getElementById("calcalcbtn").style.boxShadow= "1px 1px 8px";
    document.getElementById("calcountbtn").style.boxShadow= "0px 0px 0px";
    document.getElementById("mealplanbtn").style.boxShadow= "0px 0px 0px";


}
function calcountfunc(){
    document.getElementById("calorie-calc-page").style.display = "none";
    document.getElementById("calorie-count-page").style.display = "block";
    document.getElementById("meal-plan-page").style.display = "none";
    document.getElementById("calcalcbtn").style.boxShadow= "0px 0px 0px";
    document.getElementById("calcountbtn").style.boxShadow= "1px 1px 8px";
    document.getElementById("mealplanbtn").style.boxShadow= "0px 0px 0px";
}
function mealplanfunc(){
    document.getElementById("calorie-calc-page").style.display = "none";
    document.getElementById("calorie-count-page").style.display = "none";
    document.getElementById("meal-plan-page").style.display = "block";
    document.getElementById("calcalcbtn").style.boxShadow= "0px 0px 0px";
    document.getElementById("calcountbtn").style.boxShadow= "0px 0px 0px";
    document.getElementById("mealplanbtn").style.boxShadow= "1px 1px 8px";
    
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

let count = 0;
document.getElementById("addcalbtn").onclick= function(){
let amount= document.getElementById("cal+").value;
amount=Number(amount);
count+=amount;
document.getElementById("actual-count").textContent= count;
}

document.getElementById("subcalbtn").onclick= function(){
let amount= document.getElementById("cal-").value;
amount=Number(amount);
count-=amount;
document.getElementById("actual-count").textContent= count;
}

document.getElementById("resetbtn").onclick= function(){
    count=0;
    document.getElementById("actual-count").textContent= count;
}