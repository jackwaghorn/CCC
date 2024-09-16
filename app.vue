<script setup>
function scrollTop() {
  let el = document.getElementById('col-one');
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function movePosition(el) {
  let element = document.getElementById(el);
  if(element.scrollTop === 0) {
    let header = document.getElementById('header');
    let headerSize = header.offsetHeight + 32
    let scrollby = window.innerHeight - (window.innerHeight * 0.1) - headerSize
    element.scrollTo({
      top: scrollby,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    element.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}


</script>
<template>
  <Html>
  <Title>CCC</Title>
  <!-- <Meta name="description" :content="page?.data?.meta_description" /> -->
  </Html>



  <main class="px-4 w-full h-full flex flex-col justify-start items-center">
    <!-- Top banner -->
    <section id="header"
      class="fixed z-10 top-0 left-0 ms-4 mt-4 w-[calc(100%-2rem)] border  border-green rounded-[25px] bg-[#E6F7E5] py-2 px-1">
      <h1 class="text-center t-base text-green">
        CCC è un’associazione culturale no-profit. Questa è una bacheca digitale.
      </h1>
    </section>
    <!-- Centre banner -->
    <section class="w-full fixed min-h-screen h-full flex items-center justify-center banner">
      <div class="banner-text py-10 md:py-0">
        <div class="t-xl tracking-[0px] text-center serif">
          Centro per le Culture </div>
        <h1 class="t-xl font-normal text-center">Contemporanee</h1>
      </div>
    </section>

    <!-- Text -->
    <section class="w-full gap grid grid-cols-1 md:grid-cols-2 gap-4 max-h-screen overflow-hidden">
      <!-- Column one -->
      <div id="col-one" class="h-screen overflow-y-auto scrollbar">
        <div class="w-full relative   text-[#CEA1F3] t-base text-center">
          <section class="w-full h-[90vh]"></section>
          <div @click="movePosition('col-one')"
            class="border-purple border rounded-[25px] p-4 bg-[#F2E6FC] hover:cursor-pointer mb-4">


            <p>Il Centro per le Culture Contemporanee (CCC) è una nuova associazione culturale nel panorama Veneto e
              italiano, nata con l’obiettivo di promuovere progetti no-profit volti a ispirare, supportare e collegare
              tanto
              gli attori del panorama culturale quanto le realtà imprenditoriali italiane.
              <br><br>
              Le sue attività si articolano su più livelli, coniugando grandi progetti istituzionali, iniziative che
              esplorano culture dal basso, e rispondendo alle urgenze culturali emergenti. Il CCC ha come finalità
              principale la promozione e l’analisi della cultura contemporanea in tutte le sue forme, stimolare il
              dialogo
              interdisciplinare, mantenendo un legame con la comunità locale e uno sguardo internazionale.
              <br><br>
              La sua missione è quella di sciogliere e ricomporre il ricco tessuto industriale e imprenditoriale della
              regione Veneto, dimostrando come la cultura possa essere non solo un elemento di coesione, ma anche una
              forza
              capace di guidare l’innovazione nel pensiero e nelle azioni.
            </p>
          </div>
          <div class="border-purple md:hidden block border rounded-[25px] p-4 bg-[#F2E6FC] hover:cursor-pointer mb-4">
            <p>
              <span class="serif">Indirizzo</span> <br>
              3200 Campo de le Gate <br>
              Venezia 30122 (VE),<br>
              Italia
              <br><br>
              <span class="serif">Contatti</span><br>
              email@email.com<br>
              P.IVA / CF: XXXXXXXXXXX
              <br><br>
              <span class="serif">Orari</span><br>
              Lun–Ven 9:30–18:30
            </p>
          </div>
          <!-- Scroll to top -->
          <section @click="scrollTop"
            class="w-full  border relative md:hidden block mb-4 border-green bg-[#E6F7E5] text-green p-4 rounded-[25px] t-base text-center ">
            Torna su
          </section>
        </div>
      </div>
      <!-- Column two -->
      <div id="col-two" class="h-screen overflow-y-auto scrollbar">
        <div class="w-full relative  text-[#CEA1F3] t-base text-center">
          <section class="w-full h-[90vh]"></section>
          <div @click="movePosition('col-two')"
            class="border-purple border rounded-[25px] p-4 bg-[#F2E6FC] hover:cursor-pointer mb-4">
            <p>
              <span class="serif">Indirizzo</span> <br>
              3200 Campo de le Gate <br>
              Venezia 30122 (VE),<br>
              Italia
              <br><br>
              <span class="serif">Contatti</span><br>
              email@email.com<br>
              P.IVA / CF: XXXXXXXXXXX
              <br><br>
              <span class="serif">Orari</span><br>
              Lun–Ven 9:30–18:30
            </p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px; */
}

.banner-text {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .banner {
    height: auto;
    /* Let the container adjust to text height */
  }

  .banner-text {
    writing-mode: vertical-rl;
    /* Makes text vertical */
    text-orientation: mixed;
    /* Ensures the text is upright */
  }
}
</style>
