<template>
    <div>
        <div class="content">
            <div class="mb-4">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <NuxtLink to="/">
                                <i class="bi bi-globe2 small me-2"></i> Dashboard
                            </NuxtLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                </nav>
            </div>

            <div class="row">
                <div class="col">
                    <div>
                        <h3>Create new book</h3>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="storeBook" class="row g-3">
                                <h5>Main info</h5>
                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Name uz</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Name ru</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Price</label>
                                    <input v-model="price" v-maska data-maska="['# ###', '## ###', '### ###', '# ### ###']" type="text" data-input-mask="price" class="form-control" id="inputPrice" aria-describedby="emailHelp">
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Category</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Author</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Number of pages</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Year</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Cover type</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>                                </div>

                                <div class="col-md-3">
                                    <label for="exampleInputEmail1" class="form-label">Language</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>                                </div>

                                <div class="row g-3">
                                    <h5>Images</h5>
                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Main images</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>

                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Image 2</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>

                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Image 3</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>

                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Image 4</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>

                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Image 5</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>

                                    <div class="col-md-3">
                                        <label for="formFile" class="form-label">Image 6</label>
                                        <input class="form-control" type="file" multiple id="formFile">
                                    </div>
                                </div>

                                <div class="row g-3">
                                    <h5>Descriptions</h5>
                                    <div class="col-md-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Description uz</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Description ru</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Short description uz</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <div class="form-text">Optional</div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Short description ru</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <div class="form-text">Optional</div>
                                    </div>
                                </div>

                                <div>
                                    <button id="buttonon" type="submit" class="btn btn-primary">Create book</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const price = ref()

</script>
