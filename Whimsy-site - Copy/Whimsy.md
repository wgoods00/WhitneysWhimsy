# Whitney's Whimsy — Personal Music Website

A responsive, single-page musician website with a moody, earthy indie-folk look and a working HTML audio player. It uses plain HTML, CSS, and JavaScript, so you do not need a build tool or a framework.

## Preview it on your computer

1. Unzip the downloaded folder.
2. Open `index.html` in a browser.
3. The page will load, but the playlist will be empty until you add audio files and track entries.

## Add your music

1. Put copies of your MP3 or WAV files inside the `music` folder. Keep your original files somewhere safe.
2. Open `tracks.js` in Notepad (Windows) or TextEdit (Mac).
3. Replace the example comments with entries like this:

```js
window.MUSIC_TRACKS = [
  { title: "Everything Beautiful", artist: "Whitney Goodson", src: "music/Everything_Beautiful.mp3" },
  { title: "Punk to Me", artist: "Whitney Goodson", src: "music/Punk to Me.mp3" },
  { title: "Make my Heart Sing", artist: "Whitney Goodson", src: "music/Make my Heart Sing.mp3" },
  { title: "You Sang Dean Martin", artist: "Whitney Goodson", src: "music/Dean Martin.mp3" },
  { title: "The Teacher", artist: "Whitney Goodson", src: "music/The Teacher.mp3" },
  { title: "Sisterhood", artist: "Whitney Goodson", src: "music/Sisterhood.mp3" },
  { title: "Lessons from my Momma", artist: "Whitney Goodson", src: "music/Lessons from Momma.mp3" },
  { title: "Throughout Time", artist: "Whitney Goodson", src: "music/Throughout Time.mp3" },
  { title: "Harsh Words", artist: "Whitney Goodson", src: "music/Harsh Words.mp3" },
  { title: "Better Understood", artist: "Whitney Goodson", src: "music/Better Understood.mp3" },
  { title: "All of Them", artist: "Whitney Goodson", src: "music/All of Them.mp3" },
  { title: "Lie Collector", artist: "Whitney Goodson", src: "music/Lie Collector.mp3" },
  { title: "We Could Have Done It Better", artist: "Whitney Goodson", src: "music/Better.mp3" },
  { title: "Greetings from my Demons", artist: "Whitney Goodson", src: "music/Demons.mp3" },
  { title: "Mother Said", artist: "Whitney Goodson", src: "music/Mother Said.mp3" },
  { title: "Flowers and Ashes", artist: "Whitney Goodson", src: "music/Flowers and Ashes.mp3" },
  { title: "Flesh on My Bones", artist: "Whitney Goodson", src: "music/Flesh_and_Bone.mp3" },
  { title: "Women Inside Me", artist: "Whitney Goodson", src: "music/Women Inside Me.mp3" },
  { title: "Flowers and Ashes", artist: "Whitney Goodson", src: "music/Flowers and Ashes.mp3" },
  { title: "Things I am", artist: "Whitney Goodson", src: "music/Things I am.mp3" },
  { title: "They Say Farewell", artist: "Whitney Goodson", src: "music/They say Farewell.mp3" }
];
```

4. Change the titles and filenames to match your actual files exactly. File names are case-sensitive on most web hosts. Keep quotation marks and commas as shown.
5. Save `tracks.js`, refresh `index.html`, and test each song. If a song will not play, double-check the filename and path.

**Important:** For a public website, the audio files must be uploaded along with the website. A path on your own computer is not accessible to visitors. The site's player streams the files from the website host; it does not upload them for you.

## Personalize it before publishing

- In `index.html`, change `Whispering Pines` to your chosen artist name if needed.
- Replace `hello@example.com` with the email address you want people to use. Consider using an artist-only email address rather than a personal one.
- Edit the short introduction and sample poem to your own words, or remove them.
- The cover art and forest scene are CSS illustrations/placeholders. You can replace them later with your own square album artwork and a wide landscape image.
- Fonts load from Google Fonts when visitors have internet access; the page has system-font fallbacks.

## Publish it free with Netlify Drop

This is a straightforward beginner option for a static website.

1. Finish testing the site and make sure your `music` folder contains the tracks you want to share.
2. Keep `index.html`, `styles.css`, `script.js`, `tracks.js`, `music/`, and `artwork/` together in the same folder.
3. Visit **https://app.netlify.com/drop** and sign in or create a Netlify account if prompted.
4. Drag the **uncompressed website folder's contents** (or a ZIP if the current page accepts ZIP uploads) into the drop area. If it does not accept a ZIP, use the folder upload/drag-and-drop option in your browser or follow Netlify's current instructions.
5. Netlify will provide a public URL. Open that URL on your phone and another browser to test playback.
6. You can rename the generated site in Netlify's site settings. A custom domain is optional and usually costs extra.

Netlify's interface may change. If the drag-and-drop flow differs, use the current Netlify docs: https://docs.netlify.com/

## Alternative: GitHub Pages

GitHub Pages can host static sites, but the initial setup involves creating a repository and enabling Pages in its settings. Use the official guide: https://docs.github.com/en/pages/getting-started-with-github-pages

## Music rights and privacy checklist

- Only upload music, artwork, lyrics, and samples you own or have permission to share publicly.
- If you used an AI music generator or samples, check the applicable plan terms and licensing before publishing or monetizing the tracks.
- Audio files increase the size of each site deployment and can use bandwidth when listeners stream or download them. Start with a few songs and monitor your host's current limits.
- Anything you publish on a public site can be accessed by visitors. Do not put private demos or personal information in the public folder.
- This starter site has no analytics, mailing list, payment system, or server-side storage.

## Troubleshooting

- **Song title appears but playback fails:** confirm the file is inside `music/` and the path in `tracks.js` exactly matches it.
- **No tracks show up:** check that `tracks.js` is saved and the entries are inside `window.MUSIC_TRACKS = [ ... ];`.
- **Works on your computer but not online:** file names may have different capitalization, or a file may not have been uploaded. Check the published folder structure.
- **Audio is too large:** consider exporting a high-quality compressed MP3 instead of a large WAV for streaming. Keep your lossless originals backed up.
