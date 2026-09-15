# Teaching Portfolio Website

The teaching portfolio of Benjamin Driscoll: classroom practice, student work and career history.

- Live site: https://beno81.github.io/teaching-portfolio/
- Also on Vercel: https://benjamin-driscoll-teaching.vercel.app

There is nothing to install. To preview it on your computer, double-click **index.html**.

## Edit your content

Almost everything on the site comes from **`content.js`**. Open it in any text editor (Notepad, VS Code), change the text between the quotes, save, and refresh the browser.

| Section | What to edit in `content.js` |
| --- | --- |
| Name, role, school, intro, photo | `teacher` |
| Teaching philosophy | `philosophy` |
| Unit plans (each gets its own page) | `units` |
| Classroom evidence (student work) | `evidence` |
| Career and qualifications | `growth` |

**Empty sections are hidden.** A list set to `[]` hides that section and its menu link. The unit plans list is empty for now, so that section doesn't show. There's a blank unit template inside `content.js` to copy when you add one.

**Adding evidence:** copy an existing `{ ... },` block in `evidence`, paste it underneath and change the text.

**Student books** are shown as page images, one folder per book in `images/books/`, with pages named `p01.jpg`, `p02.jpg` … and a small `cover-sm.jpg`. The text of each page, for screen readers, is in **`book-text.js`**. If you add or change a book, update both.

**If you change your name, role or school,** also update the preview tags near the top of `index.html`. LinkedIn and email use them when your link is shared.

**If the page goes blank after an edit,** a quote or comma is probably missing. Undo your last change, or check the line where you were editing.

## Privacy

- Only publish student work you have permission to share, and remove names first.
- Keep original files with student names (for example the book PDFs) out of this folder.
- Everything in this folder is public once it's pushed to GitHub, including this file.

## Publishing changes

Pushing to the `main` branch on GitHub updates both the GitHub Pages site and the Vercel site automatically, usually within a minute or two. Press **Ctrl + F5** if you still see the old version.

## Files

- `content.js`: **your content**
- `book-text.js`: text versions of the student books
- `index.html`: page structure and link-preview details
- `styles.css`: design (colours, fonts, layout)
- `app.js`: builds the page from your content
- `images/`: headshot and book pages
- `favicon.svg`, `favicon.ico`: browser tab icon
