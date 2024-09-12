const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied successfully!');
    })
    .catch(err => {
      console.log('Failed to copy text.');
    });
};

export default copyToClipboard;
