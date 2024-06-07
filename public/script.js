document.addEventListener('DOMContentLoaded', async () => {
    //add a comment here that explains the fetching and processing of data
    //The fetch execute cycle is the steps a CPU goes through in order to process an instruction
    //The fetching process involves sending a request, often in the form of a hypertext transfer protocol (HTTP) call, to the API endpoint
    const response = await fetch('/api/data');
    const data = await response.json();

    const labels = data.map(item => new Date(item.observationtimeutc).toLocaleString());
    const values = data.map(item => item.value);

    //comment explaining the creation and configuration of the chart.js chart
 //This concept was introduced in Chart.js 1.0 to keep configuration DRY , and allow for changing options globally across chart types, 
//avoiding the need to specify options for each instance, or the default for a particular chart type.
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Observation Values',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute'
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

