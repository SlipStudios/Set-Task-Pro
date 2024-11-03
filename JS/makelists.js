const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopupButton = document.getElementById('closePopup');
const submitButton = document.getElementById('submitBtn');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

submitButton.addEventListener('click', () => {
    const title = document.getElementById('titleInput').value;
    const dueDate = document.getElementById('dateInput').value;
    alert(`Title: ${title}\nDue Date: ${dueDate}`);
    popup.style.display = 'none';
    overlay.style.display = 'none';
    setTimeout(1000)
    document.getElementById('titleInput').value = '';
    document.getElementById('dateInput').value = '';
});