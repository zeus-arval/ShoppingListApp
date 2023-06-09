import useApi from '@/modules/api';
import {IShoppingItem} from '@/modules/ShoppingItem';
import {defineStore} from 'pinia';
import {Ref, ref} from "vue";

export const shoppingItemsStore = defineStore('shoppingItemsStore', () => {
    const shoppingItemApi = useApi<IShoppingItem>('/ListItems');
    const shoppingItems = ref<IShoppingItem[]>([]);
    const shoppingItem = ref<IShoppingItem>();

    const loadShoppingItems = async (): Promise<Ref<IShoppingItem[]>> => {
        await shoppingItemApi.getAll().then(response => {
            shoppingItems.value = response.data;
        });
        return shoppingItems;
    };

    const loadFilteredShoppingItems = async (completed: boolean): Promise<Ref<IShoppingItem[]>> => {
        await shoppingItemApi.getAll(completed!).then(response => {
            shoppingItems.value = response.data;
        });
        return shoppingItems;
    };

    const loadById = async (id: string) => {
        await shoppingItemApi.get(id).then(response => shoppingItem.value = response.data);
        return shoppingItem!;
    };

    const updateItem = async (shoppingItemEntity: IShoppingItem) => {
        await shoppingItemApi.put(shoppingItemEntity.id!, shoppingItemEntity).then(response => shoppingItem.value = response.data);
        return shoppingItem;
    };

    const addItem = async (item: IShoppingItem) => {
        return shoppingItemApi.post(item).then(response => {
            shoppingItem.value = response.data;
            return shoppingItem.value
        });
    };

    const deleteItem = (shoppingItem: IShoppingItem) => {
        return shoppingItemApi.remove(shoppingItem.id!).then(response => {
            return response;
        });
    };

    return {
        shoppingItems,
        shoppingItem,
        loadShoppingItems,
        loadFilteredShoppingItems,
        loadById,
        addItem,
        deleteItem,
        updateItem,
    };
});