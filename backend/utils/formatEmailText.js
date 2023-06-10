export default function formatEmailText(formData) {
  let emailText = "";

  for (const key in formData) {
    emailText += `${key}:\n${formData[key]}\n\n`;
  }

  return emailText;
}
