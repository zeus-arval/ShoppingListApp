<template>
  <div class="header">
    <div class="navigation-items-container">
      <div class="nav-project-name-container">
        <router-link to="/" class="navigation-link">
          <h1 class="nav-project-name">Javascript Exam</h1>
        </router-link>
      </div>
      <div class="nav-links">
        <router-link to="/shoppingList" class="navigation-link">
          <h1>
            Shopping list
          </h1>
        </router-link>
      </div>
    </div>
  </div>
  <div class="page-body">
    <router-view/>
  </div>
  <div class="footer">

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>