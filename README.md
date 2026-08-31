# CAD Mass Check

A static web tool for CAD modeling challenges. Students open a part, read the
technical drawing, model it in Autodesk Fusion, apply the specified material,
read the mass off the Properties panel, and type it in. The tool checks it
against your answer key within a percent tolerance and gives pass/fail feedback
they can screenshot and turn in.

Nothing is saved and nothing is sent anywhere. It is three files plus a folder
of PDFs.

```
index.html        the whole tool (HTML + CSS + JS, no dependencies)
parts.js          your part list — the only file you edit
drawings/         one PDF per part
```

## Adding a part

1. **Export the drawing.** In Fusion, open the drawing and use
   `Export → PDF`. Save it into `drawings/`. Use a plain filename with no
   spaces, e.g. `plate-01.pdf`.
2. **Get the answer.** Model the part yourself, apply the material, and read
   the mass from `Properties` (ouncemass).
3. **Add the entry.** Open `parts.js` and add a block to the `PARTS` list:

```js
{
  id: "plate-01",                    // unique slug, becomes #part=plate-01
  name: "Base Plate",                // shown to students
  set: "Unit 3 — Extrusions",        // gallery heading, groups parts together
  level: "Intro",                    // optional badge
  drawing: "plate-01.pdf",           // filename inside drawings/
  material: "Aluminum 6061",         // exact material students must apply
  massOz: 12.75,                     // the correct mass in ouncemass
  tolerance: 1.5,                    // optional; overrides the global default
  sheet: "11/8.5",                   // optional; only if this sheet size differs
  note: "Watch the fillet radius."   // optional hint shown by the drawing
}
```

4. **Commit and push.** GitHub Pages picks it up in about a minute.

## Global settings

At the top of `parts.js`:

| Setting | What it does |
| --- | --- |
| `defaultTolerancePct` | Percent window applied to every part unless overridden. Default `1.0`. |
| `sheetAspect` | Aspect ratio of the sheet size you normally export. Default `"17/11"` (ANSI B, Fusion's default landscape sheet). The viewer takes this shape so drawings fill it instead of floating in gray bars. Override per part with `sheet`. |
| `showDirection` | `true` tells a wrong answer whether they're too heavy or too light. Set `false` to only say "not correct". |
| `displayDecimals` | Decimal places used when echoing masses back. Default `3`. |
| `title` / `subtitle` | Header text. |

## Hiding the answer key

By default `massOz` sits in plain text in `parts.js`, which a student can read
with View Source. If that matters, open the page at `#teacher`
(e.g. `https://yourname.github.io/cad-mass-check/#teacher`), type the mass, and
copy the token it produces into `massKey` instead:

```js
massKey: "abc123xyz",   // replaces massOz
```

This is a speed bump, not encryption — the decode function is in the page. It
stops casual snooping, not a determined student.

## Publishing on GitHub Pages

1. Create a repo and push these files to the root of `main`.
2. `Settings → Pages → Source: Deploy from a branch → main / (root)`.
3. Share the resulting URL.

## Notes

- The PDF is embedded with `<object>` and sized to the sheet's aspect ratio.
  Every part page also has **Enlarge** (fills the screen, Esc or Close to exit)
  and **New tab** (opens the raw PDF for zooming or printing). Students working
  alongside Fusion will mostly live in Enlarge.
- **Sheet size affects readability.** A drawing exported on an ANSI B sheet
  renders about 30% smaller in the pane than the same views on a Letter/ANSI A
  sheet. If a drawing looks cramped, exporting it on a smaller sheet is the
  easiest fix — the views get bigger relative to the page.
- The result panel stamps the student's name, the part name, the attempt
  number, and a timestamp, so a screenshot is self-identifying. The name field
  is honor-system — it is typed, not verified.
- Attempt counts and pass state reset when the page is reloaded.
