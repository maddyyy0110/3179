var vg_1 = "./data/worldMap.json";
vegaEmbed("#ChloroMap", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_1 = "./data/disastersChart.json";
vegaEmbed("#stackedBarChart", vg_1,{mode: "vega-lite",actions: false}).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
