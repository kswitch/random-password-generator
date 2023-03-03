const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePasswords = document.querySelector('#generate-passwords-btn');
const passwordOne = document.querySelector('#password-1');
const passwordTwo = document.querySelector('#password-2');

generatePasswords.addEventListener('click', () => {
    const password1 = [];
    const password2 = [];

    const length = document.querySelector('#password-length').value;
    if(length >= 8 &&  length <= 24) {
        for (let k=0; k<length; k++) {
            const i = Math.floor( Math.random()*characters.length );
            const j = Math.floor( Math.random()*characters.length );
            password1.push(characters[i]);
            password2.push(characters[j]);
        }
        passwordOne.textContent = password1.join('');
        passwordTwo.textContent = password2.join('');
    }
    else {
        window.alert("Password length must be between 8 - 24");
    }
});

passwordOne.addEventListener('click', async () => {
    if(passwordOne.textContent.length > 7) {
        try {
            await navigator.clipboard.writeText(passwordOne.textContent);
            window.alert('Password Copied');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
})

passwordTwo.addEventListener('click', async () => {
    if(passwordTwo.textContent.length > 7) {
        try {
            await navigator.clipboard.writeText(passwordTwo.textContent);
            window.alert('Password Copied');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
})