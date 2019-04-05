const string = 'You will deliver new technology with an adorable puppy. Perfect!';
const highlights = [
  {
    startOffset: 4,
    endOffset: 20,
    color: '#d9f593',
    priority: 0
  },
  {
    startOffset: 17,
    endOffset: 31,
    color: '#e8e8e8',
    priority: 1
  },
  {
    startOffset: 37,
    endOffset: 55,
    color: '#add8e6',
    priority: 1
  },
  {
    startOffset: 40,
    endOffset: 48,
    color: '#98FB98',
    priority: 0
  },
  {
    startOffset: 56,
    endOffset: 64,
    color: '#FF7F50',
    priority: 0
  }
];

function highlight() {
  let textToHighlight = document.getElementsByClassName('result');
  for (let i = 0; i < textToHighlight.length; i++) {
    let textContent = textToHighlight[i].textContent;
    // stores each substring based on each startOffset and endOffset
    let array = [];
    for (let k = 0; k < highlights.length; k++) {
      // variables to store start and end points
      let start = highlights[k].startOffset;
      let end = highlights[k].endOffset;
      if (highlights[k + 1] !== undefined) {
        // checks if the current end point is greater than the next start point
        if (end > highlights[k + 1].startOffset) {
          // adjusts the highlight point according to priority
          if (highlights[k].priority < highlights[k + 1].priority) {
            highlights[k + 1].startOffset = end;
          }
        }
      }
      array.push(textContent.slice(start, end));
    }
    for (let j = 0; j < array.length; j++) {
      let span = document.createElement('span');
      span.textContent = array[j];
      span.style.backgroundColor = highlights[j].color;
      textToHighlight[i].innerHTML = textToHighlight[i].innerHTML.replace(span.textContent, span.outerHTML);
    }
  }
}

highlight();
