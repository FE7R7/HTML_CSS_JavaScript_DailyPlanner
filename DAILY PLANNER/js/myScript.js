//Three arrays responsable for the three lists of the system

let items = ['Work', 'Study', 'Grocery Shopping', 'Take Dog for walking', 'Clean the room', 'Meditation', 'Workout', 'Visit Mom for dinner', 'Plan next day Meal', 'Play Videogame', 'Read the Book', 'Plan Holiday'];

let achieved = [''];
let shopList = [''];

// ($) is the short form that represents (document.getElementById) method
function $(id){
    return document.getElementById(id);
};


//Settings of functions for when the web page is refreshed
window.onload = function(){
    dateAndtime();

    $("startCalc").onclick= function(){calc();}
    $("display").onclick = function(){loadAndDisplay();}
    $("addItem").onclick = function(){addItem();}
    $("removeItem").onclick = function(){removeItem();}
    $("hide").onclick = function(){hideList();}
    $("achievedItem").onclick = function(){achievedRemoveAdd();}
    $("newDay").onclick = function(){newDay();}
    $("removeA").onclick = function(){removeAchievement();}
    $("addShop").onclick = function(){scrollBoxDysplay();}
    $("removeShopButton").onclick = function(){removeShop();}
    $("water1").onclick = function(){waterBar();}
    $("water2").onclick = function(){waterBar();}
    $("water3").onclick = function(){waterBar();}
    $("water4").onclick = function(){waterBar();}
    $("waterFace").innerHTML = "<img style='width:10%;' src='image/water.png' id='waterFace'>"
};


//Current Date and Time automatically updated
function dateAndtime(){
    var date = new Date();
	var current_date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date = current_date;	
    var time = current_time;

	$("date").innerHTML = date;
    $("time").innerHTML = time;
    setTimeout(dateAndtime,1000)
};


//Reset the functionalities for next day
function newDay(){
    $("water1").checked = false;
    $("water2").checked = false;
    $("water3").checked = false; 
    $("water4").checked = false;

    $("generalNotes").innerHTML = "<textarea rows='15' cols='47' maxlength='400' style='resize: none; overflow:auto;'></textarea>";
    $("listItems").innerHTML = "<p class='w3-text-white w3-padding w3-large'><b>TO DO LIST: </b></p>"
    $("check").innerHTML = "<img src='image/check.png'>";
    $("achievedAdd").innerHTML = "<p class='w3-text-white w3-padding w3-large'><b>ACHIEVED LIST: </b></p>"
    $("checkit").innerHTML = "<img src='image/check.png'>";
    $("scrollbox").innerHTML = "";
    $("scrollbox").innerHTML = "<img class='w3-margin-left' style='width:50%;margin-top:14px' src='image/fruits.png'>";
    $("waterMessage").innerHTML = "Let's start hydrating";
    $("waterFace").innerHTML = "<img style='width:10%;' src='image/water.png' id='waterFace'>"

    var element = $("proBar");
    element.style.width = "8%";

    items = [''];
    achieved = [''];
    shopList = [''];
};


//Display the To Do List of Items
function loadAndDisplay(){
    let list = "<ol start = '1'>";

    for(let i = 0; i<items.length; i++)
    {
        list += "<li class='w3-margin-left-todolist w3-center w3-justify w3-large w3-margin-bottom-short' style='width:87%;'>"+items[i]+"</li>";
    }

    list += "</ol>";

    $("listItems").innerHTML = list;
    console.log(list);
    $("check").innerHTML = "";
};


//Hide the To Do List of Items
function hideList(){
    $("listItems").innerHTML = "<p class='w3-large w3-padding'><b>TO DO LIST: </b></p>";
    $("check").innerHTML = "<img src='image/check.png'>";
    console.log("To Do List is hidden by user requesting");
};


//Add Item for the To Do List 
function addItem(){
    let item = $("input").value;
    if(item.length == 0){
        alert("You must enter some text to add item to the array.");
    }
    else{
        items.push(item);
        loadAndDisplay();
    }
    $("input").value = " ";
};


//Remove Item from the To Do List
function removeItem(){
    let index = $("remove").value
    if(isNaN(index) || index.length == 0 ||  index < 0 || index > items.length){
        alert("You must enter a numerical value for the index between the range 1 -"+(items.length));
    }
    else{
        items.splice(index-1, 1);
        loadAndDisplay();
    }
    $("remove").value = " ";
};


//Remove achieved item from To Do List and Add this item to the Achieved Item List 
function achievedRemoveAdd(){
    let index = $("achieved").value
    if(isNaN(index) || index.length == 0 ||  index < 0 || index > items.length){
        alert("You must enter a numerical value for the index between the range 1 -"+(items.length));
    }
    else{
        let ind = items.splice(index-1, 1);
        loadAndDisplay();
        let itemOk = ind;
        achieved.push(itemOk);
        $("checkit").innerHTML = "";
    }
    $("achieved").value= "";
    transfAndDisplay();
};

