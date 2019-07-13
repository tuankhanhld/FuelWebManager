
var dataGraphTotalGas = [];
var dataTotalGas = firebase.database().ref(station +'/customers_infor/no_recharge');
dataTotalGas.on('value', function(snapshot) {
    try {
        dataGraphTotalGas.push(parseInt(snapshot.val()));

        var ctx = document.getElementById("total-recharge").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Total recharge"],
                datasets: [{
                    label: 'Total recharge',
                    data: dataGraphTotalGas,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }catch (e) {
        window.alert("Error");
    }

});