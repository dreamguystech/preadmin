	
// Circle
 $( document ).ready(function() {
	$(".circle1").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
				 foregroundBorderWidth: 5,
				backgroundColor: '#3a3f51',
				foregroundColor: '#A8C64A',
                percent: 75
           });
		   $(".circle2").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
				backgroundColor: '#3a3f51',
				foregroundColor: '#fb001a',
                percent: 25
           });
		   $(".circle3").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
				backgroundColor: '#3a3f51',
				foregroundColor: '#00d0fb',
                percent: 60
           });
		   $(".circle4").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 15,
				backgroundColor: '#3a3f51',
				foregroundColor: '#fb001a',
                percent: 80
           });
   });
   
   //bar
  $(document).ready(function() { 
   var ctx = document.getElementById("myChart").getContext('2d');



var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: 'Expenses',
      backgroundColor: "rgba(58, 63, 81,1)",
      data: [12, 19, 3, 17, 28, 24, 7],
    }, {
      label: 'Incomes',
      backgroundColor: "rgba(251, 90, 0,1)",
      data: [30, 29, 5, 5, 20, 3, 10],
    }]
  }
});


   });

	$(document).ready(function() {
		//BOX BUTTON SHOW AND CLOSE
	   jQuery('.small-graph-box').hover(function() {
		  jQuery(this).find('.box-button').fadeIn('fast');
	   }, function() {
		  jQuery(this).find('.box-button').fadeOut('fast');
	   });
	   jQuery('.small-graph-box .box-close').click(function() {
		  jQuery(this).closest('.small-graph-box').fadeOut(200);
		  return false;
	   });
	   
	    //CHARTS
	    function gd(year, day, month) {
			return new Date(year, month - 1, day).getTime();
		}
		
		graphArea2 = Morris.Area({
			element: 'visit-area',
			padding: 10,
        behaveLikeLine: true,
        gridEnabled: false,
        gridLineColor: '#262626',
        axes: true,
        resize: true,
        smooth:true,
        pointSize: 0,
        lineWidth: 0,
        fillOpacity:0.85,
			data: [
				{period: '2016 Q1', single: 2668, Double: null, Family: 2649},
				{period: '2016 Q2', single: 15780, Double: 13799, Family: 12051},
				{period: '2016 Q3', single: 12920, Double: 10975, Family: 9910},
				{period: '2016 Q4', single: 8770, Double: 6600, Family: 6695},
				{period: '2017 Q1', single: 10820, Double: 10924, Family: 12300},
				{period: '2017 Q2', single: 9680, Double: 9010, Family: 7891},
				{period: '2017 Q3', single: 4830, Double: 3805, Family: 1598},
				{period: '2017 Q4', single: 15083, Double: 8977, Family: 5185},
				{period: '2018 Q1', single: 10697, Double: 4470, Family: 2038},
			
			],
			lineColors:['#fb5a00','#262626','#fb5a00'],
			xkey: 'period',
            redraw: true,
            ykeys: ['single', 'Double', 'Family'],
            labels: ['All Visitors', 'Returning Visitors', 'Unique Visitors'],
			pointSize: 2,
			hideHover: 'auto',
			resize: true
		});
		
	   
	});
	

