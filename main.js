function getInput() {
    let out1 = document.getElementsByClassName('trial')[0].value;
    let out2 = document.getElementsByClassName('expiration')[0].value;
    let out3 = document.getElementsByClassName('notify')[0].value;
    var total = document.querySelectorAll("li").length
    var ul = document.getElementsByClassName('TrialList')[0];
    var li = document.createElement("li");
    var liClassName = "list" + total;
    li.setAttribute("id", liClassName);
    var button = document.createElement("button");
    button.innerHTML = "REMOVE";
    button.setAttribute("class", "removeButton");
    button.setAttribute("onclick", "remove("+total+")");
    li.appendChild(document.createTextNode(out1 + " " + out2));
    li.appendChild(button);
    ul.appendChild(li);
}

function remove(num) {
    var item = document.getElementById("list"+num);
    item.parentNode.removeChild(item);
}