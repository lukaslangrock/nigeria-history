<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 md:mt-16 flex flex-wrap items-center justify-center">
      <div>
        <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
          {{ $static.metadata.siteName }}
        </h1>
      </div>

      <g-image
        class="block"
        alt="Tulip"
        src="~/assets/img/ovinuchi-ejiohuo-OxesnxkySD0-unsplash.jpg"
      />
    </div>

    <h2>Coming soon...</h2>
    <br />

    <p class="text-center mt-16 mb-8 text-xs">
      Thanks to Ville Säävuori for making this great template ❤️ <br />
      Moderated by Lennart Schröder <br />
      Hosted by Lukas Langrock - <a
        class="underline text-blue-700"
        href="https://langrock.info/imprint"
      >Imprint</a> - <a
        class="underline text-blue-700"
        href="https://langrock.info/privacy"
      >Privacy Policy</a> <br />
      &copy; Ville Säävuori (<a
        class="underline text-blue-700"
        href="https://twitter.com/uninen"
      >@uninen</a>) 2020, MIT License
    </p>
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
    title: "History of Nigeria"
  }
};
</script>
