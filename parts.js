/* ============================================================
   CAD MASS CHECK — PART LIST
   This is the ONLY file you need to edit to add a new part.
   ============================================================

   TO ADD A PART:
   1. Export your Fusion drawing to PDF. Put it in the drawings/ folder.
   2. Model the part yourself in Fusion, assign the material, and read
      the mass off Properties (ouncemass).
   3. Copy one of the blocks below, paste it into the PARTS list,
      and fill in your values.
   4. Commit and push. That's it.

   FIELDS:
     id        (required) short unique slug. Becomes the link: #part=plate-01
     name      (required) what students see
     set       (required) group heading on the gallery, e.g. "Unit 3"
     drawing   (required) filename inside drawings/
     material  (required) EXACT material name students must apply in Fusion
     massOz    the correct mass in ouncemass. Plain number.
     massKey   OPTIONAL scrambled version of massOz (see #teacher page).
               If massKey is present, massOz is ignored.
     tolerance OPTIONAL percent override for this part. Defaults to
               SETTINGS.defaultTolerancePct below.
     sheet     OPTIONAL sheet aspect ratio if this drawing is not the
               size set in SETTINGS.sheetAspect. Common values:
                 "17/11"    ANSI B  (Fusion's default landscape sheet)
                 "11/8.5"   ANSI A / Letter landscape
                 "22/17"    ANSI C
     level     OPTIONAL badge text, e.g. "Intro" / "Challenge"
     note      OPTIONAL line of guidance shown next to the drawing
*/

var SETTINGS = {
  title: "CAD Mass Check",
  subtitle: "Model the part in Fusion, assign the material, then check your mass.",
  unitLabel: "oz",
  unitLong: "ouncemass",
  defaultTolerancePct: 1.0,

  // Sheet size most of your drawings use. Sets the shape of the viewer
  // so the drawing fills it instead of floating in gray bars.
  sheetAspect: "17/11",

  // true  -> a wrong answer says "too heavy" / "too light"
  // false -> a wrong answer only says "not correct"
  showDirection: true,

  // How many decimal places students should read off Fusion.
  displayDecimals: 3
};

var PARTS = [
  
  {
     id: "block-01",
     name: "Block 1 Challenge",
     set: "Fusion Challenges",
     level: "Intro",
     drawing: "block-01.pdf",
     material: "ABS Plastic",
     massOz: 1.55094
   },

  {
    id: "sample-bracket",
    name: "Sample Bracket",
    set: "Getting Started",
    level: "Intro",
    drawing: "sample-bracket.pdf",
    material: "Aluminum 6061",
    massOz: 2.188,
    sheet: "11/8.5",
    note: "Demo part shipped with the tool. Delete it once you add your own."
  }

];
