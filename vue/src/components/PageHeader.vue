<template>
  <div class="row mb-4">
	<div class="col-md-9">
      <h1 class="font-semibold text-2xl">
        {{pageTitle}}
      </h1>
    </div>
    <div class="col-md-3 text-right" v-if="showButton">
    <routerLink :to="{name:buttonLink}" class="btn" v-bind:class="buttonClass">
	{{buttonText}}
	</routerLink>
	</div>
  </div>
</template>

<script>
  export default {
      name:'PageHeader', 
      props: {
        pageTitle: String,
        buttonText: String,
        buttonClass: String,
        buttonLink: String,
        showButton:{
          type: Boolean,
          default: true
        }
      },
  }
</script>
