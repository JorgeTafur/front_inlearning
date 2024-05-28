<template>
    <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gestión de Cursos</h1>
    <br>
    <router-link :to="{name: 'CrearCurso'}" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Crear Nuevo Curso
    </router-link>
    <br><br>
    <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th class="py-2 px-4 border-b text-left">ID</th>
                <th class="py-2 px-4 border-b text-left">Nombre</th>
                <th class="py-2 px-4 border-b text-left">Categoría</th>
                <th class="py-2 px-4 border-b text-left">Descripción</th>
                <th class="py-2 px-4 border-b text-left">Cantidad de Alumnos</th>
                <th class="py-2 px-4 border-b text-left">Inicio</th>
                <th class="py-2 px-4 border-b text-left">Fin</th>
                <th class="py-2 px-4 border-b text-left">Precio</th>
                <th class="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="curso in cursos" :key="curso.id">
                <td class="py-2 px-4 border-b">{{ curso.id }}</td>
                <td class="py-2 px-4 border-b">{{ curso.nombre }}</td>
                <td class="py-2 px-4 border-b">{{ curso.categoria }}</td>
                <td class="py-2 px-4 border-b">{{ curso.descripcion }}</td>
                <td class="py-2 px-4 border-b">{{ curso.cantidadAlumnos }}</td>
                <td class="py-2 px-4 border-b">{{ curso.inicio }}</td>
                <td class="py-2 px-4 border-b">{{ curso.fin }}</td>
                <td class="py-2 px-4 border-b">{{ curso.precio }}</td>
                <td class="py-2 px-4 border-b">
                <router-link :to="{name: 'EditarCurso', params:{id:curso.id}}" class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mr-2" @click="editarCurso(curso.id)">Editar</router-link>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cursos:[]
        }
    },

    created: function() {
        this.consultarCursos();
    },
    methods: {
        consultarCursos() {
            fetch('https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                this.cursos=[]
                if(typeof datosRespuesta[0].success === 'undefined') {
                    this.cursos = datosRespuesta;
                }
            })
            .catch(console.log)
        },
        editarCurso() {

        },
        eliminarCurso() {

        },
        irACreacion() {
            window.location.href='crearCurso';
        }
    }
}
</script>