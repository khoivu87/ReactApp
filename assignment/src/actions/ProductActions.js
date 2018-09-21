export function getAllProducts() {
    return fetch("http://localhost:3001/PRODUCTS", {
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

export function createNewProduct(data) {
    return fetch('http://localhost:3001/PRODUCTS', {
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

export function getProductById(id, row) {
    return fetch('http://localhost:3001/PRODUCTS/' + id, {
            method: 'GET'
        }
    ).then(function(response) {
            return response.json();
        }
    ).catch(function(error) {
            return error;
        }
    );
}

export function updateProductById(id, data) {
    return fetch('http://localhost:3001/PRODUCTS/' + id, {
            method: 'PUT',
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

export function deleteProductById(id) {
    return fetch('http://localhost:3001/PRODUCTS/' + id, {
            method: 'DELETE'
        }
    ).then(function(request) {
            return request;
        }
    ).catch(function(error) {
            return error;
        }
    )
}