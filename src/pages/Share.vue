<template>
  <Layout>
      <h2>Share the website</h2>
      <p>
          Just copy the link or scan the QR code below to open the site.
      </p>
      <br />
      <div class="text-center">
        <h3 class="text-green-700 underline">https://nigeria.langrock.info/</h3><br />
        <g-image
          class="mx-auto block rounded shadow"
          alt="Aerial photography of houses and buildings in Enugu, Nigeria. Photo by Ovinuchi Ejiohuo on Unsplash"
          src="~/assets/img/qr-url.svg"
        />
      </div>
      <br />

      <BackToHome />
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
import BackToHome from "@/components/BackToHome";

export default {
  metaInfo: {
    title: "Share this website"
  },
  components: {
    BackToHome
  }
};
</script>
