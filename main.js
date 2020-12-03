//start();

function start() {
    var total = localStorage.getItem("total");
    for (var i=0, len=total; i<len; i++) {
        x=i+1;
        var first = localStorage.getItem("trialName"+x);
        var second = localStorage.getItem("trialExp"+x);
        var third = localStorage.getItem("notify"+x);
        //Creating List
        var ul = document.getElementsByClassName('TrialList')[0];
        var li = document.createElement("li");
        var liClassName = "list" + x;
        li.setAttribute("id", liClassName);
        //Creating Button
        var button = document.createElement("button");
        button.innerHTML = "REMOVE";
        button.setAttribute("class", "removeButton");
        button.setAttribute("onclick", "remove("+i+")");
        //Update total after removal
        var total = document.querySelectorAll("li").length;
        localStorage.setItem("total", total);
        //Appending
        li.appendChild(document.createTextNode(first + " " + second));
        li.appendChild(button);
        ul.appendChild(li);
    }
}

var cnt = 0;
function getInput() {
    let out1 = document.getElementsByClassName('trial')[0].value;
    let out2 = document.getElementsByClassName('expiration')[0].value;
    let out3 = document.getElementsByClassName('notify')[0].value;
    var total = document.querySelectorAll("li").length;

    //Save
    SaveItem(out1,out2,out3);
    

    //Creating List
    var ul = document.getElementsByClassName('TrialList')[0];
    var li = document.createElement("li");
    var liClassName = "list" + cnt;
    li.setAttribute("id", liClassName);
    //Creating Remove Button
    var button = document.createElement("button");
    button.innerHTML = "REMOVE";
    button.setAttribute("class", "removeButton");
    button.setAttribute("onclick", "remove("+cnt+")");
    //button.setAttribute("onclick", "RemoveItem("+cnt+")");
    //Appending
    li.appendChild(document.createTextNode(out1 + " " + out2));
    li.appendChild(button);
    ul.appendChild(li);

    //Updating total
    var total = document.querySelectorAll("li").length;
    
    // Setting local storage
    //localStorage.setItem("trialName"+total, out1);
    //localStorage.setItem("trialExp"+total, out2)
    //localStorage.setItem("notify"+total, out3);
    localStorage.setItem("total", total);
    cnt++;
}

function remove(num) {
    var item = document.getElementById("list"+num);
    item.parentNode.removeChild(item);
    RemoveItem(num);
    var ul = document.getElementById("trialID");
    var items = ul.getElementsByTagName("li");
    for ( var i = 0; i < items.length; ++i) {
        var name = "list"+cnt;
        li.setAttribute("id", name);
    }
    //var x=num+1;
    //localStorage.removeItem("trialName"+num);
    //localStorage.removeItem("trialExp"+num);
    //localStorage.removeItem("notify"+num);
}

function SaveItem(itemName, date, daysNote) {
    var itemList = localStorage.getItem("itemList");
    if (itemList == null) {
        localStorage.setItem("itemList", JSON.stringify(itemName));
        //localStorage.setItem("dateList", date);
        //localStorage.setItem("daysList", daysNote);
    }
    else {
        var itemObj = JSON.parse(itemList);
        var test = itemList.includes(",");
        var itemArray = [];
        if (!test) {
            itemArray.push(itemObj);
            itemArray.push(itemName);
        }
        else {
            Object.entries(itemObj).forEach(entry => {
                const [key, value] = entry;
                itemArray.push(value);
              });
            itemArray.push(itemName);
        }        
        itemArray = JSON.stringify(itemArray);
        localStorage.setItem("itemList", itemArray);
    }
}

function RemoveItem(index) {
    var itemList = localStorage.getItem("itemList");
    var itemObj = JSON.parse(itemList);
    var itemArray = [];
    Object.entries(itemObj).forEach(entry => {
        const [key, value] = entry;
        itemArray.push(value);
    });
    itemArray.splice(index, index+1);
    itemArray = JSON.stringify(itemArray);
    localStorage.setItem("itemList", itemArray);
    if (localStorage.getItem("itemList") == "[]") {
        localStorage.removeItem("itemList");
    }
}
 
//Date, Days save/remove
//Validate user input no , ,
    //date must be a date in specific format, 
    //daysToBeNot should be #
//RemoveItem to button click
//Style