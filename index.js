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
    'Edding 55 Finepen',
    'Edding 1800 Fineliner',
    'Faber Castell Polychromos',
    'Faber Castell Goldfaber Grafiet Potlood 1221',
    'Faber Castell 9000 Tekenpotlood',
    'Faber Castell PITT Artist Pen Inktmarker',
    'Faber Castell PITT Grafiet Mat',
    'Faber Castell Grip 2001 Potlood',
    'Faber Castell PITT Artist Pen Dual Marker',
    'Faber Castell Graphite Pure Grafietstiften',
    'Faber Castell Pitt Kunstenaars-Krijtpotloden Zwart',
    'Faber Castell 9000 Jumbo Grafietpotlood',
    'Faber Castell PITT Artist Pen Calligraphy',
    'Faber-Castell Metallics Marker',
    'Fineliner Stabilo Point 88',
    'KOH-I-NOOR grafietpotlood Toison dOr 1900',
    'KOH-I-NOOR progresso Grafietpotlood',
    'Lyra Rembrandt Polycolor Kleurpotloden',
    'Molotow ONE4ALL Acrylmarker',
    'Molotow ONE4ALL Acrylic Twin Marker',
    'Molotow Blackliner Permanent',
    'Molotow Sketcher Twin Marker',
    'Posca Paint Marker',
    'rOtring Tikky Graphic Fineliner',
    'Sakura Pigma Fineliner/Pen',
    'Sakura Pen-touch',
    'Sakura Gelly Moonlight Gelpen',
    'Staedtler Pigment Liner 308 Fineliner',
    'Winsor & Newton Promarker',
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

    if (input === "Edding 55 Finepen") {
        Edding55finepen();
    }

    if (input === "Faber Castell Goldfaber Grafiet Potlood 1221") {
        FaberCastellGoldfaberGrafietPotlood1221();
    }

    if (input === "Faber Castell 9000 Tekenpotlood") {
        FaberCastell9000tekenpotlood();
    }

    if (input === "Faber Castell PITT Artist Pen Inktmarker") {
        FabercastellPITTartistpeninktmarker();
    }

    if (input === "Faber Castell PITT Grafiet Mat") {
        FaberCastellPITTGrafietmat();
    }

    if (input === "Faber Castell Grip 2001 Potlood") {
        FaberCastellGrip2001potlood();
    }

    if (input === "Faber Castell PITT Artist Pen Dual Marker") {
        FaberCastellPITTArtistPendualmarker();
    }

    if (input === "Faber Castell Graphite Pure Grafietstiften") {
        FaberCastellGraphitePuregrafietstiften();
    }

    if (input === "Faber Castell Pitt Kunstenaars-Krijtpotloden Zwart") {
        FaberCastellPittkunstenaarskrijtpotlodenzwart();
    }

    if (input === "Faber Castell 9000 Jumbo Grafietpotlood") {
        FaberCastell9000Jumbografietpotlood();
    }

    if (input === "Faber Castell PITT Artist Pen Calligraphy") {
        FaberCastellPITTArtistPenCalligraphy();
    }

    if (input === "Faber-Castell Metallics Marker") {
        FaberCastellMetallicsmarker();
    }





    if (input === "KOH-I-NOOR grafietpotlood Toison dOr 1900") {
        KOHINOORgrafietpotloodToisondOr1900();
    }

    if (input === "KOH-I-NOOR progresso Grafietpotlood") {
        KOHINOORprogressografietpotlood();
    }

    if (input === "Lyra Rembrandt Polycolor Kleurpotloden") {
        LyraRembrandtPolycolorKleurpotloden();
    }

    if (input === "Molotow ONE4ALL Acrylmarker") {
        MolotowONE4ALLacrylmarker();
    }

    if (input === "Molotow ONE4ALL Acrylic Twin Marker") {
        MolotowONE4ALLAcrylictwinmarker();
    }

    if (input === "Molotow Blackliner Permanent") {
        MolotowblacklinerPermanent();
    }

    if (input === "Molotow Sketcher Twin Marker") {
        MolotowSketcherTwinMarker();
    }

    if (input === "rOtring Tikky Graphic Fineliner") {
        rOtringTikkyGraphicfineliner();
    }

    if (input === "Sakura Pigma Fineliner/Pen") {
        SakuraPigmafinelinerpen();
    }

    if (input === "Sakura Pen-touch") {
        SakuraPentouch();
    }

    if (input === "Sakura Gelly Moonlight Gelpen") {
        SakuraGellyMoonlightGelpen();
    }

    if (input === "Fineliner Stabilo Point 88") {
        FinelinerStabilopoint88();
    }

    if (input === "Staedtler Pigment Liner 308 Fineliner") {
        StaedtlerPigmentLiner308Fineliner();
    }

    if (input === "Posca Paint Marker") {
        PoscaPaintmarker();
    }

    if (input === "Winsor & Newton Promarker") {
        WinsorNewtonPromarker();
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function Edding55finepen() {
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
    document.getElementById("biggest-container21").style.display = "block";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellGoldfaberGrafietPotlood1221() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "block";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastell9000tekenpotlood() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "block";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FabercastellPITTartistpeninktmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "block";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellPITTGrafietmat() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "block";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellGrip2001potlood() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "block";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellPITTArtistPendualmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "block";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellGraphitePuregrafietstiften() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "block";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellPittkunstenaarskrijtpotlodenzwart() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "block";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastell9000Jumbografietpotlood() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "block";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellPITTArtistPenCalligraphy() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "block";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FaberCastellMetallicsmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "block";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function KOHINOORgrafietpotloodToisondOr1900() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "block";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function KOHINOORprogressografietpotlood() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "block";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function LyraRembrandtPolycolorKleurpotloden() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "block";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function MolotowONE4ALLacrylmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "block";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function MolotowONE4ALLAcrylictwinmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "block";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function MolotowblacklinerPermanent() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "block";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function MolotowSketcherTwinMarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "block";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function rOtringTikkyGraphicfineliner() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "block";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function SakuraPigmafinelinerpen() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "block";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function SakuraPentouch() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "block";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function SakuraGellyMoonlightGelpen() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "block";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function FinelinerStabilopoint88() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "block";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function StaedtlerPigmentLiner308Fineliner() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "block";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function PoscaPaintmarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "block";
    document.getElementById("biggest-container47").style.display = "none";
    document.getElementById("Buttons").style.display = "none";
}

function WinsorNewtonPromarker() {
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
    document.getElementById("biggest-container21").style.display = "none";
    document.getElementById("biggest-container22").style.display = "none";
    document.getElementById("biggest-container23").style.display = "none";
    document.getElementById("biggest-container24").style.display = "none";
    document.getElementById("biggest-container25").style.display = "none";
    document.getElementById("biggest-container26").style.display = "none";
    document.getElementById("biggest-container27").style.display = "none";
    document.getElementById("biggest-container28").style.display = "none";
    document.getElementById("biggest-container29").style.display = "none";
    document.getElementById("biggest-container30").style.display = "none";
    document.getElementById("biggest-container31").style.display = "none";
    document.getElementById("biggest-container32").style.display = "none";
    document.getElementById("biggest-container33").style.display = "none";
    document.getElementById("biggest-container34").style.display = "none";
    document.getElementById("biggest-container35").style.display = "none";
    document.getElementById("biggest-container36").style.display = "none";
    document.getElementById("biggest-container37").style.display = "none";
    document.getElementById("biggest-container38").style.display = "none";
    document.getElementById("biggest-container39").style.display = "none";
    document.getElementById("biggest-container40").style.display = "none";
    document.getElementById("biggest-container41").style.display = "none";
    document.getElementById("biggest-container42").style.display = "none";
    document.getElementById("biggest-container43").style.display = "none";
    document.getElementById("biggest-container44").style.display = "none";
    document.getElementById("biggest-container45").style.display = "none";
    document.getElementById("biggest-container46").style.display = "none";
    document.getElementById("biggest-container47").style.display = "block";
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