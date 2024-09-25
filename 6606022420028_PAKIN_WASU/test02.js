function updateInventory(currentInventory, newInventory) {
    let result = []
    let key_new_in = []
    for (let item of newInventory) {
        let na = Object.values(item)
        key_new_in.push(na[0])
    }
    for (let cur_item of currentInventory) {

        if (key_new_in.includes(cur_item.name)) {
            for (let k of newInventory) {
                if (cur_item.name == k.name) {
                    cur_item.quantity += k.quantity
                    result.push(cur_item)
                }
            }
        }
    }
    let re_key = []
    for (let item of result) {
        let re = Object.values(item)
        re_key.push(re[0])
    }
    let mix = currentInventory.concat(newInventory)
    for (let m of mix) {
        if (!re_key.includes(m.name)) {
            result.push(m)
        }
    }
    return result
}
const currentInventory = [
    { name: 'item1', quantity: 10 },
    { name: 'item2', quantity: 5 },
    { name: 'item3', quantity: 8 }
]
const newInventory = [
    { name: 'item1', quantity: 5 },
    { name: 'item4', quantity: 7 },
    { name: 'item2', quantity: 10 }

]
console.log(updateInventory(currentInventory, newInventory))
