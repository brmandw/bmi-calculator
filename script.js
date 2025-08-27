function handleGetFormData() {
  let obj = {
    berat: document.getElementById('beratbadan').value,
    tinggi: document.getElementById('tinggibadan').value
  }
  return obj
}

function bmi (obj){
    t = obj.tinggi / 100
    hasil = obj.berat / t ** 2

    if (hasil < 18.5){
        return [hasil.toFixed(1), "Berat badan kurang"]
    } else if (hasil >= 18.5 && hasil <= 24.9) {
       return [hasil.toFixed(1), "Berat badan normal"]
    } else if (hasil >= 25 && hasil <= 29.9) {
       return [hasil.toFixed(1), "Kelebihan berat badan"]
    } else if (hasil >= 30) {
        return [hasil.toFixed(1), "Obesitas"]
    }
}

function isNumber(string) {
  return !isNaN(string);
}

function validateFormData(obj) {
  return (
    obj.berat !== null &&
    obj.tinggi !== null &&
    obj.berat !== "" &&
    obj.tinggi !== "" &&
    isNumber (obj.berat) &&
    isNumber(obj.tinggi) 
  );
}

function submit(event){ 
  event.preventDefault() // mencegah halaman ke refresh
  const formData = handleGetFormData()
  const hasilbmi = bmi(formData)
  const nomor = document.getElementById('nomor');
  const ket = document.getElementById('ket');

  if (validateFormData(formData)) {
    nomor.textContent = hasilbmi[0]
    ket.textContent = hasilbmi[1]
    if (hasilbmi[0] < 18.5 || hasilbmi[0] >= 25 ) {
      return nomor.style.color="red"
    } else {
      return nomor.style.color="green"
    }
  } else if (!validateFormData(formData)) {
    nomor.textContent = 'Masukkan data dengan benar'
    nomor.style.color="red"
    ket.textContent = null
  } else {
    nomor.textContent = 'Gagal'
  }
}


const form = document.getElementById('form-data')
if (form) {
  form.addEventListener('submit', submit)
}
