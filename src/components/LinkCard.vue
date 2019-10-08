<template>
  <a :href="data.url" :class="tagClass">
    <div class="thumb" :style="backgroundColor">
      <img :src="data.imageUrl" alt="" />
    </div>
    <div class="text">
      <h3>{{ data.title }}</h3>
      <p>{{ data.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LinkCard',
  props: {
    data: Object,
  },
  computed: {
    backgroundColor() {
      return `background-color: ${ this.data.imageBackgroundColor }`
    },
    tagClass() {
      return `tag-${ this.data.tag }`
    },
  },
}
</script>

<style scoped lang="scss">
a {
  background-color: #EFEFEF;
  border-radius: 30px;
  border: 4px solid;
  color: #444;
  display: block;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.25s ease-in-out;

  &.tag-css {
    border-color: #264DE4;
  }

  &.tag-general {
    border-color: #444;
  }

  &.tag-js {
    border-color: #F0DB4F;
  }

  &.tag-tools {
    border-color: #F16529;
  }
}

.thumb {
  background-color: #FFF;
  display: flex;
  height: 200px;
  justify-content: center;
  overflow: hidden;
  transform: skew(4deg, 4deg) scale(1.1);

  @media (max-width: 1024px) {
    transform: initial;
  }

  img {
    object-fit: contain;
    transform: scale(1.1);
  }
}

.text {
  text-align: center;
  transform: skew(4deg, 4deg);

  @media (max-width: 1024px) {
    transform: initial;
  }

  h3 {
    display: -webkit-box;
    font-size: 18px;
    height: 96px;
    line-height: 24px;
    overflow: hidden;
    padding: 20px 0 2px 10px;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media (max-width: 1024px) {
      padding-right: 10px;
    }
  }

  p {
    display: -webkit-box;
    font-size: 14px;
    font-weight: lighter;
    height: 150px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 14px 0 10px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
  }
}
</style>
