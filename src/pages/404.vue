<template>
  <Layout>
      <h2><span class="text-red-700">Error 404</span>: Bad news...</h2>
      <p>
          The page or file you were looking for does not seem to be here.<br />
          Make sure you spelled the URL correctly :)
      </p>
      
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
    title: "Error 404"
  },
  components: {
    BackToHome
  }
};
</script>
