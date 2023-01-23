<template>
  <main>
    <label for="searchword">Search word: </label>
    <input type="text" maxlength="5" v-model="searchWord" id="searchword" placeholder="Search word" />
    <button @click="search" :disabled="searchWord.length < 5">Search</button>
    <div>
      Anagrams: {{ anagrams }}
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      anagrams: []
    }
  },
  methods: {
    async search() {
      this.anagrams = (await (await fetch('http://localhost:3000/anagram',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'origin',
        body: JSON.stringify({word: this.searchWord})
      })).json()).data
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
