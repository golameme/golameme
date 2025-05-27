document.querySelector('.btn-copy').addEventListener('click', function () {
    const addressText = document.getElementById('address').textContent;

    // Create a temporary textarea to copy the text
    const tempInput = document.createElement('textarea');
    tempInput.value = addressText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Change button text
    this.innerHTML = 'Copied';
});