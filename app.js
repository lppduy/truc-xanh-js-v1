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

let openedBoxes = [];

function checkWin() {
  const matchedBoxes = document.querySelectorAll('.boxMatch');
  if (matchedBoxes.length === emojiList.length) {
    alert('You won!');
  }
}

for (let i = 0; i < shufEmojiList.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shufEmojiList[i];

  box.onclick = function () {
    if (!this.classList.contains('boxOpen') && openedBoxes.length < 2) {
      this.classList.add('boxOpen');
      openedBoxes.push(this);

      if (openedBoxes.length === 2) {
        if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
          openedBoxes[0].classList.add('boxMatch');
          openedBoxes[1].classList.add('boxMatch');

          checkWin();

          openedBoxes = [];
        } else {
          setTimeout(() => {
            openedBoxes.forEach(box => box.classList.remove('boxOpen'));
            openedBoxes = [];
          }, 500);
        }
      }
    }
  };

  document.querySelector('.game').appendChild(box);
}

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  window.location.reload();
});
