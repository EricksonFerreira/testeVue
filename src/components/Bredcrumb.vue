<template>
<div class="w-full mt-2">
    <ol class="flex text-gray-700 bg-gray-300 rounded py-2 px-2">
      <li class="inline-flex items-center">
          <routerLink to="/"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg></routerLink>
          <svg
            class="h-5 w-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
      </li>

      <li v-for="item in items" :key="item" class="breadcrumb-item" v-bind:class="isTheLastItem(item)?'active':''">
        <div v-if="!isTheLastItem(item)">
          <routerLink to="/categoria" class="px-2">
            {{item}}
          </routerLink>
          
          <svg
            class="h-5 w-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            style="display:inline"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        
        <span class="px-2 text-indigo-600" v-if="isTheLastItem(item)">
          {{item}}
         </span> 
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
      name:'Bredcrumb', 
      props: {
          items:{
              type: Array
          }
      },
      methods: {
        isTheLastItem(item){
          return this.items.indexOf(item) + 1 == this.items.length;
        },
      },
  }
</script>
