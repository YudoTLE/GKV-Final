const label = [
    'Januari 2022 - September 2022',
    'Oktober 2022 - Desember 2022',
    'Januari 2023 - September 2023',
    'Oktober 2023 - Desember 2023'
]
const layout = {
    font: {
        size: 15
    }
}
const config = {
    responsive: true
}

data_luas_panen = [{
    x: label,
    y: [8694001, 1758671, 8660958, 1535928],
    type: 'bar'
}]
data_produksi_padi = [{
    x: label,
    y: [45431097, 9317880, 45326003, 8299537],
    type: 'bar'
}]
data_produksi_beras = [{
    x: label,
    y: [26169058, 5371464, 26110501, 4784933],
    type: 'bar'
}]

const barPlot = (data, element) => {
    Plotly.newPlot(element, data, layout, config);
}

const luas_panen = document.getElementById('luas-panen');
const produksi_padi = document.getElementById('produksi-padi');
const produksi_beras = document.getElementById('produksi-beras');

barPlot(data_luas_panen, luas_panen);
barPlot(data_produksi_padi, produksi_padi);
barPlot(data_produksi_beras, produksi_beras);