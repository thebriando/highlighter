# Highlighter

## [Link to published website](https://thebriando.github.io/highlighter/index.html)
  
This application highlights strings based on the objects in the highlights array.

String input used in this example:  *You will deliver new technology with an adorable puppy. Perfect!*

Each object in the array contains a:

- startOffset: Where each highlight should begin

- endOffset: Where each highlight should end

- color: The background color of each highlight

- priority: The priority of each highlight

    - Lower numbers have higher priority

    - If an offset overlaps with another offset, the highlight with the higher priority will appear on top