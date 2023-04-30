window.onload = () => {
  const wordOptions = ["beautiful", "peaceful", "relaxing", "uplifting", "joyful", "amazing"];
  let word = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  const vowels = ["a", "e", "i", "o", "u"];

  let wordHtml = `a <i>${word}</i>`;
  for (let i = 0; i < vowels.length; ++i) {
    if (word.startsWith(vowels[i])) {
      wordHtml = `an <i>${word}</i>`;
      break;
    }

  }

  let wordElem = document.getElementById("pretty-word");
  wordElem.innerHTML = wordHtml;
};
