//VARIABLES

//Variables linked with DOM with a single value
let number = document.getElementById('number');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let counter = document.getElementById('counter');

let counterSet = document.getElementById('counter-set');
let counterAdd = document.getElementById('counter-add');
let counterReset = document.getElementById('counter-reset');
let counterModify = document.getElementById('counter-modify');

let counterName = document.getElementById('counter-name');
let changeNameIcon = document.querySelector('#main-content header button .hidden-inline');

//Variables linked with DOM with multi-values[object]
let panels = document.getElementsByClassName('panel');
let dropBtns = document.getElementsByClassName('drop-btn');

let [panel1,panel2,panel3,...panelR] = panels;
let [drop1,drop2,drop3,...dropR] = dropBtns;

//Variables with a value
let modifier = 1;
let counterValue = 0;
let counterNameDefault = 'Contatore senza nome';

//Variables without a value
let addToTotal;
let modifierChanged;
let counterValueChanged;
let counterNameChanged;
let confirmReset;



//---------------------------------------------------------------------------------------MAIN CODE-------------------------------------------------------------------
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
    if(e.keyCode == 107 || e.keyCode == 39){
        counterValue += modifier;
        number.textContent = counterValue;
    }

    
    else if(e.keyCode == 109 || e.keyCode == 37){
        counterValue -= modifier;
        number.textContent = counterValue;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------DropDown VS Panel----------------------------------------------------
drop1.onclick = function(){
    panel1.classList.toggle('panel-open');
}

//-----------------------------------------------------------------------------------------------------------------------------------------------Change the name-------------------------------------------------------------
changeNameIcon.addEventListener('click',changeName);

//---------------------------------------------------------------------------------------------------------------------------------Options to show----------------------------
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
    if((e.keyCode == 48) && e.altKey){
        e.preventDefault();
        shortcutsKeysList();
    }
    
    else if((e.keyCode == 49) && e.altKey){ 
        e.preventDefault();
        add();
    }

    else if((e.keyCode == 50) && e.altKey){
        e.preventDefault();
        set();
    }

    else if((e.keyCode == 51) && e.altKey){
        e.preventDefault();
        reset();
    }

    else if((e.keyCode == 52) && e.altKey){
        e.preventDefault();
        modify();
    }

    else if((e.keyCode == 53) && e.altKey){
        e.preventDefault();
        changeName();
    }
}



//--------------------------------------------------------------------------------------------------------------------------------FUNZIONI--------------------------------------------------------------------------------
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
    alert("TASTI DI SCELTA RAPIDA:\nAlt + 0: Mostra la lista delle scorciatoie con la tastiera\nAlt + 1: Aggiungi un valore numerico al valore attuale del contatore\nAlt + 2: Imposta il valore del contatore\nAlt + 3: Resetta il contatore\nAlt + 4: Decidi di quanto incrementare o decrementare il contatore\nAlt + 5:Cambia il nome del contatore\n\nTasto '+' /  freccia direzionale a destra: incrementa il valore del contatore\nTasto '-' /  freccia direzionale a sinistra: decrementa il valore del contatore");
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
    counterValueChanged = prompt('Inserisci il valore da impostare come contatore',`${counterValue}`);
    
    if(counterValueChanged === null || counterValueChanged === '') counterValueChanged = counterValue;
    else counterValue = onlyNumbers(counterValueChanged);

    number.textContent = counterValue;
}

function modify(){
    modifierChanged = prompt("Inserisci il valore dell'incremento/decremento",`${modifier}`);
    
    if(modifierChanged === null || modifierChanged === '') modifierChanged = modifier;

    modifier = onlyNumbers(modifierChanged);
}

function reset(){
    confirmReset = confirm('Sei sicuro di voler resettare il conteggio?','');
    
    if(confirmReset && counterValue!==0){
        counterValue = 0;
        number.textContent = counterValue;
    }

    else if(confirmReset && counterValue===0){
        alert('Il contatore è già a 0');
    }
}

function changeName(){
    counterNameChanged = prompt('Inserisci il nome che vorresti dare al contatore',`${counterNameDefault}`);

    if(counterNameChanged === null || counterNameChanged === '') counterNameChanged = counterNameDefault;
    else counterNameDefault = counterNameChanged;

    counterName.textContent = counterNameChanged;
}