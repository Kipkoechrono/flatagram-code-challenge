//my code is here

   // Function to make a GET request to fetch image data and comments
    function fetchImageData() {
      fetch("http://localhost:3000/images/1")
        .then(response => response.json())
        .then(data => {
          // Populate the image title
          document.getElementById("card-title").textContent = data.title;

          // Populate the image source
          document.getElementById("card-image").src = data.image;

          // Populate the like count
          document.getElementById("like-count").textContent = ${data.likes} likes;

          // Populate comments
          /*const commentsList = document.getElementById("comments-list");
          commentsList.innerHTML = ""; // Clear existing comments
          data.comments.forEach(comment => {
            const li = document.createElement("li");
            li.textContent = comment.content;
            commentsList.appendChild(li);
          });*/
        })
        .catch(error => console.error("Error fetching image data:", error));
    }

    // Function to fetch comments from the server and populate the comments section
    function fetchComments() {
        fetch("http://localhost:3000/comments")
          .then(response => response.json())
          .then(comments => {
            const commentsList = document.getElementById("comments-list");
            commentsList.innerHTML = ""; 
            comments.forEach(comment => {
              const li = document.createElement("li");
              li.textContent = comment.content;
              commentsList.appendChild(li);
            });
          })
          .catch(error => console.error("Error fetching comments:", error));
      }

      // Fetch comments when the page loads
      fetchComments();

    // Fetch image data when the page loads
    fetchImageData();

    // Event listener for the like button
    document.getElementById("like-button").addEventListener("click", function() {
      const likeCountElement = document.getElementById("like-count");
      const currentLikes = parseInt(likeCountElement.textContent);
      likeCountElement.textContent = ${currentLikes + 1} likes;
    });

    // Event listener for the comment form submission
    document.getElementById("comment-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      const commentInput = document.getElementById("comment");
      const commentContent = commentInput.value.trim();
      if (commentContent !== "") {
        const commentsList = document.getElementById("comments-list");
        const li = document.createElement("li");
        li.textContent = commentContent;
        commentsList.appendChild(li);
        commentInput.value = ""; // Clear the input field
      }
    });
  });