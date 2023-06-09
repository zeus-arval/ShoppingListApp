<template>
  <div class="shopping-list-table">
    <ShoppingListComponent
      :shopping-items="shoppingItems"
      @addItem="addItem"
    />
  </div>
</template>

<script lang="ts">
import ShoppingListComponent from "@/components/shoppingLists/ShoppingListComponent.vue";
import { IShoppingItem } from "@/models/ShoppingItem";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingListView",
  components: {ShoppingListComponent},
  data() {
    return ({
      shoppingItems: Array<IShoppingItem>(
        {id: '', description: 'Bread', completed: false},
        {
          id: '',
          description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet dsddsdf',
          completed: false
        },
        {id: '', description: 'Water', completed: false},
      ),
    })
  },
  methods: {
    addItem(shoppingItem: IShoppingItem){
      this.shoppingItems.push(shoppingItem);
    },
  }
})
</script>
