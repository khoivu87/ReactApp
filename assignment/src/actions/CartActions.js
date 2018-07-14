export function getAllCartItems() {
    return fetch("http://localhost:3001/CART", {
            method: 'GET'
        }
    ).then(function(res) {
            return res.json();
        }
    ).catch(function(error) {
            return error;
        }
    );
}

export function addToCart(data) {
    return fetch('http://localhost:3001/CART', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    ).then(function(request) {
            return request;
        }
    ).catch(function(error) {
            return error;
        }
    );
}