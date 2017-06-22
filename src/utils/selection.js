const getSelectedRange = () => {
  if (window.getSelection) {
    const selected = window.getSelection();
    if (selected.getRangeAt && selected.rangeCount) {
      return selected.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
};

export default getSelectedRange;
