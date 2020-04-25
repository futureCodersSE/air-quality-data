const dataSet = [
    {
        datetime: "01/01/2020",
        NO: 137,
        NO2: 149,
        NOx: 359,
        PM25: 45,
        PM10: 38,
    },
    {
        datetime: "02/01/2020",
        NO: 104,
        NO2: 71,
        NOx: 231,
        PM25: 15,
        PM10: 16,
    },
    {
        datetime: "03/01/2020",
        NO: 98,
        NO2: 65,
        NOx: 215,
        PM25: 13,
        PM10: 18,
    },
    {
        datetime: "04/01/2020",
        NO: 95,
        NO2: 63,
        NOx: 209,
        PM25: 13,
        PM10: 19,
    },
    {
        datetime: "05/01/2020",
        NO: 70,
        NO2: 49,
        NOx: 156,
        PM25: 15,
        PM10: 17,
    },
]

let svgWidth = 500, svgHeight = 300, barPadding = 5
let barWidth = (svgWidth/dataSet.length)

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr('height', svgHeight)

let barChart = svg.selectAll('rect')
    .data(dataSet)
    .enter()
    .append('rect')
    .attr('y', function(d){
        console.log('d', d, typeof(d))
        return svgHeight - d.NO
    })
    .attr("height", function(d){
        return d.NO
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d,i){
        let translate = [barWidth * i, 0]
        return 'translate(' + translate + ")"
    })

    let text = svg.selectAll("text")
        .data(dataSet)
        .enter()
        .append("text")
        .text(function(d){
            return d.datetime
        })
        .attr("y", function(d, i){
            return svgHeight - d.NO - 2
        })
        .attr("x", function(d, i) {
            return barWidth * i
        })
        .attr("fill", "#A64C38")