<template>
    <nav class="mb-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
          <routerLink to="/">Home</routerLink>
      </li>

      <li v-for="item in items" :key="item" class="breadcrumb-item" v-bind:class="isTheLastItem(item)?'active':''">
        <routerLink to="/" v-if="!isTheLastItem(item)">
          {{item}}
        </routerLink>
        <span  v-if="isTheLastItem(item)">
          {{item}}
         </span> 
      </li>
    </ol>
  </nav>
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