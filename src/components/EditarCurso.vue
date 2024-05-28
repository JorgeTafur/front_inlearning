<template>
    <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div class="px-4 py-2">
            <h2 class="text-lg font-semibold text-gray-800">Editar Curso</h2>
            <p class="text-sm text-gray-600 mt-1">Edita la información del curso.</p>
        </div>
        <div class="p-4">
            <form @submit.prevent="editarCurso">
                <div class="mb-4">
                    <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre del Curso</label>
                    <input v-model="curso.nombre" type="text" id="nombre" name="nombre" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="mb-4">
                    <label for="categoria" class="block text-sm font-medium text-gray-700">Categoría</label>
                    <input v-model="curso.categoria" type="text" id="categoria" name="categoria" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="mb-4">
                    <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
                    <textarea required v-model="curso.descripcion" id="descripcion" name="descripcion" rows="3" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
                <div class="mb-4">
                    <label for="cantidadAlumnos" class="block text-sm font-medium text-gray-700">Cantidad de Alumnos</label>
                    <input required v-model.number="curso.cantidadAlumnos" type="number" id="cantidadAlumnos" name="cantidadAlumnos" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="mb-4">
                    <label for="fechaInicio" class="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
                    <input required v-model="curso.inicio" type="date" id="fechaInicio" name="fechaInicio" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="mb-4">
                    <label for="fechaFin" class="block text-sm font-medium text-gray-700">Fecha de Fin</label>
                    <input required v-model="curso.fin" type="date" id="fechaFin" name="fechaFin" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="mb-4">
                    <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                    <input required v-model.number="curso.precio" type="number" id="precio" name="precio" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Guardar Cambios</button>
                </div>
                <router-link :to="{name: 'ListarCursos'}" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Volver
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                curso: {}
            };
        },
        created:function() {
            this.obtenerPorId();
        },
        methods: {

            obtenerPorId() {
                fetch('https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos/'+this.$route.params.id)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data);
                    this.curso = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            },

            editarCurso() {

                this.editCurso = {
                    nombre: this.curso.nombre,
                    categoria: this.curso.categoria,
                    descripcion: this.curso.descripcion,
                    cantidadAlumnos: this.curso.cantidadAlumnos,
                    inicio: this.curso.inicio,
                    fin: this.curso.fin,
                    precio: this.curso.precio,
                    alumnos: null
                };

                fetch('https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos/'+this.$route.params.id, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.editCurso)
                })
                .then(respuesta => {
                    console.log(respuesta);
                    window.location.href='/';
                })
                .then(data => {
                    console.log('Curso creado:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        }
    };
</script>