let availableKeywords = [
    'BIC gel-o-city gelpen',
    'Caran D ache Luminance Kleurpotloden',
    'Caran D ache Pablo Kleurpotloden',
    'Copic Sketch Markers',
    'Copic Ciao Markers',
    'Copic Original Markers',
    'Copic Multiliner Classic',
    'Copic Multiliner SP',
    'Cretacolor Monolith Grafietpotloden',
    'Derwent Sketching Grafietpotloden',
    'Derwent Procolour Kleurpotloden',
    'Derwent Graphic Grafietpotloden',
    'Derwent Chromaflow Kleurpotloden',
    'Derwent Coloursoft Kleurpotloden',
    'Derwent Lightfast Kleurpotlood',
    'Derwent Tinted Charcoal Houtskoolpotlood',
    'Derwent Drawing Tekenpotlood',
    'Derwent Graphitint Kleurpotlood',
    'Edding 1800 Fineliner',
    'Faber Castell Polychromos',
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

    if (input === "Copic Original Markers") {
        CopicOriginalMarkers();
    }

    if (input === "Copic Ciao Markers") {
        CopicCiaoMarkers();
    }

    if (input === "Copic Sketch Markers") {
        CopicSketchMarkers();
    }

    if (input === "Faber Castell Polychromos") {
        FaberCastellPolychromos();
    }

    if (input === "Copic Multiliner Classic") {
        CopicMultilinerClassic();
    }

    if (input === "Caran D ache Luminance Kleurpotloden") {
        CaranDacheLuminanceKleurpotloden();
    }

    if (input === "Caran D ache Pablo Kleurpotloden") {
        CaranDachePabloKleurpotloden();
    }

    if (input === "Copic Multiliner SP") {
        CopicMultilinerSP();
    }

    if (input === "Cretacolor Monolith Grafietpotloden") {
        CretacolorMonolithGrafietpotloden();
    }

    if (input === "Derwent Coloursoft Kleurpotloden") {
        DerwentColoursoftKleurpotloden();
    }

    if (input === "Derwent Chromaflow Kleurpotloden") {
        DerwentChromaflowKleurpotloden();
    }

    if (input === "Derwent Graphic Grafietpotloden") {
        DerwentGraphicGrafietpotloden();
    }

    if (input === "Derwent Procolour Kleurpotloden") {
        DerwentProcolourKleurpotloden();
    }

    if (input === "Derwent Sketching Grafietpotloden") {
        DerwentSketchingGrafietpotloden();
    }

    if (input === "Edding 1800 Fineliner") {
        Edding1800Fineliner();
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
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentTintedCharcoalHoutskoolpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "block";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentDrawingTekenpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "block";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentGraphitintKleurpotlood() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "block";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function BICgelocitygelpen() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "block";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CopicSketchMarkers() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "block";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CopicCiaoMarkers() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "block";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CopicOriginalMarkers() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "block";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellPolychromos() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "block";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CopicMultilinerClassic() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "block";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CaranDacheLuminanceKleurpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "block";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CaranDachePabloKleurpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "block";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CopicMultilinerSP() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "block";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function CretacolorMonolithGrafietpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "block";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentColoursoftKleurpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "block";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentChromaflowKleurpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "block";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentGraphicGrafietpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "block";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentProcolourKleurpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "block";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function DerwentSketchingGrafietpotloden() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "block";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function Edding1800Fineliner() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "block";
    document.getElementById("Buttons").style.display = "none";
}

function home() {
    document.getElementById("biggest-container1").style.display = "none";
    document.getElementById("biggest-container2").style.display = "none";
    document.getElementById("biggest-container3").style.display = "none";
    document.getElementById("biggest-container4").style.display = "none";
    document.getElementById("biggest-container5").style.display = "none";
    document.getElementById("biggest-container6").style.display = "none";
    document.getElementById("biggest-container7").style.display = "none";
    document.getElementById("biggest-container8").style.display = "none";
    document.getElementById("biggest-container9").style.display = "none";
    document.getElementById("biggest-container10").style.display = "none";
    document.getElementById("biggest-container11").style.display = "none";
    document.getElementById("biggest-container12").style.display = "none";
    document.getElementById("biggest-container13").style.display = "none";
    document.getElementById("biggest-container14").style.display = "none";
    document.getElementById("biggest-container15").style.display = "none";
    document.getElementById("biggest-container16").style.display = "none";
    document.getElementById("biggest-container17").style.display = "none";
    document.getElementById("biggest-container18").style.display = "none";
    document.getElementById("biggest-container19").style.display = "none";
    document.getElementById("biggest-container20").style.display = "none";
    document.getElementById("Buttons").style.display = "block";
}