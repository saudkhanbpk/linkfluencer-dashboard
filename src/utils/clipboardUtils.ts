import { toast } from "react-toastify";

const copyToClipboard = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Link copied successfully!');
    } catch (err) {
      toast.error('Failed to copy text: ');
    }
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; 
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success('Link copied successfully!');
      } else {
        toast.error('Failed to copy link.');
      }
    } catch (err) {
      toast.error('Failed to copy text: ');
    }
    document.body.removeChild(textArea);
  }
};

export default copyToClipboard;