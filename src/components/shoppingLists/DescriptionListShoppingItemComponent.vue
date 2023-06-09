<template>
  <dt class="list-row-shopping-item">
    <div class="shopping-item-container">
      <div class="shopping-item-row">
        <div v-if="!descriptionIsBeingChanged" @click="openDescriptionForm">
          {{shoppingItem.description}}
        </div>
        <div v-else>
            <input
                v-on:keyup.enter="changeItemDescription"
                class="change-item-description-input"
                v-model="newDescription"
                type="text"
                @change="(event) => newDescription = event.target.value"
            />
            <button @click="changeItemDescription" class="submit-description">
              <img src="@/assets/images/change-description-icon.png" class="icon-button"/>
            </button>
        </div>
        <a class="small-icon-button" @click="openDescriptionForm">
          <img src="@/assets/images/change-item-icon.png" alt="">
        </a>
      </div>
      <div class="shopping-item-row">
        <div class="buttons-container">
          <a class="small-icon-button" @click="removeItemHandler">
            <img src="@/assets/images/delete-item-icon.png" alt="">
          </a>
          <input
              v-model="completed"
              class="square-checkbox"
              type="checkbox"
              @click="completeItem"/>
        </div>
      </div>
    </div>
  </dt>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IShoppingItem} from "@/modules/ShoppingItem";

export default defineComponent({
  name: "DescriptionListShoppingItemComponent",
  data(){
    return {
      descriptionIsBeingChanged: false,
      newDescription: '',
    }
  },
  props: [
    'shoppingItem',
  ],
  computed: {
    completed(){
      return this.shoppingItem.completed;
    }
  },
  methods: {
    completeItem(){
      this.changeItem({
        ...this.shoppingItem,
        completed: !this.completed,
      })
    },
    openDescriptionForm(){
      this.descriptionIsBeingChanged = !this.descriptionIsBeingChanged;
      this.newDescription = this.shoppingItem.description;
    },
    changeItemDescription(){
      this.changeItem({
        ...this.shoppingItem,
        description: this.newDescription,
      })
      this.descriptionIsBeingChanged = !this.descriptionIsBeingChanged;
    },
    changeItem(item: IShoppingItem){
      this.$emit('changeItem', item);
    },
    removeItemHandler(){
      this.$emit('removeItem', this.shoppingItem);
    }
  }
})
</script>
