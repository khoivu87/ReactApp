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
