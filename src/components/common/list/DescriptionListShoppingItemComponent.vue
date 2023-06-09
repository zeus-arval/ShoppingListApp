<template>
  <dt class="list-row-shopping-item">
    <div class="shopping-item-container">
      <div class="shopping-item-top">
        <div>
          {{shoppingItem.description}}
        </div>
        <a>
          <img src="@/assets/images/change-item-icon.png" alt="">
        </a>
      </div>
      <div>
        <div>
          <a>
            <img src="@/assets/images/delete-item-icon.png" alt="">
          </a>
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
