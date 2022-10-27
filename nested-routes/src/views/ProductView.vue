<template>
    <div>
        <h1>Product Menu</h1>
        <!-- <router-link :to="{name:'Food'}">Food</router-link>|
        <router-link :to="{name:'Drink'}">Drinks</router-link>|
        <router-link :to="{name:'Dress'}">Dress</router-link> -->
        <router-link to="/Food">Food</router-link>|
        <router-link to="/Drink">Drinks</router-link>|
        <router-link to="/Dress">Dress</router-link>
        <router-view/>
    </div>
</template>
<script>
export default{
    name:"ProductView"
}
</script>
  