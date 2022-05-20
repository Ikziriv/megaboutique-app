<script>
  const shopCategory = [{
      title: "Cookware",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Cookware_400x400.jpg",
      imgAltCategory: "Cookware"
  }, {
      title: "Kitchenware",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Kitchenware_400x400.jpg",
      imgAltCategory: "Kitchenware"
  }, {
      title: "Knives",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Knives_400x400.jpg",
      imgAltCategory: "Knives"
  }, {
      title: "Tableware",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Tableware_400x400.jpg",
      imgAltCategory: "Tableware"
  }, {
      title: "Home Decor",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Home_decor_400x400.jpg",
      imgAltCategory: "Home Decor"
  }, {
      title: "Home Living",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Home_living_400x400.jpg",
      imgAltCategory: "Home Living"
  }, {
      title: "Travel & Outdoor",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Travel_and_outdoors_v2.jpg",
      imgAltCategory: "Travel & Outdoor"
  }, {
      title: "Drinkware",
      subTitle: "The best cookware in the marketplace",
      imgCategory: "https://img-cdn-02.megaboutique.com.au/banners/2022_Gifts_400x400.jpg",
      imgAltCategory: "Drinkware"
  }, ]
</script>

<div class="w-full h-auto flex flex-col space-y-4 md:space-y-8">
    
  <section class="flex flex-col w-full h-auto py-4 px-8 md:px-16">
    <div class="w-full h-auto flex justify-center items-center py-4 border-b px-8">
    </div>
  </section>

  <section class="flex flex-col w-full h-auto py-4 px-8 md:px-16">
    <div class="w-full h-auto flex justify-start items-center py-4 border-b px-8">
      <span class="uppercase text-xl font-bold text-gray-700">SHOP BY CATEGORY</span>
    </div>
    <div class="grid grid-cols-4 gap-4 w-full h-auto justify-center items-center">
      
      {#each shopCategory as card}
      <div class="col-span-full md:col-span-1">
        <div class="w-full flex justify-center items-center">
          <div class="w-full px-1 md:px-4 py-4 md:py-0">
              <div class="card flex flex-col justify-center p-4 bg-white rounded-2xl shadow hover:shadow-xl">
                <div class="prod-img">
                    <img src={card.imgCategory} alt={card.imgAltCategory} class="w-full object-cover object-center rounded-2xl"/>
                </div>  
                <div class="flex flex-col mt-4 px-4 py-4 border-b">
                    <span class="text-2xl text-[#fc6d46] font-bold">
                      {card.title}
                    </span>
                    <span class="text-xs uppercase text-gray-400">
                      {card.subTitle}
                    </span>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/each}

    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="px-0 py-12 mx-auto space-y-4 bg-gray-50">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 uppercase text-[#fc6d46]">JOIN OUR NEWSLETTER</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Sign up to be the first to know our new arrivals, special sales and more!</p>
      </div>
      <div class="flex flex-row w-full max-w-md mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div class="relative flex-grow w-full">
          <input placeholder="Email Address" type="email" id="email" name="email" class="w-auto md:w-full bg-white rounded-full border border-gray-300 focus:border-[#fc6d46] focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="text-white bg-[#f76138] border-0 py-4 px-4 focus:outline-none rounded-full text-lg shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send text-white" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="px-0 py-12 md:py-24 px-8 md:px-16 mx-auto space-y-8 md:space-y-4 bg-transparent">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-full md:col-span-1 flex flex-col space-y-4 w-full h-auto px-8 md:px-8">
          <div class="flex flex-row space-x-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 hover:bg-[#fc6d46] flex justify-center items-center">
              <span class="w-auto h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </span>
            </div>
            
            <div class="w-12 h-12 rounded-full bg-gray-200 hover:bg-[#fc6d46] flex justify-center items-center">
              <span class="w-auto h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </span>
            </div>
            
            <div class="w-12 h-12 rounded-full bg-gray-200 hover:bg-[#fc6d46] flex justify-center items-center">
              <span class="w-auto h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </span>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start md:py-2">
            <ul>
              <li class="text-gray-800 font-bold hover:text-[#f76138]">Store Open Hours</li>
              <li class="text-gray-800 hover:text-[#f76138]">Mon - Fri 9.30am - 5.30pm</li>
              <li class="text-gray-800 hover:text-[#f76138]">Sat 10 - 4pm</li>
              <li class="text-red-500 hover:text-red-600">Sun Closed</li>
            </ul>
          </div>
        </div>
        <div class="col-span-full md:col-span-1 flex flex-col space-y-4 w-full h-auto px-8 md:px-8">
          <div class="flex flex-col justify-center items-start md:items-center md:py-4">
            <ul>
              <li class="text-gray-800 hover:text-[#f76138]">About Us</li>
              <li class="text-gray-800 hover:text-[#f76138]">Delivery Information</li>
              <li class="text-gray-800 hover:text-[#f76138]">Privacy Policy</li>
              <li class="text-gray-800 hover:text-[#f76138]">Terms & Condition</li>
              <li class="text-gray-800 hover:text-[#f76138]">Return Policy</li>
            </ul>
          </div>
        </div>
        <div class="col-span-full md:col-span-1 flex flex-col space-y-4 w-full h-auto px-8 md:px-8">
          <div class="grid grid-cols-3 gap-4 justify-center items-center">
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-afterpay.png" alt="afterpay">
            </div>
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-visa.png" alt="visa">
            </div>
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-mastercard.png" alt="mastercard">
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 justify-center items-center">
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-paypal.png" alt="paypal">
            </div>
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-zippay.png" alt="zippay">
            </div>
            <div class="col-span-1 w-full flex justify-center items-center h-16 w-auto rounded-2xl border">
              <img class="w-20 rounded" src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-amex.png" alt="amex">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="text-gray-600 bg-[#f76138]">
    <div class="w-full h-auto px-24 py-4 flex justify-between items-center">
      <div class="flex flex-col justify-start items-start">
        <span class="text-sm text-white"><b>Mega Boutique</b> © 2016 - 2022 | <a href="/">Sitemap</a> | <a href="/">Contact</a></span>
        <span class="text-sm text-white">All Transactions Are Secured With SSL Encryption (HTTPS).</span>
      </div>
      <div class="flex justify-end items-end">
        <span class="text-sm text-white">Unit 8 / 39 Howleys Road, Notting Hill VIC 3168 | 03 8524 7870</span>
      </div>
    </div>
  </section>
</div>