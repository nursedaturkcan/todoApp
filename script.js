 const inputBox=document.querySelector("#input-box");
 const listContainer=document.querySelector("#list-container");
 

 function addTask(){
    if(inputBox.value==""){
        alert("You must write something!");
    }
    else{
        // li elemanı oluşturma
        let li=document.createElement("li");
        // oluşturulan elemanın içerisine input değerinin atanması
        li.innerHTML=inputBox.value;
        // oluşturulan li elemanını list-ccontainer içine koyma
        listContainer.appendChild(li);
        // listenin içerisine span etiketi içinde çarpı işareti ekleme
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        
    }
    inputBox.value="";
    saveData();
 }
//  listContainer'a tıklanması olayının izlenmesi ve tıklanan elemanın e ile yakalnması
listContainer.addEventListener("click",function(e){
    // eğer tıklanılan eleman li ise , li'ye toggle ile checked sınıfı eklenir ,ekliyse kaldırılır
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // eğer tıklanılan eleman span ise, spanın parent elementi yani li kaldırılacak
    else if(e.target.tagName=="SPAN"){
        // console.log(e.target.parentElement);
    e.target.parentElement.remove();
    saveData();
    }


});
// verilerin localstorage da saklanması
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// browser tekrar açıldığında saklanan dataların gözükmesi
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();