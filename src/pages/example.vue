<template>
  <Layout>
      <h2>Example page for testing and development</h2>
      <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      
      <div class="text-center mt-16">
        <g-link to="/">
          <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
            <font-awesome :icon="['fas', 'home']"/> Back to homepage
          </button>
        </g-link>
      </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Example Page"
  }
};
</script>
