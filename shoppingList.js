const shoppingListArr = [
    {
        id: 1,
        name: "milk",
        price: 5
    },
    {
        id: 2,
        name: "eggs",
        price: 7
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 10
    },
    {
        id: 4,
        name: "steak",
        price: 10
    }

]

for (const item of shoppingListArr) {
    if (item.price > 8) {
        console.log(item)
    }
}