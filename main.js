(function(){
	"use strict";
	
	// Grafico 01
	const grafic01 = document.getElementById('grafic01');
	const myChart = new Chart(grafic01,{
		type:'bar',
		data:{
			labels:['Red', 'Blue', 'Orange','Yellow','Green','Purple', 'Orange'],
			datasets:[{
				label:'# of votes',
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
	})

})();