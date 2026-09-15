# Teaching Portfolio Website

A simple website that shows your unit planning, classroom evidence and professional growth.
There is nothing to install.

## View it

Double-click **index.html** to open it in your browser.

## Edit your content

**All your content is in `content.js`.** Open it in any text editor (Notepad, VS Code), change the text between the quotes, save, and refresh the browser.

| Section | What to edit in `content.js` |
| --- | --- |
| Name, role, school, intro | `teacher` |
| Teaching philosophy | `philosophy` |
| Unit plans (each gets its own page) | `units` |
| Classroom evidence (photos, student work) | `evidence` |
| Qualifications & professional learning | `growth` |

**To add a unit or evidence item:** copy an existing `{ ... },` block, paste it underneath, and change the text. Every unit needs its own `slug`: a short id in lowercase with hyphens, e.g. `"poetry-and-identity"`.

**To add images:** create an `images` folder next to `index.html`, put your photos in it, then set `image: "images/your-photo.jpg"` and describe the photo in `alt`.
Only include students' names or faces if you have permission.

**To link documents** (unit planners, rubrics, your résumé): put the files in a `files` folder, then set `url: "files/rubric.pdf"`. You can also paste a Google Drive or OneDrive share link.

**If the page goes blank after an edit,** a quote or comma is probably missing. Undo your last change, or check the line where you were editing.

## Put it online (free)

- **Netlify Drop:** go to https://app.netlify.com/drop and drag this whole folder onto the page.
- **GitHub Pages:** upload the folder to a GitHub repository, then turn on Pages in the repository's Settings.

## Files

- `index.html`: page structure
- `styles.css`: design (colours, fonts, layout)
- `app.js`: builds the page from your content
- `content.js`: **your content**
