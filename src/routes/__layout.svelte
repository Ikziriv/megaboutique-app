<script>
  import { 
    Header, 
    Footer, 
    DiscountBar,
    MegaMenu,
    ShippingNav
  } from '$components/index'
  import "../styles/css/app.css";
</script>
  
<ShippingNav />
<Header />
<MegaMenu />
<DiscountBar />
  <main class="main-body">
    <slot />
  </main>
<Footer />