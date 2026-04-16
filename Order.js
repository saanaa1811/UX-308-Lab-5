let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

function welcoming() {
  let aReturn = [];
  currentState = ordering;
  aReturn.push("Welcome to Sana's Coffee.");
  aReturn.push("Would you like to order something from our menu?");
  return aReturn;
}

function ordering(sInput) {
  let aReturn = [];
  currentState = welcoming
  if (sInput.toLowerCase().startsWith('y')) {
    aReturn.push("Here is our menu:");
    aReturn.push("☕ Coffee");
    aReturn.push("Iced Coffee");
    aReturn.push("Green Tea");
    aReturn.push("Croissant");
    aReturn.push("Cake");
    aReturn.push("Your order has been placed!");
    let d = new Date();
    d.setMinutes(d.getMinutes() + 10);
    aReturn.push(`Please pick up your order before ${d.toTimeString()}`);
  } else {
    aReturn.push("Thanks for visiting Sana's Coffee");
    aReturn.push("See you next time!");
  }
  return aReturn;
}

