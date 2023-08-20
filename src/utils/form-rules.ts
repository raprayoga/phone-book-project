export const formRules = {
  required: {
    value: true,
    message: "Field ini Harus diisi",
  },
  phone: {
    value: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g,
    message: "Nomor Handphone Harus Sesuai Format Number Handphone",
  },
  minLenth: (number: number) => ({
    value: number,
    message: "Minimal Panjang Karakter " + number,
  }),
  manLenth: (number: number) => ({
    value: number,
    message: "Maksimal Panjang Karakter " + number,
  }),
}

export const rulesPhone = {
  pattern: formRules.phone,
  minLength: formRules.minLenth(6),
  maxLength: formRules.manLenth(18),
}
