<template>
  <div class="shopping-list-container">
    <h2>Shopping list</h2>
    <dl>
      <DescriptionListShoppingItemComponent
        v-for="(shoppingItem, key) of shoppingItems"
        :shoppingItem="shoppingItem"
        :key="key"
      />
    </dl>
  </div>
</template>

<script lang="ts">
import {IShoppingItem} from "@/models/ShoppingItem";
import DescriptionListShoppingItemComponent from "@/components/common/list/DescriptionListShoppingItemComponent.vue";

export default {
  data: () => {
    return {

    }
  },
  props:{
    shoppingItems: Array<IShoppingItem>(),
  },
  components:{
    DescriptionListShoppingItemComponent,

  }
}
</script>
