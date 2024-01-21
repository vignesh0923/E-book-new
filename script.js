


//selecting popup overlay add btn
var overlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbtn = document.getElementById("add-popup-btn")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})


//cancel popup
 var cancelpopup = document.getElementById("cancel-popup")

 cancelpopup.addEventListener("click",function(e){
    e.preventDefault();
    overlay.style.display="none"
    popupbox.style.display="none"
 })


 //select container,add book,title,author,description
 var maincontainer = document.querySelector(".main-container");
 var addbook = document.getElementById("add-book");
 var booktitle = document.getElementById("book-title-input")
 var bookauthor = document.getElementById("book-author-input")
 var bookdescription = document.getElementById("book-description-input")


 addbook.addEventListener("click",function(e){
    e.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
            <h3>${bookauthor.value}</h3>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    maincontainer.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
 })

function deletebook(event){
    event.target.parentElement.remove();
}