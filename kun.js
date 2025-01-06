function generateTable() {
    const number = document.getElementById('numberInput').value;
    if (number === '') {
        alert('กรุณาใส่ตัวเลข');
        return;
    }
    let table = `<h2>สูตรคูณของ ${number}</h2>`;
    for (let i = 1; i <= 12; i++) {
        table += `<p>${number} x ${i} = ${number * i}</p>`;
    }
    document.getElementById('tableResult').innerHTML = table;
}
