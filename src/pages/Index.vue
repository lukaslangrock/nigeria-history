<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 items-center">
      <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
        {{ $static.metadata.siteName }}
      </h1>

      <p class="text-center">
        This website aims to inform you about Nigeria's history and is focussed especially on the time of colonialism and its connection to the UK.
        It is a school project by students at the Pelizaeus Gymnasium Paderborn. The source code is available on <a href="https://github.com/lukaslangrock/nigeria-history">GitHub</a>.
        <g-link to="/about/">Learn More</g-link>.
      </p>

      <g-image
        class="block rounded shadow"
        alt="Aerial photography of houses and buildings in Enugu, Nigeria. Photo by Ovinuchi Ejiohuo on Unsplash"
        src="~/assets/img/ovinuchi-ejiohuo-OxesnxkySD0-unsplash.jpg"
      />
      <p>
        Photo by <a href="https://unsplash.com/@oviidaniel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ovinuchi Ejiohuo</a> on <a href="https://unsplash.com/s/photos/nigeria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>

    <h2>Colonialism</h2>
    <h3>1862 🛡️ <font-awesome :icon="['fas', 'arrow-right']"/> Britain makes Nigeria a protectorate</h3>
    <p>
      <strong>Britain turns Nigeria into a protectorate.</strong>
      After that the Europeans traded with the Nigerian society only by using ships, but they didn't go onto the land, because they were afraid of diseases.
      <br />But in the middle of the 19th century the situation changed and Britains dared to go on expeditions.
      <br />The result of that was, that Britain turned Nigeria into a so-called protectorate, which means, that Britain controlled the foreign policy, but had no direct influence on the country.
    </p>

    <h3>1886 👑 <font-awesome :icon="['fas', 'arrow-right']"/> Britain makes it a crown colony</h3>
    <p>
      <strong>Britain turns Nigeria into a crown colony.</strong>
      Nigeria now gets directly ruled by Britain and is under their control.
    </p>

    <h3>1899 🇬🇧 <font-awesome :icon="['fas', 'arrow-right']"/> All land sold to the UK</h3>
    <p>
      <strong>Land sold to Britain.</strong>
      The „Royal Niger Company“, which belongs to the UK, captured a lot of land in the middle of Nigeria and protected it as a company by their own form of other countries who also wanted the land.
      <br />But eventually they sold all their captured land to the British government.
      The UK now slowly began to capture the rest of the land.
    </p>

    <h3>1914 ☯️ <font-awesome :icon="['fas', 'arrow-right']"/> North & south colonies united</h3>
    <p>
      <strong>North- and south Nigeria get merged.</strong>
      <br />The colony first was split into two separate parts: north- and south Nigeria.
      <br />These two colonies now got united to one big colony, but the society was still split.
    </p>

    <h3>1954 ↔️ <font-awesome :icon="['fas', 'arrow-right']"/> Colonies split up into north, southwest, and southeast</h3>
    <p>
      <strong>Nigeria gets split up in north, south-west and south-east.</strong>
      All of them have their own administration and parliament. This should decentralize the country.
    </p>

    <h3>1960 ✊ <font-awesome :icon="['fas', 'arrow-right']"/> Independence</h3>
    <p>
      <strong>Nigeria becomes an independent state.</strong>
      <br />Britain releases Nigeria into the independence.
    </p>

    <br />
    <g-image
        class="block rounded shadow"
        alt="Aerial photography of houses and buildings in Enugu, Nigeria. Photo by Ovinuchi Ejiohuo on Unsplash"
        src="~/assets/img/flo-p-zpmvpEXM_Qc-unsplash.jpg"
    />
    <p>
        Photo by <a href="https://unsplash.com/@nattyflo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Flo P</a> on <a href="https://unsplash.com/s/photos/colonialism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </p>

    <h2>Consequences of the Colonialism</h2>
    <p>
      Due to the arbitrary setting of borders, ethnic disparities arose, as peoples with completely different views, rules and ways of life suddenly had to get along with each other.
      This could be seen as the main reason for the civil war.
      <br />Also the country had lost a lot of money because of the british sway.
      This still effects the Nigerian economy.
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
