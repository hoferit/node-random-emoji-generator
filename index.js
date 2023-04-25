import emoji from 'node-emoji';

const randomEmoji = emoji.random();

const emojiName = process.argv[2];

if (!emojiName) {
  // If the user did not choose an emoji,
  // display a random emoji
  console.log(randomEmoji.emoji);
} else if (emojiName) {
  // If the user did specify an emoji, try
  // to find that emoji
  const foundEmoji = emoji.find(emojiName);

  if (foundEmoji) {
    // If the emoji exists (is valid), print
    // the emoji
    console.log(foundEmoji.emoji);
  } else {
    // If the emoji doesn't exist
    // print error
    console.log('Invalid emoji name');
  }
}
