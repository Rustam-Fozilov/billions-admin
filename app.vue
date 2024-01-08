<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup>

useHead({
    link: [
        /* Google fonts */
        {href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap', rel: 'stylesheet'},
        /* Bootstrap icons */
        {href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', rel: 'stylesheet'},
    ],
    script: [
        {src: './lib/jquery-3.7.1.min.js'},
        {src: './lib/nicescroll.js'},
        {src: './lib/charts/apex/apexcharts.min.js'},
        {src: './assets/examples/dashboard.js'},
        {src: './assets/app.js'},
    ]
})

</script>

<style src="./lib/slick/slick.css"></style>
<style src="./assets/app.css"></style>