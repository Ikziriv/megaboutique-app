<script>
  import { 
    Header, 
    Footer, 
    DiscountBar,
    MegaMenu,
    MegaList,
    ShippingNav
  } from '$components/index'
  import "../styles/css/app.css";

  let megaShow = false;
</script>
  
<DiscountBar />
<ShippingNav />
<Header />
<MegaMenu {megaShow} />
{#if megaShow}
  <MegaList />
{/if}

  <main class="main-body w-full h-auto border-t border-[#fc6d46]">
    <slot />
  </main>
<Footer />