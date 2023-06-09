<template>
  <div class="shopping-list-table">
    <ShoppingListComponent
      :shoppingItems="shoppingItems"
      @addItem="addItem"
      @changeItem="changeItem"
      @removeItem="removeItem"
      @sortItems="sortItems"
      @filter="filter"
    />
  </div>
</template>

<script lang="ts">
import ShoppingListComponent from "@/components/shoppingLists/ShoppingListComponent.vue";
import { IShoppingItem } from "@/modules/ShoppingItem";
import { defineComponent } from "vue";
import {shoppingItemsStore} from "@/stores/shoppingItemsStore";

export default defineComponent({
  name: "ShoppingListView",
  components: {ShoppingListComponent},
  data() {
    return ({
      store: shoppingItemsStore(),
      orderedByCompleted: true,
      shoppingItems: Array<IShoppingItem>(),
    })
  },
  mounted(){
    shoppingItemsStore().loadShoppingItems().then(x => {
      this.shoppingItems = x.value;
    });
  },
  methods: {
    async addItem(shoppingItem: IShoppingItem){
      this.store.addItem(shoppingItem).then(item => {
        this.shoppingItems.push(item!);
      });
    },
    changeItem(shoppingItem: IShoppingItem){
      const index = this.shoppingItems.findIndex(i => i.id === shoppingItem.id);
      this.shoppingItems[index] = shoppingItem;
      this.store.updateItem(shoppingItem);
    },
    removeItem(shoppingItem: IShoppingItem){
      this.shoppingItems = this.shoppingItems.filter(i => i.id !== shoppingItem.id)
      this.store.deleteItem(shoppingItem);
    },
    sortItems(){
      shoppingItemsStore().loadShoppingItems().then(x => {
        this.shoppingItems = x.value;
        this.orderedByCompleted = !this.orderedByCompleted
        this.shoppingItems.sort((a: IShoppingItem, b: IShoppingItem) => {
          if (!a.completed && b.completed) {
            return this.orderedByCompleted ? -1 : 1;
          }

          if (!b.completed && a.completed) {
            return this.orderedByCompleted ? 1 : -1;
          }

          return 0;
        });
      });
    },
    filter(completed: boolean){
      this.store.loadFilteredShoppingItems(completed).then(x => {
        this.shoppingItems = x.value;
      });
    }
  }
})
</script>
