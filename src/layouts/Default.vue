<template>
  <!-- Read how Layouts, Pages, Templates and collections work here: https://gridsome.org/docs/core-concepts/ -->
  <div class="container max-w-3xl px-4 mx-auto">
    <slot />
    <p class="text-center mt-16 mb-8 text-xs">
      Starter template made by Ville Säävuori ✨<br />
      Moderated by Lennart Schröder 📝<br />
      Hosted by Lukas Langrock 💻
      <br />
      <br /><g-link to="/about/">About</g-link>
       - <a href="https://langrock.info/imprint">Imprint</a>
       - <a href="https://langrock.info/privacy">Privacy Policy</a>
      <br />
      &copy; Ville Säävuori (<a
        href="https://twitter.com/uninen"
        >@uninen</a>) 2020, MIT License <br />
      &copy; <a
        href="https://fontawesome.com/license/free"
        >Font Awesome Free License</a>, CC BY 4.0
    </p>
  </div>
</template>