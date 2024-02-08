<template>
    <div>
        <!-- content -->
        <div class="content ">

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
                    <div class="card">
                        <div class="card-body">
                            <div class="d-md-flex gap-4 align-items-center">
                                <div class="d-none d-md-flex">All Products</div>
                                <div class="d-md-flex gap-4 align-items-center">
                                    <form class="mb-3 mb-md-0">
                                        <div class="row g-3">
                                            <div class="col-md-6">
                                                <select class="form-select">
                                                    <option>Sort by</option>
                                                    <option value="desc">Desc</option>
                                                    <option value="asc">Asc</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <select class="form-select">
                                                    <option value="10">10</option>
                                                    <option value="20">20</option>
                                                    <option value="30">30</option>
                                                    <option value="40">40</option>
                                                    <option value="50">50</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="dropdown ms-auto">
                                    <NuxtLink to="/products/create" class="btn btn-primary" style="margin-right: 20px">
                                        Create book
                                    </NuxtLink>
                                    <a href="#" data-bs-toggle="dropdown"
                                       class="btn btn-primary dropdown-toggle"
                                       aria-haspopup="true" aria-expanded="false">Actions</a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="#" class="dropdown-item">Action</a>
                                        <a href="#" class="dropdown-item">Another action</a>
                                        <a href="#" class="dropdown-item">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-custom table-lg mb-0" id="products">
                            <thead>
                            <tr>
                                <th>
                                    <input class="form-check-input select-all" type="checkbox"
                                           data-select-all-target="#products" id="defaultCheck1">
                                </th>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Author</th>
                                <th>Created At</th>
                                <th class="text-end">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="book in books">
                                <td>
                                    <input class="form-check-input" type="checkbox">
                                </td>
                                <td>
                                    <a href="#">{{ book.id }}</a>
                                </td>
                                <td>
                                    <a href="#">
                                        <img src="/assets/images/itsMe.png" class="rounded" width="40" alt="...">
                                    </a>
                                </td>
                                <td>{{ book.name.ru }}</td>
                                <td>
                                    <span class="text-success">{{ book.category.name.ru }}</span>
                                </td>
                                <td>{{ book.prices[1].price }} so'm</td>
                                <td>{{ book.author.first_name.ru }} {{ book.author.last_name.ru }}</td>
                                <td>{{ book.created_at }}</td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown"
                                               class="btn btn-floating"
                                               aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Action</a>
                                                <a href="#" class="dropdown-item">Another action</a>
                                                <a href="#" class="dropdown-item">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav class="mt-4" aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
        <!-- ./ content -->
    </div>
</template>

<script setup>
import axios from "axios"

const books = ref(null)
const config = useRuntimeConfig()

onMounted(async () => {
    await axios
        .get(config.public.serverUrl + '/books?withAuthor=true')
        .then(res => {
            books.value = res.data.data
        })
        .catch(e => {
            console.log(e)
        })
})

</script>