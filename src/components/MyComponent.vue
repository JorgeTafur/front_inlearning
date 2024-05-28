<template>
	<div class="my-component">
		<h1 v-if="isVisible">{{message}}</h1>
        <button v-on:click="toggleVisibility">Toggle</button>
        <h1>{{modelo_test}}</h1>
        <input v-model="modelo_test">
        <br><br>
        <button @click="alertUser">Alerta</button>
        <ul>
            <li v-for="item in list" :key="item.id">{{item.text}}</li>
        </ul>
        <h1 v-bind:class="{highlighted: isHighlighted}">{{title}}</h1>
        <button v-on:click="toggleHighlight">Toggle</button>
	</div>
</template>

<style scoped>
.highlighted {
    color: gold;
}
</style>

<script>
export default {
	name: 'MyComponent',
	data() {
		return {
			message: 'Hello World!',
            isVisible: true,
            modelo_test: 'Hello Vue',
            list: [
                {id:1, text:'First'},
                {id:2, text:'Second'},
                {id:3, text:'Third'},
            ],
            title: 'hola gente',
            isHighlighted: false
		}
	},
	methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        alertUser() {
            alert("Hello User!");
        },
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
        }
	}
}
</script>