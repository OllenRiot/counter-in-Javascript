//VARIABLES

//Variables linked with DOM
let number = document.getElementsByName('number');
let minus = document.getElementsByName('minus');
let plus = document.getElementsByName('plus');
let counter = document.getElementsByName('counter');

let counterContent = document.getElementsByName('counter-content');
let countersList = document.getElementsByName('counter-list-drop-btn');
let countersListPanel = document.getElementsByName('counter-list-panel');
let options = document.getElementsByName('options-drop-btn');
let optionsPanel = document.getElementsByName('options-panel');

let counterDelete = document.getElementsByName('counter-delete');
let counterSet = document.getElementsByName('counter-set');
let counterAdd = document.getElementsByName('counter-add');
let counterReset = document.getElementsByName('counter-reset');
let counterModify = document.getElementsByName('counter-modify');

let addCounter = document.getElementsByName('add-counter');
let counterName = document.getElementsByName('counter-name');
let firstCounterName = document.getElementsByName('first-counter-name');

//Variables with a value
let modifier = 1;
let counterValue = 0;
let counterNumbers = 1;

//Variables without a value
let addToTotal;
let modifierChange;
let counterValueChange;
let newCounter;
let newCounterName;



//---------------------------------------------------------------------------------------MAIN CODE-------------------------------------------------------------------
firstCounterName.textContent = counterName.textContent;



//------------------------------------------------------------------------------------EVENTS--------------------------------------------------------------------
//-------------------------------------------------------------------------------------Counter------------------------------------------------------------------------------
counter.onclick = function(e){
    if(e.target == minus){
        counterValue -= modifier;
        number.textContent = counterValue;
    }

    else if(e.target == plus){        
        counterValue += modifier;
        number.textContent = counterValue;
    }
}

document.onkeydown = function(e){
    if(e.keyCode == 107 || e.keyCode == 38 || e.keyCode == 39){
        counterValue += modifier;
        number.textContent = counterValue;
    }

    
    else if(e.keyCode == 109 || e.keyCode == 37 || e.keyCode == 40){
        counterValue -= modifier;
        number.textContent = counterValue;
    }
}

//------------------------------------------------------------------------------------------------------------------------List of Counters---------------------
countersList.onclick = function(){
    countersListPanel.classList.toggle('show');
}

addCounter.onclick = function(){
    newCounterName = document.createElement('li');
    newCounterName.textContent = 'Contatore senza nome';
    firstCounterName.after(newCounterName);

    newCounter = document.createElement('div');
    newCounter.innerHTML = counterContent.innerHTML;
    newCounter.id = counterContent.id;
    counterContent.after(newCounter);
}

//---------------------------------------------------------------------------------------------------------------------------------Options to show----------------------------
options.onclick = function(){
    optionsPanel.classList.toggle('show');
}

//Reset Counter
counterReset.addEventListener('click',reset);

//Add a Value to the Total
counterAdd.addEventListener('click',add);

//Set the Counter
counterSet.addEventListener('click',set);

//Modify the Modifier
counterModify.addEventListener('click',modify);

//-----------------------------------------------------------------------------------------------------------------------------------Keydown Shortcuts----------------------------
document.onkeyup = function(e){
    if((e.keyCode == 48 || e.keyCode == 96) && e.altKey){
        e.preventDefault();
        shortcutsKeysList();
    }
    
    else if((e.keyCode == 49 || e.keyCode == 97) && e.altKey){ 
        e.preventDefault();
        add();
    }

    else if((e.keyCode == 50 || e.keyCode == 98) && e.altKey){
        e.preventDefault();
        set();
    }

    else if((e.keyCode == 51 || e.keyCode == 99) && e.altKey){
        e.preventDefault();
        reset();
    }

    else if((e.keyCode == 52 || e.keyCode == 100) && e.altKey){
        e.preventDefault();
        modify();
    }
}

//--------------------------------------------------------------------------------------------------------------------------------FUNZIONI--------------------------------------------------------------------------------
function isNull(a){
    if(a === null || a === '') return null;
}

function onlyNumbers(a){
    a = Number(a);

    if(isNaN(a)){
        alert('ATTENZIONE\nPuoi digitare solo valori numerici');
        let b;
        
        do{ 
            b = +prompt('Ridigita il valore','');
            
            if(isNaN(b)) alert('Valore non corretto\nPuoi digitare solo valori numerici come è stato detto in precedenza');
        }while(isNaN(b))

        return b;
    }

    else{
        return a;
    }
}

function shortcutsKeysList(){
    alert("TASTI DI SCELTA RAPIDA:\nAlt + 0: Mostra la lista delle scorciatoie con la tastiera\nAlt + 1: Aggiungi un valore numerico al valore attuale del contatore\nAlt + 2: Imposta il valore del contatore\nAlt + 3: Resetta il contatore\nAlt + 4: Decidi di quanto incrementare o decrementare il contatore\n\nTasto '+' / freccia direzionale in su / freccia direzionale a destra: incrementa il valore del contatore\nTasto '-' / freccia direzionale in basso / freccia direzionale a sinistra: decrementa il valore del contatore");
}

function add(){
    addToTotal = prompt('Inserisci il valore da aggiungere al totale','');
     
    if(addToTotal === null || addToTotal === '') number.textContent = counterValue;

    else{
        counterValue += onlyNumbers(addToTotal);
        number.textContent = counterValue;
    } 
}

function set(){
    counterValueChange = prompt('Inserisci il valore da impostare come contatore','');
    
    if(counterValueChange === null || counterValueChange === '') counterValueChange = counterValue;
    else counterValue = onlyNumbers(counterValueChange);

    number.textContent = counterValue;
}

function modify(){
    modifierChange = prompt("Inserisci il valore dell'incremento/decremento",'');
    
    if(modifierChange === null || modifierChange === '') modifierChange = modifier;

    modifier = onlyNumbers(modifierChange);
}

function reset(){
    counterValue = 0;
    number.textContent = counterValue;
}