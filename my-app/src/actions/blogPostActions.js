export function fetchBlogPosts() {
    return fetch('http://localhost:3305/posts', {
            method: 'GET'
        }
    ).then(function(response) {
            return response.json();
        }
    ).catch(function(error){
            return error;
        }
    );
}

export function createBlogPost(data) {
    return fetch('http://localhost:3305/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
            'Content-Type': 'application/json'
            }
        }
    ).then(function(request) {
            return request;
        }
    ).catch(function(error){
            return error;
        }
    );
}

export function fetchSinglePost(id) {
    return fetch('http://localhost:3305/posts/' + id, {
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

export function updateBlogPost(id, data) {
    return fetch('http://localhost:3305/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(function(request) {
            return request;
        }
    ).catch(function(error) {
            return error;
        }
    );
}
