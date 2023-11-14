const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass = [];
let passtxt = document.getElementById("pass_txt");


function newPassword()
{

    passtxt.textContent = "";
    pass = [];

    for (let index = 0; index < 16; index++) {
        
        pass.push(characters[Math.ceil(Math.random()*90)]);
        passtxt.textContent += pass [index];


    }

}



