const tombolTambah = document.getElementById('tambah');

tombolTambah.addEventListener('click', tambahAngka);

function tambahAngka() {
  const angkaElement = document.getElementById('angka');
  let currentAngka = parseInt(angkaElement.textContent);

  angkaElement.textContent = currentAngka + 1;

  if ((currentAngka + 1) % 50 === 0) {
    alert('Angka sekarang adalah kelipatan 50!');
  }
}


const tombolKurang = document.getElementById('kurang');
tombolKurang.addEventListener('click', kurangiAngka);

function kurangiAngka () {
  let angka = document.getElementById('angka');
  if(angka.textContent == 0) {
    alert('Angka kosong tidak bisa di kurangi');
  } else {
    angka.textContent--;
  }
}

const tombolReset = document.getElementById('reset');
tombolReset.addEventListener('click', resetAngka);

function resetAngka () {
  const angka = document.getElementById('angka');
  if(angka.textContent == 0) {
    alert('Angka masih 0')
  } else {
    angka.textContent = 0;
  }
}