// Hàm này trộn một mảng
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Tạo một chỉ số ngẫu nhiên j từ 0 đến i bao gồm i
    const j = Math.floor(Math.random() * (i + 1));
    // Hoán đổi vị trí của các phần tử tại i và j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Trả về mảng đã được trộn
}

// Danh sách các emoji
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

// Trộn danh sách emoji và lưu vào shufEmojiList
let shufEmojiList = shuffleArray(emojiList);

// Mảng lưu trạng thái các ô đã mở
let openedBoxes = [];

// Hàm kiểm tra nếu người chơi đã thắng
function checkWin() {
  const matchedBoxes = document.querySelectorAll('.boxMatch');
  // Nếu số lượng ô đã ghép đôi bằng với tổng số cặp emoji
  if (matchedBoxes.length === emojiList.length) {
    alert('Bạn đã thắng!');
  }
}

// Tạo các ô chứa emoji cho trò chơi
for (let i = 0; i < shufEmojiList.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shufEmojiList[i];

  // Sự kiện khi người chơi nhấp vào ô
  box.onclick = function () {
    if (!this.classList.contains('boxOpen') && openedBoxes.length < 2) {
      this.classList.add('boxOpen'); // Đánh dấu ô là đã mở
      openedBoxes.push(this); // Thêm ô vào mảng các ô đã mở

      if (openedBoxes.length === 2) {
        if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
          // Nếu hai ô có cùng nội dung (emoji) mở, đánh dấu chúng là ghép đôi
          openedBoxes[0].classList.add('boxMatch');
          openedBoxes[1].classList.add('boxMatch');

          checkWin(); // Kiểm tra xem người chơi đã thắng chưa

          openedBoxes = []; // Đặt lại mảng ô đã mở
        } else {
          // Nếu không khớp, đóng các ô sau 500ms
          setTimeout(() => {
            openedBoxes.forEach(box => box.classList.remove('boxOpen'));
            openedBoxes = []; // Đặt lại mảng ô đã mở
          }, 500);
        }
      }
    }
  };

  // Thêm ô vào trò chơi
  document.querySelector('.game').appendChild(box);
}

// Nút reset để tải lại trò chơi
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  window.location.reload();
});