//Complete the item transfer and Display the achieveds items on the Achieved Item List
function transfAndDisplay(){
    let listA = "<ol>";

    for(let i = 1; i<achieved.length; i++)
    {
        listA += "<li class='w3-large w3-center w3-justify w3-margin-bottom-short w3-margin-top-image-short' style='width:60%;margin-left:25%;'>"+achieved[i]+"</li>";
    }

    listA += "</ol>";

    $("achievedAdd").innerHTML = listA;
    console.log("Achievements: "+listA);
    $("removeit").value = "";
};


//Remove Achievement from the Achievement List
function removeAchievement(){
    let index = $("removeit").value

    if(isNaN(index) || index.length == 0 ||  index < 1 || index > achieved.length){
        alert("You must enter a numerical value for the index between the range 1 -"+(achieved.length-1)); 
    }
    else{
        achieved.splice(index, 1);
        transfAndDisplay();
        if(achieved.length ==1){
            $("achievedAdd").innerHTML = "<p class='w3-text-white w3-padding w3-large'><b>ACHIEVED LIST: </b></p>"
            $("checkit").innerHTML = "<img src='image/check.png'>";
        }
    }
};


//Scroll Box Display
function scrollBoxDysplay(){
   $("scrollbox").innerHTML = "<div id='scrollboxx' style='height:200px;width:240px;margin-left:125px;margin-top:32px;background-color:white;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;'></div>"
   
   addShop();
};


//Add to Shop List 
function addShop(){
    let shop = $("shopinput").value;
    if(shop.length == 0){
        alert("You must some text to add item to the array.");
    }
    else{
        shopList.push(shop);
    }
    $("shopinput").value = "";
    textScrollDisplay();
};


//Remove from the Shop List
function removeShop(){
    let indexx = $("removeShop").value

    if(isNaN(indexx) || indexx.length == 0 ||  indexx < 0 || indexx > shopList.length-1){
        alert("You must enter a numerical value for the index between the range 1 -"+(shopList.length-1));
        textScrollDisplay();
    }
    else{
        shopList.splice(indexx, 1);
        textScrollDisplay();
    }
    if(shopList.length == 1){
        $("scrollbox").innerHTML = "<img class='w3-margin-left' style='width:50%;margin-top:14px' src='image/fruits.png'>";
    }
    $("removeShop").value = "";
};


//Insert List Inside of the Scroll Box
function textScrollDisplay(){
    let listShop = "<ol start = '1'>";

    for(let i = 1; i<shopList.length; i++)
    {
        listShop += "<li>"+shopList[i]+"</li>";
    }

    listShop += "</ol>";

    $("scrollboxx").innerHTML = listShop;
    console.log(listShop);
};


//Water Glasses Bar, Face and Message Settings
waterBar = function(){
    if($("water1").checked == true){
        var element = $("proBar");
        element.style.width = "25%";

        $("waterFace").innerHTML = "<img style='width:14%;' src='image/check.png' id='waterFace'>"

        $("waterMessage").innerHTML = "Glad that you are hydrating";

        console.log("250 ml of water checked by user");
    }

    if($("water2").checked == true){
        element.style.width = "50%";

        $("waterMessage").innerHTML = "One more step doing well for your body...";
        $("waterFace").innerHTML = "<img src='image/up.png' style='width:10%;'>";

        console.log("500 ml of water checked by user");
    }
   
   if($("water3").checked == true){
        element.style.width = "75%";

        $("waterMessage").innerHTML = "Congrats!!!! Drink water, stay hydrated and healthy";
        $("waterFace").innerHTML = "<img src='image/smile.png'style='width:10%;'>";

        console.log("1.5L of water checked by user");
    }

    if($("water4").checked == true){
        element.style.width = "102%";

        $("waterMessage").innerHTML = "This is a day that you demonstrated how much you value your health and love yourself. Proud of you!!!!";
        $("waterFace").innerHTML = "<img src='image/celebrate.png' style='width:10%;'>";

        console.log("That is so nice, 2L of water checked by user");
    }
};


//Calculator Functions//
function calc(){
    const calculate = (n1, operator, n2) => {
        let result = "";
        if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
        }
    
        return result
    }
  
    const calculator = document.querySelector('.calculator')
    const display = calculator.querySelector('.calculator__display')
    const keys = calculator.querySelector('.calculator__keys')
  
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            const previousKeyType = calculator.dataset.previousKeyType
  
            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
  
            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
                } else {
                display.textContent = displayedNum + keyContent
                }
            }
        
            if (action === 'decimal') {
                display.textContent = displayedNum + '.'
            }
        
            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
            ) {
                key.classList.add('is-depressed')
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            }
        
            if (action === 'clear') {
                
                $("calcdis").innerHTML = "";
                console.log('clear key!')
            }
        
            if (action === 'calculate') {
                const firstValue = parseFloat(calculator.dataset.firstValue) 
                const operator = calculator.dataset.operator
                const secondValue =parseFloat(displayedNum) 
        
                display.textContent = calculate(firstValue, operator, secondValue)
            }
         }
     })
}