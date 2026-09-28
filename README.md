# UVic Competitive Programming Club

## About us
The UVic Competitive Programming Club is a group of students who enjoy solving programming problems. We compete annually in the [International Collegiate Programming Contest (ICPC)](https://icpc.global/), and meet weekly to practice and discuss algorithms.

If you would like to compete in programming contests or just want to improve your programming skills, join us! Anyone with basic programming ability is welcome.

## Updating the resource archive

The homepage archive reads its featured resource metadata from
`_data/resources.yml`. Existing Jekyll posts are also included automatically
as session-note cards.

### Add slides and a recording

Run the helper command from the repository root:

```bash
bin/add-resource \
  "Dijkstra's algorithm" \
  2026-10-06 \
  "Shortest paths and priority queues." \
  graphs,practice \
  /assets/resources/2026/dijkstra/slides.html \
  "https://www.youtube.com/watch?v=VIDEO_ID" \
  /dijkstra
```

Arguments are positional and appear in this order:

1. `title` — the meetup or session title.
2. `date` — use `YYYY-MM-DD`.
3. `description` — short text shown on the resource card.
4. `tags` — comma-separated tags, such as `graphs,practice`.
5. `slides` — local asset path or external URL.
6. `video` — YouTube or Vimeo recording URL.
7. `post` — optional URL for an existing session-note page.

Use `-` for an optional value. For example, this adds slides and a recording
without a session-note page:

```bash
bin/add-resource "Dijkstra's algorithm" 2026-10-06 "Shortest paths." graphs,practice /assets/resources/2026/dijkstra/slides.html "https://www.youtube.com/watch?v=VIDEO_ID" -
```

### Store HTML slides

Put HTML slides inside `assets/resources/`. Keeping each meetup in its own
folder lets the HTML file reference local CSS, JavaScript, and images:

```text
assets/resources/2026/dijkstra/
├── slides.html
├── styles.css
└── images/
    └── graph.png
```

Use the site-relative path in the command:

```text
/assets/resources/2026/dijkstra/slides.html
```

The command updates `_data/resources.yml`. After adding a resource, preview
the site locally with:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000` and search for the new session in the
resource archive.

## Website theme

Based on [Jekyll contrast theme](https://github.com/niklasbuschmann/contrast)
