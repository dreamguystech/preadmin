/*
Author       : Dreamguys
Template Name: Crypto -  Admin Template
Version      : 1.1
*/

(function($) {
    "use strict";
	
	// Variables declarations
	
	var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
	var $slimScrolls = $('.slimscroll');
	
	// Sidebar
	
	var Sidemenu = function() {
		this.$menuItem = $('#sidebar-menu a');
	};
	
	function init() {
		var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}
	
	// Sidebar Initiate
	init();
	
	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	// Sidebar overlay
	
	$(".sidebar-overlay").on("click", function () {
		$wrapper.removeClass('slide-nav');
		$(".sidebar-overlay").removeClass("opened");
		$('html').removeClass('menu-opened');
	});
	
	// Page Content Height
	
	if($('.page-wrapper').length > 0 ){
		var height = $(window).height();	
		$(".page-wrapper").css("min-height", height);
	}
	
	// Page Content Height Resize
	
	$(window).resize(function(){
		if($('.page-wrapper').length > 0 ){
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});
	
	// Select 2
	
    if ($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }

    // Floating Label
	if($('.floating').length > 0) {
		$('.floating').on('focus blur', function(e) {
			$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	
	// Datetimepicker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fa fa-angle-up",
				down: "fa fa-angle-down",
				next: 'fa fa-angle-right',
				previous: 'fa fa-angle-left'
			}
		});
		$('.datetimepicker').on('dp.show',function() {
			$(this).closest('.table-responsive').removeClass('table-responsive').addClass('temp');
		}).on('dp.hide',function() {
			$(this).closest('.temp').addClass('table-responsive').removeClass('temp')
		});
	}

	// Tooltip
	
	if($('[data-toggle="tooltip"]').length > 0 ){
		$('[data-toggle="tooltip"]').tooltip();
	}
	
    // Datatable

    if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
            "bFilter": false,
        });
    }
	
	// Email Inbox

	if($('.clickable-row').length > 0 ){
		$(document).on('click', '.clickable-row', function() {
			window.location = $(this).data("href");
		});
	}

	// Check all email
	
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	if($('.checkmail').length > 0) {
		$('.checkmail').each(function() {
			$(this).on('click', function() {
				if($(this).closest('tr').hasClass('checked')) {
					$(this).closest('tr').removeClass('checked');
				} else {
					$(this).closest('tr').addClass('checked');
				}
			});
		});
	}
	
	// Mail important
	
	$(document).on('click', '.mail-important', function() {
		$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
	});
	
	// Summernote
	
	if($('.summernote').length > 0) {
		$('.summernote').summernote({
			height: 200,
			minHeight: null,
			maxHeight: null,
			focus: false
		});
	}

    // Lightgallery

    if ($('#pro_popup').length > 0) {
        $('#pro_popup').lightGallery({
            thumbnail: true,
            selector: 'a'
        });
    }
	
	// Sidebar Slimscroll

	if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			allowPageScroll: false,
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}
	
	// Small Sidebar

	$(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});

	//datetimepicker
	if($('#datetimepicker1').length > 0) {
		$(function () {
			$('#datetimepicker1').datetimepicker();
			$('#datetimepicker5').datetimepicker();
			$('#datetimepicker6').datetimepicker();
			$('#datetimepicker7').datetimepicker();
			$('#datetimepicker8').datetimepicker();
		});
	}

	//order Overview
	if($('#order-overview').length > 0) {	
		var options = {
			series: [{
				name: 'Sales',
				data: [60, 40, 10, 26, 45]
		  	},
		  	{
				name: 'Order',
				data: [35, 50, 25, 68, 75]
		  	}],
			chart: {
				type: 'bar',
				height: 350,
				toolbar: {
					show: false
				}
		  	},
		  	grid: {
				show: false
		  	},
		  	colors: ['#EF2A82', '#4E6FFB'],
		  	plotOptions: {
				bar: {
			  		horizontal: false,
			  		columnWidth: '55%',
			  		endingShape: 'rounded'
				},
		  	},
		  	dataLabels: {
				enabled: false
		  	},
		  	stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
		  	},
		  	xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				labels: {
					style: {
						colors: '#979797'
					}
				}
		  	},
		  	yaxis: {
				title: {
			  		show: false
				},
				labels: {
					style: {
						colors: '#979797'
					}
				}
		  	},
		  	fill: {
				opacity: 1
		  	},
		  	legend: {
				position: 'top'
			},
		  	tooltip: {
				y: {
			  		formatter: function (val) {
					return "$ " + val + " thousands"
			  		}
				}
		  	}
		};  
		var chart = new ApexCharts(document.querySelector("#order-overview"), options);
		chart.render();
	}

	//profit Overview
	if($('#profit-overview').length > 0) {	
		var options = {
			series: [{
				name: 'Top Selling',
				data: [30, 20, 30, 80, 70, 80],
		  	}, 
			{
				name: 'Net Profit',
				data: [50, 65, 80, 65, 70, 50],
		  	}],
			chart: {
				height: 350,
				type: 'radar',
				dropShadow: {
			  		enabled: true,
			  		blur: 1,
			  		left: 1,
			  		top: 1
				},
				toolbar: {
					show: false
				}
		  	},
			colors: ['#EF2A82', '#4E6FFB'],
		  	stroke: {
				width: 2
		  	},
		  	fill: {
				opacity: 1,
				type: 'gradient',
				gradient: {
					shade: 'dark',
					gradientToColors: [ '#FE7175', '#5DE3FF'],
					shadeIntensity: 1,
                    type: 'horizontal',
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100, 100, 100]
                }
		  	},
		  	legend: {
				position: 'bottom'
			},
		  	markers: {
				size: 0
		  	},
		  	xaxis: {
				enabled: false,
				show: false
		  	}
		};  
		var chart = new ApexCharts(document.querySelector("#profit-overview"), options);
		chart.render();
	}

	//Order Details
	if($('#order-channel').length > 0) {	
		var options = {
			series: [62, 40, 47, 58],
			colors: ['#5DE3FF', '#FFCC41', '#FE7175', '#4E6FFB'],
			chart: {
				width: 300,
				type: 'polarArea'
		  	},
		  	labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D'],
		  	fill: {
				opacity: 1
		  	},
		  	stroke: {
				width: 1
		  	},
		  	yaxis: {
				show: false
		  	},
		  	legend: {
			  	show: false
		  	},
		  	plotOptions: {
				polarArea: {
			  	rings: {
					strokeWidth: 0
			  	},
			  	spokes: {
					strokeWidth: 0
			  	},
				}
		  	},
			responsive: [{			
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				},
				
				breakpoint: 767,
				options: {
					chart: {
						width: '100%',
						height: 250,
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		};
		var chart = new ApexCharts(document.querySelector("#order-channel"), options);
		chart.render();
	}

	//Sales Overview
	if($('#sales-view').length > 0) {	
		var options = {
			colors: ['#4E6FFB'],
			series: [{
				data: [
				[1327359600000,30.95],
				[1327446000000,31.34],
				[1327532400000,31.18],
				[1327618800000,31.05],
				[1327878000000,31.00],
				[1327964400000,30.95],
				[1328050800000,31.24],
				[1328137200000,31.29],
				[1328223600000,31.85],
				[1328482800000,31.86],
				[1328569200000,32.28],
				[1328655600000,32.10],
				[1328742000000,32.65],
				[1328828400000,32.21],
				[1329087600000,32.35],
				[1329174000000,32.44],
				[1329260400000,32.46],
				[1329346800000,32.86],
				[1329433200000,32.75],
				[1329778800000,32.54],
				[1329865200000,32.33],
				[1329951600000,32.97],
				[1330038000000,33.41],
				[1330297200000,33.27],
				[1330383600000,33.27],
				[1330470000000,32.89],
				[1330556400000,33.10],
				[1330642800000,33.73],
				[1330902000000,33.22],
				[1330988400000,31.99],
				[1331074800000,32.41],
				[1331161200000,33.05],
				[1331247600000,33.64],
				[1331506800000,33.56],
				[1331593200000,34.22],
				[1331679600000,33.77],
				[1331766000000,34.17],
				[1331852400000,33.82],
				[1332111600000,34.51],
				[1332198000000,33.16],
				[1332284400000,33.56],
				[1332370800000,33.71],
				[1332457200000,33.81],
				[1332712800000,34.40],
				[1332799200000,34.63],
				[1332885600000,34.46],
				[1332972000000,34.48],
				[1333058400000,34.31],
				[1333317600000,34.70],
				[1333404000000,34.31],
				[1333490400000,33.46],
				[1333576800000,33.59],
				[1333922400000,33.22],
				[1334008800000,32.61],
				[1334095200000,33.01],
				[1334181600000,33.55],
				[1334268000000,33.18],
				[1334527200000,32.84],
				[1334613600000,33.84],
				[1334700000000,33.39],
				[1334786400000,32.91],
				[1334872800000,33.06],
				[1335132000000,32.62],
				[1335218400000,32.40],
				[1335304800000,33.13],
				[1335391200000,33.26],
				[1335477600000,33.58],
				[1335736800000,33.55],
				[1335823200000,33.77],
				[1335909600000,33.76],
				[1335996000000,33.32],
				[1336082400000,32.61],
				[1336341600000,32.52],
				[1336428000000,32.67],
				[1336514400000,32.52],
				[1336600800000,31.92],
				[1336687200000,32.20],
				[1336946400000,32.23],
				[1337032800000,32.33],
				[1337119200000,32.36],
				[1337205600000,32.01],
				[1337292000000,31.31],
				[1337551200000,32.01],
				[1337637600000,32.01],
				[1337724000000,32.18],
				[1337810400000,31.54],
				[1337896800000,31.60],
				[1338242400000,32.05],
				[1338328800000,31.29],
				[1338415200000,31.05],
				[1338501600000,29.82],
				[1338760800000,30.31],
				[1338847200000,30.70],
				[1338933600000,31.69],
				[1339020000000,31.32],
				[1339106400000,31.65],
				[1339365600000,31.13],
				[1339452000000,31.77],
				[1339538400000,31.79],
				[1339624800000,31.67],
				[1339711200000,32.39],
				[1339970400000,32.63],
				[1340056800000,32.89],
				[1340143200000,31.99],
				[1340229600000,31.23],
				[1341871200000,30.44],
				[1341957600000,30.20],
				[1342044000000,30.14],
				[1342130400000,30.65],
				[1342389600000,30.40],
				[1342476000000,30.65],
				[1342562400000,31.43],
				[1342648800000,31.89],
				[1342735200000,31.38],
				[1342994400000,30.64],
				[1343080800000,30.02],
				[1343167200000,30.33],
				[1343253600000,30.95],
				[1343340000000,31.89],
				[1343599200000,31.01],
				[1343685600000,30.88],
				[1343772000000,30.69],
				[1343858400000,30.58],
				[1343944800000,32.02],
				[1344204000000,32.14],
				[1344290400000,32.37],
				[1344376800000,32.51],
				[1344463200000,32.65],
				[1344549600000,32.64],
				[1344808800000,32.27],
				[1344895200000,32.10],
				[1344981600000,32.91],
				[1345068000000,33.65],
				[1345154400000,33.80],
				[1345413600000,33.92],
				[1345500000000,33.75],
				[1345586400000,33.84],
				[1345672800000,33.50],
				[1345759200000,32.26],
				[1346018400000,32.32],
				[1346104800000,32.06],
				[1346191200000,31.96],
				[1346277600000,31.46],
				[1346364000000,31.27],
				[1346709600000,31.43],
				[1346796000000,32.26],
				[1346882400000,32.79],
				[1346968800000,32.46],
				[1347228000000,32.13],
				[1347314400000,32.43],
				[1347400800000,32.42],
				[1347487200000,32.81],
				[1347573600000,33.34],
				[1347832800000,33.41],
				[1347919200000,32.57],
				[1348005600000,33.12],
				[1348092000000,34.53],
				[1348178400000,33.83],
				[1349301600000,32.68],
				[1349388000000,32.47],
				[1349647200000,32.23],
				[1349733600000,31.68],
				[1349820000000,31.51],
				[1349906400000,31.78],
				[1349992800000,31.94],
				[1350252000000,32.33],
				[1350338400000,33.24],
				[1350424800000,33.44],
				[1350511200000,33.48],
				[1350597600000,33.24],
				[1350856800000,33.49],
				[1350943200000,33.31],
				[1351029600000,33.36],
				[1351116000000,33.40],
				[1351202400000,34.01],
				[1351638000000,34.02],
				[1351724400000,34.36],
				[1351810800000,34.39],
				[1352070000000,34.24],
				[1352156400000,34.39],
				[1352242800000,33.47],
				[1352329200000,32.98],
				[1352415600000,32.90],
				[1352674800000,32.70],
				[1352761200000,32.54],
				[1352847600000,32.23],
				[1352934000000,32.64],
				[1353020400000,32.65],
				[1353279600000,32.92],
				[1353366000000,32.64],
				[1353452400000,32.84],
				[1353625200000,33.40],
				[1353884400000,33.30],
				[1353970800000,33.18],
				[1354057200000,33.88],
				[1354143600000,34.09],
				[1354230000000,34.61],
				[1354489200000,34.70],
				[1354575600000,35.30],
				[1354662000000,35.40],
				[1354748400000,35.14],
				[1354834800000,35.48],
				[1355094000000,35.75],
				[1355180400000,35.54],
				[1355266800000,35.96],
				[1355353200000,35.53],
				[1355439600000,37.56],
				[1355698800000,37.42],
				[1355785200000,37.49],
				[1355871600000,38.09],
				[1355958000000,37.87],
				[1356044400000,37.71],
				[1356303600000,37.53],
				[1356476400000,37.55],
				[1356562800000,37.30],
				[1356649200000,36.90],
				[1356908400000,37.68],
				[1357081200000,38.34],
				[1357167600000,37.75],
				[1357254000000,38.13],
				[1357513200000,37.94],
				]
		  	}],
			chart: {
				id: 'area-datetime',
				type: 'area',
				height: 250,
				zoom: {
			  	autoScaleYaxis: true
				},
				toolbar: {
					show: false
				}
		  	},
		  	dataLabels: {
				enabled: false
		  	},
		  	markers: {
				size: 0,
				style: 'hollow',
		  	},
		  	xaxis: {
				type: 'datetime',
				min: new Date('01 Mar 2012').getTime(),
				tickAmount: 6,
		  	},
		  	tooltip: {
				x: {
			  	format: 'dd MMM yyyy'
				}
		  	},
		  	fill: {
				type: 'gradient',
				gradient: {
			  		shadeIntensity: 1,
			  		opacityFrom: 0.7,
			  		opacityTo: 0.9,
			  		stops: [0, 100]
				}
		  	},
			  
		};  
		var chart = new ApexCharts(document.querySelector("#sales-view"), options);
		chart.render();
	}

})(jQuery);