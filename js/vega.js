barGraph = "Absolute"


var vg_1 = "./data/worldMap.json";
vegaEmbed("#ChloroMap", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_1 = "./data/disastersChart.json";
vegaEmbed("#stackedAreaChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_1 = "./data/deathsBar.json";
vegaEmbed("#barChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_1 = "./data/donutChart.json";
vegaEmbed("#donutChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


function swapBargraph(){
    if (barGraph == "Absolute"){

        document.getElementById("barChart").innerHTML = ""

        var vg_1 = "./data/deathsBarNormalised.json";
        vegaEmbed("#barChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result){}).catch(console.error);
        barGraph = "Normalised"
        document.getElementById("barChartButton").innerText = "Absolute"
    } else {
        document.getElementById("barChart").innerHTML = ""

        var vg_1 = "./data/deathsBar.json";
        vegaEmbed("#barChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result){}).catch(console.error);
        barGraph = "Absolute"
        document.getElementById("barChartButton").innerText = "Normalised"
    }
}

barChartButton = document.getElementById("barChartButton")

barChartButton.addEventListener(
    "click", swapBargraph
);