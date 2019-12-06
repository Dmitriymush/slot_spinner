let doing = false;
const status = document.getElementById("status");
const bal = document.getElementById("balance");
let balance = 100;

function doSlot(){
  if (doing){
    return null;
  }

  if(!balance) {
    bal.innerText = 'Please Refill Your Balance';
    return null;
  }

  balance -= 10;
  bal.innerText = `Balance: ${balance}`;

  doing = true;
  const numChanges = randomInt(1,6)*7;
  let numberSlot1 = numChanges+randomInt(1,7);
  let numberSlot2 = numChanges+2*7+randomInt(1,7);
  let numberSlot3 = numChanges+4*7+randomInt(1,7);
  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  status.innerHTML = "SPINNING";
  let slot1 = setInterval(spin1, 50);
  let slot2 = setInterval(spin2, 50);
  let slot3 = setInterval(spin3, 50);
  function spin1(){
    i1++;
    if (i1 >= numberSlot1){
      clearInterval(slot1);
      return null;
    }

    const slotTitle = document.getElementById("slot1");

    if (slotTitle.className === "a7"){
      slotTitle.className = "a0";
    }
    slotTitle.className = "a"+(parseInt(slotTitle.className.substring(1))+1)
  }

  function spin2(){
    i2++;

    if (i2 >= numberSlot2){
      clearInterval(slot2);
      return null;
    }

    const slotTitle = document.getElementById("slot2");

    if (slotTitle.className === "a7"){
      slotTitle.className = "a0";
    }

    slotTitle.className = "a"+(parseInt(slotTitle.className.substring(1))+1)
  }

  function spin3(){
    i3++;

    if (i3 >= numberSlot3){
      clearInterval(slot3);
      testWin();
      return null;
    }

    const slotTitle = document.getElementById("slot3");
    if (slotTitle.className === "a7"){
      slotTitle.className = "a0";
    }
    slotTitle.className = "a"+(parseInt(slotTitle.className.substring(1))+1)
  }
}

function testWin(){
  const slot1 = document.getElementById("slot1").className;
  const slot2 = document.getElementById("slot2").className;
  const slot3 = document.getElementById("slot3").className;
  if (((slot1 === slot2 && slot2 === slot3) ||
    (slot1 === slot2 && slot3 === "a7") ||
    (slot1 === slot3 && slot2 === "a7") ||
    (slot2 === slot3 && slot1 === "a7") ||
    (slot1 === slot2 && slot1 === "a7") ||
    (slot1 === slot3 && slot1 === "a7") ||
    (slot2 === slot3 && slot2 === "a7") ) && !(slot1 === slot2 && slot2 === slot3 && slot1 === "a7")){
    status.innerHTML = "YOU WIN!";
    balance += 100;
  } else {
    status.innerHTML = "YOU LOSE!";
  }
  doing = false;
}
function randomInt(min, max){
  return Math.floor((Math.random() * (max-min+1)) + min);
}
