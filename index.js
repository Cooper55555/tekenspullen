let availableKeywords = [
    'Derwent Lightfast Kleurpotlood',
    'Derwent Tinted Charcoal Houtskoolpotlood',
    'Derwent Drawing Tekenpotlood',
    'Derwent Graphitint Kleurpotlood',
    'BIC gel-o-city gelpen',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

function CraftingTable() {
    document.getElementById("search-box").style.display = "none";
}

const button = document.getElementById('checkButton');
button.addEventListener('click', function() {
    const input = document.getElementById('input-box').value;

    if (input === "Derwent Lightfast Kleurpotlood") {
        DerwentLightfastKleurpotlood();
    }

    if (input === "Derwent Tinted Charcoal Houtskoolpotlood") {
        DerwentTintedCharcoalHoutskoolpotlood();
    }

    if (input === "Derwent Drawing Tekenpotlood") {
        DerwentDrawingTekenpotlood();
    }

    if (input === "Derwent Graphitint Kleurpotlood") {
        DerwentGraphitintKleurpotlood();
    }

    if (input === "BIC gel-o-city gelpen") {
        BICgelocitygelpen();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const isChecked = localStorage.getItem(checkbox.value) === 'true';
        checkbox.checked = isChecked;

        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.value, checkbox.checked);
        });
    });
});

function DerwentLightfastKleurpotlood() {
    document.getElementById("biggest-container1").style.display = "block";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentTintedCharcoalHoutskoolpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "block";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentDrawingTekenpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "block";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentGraphitintKleurpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "block";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function BICgelocitygelpen() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "block";
    document.getElementById("Buttons").style.display = "none";
}

function home() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("Buttons").style.display = "block";
}