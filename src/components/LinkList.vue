<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <LinkCard :data="link" />
    </li>
  </ul>
</template>

<script>
import { db } from '@/plugins/firebase'
import LinkCard from './LinkCard'

export default {
  name: 'LinkList',
  data() {
    return {
      links: [],
    }
  },
  firestore: {
    links: db.collection('links').orderBy('updatedAt', 'desc'),
  },
  components: {
    LinkCard,
  }
}
</script>

<style scoped lang="scss">
ul {
  background-color: #F7F9FE;
  border-radius: 40px;
  box-shadow: 4px 4px 5px 6px #1F4037;
  display: grid;
  grid-auto-rows: 460px;
  grid-gap: 40px 20px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  margin: 40px;
  padding: 40px;
  transform: skew(-4deg, -4deg);

  @media (max-width: 1024px) {
    margin: 0 20px;
    transform: initial;
  }
}
</style>
