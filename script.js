/* ELEMENTS */

const inputSlider =document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");
const passwordDisplay =document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numbersCheck =document.querySelector("#numbers");
const symbolsCheck =document.querySelector("#symbols");
const indicator =document.querySelector("[data-indicator]");
const strengthLabel =document.querySelector("[data-strengthLabel]");
const strengthText =document.querySelector("[data-strengthText]");
const generateBtn =document.querySelector(".generateButton");
const allCheckBox =document.querySelectorAll('input[type="checkbox"]');

/* CHARACTERS */
const symbols ='~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

/* VARIABLES */

let password = "";
let passwordLength = 10;
let checkCount = 0;

/* INITIALIZATION */

handleSlider();
setIndicator("#777");
updateStrength();

/* SLIDER */

function handleSlider() 
{
inputSlider.value = passwordLength;
lengthDisplay.innerText = passwordLength;
const min =Number(inputSlider.min);
const max =Number(inputSlider.max);
const percentage = ((passwordLength - min) * 100) /(max - min); 
inputSlider.style.background =`linear-gradient( 90deg, #8b2be2 ${percentage}%, #31243e ${percentage}% )`;

}

/* RANDOM NUMBER */

function getRandomInteger(min, max) 
{

/*
 * crypto.getRandomValues provides
 * better randomness than Math.random().
 */

if (window.crypto && window.crypto.getRandomValues)
    {
    const range = max - min;
    const maxUint32 = 0xFFFFFFFF;
    const randomArray = new Uint32Array(1);
    let randomValue;

    do 
    {
        window.crypto.getRandomValues( randomArray );
        randomValue = randomArray[0];

    }
     while 
    (
        randomValue >maxUint32 -(maxUint32 % range)
    );

    return min +(randomValue % range);
 }

 return Math.floor(Math.random() *(max - min));

}

/* CHARACTER GENERATORS */

function generateRandomNumber() 
{
 return getRandomInteger(0, 10);
}

function generateLowerCase() 
{
 return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() 
{
 return String.fromCharCode(getRandomInteger(65, 91));

}

function generateSymbol() 
{
 const randomIndex =getRandomInteger(0, symbols.length);
 return symbols.charAt(randomIndex);

}

/* INDICATOR */

function setIndicator(color) 
{
indicator.style.backgroundColor = color;
indicator.style.boxShadow =`0 0 14px 2px ${color}`;

}

/* PASSWORD STRENGTH */

function calcStrength() 
{

const hasUpper = uppercaseCheck.checked;
const hasLower = lowercaseCheck.checked;
const hasNumber = numbersCheck.checked;
const hasSymbol = symbolsCheck.checked;


/*
 * Strong password:
 *
 * Uppercase
 * Lowercase
 * Number OR Symbol
 * Length >= 8
 */

if ( hasUpper && hasLower &&(hasNumber || hasSymbol) && passwordLength >= 8) 
{
    setIndicator("#00e676");
    strengthLabel.innerText = "Strong";
    strengthLabel.style.color = "#00e676";
    strengthText.innerText = "Excellent password combination";
    return;
}

/* * Medium password */

if ((hasUpper || hasLower) &&(hasNumber || hasSymbol) && passwordLength >= 6) 
{
    setIndicator("#ffd166");
    strengthLabel.innerText ="Medium";
    strengthLabel.style.color ="#ffd166";
    strengthText.innerText = "Good, but can be stronger";
    return;
}

/* * Weak password */
setIndicator("#ff4d6d");
strengthLabel.innerText ="Weak";
strengthLabel.style.color ="#ff4d6d";
strengthText.innerText = "Add more character types";
}

/* UPDATE STRENGTH */

function updateStrength() 
{
 if (checkCount === 0) 
{
    setIndicator("#777");
    strengthLabel.innerText = "—";
    strengthLabel.style.color = "#9f94af";
    strengthText.innerText = "Select options to check strength";
    return;
}
calcStrength();

}

/* COPY PASSWORD */
async function copyContent()
{
if (!passwordDisplay.value)
{
    return;
}
try 
{
    await navigator.clipboard.writeText(passwordDisplay.value );
    copyMsg.innerText = "Copied!";
} 
catch (error) 
{  /*  * Fallback for older browsers */
    passwordDisplay.select();
    document.execCommand("copy");
    copyMsg.innerText = "Copied!";
}

copyMsg.classList.add("active");
setTimeout(() => {copyMsg.classList.remove("active");}, 2000);

}

/* COPY BUTTON */
copyBtn.addEventListener("click",copyContent);

/* SHUFFLE PASSWORD Fisher-Yates Algorithm */
function shufflePassword(array) 
{
for (let i = array.length - 1; i > 0; i--)
{
    const j = getRandomInteger(0, i + 1 );
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array.join("");
}

/* CHECKBOX CHANGE */
function handleCheckBoxChange()
{
checkCount = 0;
allCheckBox.forEach((checkbox) => 
    {
        if (checkbox.checked) 
        {
            checkCount++;
        }
    }
);

/* * Password must be long enough * to contain every selected * character type. */

if ( passwordLength < checkCount) 
{
    passwordLength = checkCount;
    handleSlider();
}
updateStrength();
}

/* CHECKBOX EVENTS */

allCheckBox.forEach((checkbox) => 
{
    checkbox.addEventListener("change", handleCheckBoxChange );
}
);

/* SLIDER EVENT */
inputSlider.addEventListener("input",(event) => 
{
    passwordLength = Number(event.target.value);
    handleSlider();
    updateStrength();
}
);

/* GENERATE PASSWORD */
generateBtn.addEventListener("click",() => 
{
    /* * No options selected */
    if (checkCount === 0) 
    {
        passwordDisplay.value = "";
        passwordDisplay.placeholder ="Select at least one option";
        setTimeout(() => 
        {
            passwordDisplay.placeholder = "Your password will appear here";
        }, 2000);
        return;
    }

    /*   * Make sure password length * is enough for selected options.   */

    if ( passwordLength < checkCount) 
    {
        passwordLength = checkCount;
        handleSlider();
    }
    password = "";

    /*     * Store selected generators */
    const generators = [];
    if (uppercaseCheck.checked) 
    {
        generators.push( generateUpperCase );
    }

    if (lowercaseCheck.checked) 
    {
        generators.push(generateLowerCase);
    }

    if (numbersCheck.checked) 
    {
        generators.push(generateRandomNumber );
    }
    if (symbolsCheck.checked) 
    {
        generators.push(generateSymbol);
    }

    /* * Add at least one character * from every selected category. */
    for ( let i = 0; i < generators.length; i++)
    {
        password +=generators[i]();
    }

    /* * Fill remaining password length. */
    for ( let i = generators.length; i < passwordLength; i++ ) 
    {
        const randomIndex = getRandomInteger( 0, generators.length );
        password += generators[randomIndex]();
    }

    /*  * Shuffle characters so that * selected categories aren't * always in the same positions. */
    password = shufflePassword( Array.from(password) );

    /* * Display password. */
    passwordDisplay.value = password;

    /* * Calculate strength. */
    calcStrength();
}

);
