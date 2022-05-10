    // Chart
	



  var colorsDash = ['#8E37D7', '#01c0c8' ,'#6B8DD6'];
Morris.Donut({
  element: 'school-chart',
  colors: colorsDash,
  resize: true,
   labels: ['Series A', 'Series B','Series C'],
  data: [
    {label: "Students", value: 60000},
    {label: "Teachers", value: 12000},
    {label: "Parents", value: 20000}
  ],
    xkey: 'label',
  ykeys: ['value'],
   labels: ['Value']
});



$(function() {
      var data = [
        { month: '2018-01', value: 2000 },
        { month: '2018-02', value: 11000 },
        { month: '2018-03', value: 10000 },
        { month: '2018-04', value: 14000 },
        { month: '2018-05', value: 11000 },
        { month: '2018-06', value: 17000 },
        { month: '2018-07', value: 14500 },
        { month: '2018-08', value: 18000 },
        { month: '2018-09', value: 12000 },
        { month: '2018-10', value: 23000 },
        { month: '2018-11', value: 17000 },
        { month: '2018-12', value: 23000 }
      ];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      new Morris.Line({
        element: 'incomeChart',
        data: data,
        xkey: 'month',
        ykeys: ['value'],
        labels: ['Value'],
        lineColors: ['#8E37D7'],
        lineWidth: 4,
        pointSize: 6,
        pointFillColors:['rgba(255,255,255,0.9)'],
        pointStrokeColors: ['#01c0c8'],
        gridLineColor: 'rgba(0,0,0,.5)',
        resize: true,
        gridTextColor: '#01c0c8',
        yLabelFormat: function(value) {
              var ranges = [
                { divider: 1e6, suffix: 'M' },
                { divider: 1e3, suffix: 'k' }
              ];
              function formatNumber(n) {
                for (var i = 0; i < ranges.length; i++) {
                  if (n >= ranges[i].divider) {
                    return Math.round((n / ranges[i].divider)).toString() + ranges[i].suffix;
                  }
                }
                return n;
              }
              return '$' + formatNumber(value);
            },
        xLabelFormat: function (x) { return months[x.getMonth()]; }
      });
    });
