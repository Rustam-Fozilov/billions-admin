<template>
    <div>
        <!-- content -->
        <div class="content ">

            <div class="row my-5">
                <div class="col-lg-6 m-auto">
                    <form>
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="What do you want to find?" autofocus>
                            <button class="btn btn-outline-light" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="text-center lead">
                12 results found for: &nbsp; "<span class="fw-bold">Lorem Ipsum</span>"
            </div>

            <ul class="nav nav-pills my-5 justify-content-center" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#classic" role="tab"
                       aria-controls="classic" aria-selected="true">Classic</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#articles" role="tab"
                       aria-controls="articles" aria-selected="false">Articles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#photos" role="tab"
                       aria-controls="photos" aria-selected="false">Photos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users"
                       aria-selected="false">Users</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="classic" role="tabpanel">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item p-4">
                                <h5>
                                    <a href="#">Lorem ipsum dolor sit amet, consectetur.</a>
                                </h5>
                                <p class="text-muted">Velit laborum sint labore consectetur dolor minim
                                    deserunt sit proident dolor id ea voluptate aliquip duis fugiat anim
                                    nisi sint nulla irure sunt pariatur fugiat et mollit </p>
                                <div class="text-muted d-flex align-items-center">
                                    <span class="badge bg-secondary">Trends</span>
                                    <div class="ms-3">Jan 5 2021</div>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <h5>
                                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at, numquam.</a>
                                </h5>
                                <p class="text-muted">Deserunt sint sit dolor proident qui ipsum enim in
                                    veniam in sed ut in voluptate </p>
                                <div class="text-muted d-flex align-items-center">
                                    <span class="badge bg-success">Lifestyle</span>
                                    <div class="ms-3">Jan 15 2021</div>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <h5>
                                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
                                </h5>
                                <p class="text-muted">Commodo excepteur non ut exercitation qui sit proident
                                    aliqua ex qui velit sed esse consequat in eiusmod nulla laboris tempor
                                    ad esse elit ut enim ea veniam </p>
                                <div class="text-muted d-flex align-items-center">
                                    <span class="badge bg-danger">Trends</span>
                                    <div class="ms-3">Feb 25 2021</div>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <h5>
                                    <a href="#">Lorem ipsum dolar set amet</a>
                                </h5>
                                <p class="text-muted">Ad ut exercitation ut esse aute ut aliqua dolore qui
                                    nulla ea ut sed lorem tempor amet nostrud eu eiusmod ex consectetur in
                                    velit officia incididunt ut </p>
                                <div class="text-muted d-flex align-items-center">
                                    <span class="badge bg-warning">Trends</span>
                                    <div class="ms-3">Mar 10 2021</div>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <h5>
                                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora.</a>
                                </h5>
                                <p class="text-muted">Esse ipsum ex ut consectetur enim exercitation non
                                    irure lorem dolore in non commodo ut officia officia est pariatur fugiat
                                    deserunt veniam in aliqua velit veniam dolor </p>
                                <div class="text-muted d-flex align-items-center">
                                    <span class="badge bg-info">Travel</span>
                                    <div class="ms-3">Mar 12 2021</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-pane fade" id="articles" role="tabpanel">
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo1.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo2.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo3.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo4.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo5.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card border">
                                <img class="card-img-top"
                                     src="../images/photo6.jpg"
                                     alt="image">
                                <div class="card-body">
                                    <h6 class="card-title">Lorem ipsum dolar set amet</h6>
                                    <p class="card-text">Some quick example text to build on the card
                                        title and make up...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="photos" role="tabpanel">
                    <div class="row g-4">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-one.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-one.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-two.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-two.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-three.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-three.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-four.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-four.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-five.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-five.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-six.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-six.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-one.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-one.jpg"
                                     alt="image">
                            </a>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <a href="../images/portfolio-two.jpg"
                               class="image-popup-gallery-item">
                                <img class="img-fluid rounded"
                                     src="../images/portfolio-two.jpg"
                                     alt="image">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="users" role="tabpanel">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar avatar-primary me-3">
                                                <span class="avatar-text rounded-circle">FS</span>
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Ferrel Skipsea</h6>
                                            </a>
                                            <p class="mb-0">Tax Accountant</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar me-3">
                                                <img src="../images/user/man_avatar1.jpg"
                                                     class="rounded-circle" alt="image">
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Lorry Lewsey</h6>
                                            </a>
                                            <p class="mb-0">Marketing Assistant</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar avatar-success me-3">
                                                <span class="avatar-text rounded-circle">W</span>
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Winny Lippiatt</h6>
                                            </a>
                                            <p class="mb-0">Cost Accountant</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar avatar-danger me-3">
                                                <span class="avatar-text rounded-circle">SW</span>
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Salim Walklate</h6>
                                            </a>
                                            <p class="mb-0">Chemical Engineer</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar avatar-warning me-3">
                                                <span class="avatar-text rounded-circle">S</span>
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Sena Erangey</h6>
                                            </a>
                                            <p class="mb-0">Financial Advisor</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                            <li class="list-group-item p-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <a href="#">
                                            <figure class="avatar avatar-info me-3">
                                                <span class="avatar-text rounded-circle">D</span>
                                            </figure>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h6>Decca Thorrington</h6>
                                            </a>
                                            <p class="mb-0">Systems Administrator</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">View</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center mt-5">
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
        <!-- ./ content -->
    </div>
</template>

<script setup>

</script>
