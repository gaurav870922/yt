function calculateMaxWeight() {
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    if (isNaN(height) || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid height!";
        return;
    }
    
    let maxWeight = 24.9 * height * height;
    document.getElementById("result").innerHTML = `Maximum healthy weight: ${maxWeight.toFixed(2)} kg`;
}
