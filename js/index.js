// inputs
const string =
  'You will deliver new technology with an adorable puppy. Perfect!';
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

// sets text using the string const
function setText() {
  let plainText = $('.highlight');
  plainText.text('You will deliver new technology with an adorable puppy. Perfect!');
  let textToHighlight = $('.result');
  textToHighlight.text(plainText.text());
}

function highlight() {
  // sets values to string constant
  let textToHighlight = $('.result');
  let textContent = textToHighlight.text();
  // stores each substring based on each startOffset and endOffset
  let array = [];
  for (let i = 0; i < highlights.length; i++) {
    // variables to store start and end points
    let start = highlights[i].startOffset;
    let end = highlights[i].endOffset;
    if (highlights[i + 1] !== undefined) {
      // checks if the current end point is greater than the next start point
      if (end > highlights[i + 1].startOffset) {
        // adjusts the highlight point according to priority
        if (highlights[i].priority < highlights[i + 1].priority) {
          highlights[i + 1].startOffset = end;
        }
      }
    }
    // pushes substring from start point to end point
    array.push(textContent.slice(start, end));
  }
  for (let j = 0; j < array.length; j++) {
    // creates span for highlights
    let span = document.createElement('span');
    span.textContent = array[j];
    span.style.backgroundColor = highlights[j].color;
    let newText = textToHighlight.html();
    textToHighlight.html(newText.replace(span.textContent, span.outerHTML));
  }
}

setText();

// highlights after button is pressed
$('button').click(() => highlight());
// jQuery command that disables button after button is pressed
$('button').click(() => $('button').prop('disabled', true));