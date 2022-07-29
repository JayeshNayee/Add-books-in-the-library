console.log("Hi Librabry");
// consturutor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display(){

}

// add method to display prototype
 Display.prototype.add = function(book){
    console.log("adding to ui");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
 }
Display.prototype.clear = function(){
    let libraryform  = document.getElementById('Libraryform');
    libraryform.reset();
}



// add submit Event listener to libraryform
let libraryform = document.getElementById('Libraryform');
libraryform = addEventListener('submit',libraryformSubmit);

function libraryformSubmit(e){
    console.log("you have submitted ");
     let name = document.getElementById('BookName').value
     let author  = document.getElementById('author').value
     let type;
   
     let Fiction = document.getElementById('Fiction');
     let Programming = document.getElementById('Programming');
     let Cooking= document.getElementById('Cooking');
     
    //   for checke box 
    if(Fiction.checked){
         type = Fiction.value;
     }
    if(Programming.checked){
         type = Programming.value;
     }
     if(Cooking.checked){
         type = Cooking.value;
     }
     let book = new Book(name,author,type);
     console.log(book);
    let dis = new Display();
    dis.add(book);
    dis.clear();
    e.preventDefault();
    
}










