<template>
  <div class="row mb-4">
	<div class="col-md-9">
      <h1 class="font-semibold text-2xl">
        {{pageTitle}}
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
      name:'PageHeaderTodo', 
      props: {
        pageTitle: String,
        buttonClass: String,
        buttonLink: String,
      },
  }
</script>
<style lang="scss">
label{
    display: inline-block;
    margin-bottom: 0.5rem;
}
.form-control {
    display: block;
    width: 100px;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
