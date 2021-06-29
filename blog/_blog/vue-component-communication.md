---
title: 5 Common Methods in VUE Component Communication
date: 2020-06-29
tags:
  - VUE
  - SPA
  - Framework
  - Front End
author: Chao Zhang
location: Vancouver
---

There are 5 common methods I used in developing vue projects. I would like to classify and explain them in this blog.

## 1. `props` / `$emit`

The parent component passes data to the child component through `props`, and the child component can communicate to the parent component through `$emit`.

### The parent component passes the value to the child component

The following is an example to illustrate how the parent component transmits data to the child component: How to get the data in the parent component section.vue in the child component article.vue articles: `['Introduction to Web Dev', 'Computer Network', 'CSS in 30s']`

```vue
// parent component
<template>
  <div class="section">
    <com-article :articles="articleList"></com-article>
  </div>
</template>

<script>
import comArticle from "./test/article.vue";
export default {
  name: "HelloWorld",
  components: { comArticle },
  data() {
    return {
      articleList: [
        "Introduction to Web Dev",
        "Computer Network",
        "CSS in 30s",
      ],
    };
  },
};
</script>
```

```vue
// child component
<template>
  <div>
    <span v-for="(item, index) in articles" :key="index">{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: ["articles"],
};
</script>
```

> Summary: props can only be passed from the upper-level components to the next-level components (parent-child components), the so-called one-way data flow. Moreover, the prop is read-only and cannot be modified, and all modifications will be invalidated and warned.

### Child component passes value to parent component

My own understanding of $emit is this: $emit binds a custom event, when this statement is executed, the parameter arg is passed to the parent component, and the parent component monitors and receives parameters through v-on. Through an example, how to transfer data from the child component to the parent component.
On the basis of the previous example, click on the item of the ariticle rendered on the page, and the subscript displayed in the array in the parent component.

```vue
// parent component
<template>
  <div class="section">
    <com-article
      :articles="articleList"
      @onEmitIndex="onEmitIndex"
    ></com-article>
    <p>{{ currentIndex }}</p>
  </div>
</template>

<script>
import comArticle from "./test/article.vue";
export default {
  name: "HelloWorld",
  components: { comArticle },
  data() {
    return {
      currentIndex: -1,
      articleList: [
        "Introduction to Web Dev",
        "Computer Network",
        "CSS in 30s",
      ],
    };
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx;
    },
  },
};
</script>
```

```vue
// child component
<template>
  <div>
    <div
      v-for="(item, index) in articles"
      :key="index"
      @click="emitIndex(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  methods: {
    emitIndex(index) {
      this.$emit("onEmitIndex", index);
    },
  },
};
</script>
```

## 2. `$children` / `$parent`

## 3. eventBus

## 4. localStorage / sessionStorage

## 5. VueX

[...](https://juejin.cn/post/6844903887162310669)
