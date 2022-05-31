<script>
    // @ts-nocheck
    import { AutoComplete } from '$components/index'
    import { shopAutocomplete } from '../../data/autocomplete';
</script>
<header class="bg-gray-100/50 w-full h-auto md:h-32 flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-2 space-y-4 md:space-y-0 mt-0">
    <!-- Nav Left -->
    <div class="w-auto h-auto mt-8 md:mt-0 mb-4 md:mb-0">
        <img class="w-56 md:w-72" src="https://img-cdn-02.megaboutique.com.au/logo/logo202012512.png" alt="Megaboutique">
    </div>
    <!-- Search Bar -->
    <div class="w-full h-auto md:px-16 hidden md:block">
        <AutoComplete />
    </div>
    <!-- Nav Right -->
    <div class="w-auto h-auto">
        <div class="flex flex-row space-x-8 justify-center md:justify-end items-center md:items-end">
            
            <div class="flex md:hidden flex-col space-y-2 justify-center items-center w-auto h-auto">
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-search text-gray-500 fill-current" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                <span class="text-xs text-gray-400 hidden">Search</span>
            </div>

            <div class="flex flex-col space-y-2 justify-center items-center w-auto h-auto">
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-envelope text-gray-500 fill-current" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                </span>
                <span class="text-xs text-gray-400 hidden">Contact</span>
            </div>
            
            <div class="flex flex-col space-y-2 justify-center items-center w-auto h-auto">
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-person-circle text-gray-500 fill-current" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </span>
                <span class="text-xs text-gray-400 hidden">Account</span>
            </div>
            
            <div class="flex flex-col space-y-2 justify-center items-center w-auto h-auto relative pb-2.5 md:pb-0">
                <div class="absolute -right-8 top-0">
                    <div class="w-8 h-8 rounded-full bg-green-700/50 hover:bg-[#fc6d46] shadow border flex justify-center items-center">
                        <span class="text-xs font-bold text-white">0</span>
                    </div>
                </div>
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-basket text-gray-500 fill-current" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </span>
                <span class="text-xs text-gray-400 hidden">Cart</span>
            </div>
        </div>
    </div>
</header>