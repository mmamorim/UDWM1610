<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Login
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Acesso ao sistema
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="p-2">
                        <div class="mb-3">
                            <div class="text-base mb-1">
                                Email address
                            </div>
                            <input v-model="email" type="email" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <div class="text-base mb-1">
                                Senha
                            </div>
                            <input v-model="senha" type="password" id="inputPassword5" class="form-control" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancelar
                        </button>
                        <button @click="login" type="button" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: "",
            senha: ""
        }
    },
    methods: {
        login() {
            
        }
    }
}
</script>
<style lang="">
    
</style>