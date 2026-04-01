console.log("Json Fetching");


const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            displayPost(data);
        });
}

const displayPost = (posts) => {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    posts.forEach(element => {
        console.log(element.id);
        const head = document.createElement("h1");
        head.innerText = element.id;
        postContainer.appendChild(head);
        
        
    });
}

