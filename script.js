let bitcoin = document.getElementById('bitcoin');
let ethereum = document.getElementById('ethereum');
let dogecoin = document.getElementById('dogecoin');

let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

let options = {
    method: 'GET',
}
fetch(url, options).then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    else {
        return response.json();
    }
}).then(data => {
    console.log(data)
    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML = data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;
}).catch(error => console.error('Error fetching data', error))

