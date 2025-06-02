function displayFact(response) {
  new Typewriter("#results", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 15,
  });
}

function generateFact(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-instructions");
  let apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
  let prompt = `You are a smart AI assistant who likes to tell us weird but true facts. Your mission is to tell us a fact that directly relates to the topic of the User Instructions. Your result must be 2 sentences long and in basic HTML. Please add a <br /> to the end of the first sentence and do not add any markdown to the result.`;
  let context = `User Instructions: tell me a fact about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let resultsElement = document.querySelector("#results");
  resultsElement.classList.remove("hidden");
  resultsElement.innerHTML = `<div class="blink">⏳  Finding you some facts about ${userInput.value}......</div>`;

  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#form-generator");
factFormElement.addEventListener("submit", generateFact);
