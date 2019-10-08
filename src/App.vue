<template>
  <main>
    <header>
      <h1>Developer Links</h1>
      <h2>A list of great content that I use daily as a work reference.</h2>
    </header>
    <article>
      <LinkList />
    </article>
    <footer>
      Developed by <a href="https://twitter.com/KarllosSouza">KarllosSouza</a>.
    </footer>
  </main>
</template>

<script>
import LinkList from '@/components/LinkList'

export default {
  name: 'Home',
  components: {
    LinkList,
  }
}
</script>

<style scoped lang="scss">
main {
  background-image: linear-gradient(#41B883, #1F4037);
  font-family: Roboto, Arial;
  text-align: center;
}

header {
  font-family: Playfair Display, serif;
  padding: 40px 8px;
  
  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 20px;
  }
}

article {
  margin: 0 auto;
  max-width: 1240px;
}

footer {
  color: #F7F9FE;
  font-weight: lighter;
  padding: 40px;

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
