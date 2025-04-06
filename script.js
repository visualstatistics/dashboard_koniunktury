const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień'],
        datasets: [{
            label: 'Przykładowe dane',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    }
});
