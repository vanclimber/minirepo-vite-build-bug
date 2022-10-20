<template>
  <div :class="`my-${type}`">
    {{ content }}
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyText',
  props: {
    // 文字内容
    content: {
      type: String,
      default: '',
      required: true,
    },
    // 类型
    type: {
      // `'text'` / `'h1'` / `'h2'`
      type: String,
      required: false,
      default: 'text',
    },
  },
};
</script>

<style scoped>

.my-h2 {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin: 16px 0;
  line-height: 1.15;
}
</style>

