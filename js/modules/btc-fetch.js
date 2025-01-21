export default async function btcFetch(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / result.BRL.sell).toFixed(4);
    })
    .catch((error) => console.log(Error(error)));
}
