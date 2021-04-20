<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 items-center">
      <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
        {{ $static.metadata.siteName }}
      </h1>
    </div>

    <h2>About the project</h2>
    <p>
        This website is a school project by Lennart Schröder and Lukas Langrock in 11th grade English Advanced Class (LK) at the Pelizaeus Gymnasium in Paderborn.
        <br />Lennart Schröder curated and proposed the articles and information and I (Lukas Langrock) worked on the website.
        <br />
        <br />The project is part of a collaboration between two classes with multiple digital projects spread between small groups of students.
        The theme of the collaboration was our current topic Nigeria.
    </p>
    <h2>The Website</h2>
    <p>
        The website for this project was build and expanded upon the awesome <a href="https://github.com/Uninen/gridsome-starter-tulip">starter</a> of <a href="https://twitter.com/uninen">Ville Säävuori</a>.
        It is completely open-source and available on <a href="https://github.com/lukaslangrock/nigeria-history">GitHub</a>. Hosted on <a href="https://vercel.com/">Vercel</a>.
    </p>

    <h3>We hope that you enjoy our creation! ❤</h3>

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
    title: "About the project"
  },
  components: {
    BackToHome
  }
};
</script>
