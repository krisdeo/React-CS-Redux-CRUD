const UserValidation = (value) => {
  console.log('UserValidation >>> ', value);
  const errors = {};

  if(!value.nama || value.nama === "") {
    errors.nama = "Nama Harus Diisi"
  }

  if(!value.umur || value.umur === "") {
    errors.umur = "Umur Harus Diisi"
  }

  if(!value.alamat || value.alamat === "") {
    errors.alamat = "Alamat Harus Diisi"
  }

  if(!value.noHp || value.noHp === "") {
    errors.noHp = "No HP Harus Diisi"
  }

  return errors
};

export default UserValidation;