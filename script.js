function addContent() {
    const paragraphText = document.getElementById('paragraphInput').value;
    const imageInput = document.getElementById('imageInput');
    const contentContainer = document.getElementById('contentContainer');

    if (paragraphText.trim() === '' && !imageInput.files[0]) {
        alert('Please write something or choose an image before adding content.');
        return;
    }

    const post = document.createElement('div');
    post.className = 'post';

    if (paragraphText.trim() !== '') {
        const newText = document.createElement('div');
        newText.className = 'text';
        newText.textContent = paragraphText;
        post.appendChild(newText);
        document.getElementById('paragraphInput').value = '';
    }

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImageContainer = document.createElement('div');
            newImageContainer.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Selected Image";
            newImageContainer.appendChild(img);

            post.appendChild(newImageContainer);
        }
        reader.readAsDataURL(imageInput.files[0]);
        imageInput.value = '';
    }

    contentContainer.appendChild(post);
}
