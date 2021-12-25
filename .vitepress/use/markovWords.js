// https://github.com/Edwin-Pratt/js-markov
// https://bespoyasov.ru/blog/text-generation-with-markov-chains/
import Markov from "js-markov";
var markov = new Markov();

export function useRandomWord() {
  const corpus = ref("");
  const word = ref("");
  const trained = ref(false);
  function train() {
    let states = corpus.value
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .trim()
      .split(" ")
      .filter((w) => w.length > 5)
      .map((word) => word.split("").join(" "));
    markov.addStates(states);
    markov.train(3);
    trained.value = true;
    markov.start[0] = "з у";
    console.log(markov);
  }

  function newWord() {
    if (!trained.value) return "not trained";
    word.value = markov.generateRandom();
  }
  return { newWord, word, corpus, train };
}
