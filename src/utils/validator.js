export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Please fill in this field."
  if (!re.test(email)) return 'Please enter a valid email address!'
  return ''
}


export function passwordValidator(password) {
  if (!password) return "Please fill in this field."
  if (password.length < 8) return 'Password should contain at least 8 characters.'
  return ''
}
