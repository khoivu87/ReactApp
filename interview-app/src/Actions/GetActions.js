export function getProducts() {
    return fetch("http://localhost:3304/prods")
        .then(function(response){
            return response.json();
        })
}