const button =document.getElementById("pass");
const input = document.getElementById("input");
const length=document.getElementById("length")
const passwordLength=parseInt(prompt("Enter Password Length"), 10);
length.innerHTML=`Password Length: ${passwordLength}`;
const includeUpperCase=true;
const includeLowerCase=true;
const includeNumbers=true;
const includeSymbols=true;


button.addEventListener("click", ()=>{


    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_-+=";
    let allowedChars="";
    let password="";
    

    allowedChars+=includeLowerCase ? lowerCase:"";
    allowedChars+=includeUpperCase ? upperCase : "";
    allowedChars+=includeNumbers ? numbers : "";
    allowedChars+=includeSymbols ? symbols : "";
    if(isNaN(passwordLength)){
        alert("Enter Number")
    }


    if(passwordLength<=0){
        alert("Length of password should be greater than 0");
    }

    if(allowedChars.length===0){
       alert("Atleast 1 set of characters needs to be selected");
    }

    for(let i = 0; i<passwordLength;i++){
        let randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];

    }
    input.value=password

});

function copyPassword(){
    input.select();
    document.execCommand("copy")
}




