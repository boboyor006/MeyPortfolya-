const input = document.querySelector('input[type="text"]');
const button = document.querySelector("button");

const BOT_TOKEN = "7031613158:AAHe_f_Rb6_GjBtdlmWVicLdEGO0PDIbDkg";
const CHAT_ID = "5889248421";

button.addEventListener("click", () => {
  fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${input.value}`
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

// https://api.telegram.org/bot${}/sendMessage?chat_id=${}&text=${}