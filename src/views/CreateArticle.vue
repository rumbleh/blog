<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 mb-5">
                <div class="card">
                    <div class="card-body">
                        <input type="text" placeholder="Title" class="mb-3 form-control">
                        <wysiwyg v-model="content" />
                        <button class="my-3 btn btn-success btn-block">Add article</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateArticle",
        data(){
            return {
                content: ''
            }
        }
    }
</script>

<style scoped>

</style>