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

    <h2>Colonialism</h2>
    <p>
      <div>
        <ul>
          <li>
            <g-link to="/example/"><strong>1862</strong> 🛡️ <font-awesome :icon="['fas', 'arrow-right']"/> Britain makes Nigeria a protectorate</g-link>
          </li>
          <li>
            <g-link to="/example/"><strong>1886</strong> 👑 <font-awesome :icon="['fas', 'arrow-right']"/> Brtain makes it a crown colony</g-link>
          </li>
          <li>
            <g-link to="/example/"><strong>1899</strong> 🇬🇧 <font-awesome :icon="['fas', 'arrow-right']"/> All land sold to the UK</g-link>
          </li>
          <li>
            <g-link to="/example/"><strong>1914</strong> ☯️ <font-awesome :icon="['fas', 'arrow-right']"/> North & south colonies united</g-link>
          </li>
          <li>
           <g-link to="/example/"><strong>1950</strong> ↔️ <font-awesome :icon="['fas', 'arrow-right']"/> Colonies split up into north, southwest, and southeast</g-link>
          </li>
          <li>
            <g-link to="/example/"><strong>1960</strong> ✊ <font-awesome :icon="['fas', 'arrow-right']"/> Independence</g-link>
          </li>
        </ul>
      </div>
    </p>

    <h2>Consequences of the Colonialism</h2>
    <p>
      <g-link to="/example/">
        <font-awesome :icon="['fas', 'arrow-right']"/> Example Page
      </g-link>
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
