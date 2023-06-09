<template>
  <div class="shopping-list-container">
    <div class="shopping-list-header">
      <h2 class="shopping-list-title">Shopping list</h2>
      <div class="shopping-list-buttons">
        <button class="rounded-button">
          <div>
            Filter
          </div>
        </button>
        <button class="rounded-button" @click="addItem({})">
          <div>
            Add item
          </div>
        </button>
      </div>
    </div>
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
import { defineComponent } from "vue";

export default defineComponent({
  emits: [
      'addItem',
  ],
  data: () => {
    return {
    }
  },
  setup(props: any, context: any){
    function addItem(item: IShoppingItem): void{
      console.log(item);
      context.emit('addItem', item)
    }

    return{
      addItem,
    }
  },
  props:['shoppingItems'],
  components:{
    DescriptionListShoppingItemComponent,

  },
  methods: {

  }
})
</script>
