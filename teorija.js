// https://javascript.plainenglish.io/19-simple-javascript-coding-standards-to-keep-your-code-clean-7422d6f9bc0

// Lietojam salīdzināšanas operatoru ===
if (val === 2)

// Mainīgo deklerācijas brīdī lietojam let
let myVar = 10;

// Konstantes, jeb vērtības, kuras mēs definējam rakstam ar lieliem butiem
const VAT_PERCENT = 20;

// Lietojam semikolus komandu beigās
const vatPercent = 20;
let amount = 10;
return addVat(amount, vatPercent);

// Funkciju nosaukumi camelCase
function manaFunkcija(){
    return 1;
  }
  
function manaFunkcija()
{
  return 1;
}
// Vecais veids un ļoti populārs
let fullName = firstName + " " + lastName;

// Jaunais veids tā būtu labāk
let fullName = `${firstName} ${lastName}`;

// Funkciju veidošana
const multiply = (a, b) => { return a * b};

// Figuriekavu lietojums(strādātu arī bez figūras iekavām)
if (valid) {
    doSomething();
 }
 if (amount > 100) {
    doSomething();
 } 
 else if(amount > 200) {
     doSomethingElse();
 }

 // MAKSIMĀLI IZVAIRAMIES NO VAIRĀKIEM IF iekš IF
// SLIKTAIS PIEMĒRS
if (myNumber > 0) {
    if (myNumber > 100) {
         if (!hasDiscountAlready) {
             return addDiscountPercent(0);
         } else {
             return addDiscountPercent(10);
         }
    } else if (myNumber > 50) {
      if (!hasDiscountAlready) {
         return addDiscountPercent(5);
      }
    } else {
      if (!hasDiscountAlready) {
        return addDiscountPercent(0);
      } else {
        return addDiscountPercent(1);
      }
    }
  } else {
       error();
  }
  
  // Tas pats tikai optimizēts
  // Labais piemērs
  if (myNumber <= 0) {
     return error;
  }
  if (!hasDiscountAlready) {
      return addDiscountPercent(0);
  }
  if (myNumber > 100) { 
      return addDiscountPercent(10);
  }
  if (myNumber > 50) { 
      return addDiscountPercent(5);
  }
  return addDiscountPercent(1);

  // Īss if
if (valid) { 
    return buy();
 } else { 
    return error();
 }

 // Labāks variants
return valid ? buy() : error();

// JavaScript faila nosaukums ar mazajiem burtiem (camelCase)


// Noklusējuma vērtības
myFunction(a = 0, b = 0) { 
    return a + b;
 }
 
async function updateRouterScript(override = 0){
    let yesBtn = document.getElementById('updateScriptYesBtn')
    yesBtn.disabled = true;
  
    let loadingTag = document.getElementById('lodingScript')
    loadingTag.innerHTML = "<div class='loader'>Loading script...</div>"
  
    const atbilde = await fetch(`/router/script/${override}`)
  
    // .... Šeit ir funkcijas turpinājums....
}

// Salīdzināšana
if (isValid === true)
if (isValid === false)

// PAREIZI
if (isValid)
if (!isValid)

//////////

function test(number){
    if(number > 0){
      return true;
    }else{
      return false;
    }
     // Labāks variants
  return number > 0 ? true : false;
  }
  
  const test = (number) => {return number > 0 ? true : false;}
  
  if(test(1)) {
    console.log("It's true");
  }else{
    console.log("It's false");
  }