function convertToFeet() {
    const meters = document.getElementById('metersInput').value;
    if (meters === '') {
        alert('กรุณาใส่ค่าความยาวในหน่วยเมตร');
        return;
    }
    const feet = (meters * 3.28084).toFixed(2);
    document.getElementById('result').innerText = `${meters} เมตร = ${feet} ฟุต`;
}
