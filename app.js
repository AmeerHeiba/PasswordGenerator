const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const simp = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass = [];
let passtxt = document.getElementById("pass_txt");
let passwordLenM = document.getElementById("passlength-select");
let passwordLen = passwordLenM.value;
let passwordcomp = document.getElementById("passtype-select");
let passwordcompVal = passwordcomp.value;

console.log (passwordLen);

function newPassword()
{

    passwordLen = passwordLenM.value;
    passwordcompVal = passwordcomp.value;
    passtxt.textContent = "";
    pass = [];

    if (passwordcompVal == 1){

    for (let index = 0; index < passwordLen; index++) {
        
        pass.push(numbers[Math.ceil(Math.random()*8)]);
        passtxt.textContent += pass [index];
    }
    }
    else if (passwordcompVal == 2)
    {
        for (let index = 0; index < passwordLen; index++) {
        
            pass.push(numbers[Math.ceil(Math.random()*8)]);
            pass.push(characters[Math.ceil(Math.random()*characters.length-1)]);
            
            passtxt.textContent += pass [index];
        }
    }
    else if (passwordcompVal == 3)
    {
        for (let index = 0; index < passwordLen; index++) {
        
            pass.push(numbers[Math.ceil(Math.random()*8)]);
            pass.push(characters[Math.ceil(Math.random()*characters.length-1)]);
            pass.push(simp[Math.ceil(Math.random()*simp.length-1)]);
            
            passtxt.textContent += pass [index];
        }
    }
    else
    {
        passtxt.textContent = "Wrong Entry, Please select password length and complicty! ";
    }

}

function copyPass()
{
    passtxt.select();
    passtxt.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(passtxt.value);
    alert("Password Copied to Clipboard");
}




