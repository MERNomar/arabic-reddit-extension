function logger(text: string) {
  console.log(`Arabic Reddit: ${text}`);
}

function addStyle(styleString: string) {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
}

function addFont(fontName: string) {
  // search if font is already added
  const fonts = document.querySelectorAll("style");
  for (const font of fonts) {
    if (font.textContent?.includes(fontName)) {
      return;
    }
  }

  logger(`addFont: ${fontName}`);
  addStyle(`
    @import url('https://fonts.googleapis.com/css2?family=${fontName
      .split(" ")
      .join("+")}&display=swap');
      p,a,h1 shreddit-comment > div {
          overflow:hidden;
          opacity: 80%;
      }
      * {
          font-family: ${fontName}, sans-serif !important;
      }
      `);
}
function fixDir() {
  logger(`fixing dir`);

  // fix direction in css
  addStyle(`
  p, h1 {
    unicode-bidi: plaintext;
    text-align: start;
  }`);
}

function fixArabic() {
  addFont("Noto Sans Arabic");
  fixDir();
}

fixArabic();
