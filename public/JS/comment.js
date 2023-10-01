const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('input[name="comment-body"]').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value.trim();

    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        };

        document.location.reload();
    }
    };  
    document
        .querySelector('.comment-form')
        .addEventListener('submit', commentFormHandler);
