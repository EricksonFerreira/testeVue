<template >
    <div class="group realtimedb">
        <h2>Realtime Datastore</h2>
        <div class="input-group half left">
            <label>Firstname</label>
            <input
            type="text"
              v-model="newTodo"
            @input="handleFirstNameUpdate()"
            />
        </div>
        <div class="input-group half">
            <label>Lastname</label>
            <input
            type="text"
            v-model="lastname"
            @input="handleLastNameUpdate()"
            />
        </div>
    </div>
</template>
<script>
export default {
  name: 'Formulario',
}
</script>