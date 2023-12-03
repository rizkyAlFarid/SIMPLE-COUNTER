const tombolTambah = document.getElementById('tambah');

tombolTambah.addEventListener('click', tambahAngka);

function tambahAngka() {
  const angka = document.getElementById('angka');
  angka.textContent++
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