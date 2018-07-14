export function getAllProducts() {

}

export function createNewProduct() {
    fetch('http://localhost:3001/PRODUCTS', {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        "isEnabled": true,
        "name": this.name.value,
        "qty": "0",
        "price": "0"
        })
    }).catch(function(error) {
        return error;
    })
}

export function getProductById() {

}