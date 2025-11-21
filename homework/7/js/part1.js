const displayArea = $('#displayArea');
const bold = $('#bold');
const underline = $('#underline');
const italic = $('#italic');
const fontSizeSelect = $('#fontSize');

function applyBG(color) {
  displayArea.css('background-color', color);
}

function applyTextDecoration() {
  let fontWeight = 'normal';
  let textDecoration = '';
  let fontStyle = 'normal';

  if (bold.is(':checked')) {
    fontWeight = 'bold';
  }

  if (underline.is(':checked')) {
    textDecoration = 'underline';
  }

  if (italic.is(':checked')) {
    fontStyle = 'italic';
  }

  displayArea.css('font-weight', fontWeight);
  displayArea.css('text-decoration', textDecoration); // trim to remove trailing space
  displayArea.css('font-style', fontStyle);
} 

function applyFontSize() {
  const selectedFontSize = fontSizeSelect.val();
  displayArea.css('font-size', selectedFontSize);
}
