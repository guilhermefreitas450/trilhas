abstract class Inventory {
    protected inventory: Record<string, number> = {};
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`o item "${item}" não existe no inventário.`);
        }
    }
}

class StoreInventory extends Inventory {
    private maxQuantityPerItem: number = 10;

    addItem(item: string, quantity: number): void {
        if (quantity > this.maxQuantityPerItem) {
            console.log(`n é possível adicionar mais de ${this.maxQuantityPerItem} unidades de "${item}".`);
            return;
        }

        if (this.inventory[item]) {
            const newQuantity = this.inventory[item] + quantity;
            if (newQuantity <= this.maxQuantityPerItem) {
                this.inventory[item] = newQuantity;
            } else {
                console.log(`n é possível adicionar mais de ${this.maxQuantityPerItem} unidades de "${item}".`);
            }
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`i item "${item}" não existe no inventário.`);
        }
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("jbl", 100);
warehouse.addItem("pc", 50);
warehouse.addItem("ps2", 30);
warehouse.addItem("jbl", 50);

console.log("Iinventário do armazém:", warehouse.getInventory());
warehouse.removeItem("pc");
console.log("inventário depos da remoção:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("ps2", 5);
store.addItem("ps5", 8);
store.addItem("xbox serie s", 3);
store.addItem("pc", 5);
store.addItem("controle", 12);

console.log("inventário da loja:", store.getInventory());
store.removeItem("Calça");
console.log("inventário depois da remoção:", store.getInventory());