function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const emojiList = [
  '😍',
  '😍',
  '🧡',
  '🧡',
  '😵‍💫',
  '😵‍💫',
  '😭',
  '😭',
  '😎',
  '😎',
  '😃',
  '😃',
  '😈',
  '😈',
  '👍',
  '👍',
];

let shufEmojiList = shuffleArray(emojiList);

for (let i = 0; i < shufEmojiList.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shufEmojiList[i];

  box.onclick = function () {
    if (!this.classList.contains('boxOpen')) {
      this.classList.add('boxOpen');
      setTimeout(() => {
        this.classList.remove('boxOpen');
      }, 1_500); // Thời gian mở hộp trước khi đóng trở lại (tính bằng mili giây)
    }
  };

  document.querySelector('.game').appendChild(box);
}

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  window.location.reload();
});
