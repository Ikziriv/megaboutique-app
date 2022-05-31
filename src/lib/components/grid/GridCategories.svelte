<script lang="ts">
    export let items = [];
</script>

{#each items as card, i}
<div class="col-span-full md:col-span-1">
    <div class="w-full flex justify-center items-center">
      <div class="w-full px-1 md:px-4 py-4 md:py-0">
          <div class="card flex flex-col justify-center p-4 bg-white rounded-2xl shadow hover:shadow-xl">
            <div class="prod-img">
                <img src={card.imgCategory} alt={card.imgAltCategory} class="img{i} w-full object-cover object-center rounded-2xl"/>
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