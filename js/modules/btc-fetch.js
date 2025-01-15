export default async function initBtcFetch() {
  const span = document.querySelector('[data-btc]');
  const link = 'https://blockchain.info/ticker';

  function cleanAndInsertPrice(result) {
    const btcPrice = (1000 / result.sell).toFixed(4);
    span.innerText = btcPrice;
  }

  function fetchBtcPrice(url) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => cleanAndInsertPrice(result.BRL));
  }
  fetchBtcPrice(link);
}
