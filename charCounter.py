from os import walk
from pathlib import Path
import locale
locale.setlocale(locale.LC_ALL, '')  # Use '' for auto, or force e.g. to 'en_US.UTF-8'

from pathlib import Path
result = list(Path("./docs/").rglob("*.[mD][dD]"))
#print('[%s]' % ', '.join(map(str, result)))

totalCharacters = 0
for filePath in result:  
    with open(filePath) as infile:
        words = 0
        characters = 0
        for lineno, line in enumerate(infile, 1):
            wordslist = line.split()
            words += len(wordslist)
            characters += sum(len(word) for word in wordslist)
        totalCharacters += characters

formatedNumber = f'{totalCharacters:n}'
print("Found " + str(formatedNumber) + " characters in all markdown files in the /docs/ directory.")