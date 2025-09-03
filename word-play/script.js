const inputBox = document.getElementById('input-box');
const buttons = document.querySelectorAll('.action-btn');
const result = document.getElementById('result');
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
    inputBox.value = '';
    result.style.display = 'none';
});

inputBox.addEventListener('input', () => {
    result.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;

        if (action !== 'palindrome') {
            result.style.display = 'none';
        }
        if (action === 'reverse') {
            inputBox.value = inputBox.value.split('').reverse().join('');
        } else if (action === 'uppercase') {
            inputBox.value = inputBox.value.toUpperCase();
        } else if (action === 'lowercase') {
            inputBox.value = inputBox.value.toLowerCase();
        } else if (action === 'palindrome') {
            let word = inputBox.value.toLowerCase().replace(/\s/g, '');
            let reversed = word.split('').reverse().join('');
            if (word === reversed) {
                result.textContent = "It's a palindrome!";
            } else {
                result.textContent = "It's not a palindrome.";
            }
            result.style.display = 'block';
        }
    });
});