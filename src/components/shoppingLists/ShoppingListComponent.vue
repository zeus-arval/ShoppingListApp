<template>
  <div class="shopping-list-container">
    <div class="shopping-list-header">
      <h2 class="shopping-list-title">Shopping list</h2>
      <div class="shopping-list-buttons">
        <form v-on:submit.prevent="onsubmit" class="shopping-list-buttons">
          <input
              class="input-description"
              type="text"
              v-model="description"
              maxlength="255"
          />
          <button type="submit" class="rounded-button" @click="submitHandler">
            <div>
              Add item
            </div>
          </button>
        </form>
        <button class="rounded-button" @click="sortItemsHandler">
          <div>
            Sort
          </div>
        </button>
        <button class="rounded-button" @click="filterItemsHandler">
          <div>
            Filter
          </div>
        </button>
      </div>
    </div>

    <div class="error-message-container">
      <ErrorComponent
          :message="errorMessage"
          v-if="errorMessage"
      />
    </div>
    <dl>
      <DescriptionListShoppingItemComponent
        v-for="(shoppingItem, key) of shoppingItems"
        :shoppingItem="shoppingItem"
        :key="key"
        @changeItem="changeItemHandler"
        @removeItem="removeItemHandler"
      />
    </dl>
  </div>
</template>

<script lang="ts">
import DescriptionListShoppingItemComponent from "@/components/shoppingLists/DescriptionListShoppingItemComponent.vue";
import {defineComponent} from "vue";
import ErrorComponent from "@/components/common/ErrorComponent.vue";
import {IShoppingItem} from "@/modules/ShoppingItem";

export default defineComponent({
  data() {
    return ({
      description: '',
      errorMessage: '',
      filteredByCompleted: false
    })
  },
  props: [
    'shoppingItems',
  ],
  components: {
    DescriptionListShoppingItemComponent,
    ErrorComponent,
  },
  methods: {
    submitHandler(){
      this.errorMessage = '';
      if (!this.description.trim()){
        this.errorMessage = 'Length must be bigger than 0!';
        return;
      }

      const item: IShoppingItem = {
        description: this.description,
        completed: false,
      }
      this.description = ''
      this.$emit('addItem', item);
    },
    changeItemHandler(item: IShoppingItem){
      this.$emit('changeItem', item);
    },
    removeItemHandler(item: IShoppingItem){
      this.$emit('removeItem', item);
    },
    sortItemsHandler(){
      this.$emit('sortItems');
    },
    filterItemsHandler(){
      this.filteredByCompleted = !this.filteredByCompleted;
      this.$emit('filter', this.filteredByCompleted);
    }
  }
});
</script>
