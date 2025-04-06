// Wykres kołowy
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Czerwony', 'Niebieski', 'Żółty'],
    datasets: [{
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow'],
      hoverOffset: 4
    }]
  }
});

// Wykres słupkowy
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Styczeń', 'Luty', 'Marzec'],
    datasets: [{
      label: 'Sprzedaż',
      data: [12, 19, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  }
});
