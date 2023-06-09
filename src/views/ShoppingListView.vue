<template>
  <div class="shopping-list-table">
    <ShoppingListComponent
      :shopping-items="shoppingItems"
    />
  </div>
</template>

<script lang="ts">
import ShoppingListComponent from "@/components/shoppingLists/ShoppingListComponent.vue";
import { IShoppingItem } from "@/models/ShoppingItem";
export default {
  name: "ShoppingListView",
  components: {ShoppingListComponent},
  data: () => {
    return {
      shoppingItems: Array<IShoppingItem>(
          {id: '', description: 'Bread', completed: false},
          {id: '', description: 'Milk', completed: false},
          {id: '', description: 'Water', completed: false},
      )
    }
  }
}
</script>

<style scoped>

</style>