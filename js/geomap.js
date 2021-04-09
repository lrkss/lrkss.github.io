google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', '7-Tage-Inzidenzwert');
    data.addRows([[{f: 'Baden-Württemberg', v: 'DE-BW'}, 109],
        [{f: 'Bayern', v: 'DE-BY'}, 129],
        [{f: 'Berlin', v: 'DE-BE'}, 89],
        [{f: 'Brandenburg', v: 'DE-BB'}, 104],
        [{f: 'Bremen', v: 'DE-HB'}, 122],
        [{f: 'Hamburg', v: 'DE-HH'}, 109],
        [{f: 'Hessen', v: 'DE-HE'}, 112],
        [{f: 'Mecklenburg-Vorpommern', v: 'DE-MV'}, 95],
        [{f: 'Niedersachsen', v: 'DE-NI'}, 82],
        [{f: 'Nordrhein-Westfalen', v: 'DE-NW'}, 109],
        [{f: 'Rheinland-Pfalz', v: 'DE-RP'}, 91],
        [{f: 'Saarland', v: 'DE-SL'}, 91],
        [{f: 'Sachsen', v: 'DE-SN'}, 151],
        [{f: 'Sachsen-Anhalt', v: 'DE-ST'}, 129],
        [{f: 'Schleswig-Holstein', v: 'DE-SH'}, 65],
        [{f: 'Thüringen', v: 'DE-TH'}, 187]]);

    var options = {'title': 'Map', 'width': 550, 'height': 400, 'region': 'DE', 'resolution': 'provinces',
    colors: ['a79aff']};

    var container = document.getElementById('map_canvas');
    var geochart = new google.visualization.GeoChart(container);
    geochart.draw(data, options);
};