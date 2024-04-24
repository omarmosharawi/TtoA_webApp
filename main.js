const convertBtn = document.getElementById("convertBtn");
const inputText = document.getElementById("inputText");
const audioPlayer = document.getElementById("audioPlayer");

convertBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text !== "") {
    textToSpeech(text);
  }
});

function textToSpeech(text) {
  audioPlayer.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(
    text
  )}`;
  audioPlayer.style.display = "block";
}
