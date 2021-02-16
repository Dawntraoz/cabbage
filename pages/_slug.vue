<template>
  <component
    :is="story.content.component"
    v-if="story.content.component"
    :key="story.content._uid"
    :name="story.name"
    :blok="story.content"
  ></component>
</template>

<script>
export default {
  asyncData(context) {
    const slug = context.params.slug ? context.params.slug : 'home'

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${slug}`, {
        version:
          context.query._storyblok || context.isDev ? 'draft' : 'published',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
}
</script>
