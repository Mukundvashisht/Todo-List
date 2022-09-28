function getAndUpdate(){
    console.log("Updated👍")
    tit = document.getElementById("Title").value;
    desc = document.getElementById("Description").value;
    if (localStorage.getItem("itemsJson")==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray))
    }
    update();
};
function update(){
    if (localStorage.getItem("itemsJson")==null){
        itemJsonArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tablebody = document.getElementById("tableBody")
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
};

function Add(){
    add = document.getElementById("add");
    add.addEventListener("click", getAndUpdate);
    update();
}


function deleted(itemIndex){
    console.log("delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();

}
function clearStorage(){
    if (confirm("Do You really want to clear the list?")){
    console.log("Cleared👍")
    localStorage.clear();
    update();
}};
