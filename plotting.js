var a = 0;
var b = 0;
var c = 0;
var d = 0;
var n = 0;
var x = new Array();
var y = new Array(); 
var v = new Array();

function calculateY(a, b, c, d, x) {
    return a * Math.sin(b * x + c) + d;
}

function calculate() {
    a = Number($('#a').val());
    b = Number($('#b').val());
    c = Number($('#c').val());
    d = Number($('#d').val());
    var xmin = Number($('#xmin').val());
    var xmax = Number($('#xmax').val());
    var xt = 0;
    
    var i = 0;
    for (xt = xmin; xt <= xmax; xt++) {
        x[i] = xt;
        y[i] = calculateY(a, b, c, d, xt);
        v[i] = [x[i], y[i]];
        i++;
    }

    n = i - 1;   
}

function displayValues() {
    var s = "";
    
    s = "Y = " + a + "sin (";
    s+= b + "x + " + c + ") + ";
    s+= d + "<br/><br/>";
    
    for (var i = 0; i <= n; i++) {
        s += " X = " + x[i] + " Y = " + y[i] + "<br/>";       
    }
    
    output.innerHTML = s;
}

function plotValues() {
    calculate();
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline',
            marginRight: 140,
            marginBottom: 25,
        },
        title: {
            text: 'Sine Curve',
            x: -20 
        },
        xAxis: {
            title: {
                text: 'X'
            }
        },
        yAxis: {
            title: {
                text: 'Y'
            }   
        }, 
       
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5, 
                    states: {
                        hover: {
                            enabled: true,
                                lineColor: 'rgb(150,150,150)'
                        }
                    }
                },
                states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
                }
            }
        },
       
        series: [{
                name: 'Y Values',
                color: 'rgba(223, 83, 83, .5)',
                data: v
        }]                
        })      
        }

        $('#calculate').click( function() {
             calculate();
            displayValues();    
        });

        $('#plot').click( function() {
            calculate();
            plotValues();   
        }); 