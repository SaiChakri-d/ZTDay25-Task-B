fetch("https://api.vatcomply.com/currencies")
  .then((response) => response.json())
  .then((data) => {
    for (const currency in data) {
      const select1 = document.getElementById("currency1");
      const select2 = document.getElementById("currency2");
      const option1 = document.createElement("option");
      option1.setAttribute("value", currency);
      option1.innerHTML = `${data[currency]["name"]} (${data[currency]["symbol"]})`;

      const option2 = option1.cloneNode(true);
      select1.append(option1);
      select2.append(option2);
    }
  })
  .catch((error) => console.error(error));

const convertPrice = () => {
  const currency1 = document.getElementById("currency1").value;
  const currency2 = document.getElementById("currency2").value;

  fetch(`https://api.vatcomply.com/rates?base=${currency1}`)
    .then((response) => response.json())
    .then((data) => {
      const amount = document.getElementById("amount").value;
      const result = Number(amount * data["rates"][currency2]).toFixed(3);
      const target = document.getElementById("result");
      target.innerText = `${amount} ${currency1}\n=\n${result} ${currency2}`;
    })
    .catch((error) => console.error(error));
};