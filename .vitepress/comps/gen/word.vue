<template lang="pug">
.flex.flex-col
  .p-4.text-4xl.font-bold.capitalize {{ word }}
  .p-4
    button.p-2.border-1.border-current.p-2.rounded-xl.shadow-xl(@click="genWord()") Сгеренировать новое слово 
</template>

<script setup>
import { generateWords } from '../../use/randomWords.js'

const word = ref(generateWords(1));

function genWord() {
  word.value = generateWords(1)
}
</script>

<style scoped>
</style>