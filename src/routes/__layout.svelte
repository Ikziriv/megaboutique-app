<script>
  import { 
    Header, 
    Footer, 
    DiscountBar,
    MegaMenu,
    MegaList,
    ButtonHelp,
    ShippingNav
  } from '$components/index'
  import "../styles/css/app.css";

  let megaShow = false;
</script>
  
<div class="w-full h-auto relative">
  <DiscountBar />
  <ShippingNav />
  <Header />
  <MegaMenu />
  <!-- {#if megaShow}
    <MegaList />
  {/if} -->
  
    <main class="main-body w-full h-auto border-t border-[#fc6d46]">
      <slot />
    </main>
  <Footer />
  
  <ButtonHelp />
</div>