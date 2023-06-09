<template>
  <dt class="list-row-shopping-item">
    <div class="shopping-item-container">
      <div class="shopping-item-row">
        <div>
          {{shoppingItem.description}}
        </div>
        <a >
          <img src="@/assets/images/change-item-icon.png" alt="">
        </a>
      </div>
      <div class="shopping-item-row">
        <div class="buttons-container">
          <a>
            <img src="@/assets/images/delete-item-icon.png" alt="">
          </a>
          <input class="square-checkbox" type="checkbox"/>
        </div>
      </div>
    </div>
  </dt>
</template>

<script>
export default {
  name: "DescriptionListShoppingItemComponent",
  props: ['shoppingItem', 'changeShoppingItem', 'removeShoppingItem'],
}
</script>
