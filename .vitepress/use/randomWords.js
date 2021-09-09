// https://gist.github.com/swenzel/70beac153cdf23803f89

import grams from './ru-grams.js'
// create a sorted list for all keys
for (var key in grams) {
  var sorted = []
  for (var p in grams[key]) sorted.push(p)
  grams[key].sorted = sorted.sort()
}

export function generateWords(n, max) {
  if (!n) {
    n = 1
  }
  if (max && max > n) {
    n = Math.ceil(Math.random() * max)
  }
  var words = []
  for (var i = 0; i < n; i++) {
    var w = ' '
    // last will be our 1gram used to find a proper follower
    var last = w
    while (true) {
      var rand = Math.random()
      var p_list = grams[last].sorted
      // find the follower corresponding to the random number
      // Note: p_list containes the accumulated probabilities of
      // the followers.
      for (var k = 0; k + 1 < p_list.length && p_list[k] < rand; k++);

      let char = grams[last][p_list[k]]
      if (char === ' ') {
        // space indicates end, but we do not want words shorter
        // than 5 so make sure we have minimum length
        if (w.length > 5) break
      } else {
        w += char
      }
      last = char
    }
    // strip the leading space before appending to the list
    words.push(w.substring(1))
  }
  return words.join(' ')
}
