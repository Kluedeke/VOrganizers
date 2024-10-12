export function validateMailAddress (mail: string) {
  const mailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return mailPattern.test(mail)


}
