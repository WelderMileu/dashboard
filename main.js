(function(){
	"use strict";
	
	// Grafico 01
	const grafic01 = document.getElementById('grafic01');
	const myChart = new Chart(grafic01,{
		type:'bar',
		data:{
			labels:['Janeiro', 'Fevereiro', 'Março','Abril','Maio','Junho', 'Julho'],
			datasets:[{
				label:'Media Mensal (2020)',
				data:[12,19,3,5,2,3],
				backgroundColor: [
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)'
            	],
            	borderColor: [
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)'
            	],
            	borderWidth: 1
        	}]
			
		},
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});

	// Grafico 02
	const grafic02 = document.getElementById('grafic02');
	const myChart2 = new Chart(grafic02,{
		type:'line',
		data:{
			labels:['2014', '2015', '2016','2017','2018','2019', '2020'],
			datasets:[{
				label:'Media Anual',
				data:[12,19,3,5,2,3],
				backgroundColor: [
                	'rgba(54, 162, 235, 0.8)',
                	'rgba(54, 162, 235, 0.8)',
                	'rgba(54, 162, 235, 0.8)',
                	'rgba(54, 162, 235, 0.8)',
                	'rgba(54, 162, 235, 0.8)',
                	'rgba(54, 162, 235, 0.8)'
            	],
            	borderColor: [
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)'
            	],
            	borderWidth: 1
        	}]
			
		},
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});

	// Grafico 03
	const grafic03 = document.getElementById('grafic03');
	const myChart3 = new Chart(grafic03,{
		type:'radar',
		data:{
			labels:['2014', '2015', '2016','2017','2018','2019', '2020'],
			datasets:[{
				label:'Solido Anual',
				data:[12,19,3,5,2,3],
				backgroundColor: [
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)'
            	],
            	borderColor: [
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(54, 162, 235, 0.2)'
            	],
            	borderWidth: 1
        	}]
			
		},
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});

})();