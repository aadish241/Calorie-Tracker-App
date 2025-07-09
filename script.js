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



document.getElementById("veg").onclick= function(){
document.getElementById("veg").style.boxShadow="1px 1px 3px";
document.getElementById("nonveg").style.boxShadow="0px 0px 0px";
document.getElementById("egg").style.boxShadow="0px 0px 0px";
document.getElementById("breakfast").style.backgroundColor="green";
document.getElementById("lunch").style.backgroundColor="green";
document.getElementById("evesnack").style.backgroundColor="green";
document.getElementById("dinner").style.backgroundColor="green";
document.getElementById("breakfast").innerHTML="";
document.getElementById("lunch").innerHTML="";
document.getElementById("evesnack").innerHTML="";
document.getElementById("dinner").innerHTML="";
document.querySelector(".dayloc").style.display="none";
    



document.getElementById("monday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="360px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Vegetable oats + green tea (250 kcal) <br> 2 paneer parathas (dry roast) + curd (400 kcal) <br> Peanut butter banana smoothie + 2 boiled eggs (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + mixed veg + dal + salad (350 kcal) <br> 2 rotis + dal + bhindi + curd (550 kcal) <br> 3 rotis + rice + rajma + paneer sabzi + curd (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br> 1 guava + lemon water (100 kcal) <br> Roasted chana + buttermilk (200 kcal) <br> Cheese sandwich + mango milkshake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Moong dal soup + sautéed vegetables + salad (300 kcal) <br> 2 chapatis + mix veg + dal (500 kcal) <br> 2 chapatis + rice + dal makhani + aloo sabzi (700 kcal) "
    }

document.getElementById("tuesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="240px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Besan chilla (2) + mint chutney (250 kcal) <br> Poha with peanuts + curd (400 kcal) <br> Paneer sandwich + 1 banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Brown rice + lauki curry + salad (350 kcal) <br> 2 phulkas + chana masala + curd (550 kcal) <br> Rice + chole + paneer bhurji + roti (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Cucumber + 4 almonds (100 kcal) <br> Makhana roasted + herbal tea (200 kcal) <br> Vegetable upma + banana (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Vegetable soup + 1 multigrain toast (300 kcal) <br> 2 rotis + tinda curry + dal (500 kcal) <br> 2 rotis + rice + kadhi pakora + paneer (700 kcal)";
}

document.getElementById("wednesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="120px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Fruit smoothie (no sugar, low-fat milk) (250 kcal) <br> Idli (3) + sambhar (400 kcal) <br> Paneer parantha + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + methi aloo + dal (350 kcal <br> 2 rotis + mix veg + curd (550 kcal) <br> 3 rotis + rice + dal + veg curry + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Black coffee + roasted seeds (100 kcal) <br> 1 boiled sweet potato + tea (200 kcal) <br> Veg cutlets + fruit juice (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Grilled tofu salad + soup (300 kcal) <br> Khichdi + curd (500 kcal) <br> Jeera rice + rajma + roti + paneer bhurji (700 kcal)";
}

document.getElementById("thursday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="0px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Dalia with vegetables (250 kcal) <br> Sprouts salad + toast + tea (400 kcal) <br> Aloo paratha (2) + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Vegetable pulao + salad (350 kcal) <br> 2 rotis + matar paneer + salad (550 kcal) <br> 2 rotis + rice + chole + raita + paneer (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Apple + lemon water (100 kcal) <br> Boiled corn with spices (200 kcal) <br> Veg noodles + lassi (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu stir fry + sautéed spinach (300 kcal) <br> 2 chapatis + baingan bharta + dal (500 kcal) <br> 2 chapatis + rice + shahi paneer + boondi raita (700 kcal)";
}

document.getElementById("friday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-120px";
    document.querySelector(".dayloc").style.display="block";  
        document.getElementById("breakfast").innerHTML="Breakfast:  <br>Low-fat curd + fruit + chia (250 kcal) <br> Veg upma + coconut chutney (400 kcal) <br> Stuffed paneer parantha + mango (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Roti (1) + bottle gourd curry + salad (350 kcal) <br> Roti (2) + dal + cabbage sabzi + curd (550 kcal) <br> 3 rotis + pulao + rajma + paneer curry (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Tomato juice + fox nuts (100 kcal) <br> Sandwich with hummus + tea (200 kcal) <br> Fried moong dal + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Cabbage soup + grilled veg (300 kcal) <br> 2 rotis + matar mushroom + dal (500 kcal) <br> Rice + dal + kadai paneer + salad (700 kcal)"; 
}

document.getElementById("saturday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-240px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Boiled moong + lemon (250 kcal) <br> Methi thepla (2) + curd (400 kcal) <br> Paneer wrap + smoothie (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>1 phulka + tindora sabzi + dal (350 kcal) <br> 2 rotis + gobhi matar + salad (550 kcal) <br> 3 rotis + rice + dal fry + malai kofta (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Watermelon bowl (100 kcal) <br> Roasted peanuts + lemonade (200 kcal) <br> Veg cheese toast + cold coffee (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu curry + 1 chapati + salad (300 kcal) <br> 2 chapatis + chana masala + beans stir fry (500 kcal) <br> 2 chapatis + rice + shahi tofu + aloo matar (700 kcal)";
}

document.getElementById("sunday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-360px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>1 multigrain toast + peanut butter (250 kcal) <br> Vegetable sandwich + tea (400 kcal) <br> Paneer bhurji + paratha + banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Quinoa + stir-fried veg + raita (350 kcal) <br> 2 rotis + dal tadka + aloo capsicum (550 kcal) <br> Pulao + kadhai paneer + curd + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Coconut water + papaya (100 kcal)<br> Sprouted moong chaat (200 kcal) <br> Cheese frankie + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Clear soup + grilled veg sandwich (300 kcal) <br> 2 rotis + mixed veg + dal (500 kcal) <br> Rice + dum aloo + paneer tikka + roti (700 kcal)";
}
}

document.getElementById("nonveg").onclick= function(){
document.getElementById("veg").style.boxShadow="0px 0px 0px";
document.getElementById("nonveg").style.boxShadow="1px 1px 3px";
document.getElementById("egg").style.boxShadow="0px 0px 0px";
document.getElementById("breakfast").style.backgroundColor="rgb(179, 0, 0)";
document.getElementById("lunch").style.backgroundColor="rgb(179, 0, 0)";
document.getElementById("evesnack").style.backgroundColor="rgb(179, 0, 0)";
document.getElementById("dinner").style.backgroundColor="rgb(179, 0, 0)";
document.getElementById("breakfast").innerHTML="";
document.getElementById("lunch").innerHTML="";
document.getElementById("evesnack").innerHTML="";
document.getElementById("dinner").innerHTML="";
document.querySelector(".dayloc").style.display="none";


document.getElementById("monday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="360px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Vegetable oats + green tea (250 kcal) <br> 2 paneer parathas (dry roast) + curd (400 kcal) <br> Peanut butter banana smoothie + 2 boiled eggs (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + mixed veg + dal + salad (350 kcal) <br> 2 rotis + dal + bhindi + curd (550 kcal) <br> 3 rotis + rice + rajma + paneer sabzi + curd (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br> 1 guava + lemon water (100 kcal) <br> Roasted chana + buttermilk (200 kcal) <br> Cheese sandwich + mango milkshake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Moong dal soup + sautéed vegetables + salad (300 kcal) <br> 2 chapatis + mix veg + dal (500 kcal) <br> 2 chapatis + rice + dal makhani + aloo sabzi (700 kcal) "
    }

document.getElementById("tuesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="240px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Besan chilla (2) + mint chutney (250 kcal) <br> Poha with peanuts + curd (400 kcal) <br> Paneer sandwich + 1 banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Brown rice + lauki curry + salad (350 kcal) <br> 2 phulkas + chana masala + curd (550 kcal) <br> Rice + chole + paneer bhurji + roti (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Cucumber + 4 almonds (100 kcal) <br> Makhana roasted + herbal tea (200 kcal) <br> Vegetable upma + banana (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Vegetable soup + 1 multigrain toast (300 kcal) <br> 2 rotis + tinda curry + dal (500 kcal) <br> 2 rotis + rice + kadhi pakora + paneer (700 kcal)";
}

document.getElementById("wednesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="120px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Fruit smoothie (no sugar, low-fat milk) (250 kcal) <br> Idli (3) + sambhar (400 kcal) <br> Paneer parantha + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + methi aloo + dal (350 kcal <br> 2 rotis + mix veg + curd (550 kcal) <br> 3 rotis + rice + dal + veg curry + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Black coffee + roasted seeds (100 kcal) <br> 1 boiled sweet potato + tea (200 kcal) <br> Veg cutlets + fruit juice (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Grilled tofu salad + soup (300 kcal) <br> Khichdi + curd (500 kcal) <br> Jeera rice + rajma + roti + paneer bhurji (700 kcal)";
}

document.getElementById("thursday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="0px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Dalia with vegetables (250 kcal) <br> Sprouts salad + toast + tea (400 kcal) <br> Aloo paratha (2) + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Vegetable pulao + salad (350 kcal) <br> 2 rotis + matar paneer + salad (550 kcal) <br> 2 rotis + rice + chole + raita + paneer (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Apple + lemon water (100 kcal) <br> Boiled corn with spices (200 kcal) <br> Veg noodles + lassi (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu stir fry + sautéed spinach (300 kcal) <br> 2 chapatis + baingan bharta + dal (500 kcal) <br> 2 chapatis + rice + shahi paneer + boondi raita (700 kcal)";
}

document.getElementById("friday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-120px";
    document.querySelector(".dayloc").style.display="block";  
        document.getElementById("breakfast").innerHTML="Breakfast:  <br>Low-fat curd + fruit + chia (250 kcal) <br> Veg upma + coconut chutney (400 kcal) <br> Stuffed paneer parantha + mango (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Roti (1) + bottle gourd curry + salad (350 kcal) <br> Roti (2) + dal + cabbage sabzi + curd (550 kcal) <br> 3 rotis + pulao + rajma + paneer curry (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Tomato juice + fox nuts (100 kcal) <br> Sandwich with hummus + tea (200 kcal) <br> Fried moong dal + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Cabbage soup + grilled veg (300 kcal) <br> 2 rotis + matar mushroom + dal (500 kcal) <br> Rice + dal + kadai paneer + salad (700 kcal)"; 
}

document.getElementById("saturday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-240px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Boiled moong + lemon (250 kcal) <br> Methi thepla (2) + curd (400 kcal) <br> Paneer wrap + smoothie (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>1 phulka + tindora sabzi + dal (350 kcal) <br> 2 rotis + gobhi matar + salad (550 kcal) <br> 3 rotis + rice + dal fry + malai kofta (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Watermelon bowl (100 kcal) <br> Roasted peanuts + lemonade (200 kcal) <br> Veg cheese toast + cold coffee (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu curry + 1 chapati + salad (300 kcal) <br> 2 chapatis + chana masala + beans stir fry (500 kcal) <br> 2 chapatis + rice + shahi tofu + aloo matar (700 kcal)";
}

document.getElementById("sunday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-360px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>1 multigrain toast + peanut butter (250 kcal) <br> Vegetable sandwich + tea (400 kcal) <br> Paneer bhurji + paratha + banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Quinoa + stir-fried veg + raita (350 kcal) <br> 2 rotis + dal tadka + aloo capsicum (550 kcal) <br> Pulao + kadhai paneer + curd + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Coconut water + papaya (100 kcal)<br> Sprouted moong chaat (200 kcal) <br> Cheese frankie + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Clear soup + grilled veg sandwich (300 kcal) <br> 2 rotis + mixed veg + dal (500 kcal) <br> Rice + dum aloo + paneer tikka + roti (700 kcal)";
}
}

document.getElementById("egg").onclick= function(){
document.getElementById("veg").style.boxShadow="0px 0px 0px";
document.getElementById("nonveg").style.boxShadow="0px 0px 0px";
document.getElementById("egg").style.boxShadow="1px 1px 3px";
document.getElementById("breakfast").style.backgroundColor="rgb(255, 191, 0)";
document.getElementById("lunch").style.backgroundColor="rgb(255, 191, 0)";
document.getElementById("evesnack").style.backgroundColor="rgb(255, 191, 0)";
document.getElementById("dinner").style.backgroundColor="rgb(255, 191, 0)";

document.getElementById("breakfast").innerHTML="";
document.getElementById("lunch").innerHTML="";
document.getElementById("evesnack").innerHTML="";
document.getElementById("dinner").innerHTML="";
document.querySelector(".dayloc").style.display="none";


document.getElementById("monday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="360px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Vegetable oats + green tea (250 kcal) <br> 2 paneer parathas (dry roast) + curd (400 kcal) <br> Peanut butter banana smoothie + 2 boiled eggs (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + mixed veg + dal + salad (350 kcal) <br> 2 rotis + dal + bhindi + curd (550 kcal) <br> 3 rotis + rice + rajma + paneer sabzi + curd (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br> 1 guava + lemon water (100 kcal) <br> Roasted chana + buttermilk (200 kcal) <br> Cheese sandwich + mango milkshake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Moong dal soup + sautéed vegetables + salad (300 kcal) <br> 2 chapatis + mix veg + dal (500 kcal) <br> 2 chapatis + rice + dal makhani + aloo sabzi (700 kcal) "
    }

document.getElementById("tuesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="240px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Besan chilla (2) + mint chutney (250 kcal) <br> Poha with peanuts + curd (400 kcal) <br> Paneer sandwich + 1 banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Brown rice + lauki curry + salad (350 kcal) <br> 2 phulkas + chana masala + curd (550 kcal) <br> Rice + chole + paneer bhurji + roti (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Cucumber + 4 almonds (100 kcal) <br> Makhana roasted + herbal tea (200 kcal) <br> Vegetable upma + banana (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Vegetable soup + 1 multigrain toast (300 kcal) <br> 2 rotis + tinda curry + dal (500 kcal) <br> 2 rotis + rice + kadhi pakora + paneer (700 kcal)";
}

document.getElementById("wednesday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="120px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Fruit smoothie (no sugar, low-fat milk) (250 kcal) <br> Idli (3) + sambhar (400 kcal) <br> Paneer parantha + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> 1 roti + methi aloo + dal (350 kcal <br> 2 rotis + mix veg + curd (550 kcal) <br> 3 rotis + rice + dal + veg curry + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Black coffee + roasted seeds (100 kcal) <br> 1 boiled sweet potato + tea (200 kcal) <br> Veg cutlets + fruit juice (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Grilled tofu salad + soup (300 kcal) <br> Khichdi + curd (500 kcal) <br> Jeera rice + rajma + roti + paneer bhurji (700 kcal)";
}

document.getElementById("thursday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="0px";
    document.querySelector(".dayloc").style.display="block";
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Dalia with vegetables (250 kcal) <br> Sprouts salad + toast + tea (400 kcal) <br> Aloo paratha (2) + butter + curd (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Vegetable pulao + salad (350 kcal) <br> 2 rotis + matar paneer + salad (550 kcal) <br> 2 rotis + rice + chole + raita + paneer (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Apple + lemon water (100 kcal) <br> Boiled corn with spices (200 kcal) <br> Veg noodles + lassi (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu stir fry + sautéed spinach (300 kcal) <br> 2 chapatis + baingan bharta + dal (500 kcal) <br> 2 chapatis + rice + shahi paneer + boondi raita (700 kcal)";
}

document.getElementById("friday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-120px";
    document.querySelector(".dayloc").style.display="block";  
        document.getElementById("breakfast").innerHTML="Breakfast:  <br>Low-fat curd + fruit + chia (250 kcal) <br> Veg upma + coconut chutney (400 kcal) <br> Stuffed paneer parantha + mango (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br> Roti (1) + bottle gourd curry + salad (350 kcal) <br> Roti (2) + dal + cabbage sabzi + curd (550 kcal) <br> 3 rotis + pulao + rajma + paneer curry (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Tomato juice + fox nuts (100 kcal) <br> Sandwich with hummus + tea (200 kcal) <br> Fried moong dal + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Cabbage soup + grilled veg (300 kcal) <br> 2 rotis + matar mushroom + dal (500 kcal) <br> Rice + dal + kadai paneer + salad (700 kcal)"; 
}

document.getElementById("saturday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-240px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>Boiled moong + lemon (250 kcal) <br> Methi thepla (2) + curd (400 kcal) <br> Paneer wrap + smoothie (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>1 phulka + tindora sabzi + dal (350 kcal) <br> 2 rotis + gobhi matar + salad (550 kcal) <br> 3 rotis + rice + dal fry + malai kofta (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Watermelon bowl (100 kcal) <br> Roasted peanuts + lemonade (200 kcal) <br> Veg cheese toast + cold coffee (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Tofu curry + 1 chapati + salad (300 kcal) <br> 2 chapatis + chana masala + beans stir fry (500 kcal) <br> 2 chapatis + rice + shahi tofu + aloo matar (700 kcal)";
}

document.getElementById("sunday").onclick= function(){
    document.querySelector(".dayloc").style.marginRight="-360px";
    document.querySelector(".dayloc").style.display="block"; 
        document.getElementById("breakfast").innerHTML="Breakfast: <br>1 multigrain toast + peanut butter (250 kcal) <br> Vegetable sandwich + tea (400 kcal) <br> Paneer bhurji + paratha + banana (600 kcal)";
        document.getElementById("lunch").innerHTML="Lunch: <br>Quinoa + stir-fried veg + raita (350 kcal) <br> 2 rotis + dal tadka + aloo capsicum (550 kcal) <br> Pulao + kadhai paneer + curd + salad (800 kcal)";
        document.getElementById("evesnack").innerHTML="Evening Snack: <br>Coconut water + papaya (100 kcal)<br> Sprouted moong chaat (200 kcal) <br> Cheese frankie + shake (400 kcal)";
        document.getElementById("dinner").innerHTML="Dinner : <br>Clear soup + grilled veg sandwich (300 kcal) <br> 2 rotis + mixed veg + dal (500 kcal) <br> Rice + dum aloo + paneer tikka + roti (700 kcal)";
}
}

