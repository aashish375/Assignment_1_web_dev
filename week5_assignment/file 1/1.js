function convertTemperature() {
  // Get Celsius value from input
  let celsius = document.getElementById("celsius").value;

  // Convert to Fahrenheit and Kelvin
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = Number(celsius) + 273.15;

  // Show results
  document.getElementById("fahrenheit").textContent =
    "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

  document.getElementById("kelvin").textContent =
    "Temperature in Kelvin: " + kelvin.toFixed(2) + " K";

    document.getElementById("celsius_output").textContent =
    "Temperature in Celsius: " + Number(celsius).toFixed(2) + " °C";
}