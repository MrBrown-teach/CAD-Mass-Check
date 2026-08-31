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
     massKey   OPTIONAL scrambled version of massOz (see teacher panel).
               If massKey is present, massOz is ignored. Use this if you
               don't want the answer readable in view-source.
     tolerance OPTIONAL percent override for this part. Defaults to
               SETTINGS.defaultTolerancePct below.
     level     OPTIONAL badge text, e.g. "Intro" / "Challenge"
     note      OPTIONAL line of guidance shown next to the drawing
*/

var SETTINGS = {
  title: "CAD Mass Check",
  subtitle: "Model the part in Fusion, assign the material, then check your mass.",
  unitLabel: "oz",
  unitLong: "ouncemass",
  defaultTolerancePct: 1.0,

  // true  -> a wrong answer says "too heavy" / "too light"
  // false -> a wrong answer only says "not correct"
  showDirection: true,

  // How many decimal places students should read off Fusion.
  displayDecimals: 3
};

var PARTS = [

  {
    id: "sample-bracket",
    name: "Sample Bracket",
    set: "Getting Started",
    level: "Intro",
    drawing: "sample-bracket.pdf",
    material: "Aluminum 6061",
    massOz: 2.188,
    note: "Demo part shipped with the tool. Delete it once you add your own."
  }

  // ,{
  //   id: "plate-01",
  //   name: "Base Plate",
  //   set: "Unit 3 — Extrusions",
  //   level: "Intro",
  //   drawing: "plate-01.pdf",
  //   material: "Steel, Mild",
  //   massOz: 12.75,
  //   tolerance: 2.0
  // }

];
