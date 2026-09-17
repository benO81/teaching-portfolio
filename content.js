/*
  ============================================================
  YOUR PORTFOLIO CONTENT
  ============================================================
  Everything on the website comes from this file.
  Edit the text between the quotes, save, and refresh the page.

  Tips
  - Keep the quotes and commas. Each item in a list ends with a comma.
  - To add a unit or a piece of evidence, copy an existing block
    { ... }, paste it below, and change the text.
  - Images: put the file in the "images" folder and write its path,
    e.g.  image: "images/fraction-wall.jpg"
    Leave image: "" and a text tile is shown instead.
  - Leave any field as "" to hide it. Set a list to [] (e.g. evidence: [])
    to hide that whole section and its menu link.
  - If you change your name, role or school, also update the preview
    tags near the top of index.html (used by LinkedIn and email previews).
  - Only include students' names or faces if you have permission.
  ============================================================
*/

window.PORTFOLIO = {
  teacher: {
    name: "Benjamin Driscoll",
    role: "Senior Teacher · Year 5",
    school: "Musgrave Hill State School",
    location: "Southport, Queensland",
    experience: "Teaching since 2012 · at Musgrave Hill State School since 2017",
    subjects: ["All learning areas (generalist)"],
    yearLevels: "Year 5",
    email: "bjdri0@eq.edu.au",
    resume: "",           // e.g. "files/resume.pdf" — leave "" to hide the button
    photo: "images/headshot.jpg",  // leave "" to show initials instead
    intro:
      "I teach Year 5 across every learning area — which means I get to connect the dots for my students, from fractions in the morning to the stories they write after lunch. This portfolio shows what learning looks like in our classroom and what my students create.",
    updated: "September 2026"
  },

  philosophy: {
    statement:
      "Every child in my room should feel safe enough to have a go, and challenged enough that having a go matters. I teach clearly, check often, and make sure every student can see their own progress.",
    principles: [
      {
        title: "Teach it clearly, then let them fly",
        text: "New skills start with explicit modelling — I do, we do, you do — so students have the tools to explore, question and create on their own."
      },
      {
        title: "Concrete before abstract",
        text: "Ten-year-olds learn by doing. Hands-on materials and pictures come before symbols, in maths and well beyond it."
      },
      {
        title: "Check for understanding, every lesson",
        text: "Mini whiteboards, exit tickets and conferences tell me who needs another go tomorrow — before a gap becomes a gap."
      },
      {
        title: "Belonging comes first",
        text: "Predictable routines, class meetings and strong partnerships with families build the safety children need to take risks with their learning."
      }
    ]
  },

  /*
    UNIT PLANS
    slug: a short, unique web-friendly id (lowercase, hyphens, no spaces)
  */
  units: [
    // Your unit plans go here. Each one gets a card and its own full plan page.
    // The Unit Plans section (and its menu link) stays hidden while this list is empty.
    // To add a unit: copy the template below, remove the // from the start of each
    // line, and fill it in. Leave anything you don't need as "" or [].
    //
    // {
    //   slug: "wild-robot-narratives",   // short id: lowercase letters and hyphens
    //   title: "",
    //   subject: "English",
    //   year: "Year 5",
    //   duration: "",                   // e.g. "6 weeks"
    //   term: "",                       // e.g. "Term 3, 2026"
    //   bigIdea: "",
    //   summary: "",
    //   tags: [],
    //   standards: [],
    //   understandings: [],
    //   questions: [],
    //   intentions: [],
    //   criteria: [],
    //   assessments: { summative: [{ title: "", desc: "" }], formative: [{ title: "", desc: "" }] },
    //   lessons: [{ week: "Week 1", title: "", focus: "" }],
    //   differentiation: [{ group: "", strategy: "" }],
    //   resources: [{ label: "", url: "" }],
    //   reflection: { wentWell: "", change: "", impact: "" }
    // }
  ],

  /*
    CLASSROOM EVIDENCE
    category: pick one of the categories below, or make your own
    unit: optional — the slug of a related unit, to link to it
    book: optional — a folder of page images named p01.jpg, p02.jpg … plus a
          small cover-sm.jpg, and how many pages there are. The card shows the
          cover and the pop-up shows every page.
    gallery: optional — a list of { src, title, alt } images, all shown in the
          pop-up. Use image for the card picture.
  */
  evidence: [
    {
      title: "The Fire Disaster",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Fire Disaster, with the author's name blurred",
      book: { folder: "images/books/the-fire-disaster", pages: 12 },
      description: "A student's illustrated story continuing The Wild Robot. Roz survives a shipwreck, raises the gosling Brightbill, and returns to save the island from fire-breathing dragons.",
      demonstrates: "A clear narrative structure with a complication and resolution, using onomatopoeia and dialogue to build tension."
    },
    {
      title: "The Cyborg Factory",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Cyborg Factory, with the author's name blurred",
      book: { folder: "images/books/the-cyborg-factory", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. Roz is captured and taken to a robot factory, escapes a giant cyborg, and is rescued by a flock of geese.",
      demonstrates: "Ambitious vocabulary, similes and direct address to the reader to draw the audience in."
    },
    {
      title: "The Last Alien",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Last Alien, with the author's name blurred",
      book: { folder: "images/books/the-last-alien", pages: 14 },
      description: "A student's illustrated story continuing The Wild Robot. Roz meets Kat, an alien seeking revenge, and has to find a way to make peace before she can reunite with Brightbill.",
      demonstrates: "A developed antagonist with a clear motive, extended dialogue, and a resolution built on an apology rather than a fight."
    },
    {
      title: "The Lost Sewer",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Lost Sewer, with the author's name blurred",
      book: { folder: "images/books/the-lost-sewer", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. After a plane crash in the jungle, Roz defeats a sewer monster and finds a glowing portal that takes her home.",
      demonstrates: "A well-sequenced story that uses time connectives and sound words to move the plot along."
    },
    {
      title: "The Great Molten Escape",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Great Molten Escape, with the author's name blurred",
      book: { folder: "images/books/the-great-molten-escape", pages: 17 },
      description: "A student's illustrated story continuing The Wild Robot. Roz escapes a robot foundry, flies home, and faces a magma monster to save Brightbill.",
      demonstrates: "Suspense sustained across a long plot, using the character's inner thoughts, onomatopoeia and direct address to the reader."
    },
    {
      title: "The Way Home",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Way Home, with the author's name blurred",
      book: { folder: "images/books/the-way-home", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. Roz and Brightbill escape a science lab, are hunted by a mechanical fire dragon, and fight their way back to the island.",
      demonstrates: "Suspense built through changing settings, dialogue that shows the bond between the characters, and a reflective ending."
    },
    {
      title: "The Elemental Magic",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Elemental Magic, with the author's name blurred",
      book: { folder: "images/books/the-elemental-magic", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. Roz travels to an elemental island to find Fink the fox's missing father, outwitting water and lava dragons and a RECO along the way.",
      demonstrates: "Problem-solving woven into the plot, a flashback, and direct address to the reader."
    },
    {
      title: "The Acid Land",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The Acid Land, with the author's name blurred",
      book: { folder: "images/books/the-acid-land", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. Roz and Brightbill fight acid monsters with magical water, and Roz is broken and rebuilt before the island celebrates.",
      demonstrates: "Similes and sound words to create vivid images, and a plot that moves across a long stretch of time."
    },
    {
      title: "The RECOs Return",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "",
      alt: "Cover of the student picture book The RECOs Return, with the author's name blurred",
      book: { folder: "images/books/the-recos-return", pages: 10 },
      description: "A student's illustrated story continuing The Wild Robot. Roz escapes a RECO lab, battles a giant upgraded RECO, and is repaired by her friends on the island.",
      demonstrates: "A clear sequence of events building to a battle, with a cliffhanger ending."
    },
    {
      title: "Procedures",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "images/procedures/cover-sm.jpg",
      alt: "",
      gallery: [
        { src: "images/procedures/verdigrath.jpg", title: "How to Train a Verdigrath", alt: "A green fire-breathing dragon. Eight steps, from finding a safe location to a brighter tomorrow, with a materials list and a Remember panel." },
        { src: "images/procedures/lumindrake.jpg", title: "How to Train a Lumindrake", alt: "A glowing crystal dragon. Eight steps, from finding a high place to a brighter tomorrow, with a materials list and a Remember panel." },
        { src: "images/procedures/emberhorn.jpg", title: "How to Train an Emberhorn", alt: "A volcanic dragon. Nine steps, from finding a volcanic den to knowing it is trained, with a materials list and training tips." },
        { src: "images/procedures/skybloom-blossom.jpg", title: "How to Train a Skybloom (pink)", alt: "A gentle pink dragon. Nine steps, from finding a peaceful place to a lifelong friend, with a materials list and a Remember panel." },
        { src: "images/procedures/glacialis.jpg", title: "How to Train a Glacialis", alt: "An ice dragon. Nine steps, from choosing a safe environment to a lifelong partner, with a materials list." },
        { src: "images/procedures/pyroclaw.jpg", title: "How to Train a Pyroclaw", alt: "A lava dragon. Nine steps, from finding a safe location to a lifelong bond, with a materials list and a Remember panel." },
        { src: "images/procedures/shadowfang.jpg", title: "How to Train a Shadowfang", alt: "A fierce black dragon. Nine steps, from finding a suitable territory to a lifelong ally, with a materials list and a Remember panel." },
        { src: "images/procedures/skybloom-rainbow.jpg", title: "How to Train a Skybloom (rainbow)", alt: "A rainbow-feathered dragon. Eight steps, from finding a safe place to a lifelong friend, with a materials list and a Remember panel." },
        { src: "images/procedures/slimescale.jpg", title: "How to Train a Slimescale", alt: "A swamp dragon. Eight steps, from finding a suitable habitat to a lifelong friend, with a materials list and a Remember panel." },
        { src: "images/procedures/prism-wyrm.jpg", title: "How to Train a Prism Wyrm", alt: "A fragile crystal dragon. Eight steps, from finding a safe space to a brighter tomorrow, with a materials list and a Remember panel." },
        { src: "images/procedures/titandrake.jpg", title: "How to Train a Titandrake", alt: "An armoured metal dragon. Eight steps, from finding a suitable home to exploring a brighter tomorrow, with a materials list and a Remember panel." },
        { src: "images/procedures/stormwing.jpg", title: "How to Train a Stormwing", alt: "A lightning dragon. Eight steps, from finding a storm zone to a lifelong partner, with a materials list and a Remember panel." },
        { src: "images/procedures/diamondblaze.jpg", title: "How to Train a Diamondblaze", alt: "A sparkling diamond dragon. Eight steps, from finding a suitable home to a lifelong partner, with a materials list and a Remember panel." }
      ],
      description: "Illustrated step-by-step guides explaining how to train an imaginary dragon, each with a materials list and numbered steps.",
      demonstrates: "The structure and language of procedural texts: a clear goal, a materials list, numbered steps in order, and imperative verbs such as choose, offer and practise."
    },
    {
      title: "Advertisements",
      category: "Student work",
      date: "September 2026",
      unit: "",
      image: "images/advertisements/cover-sm.jpg",
      alt: "",
      gallery: [
        { src: "images/advertisements/stormfang-poster.jpg", title: "Stormfang poster", alt: "Poster for Stormfang, a black storm dragon, with the slogan Sky's no limit, a list of features and the call to action Choose Stormfang today!" },
        { src: "images/advertisements/stormfang-billboard.jpg", title: "Stormfang billboard", alt: "Billboard for Stormfang, the ultimate dragon for fearless trainers, listing its speed, strength, firepower and loyalty." },
        { src: "images/advertisements/lumi.jpg", title: "Lumi billboard", alt: "Billboard for Lumi, a pink rainbow dragon, the colour of adventure, with a special offer and the call to action Adopt Lumi today!" },
        { src: "images/advertisements/aurora.jpg", title: "Aurora billboard", alt: "Billboard for Aurora, a pink rainbow dragon, with four features, a special offer and the call to action Adopt Aurora today!" },
        { src: "images/advertisements/frostwing.jpg", title: "Frostwing billboard", alt: "Billboard for Frostwing, an ice dragon built for bold trainers, with four features and the call to action Adopt Frostwing today!" },
        { src: "images/advertisements/boulder.jpg", title: "Boulder billboard", alt: "Billboard for Boulder, a rock dragon, with the slogan The ground has a friend, four features and the call to action Adopt Boulder today!" },
        { src: "images/advertisements/verdant.jpg", title: "Verdant billboard", alt: "Billboard for Verdant, a leafy nature dragon, with four features and the call to action Adopt Verdant today!" },
        { src: "images/advertisements/volt.jpg", title: "Volt billboard", alt: "Billboard for Volt, a lightning dragon, with the slogan Power your next big idea, a special offer and the call to action Team up with Volt today!" }
      ],
      description: "Billboards and posters persuading readers to choose or adopt an imaginary dragon.",
      demonstrates: "Persuasive techniques: catchy slogans, lists of features and benefits, special offers, and a clear call to action."
    }
  ],

  /*
    PROFESSIONAL GROWTH
    type: e.g. "Qualification", "Professional learning", "Leadership", "Award"
  */
  growth: [
    { year: "2023", title: "Senior Teacher", org: "Queensland Department of Education · 2023–present", type: "Teaching", note: "" },
    { year: "2019", title: "Master of Education in Digital Learning", org: "Monash University · 2017–2019", type: "Qualification", note: "" },
    { year: "2017", title: "Primary Teacher", org: "Musgrave Hill State School, Gold Coast · 2017–present", type: "Teaching", note: "" },
    { year: "2015", title: "Primary Teacher", org: "Queensland Department of Education · 2015–present", type: "Teaching", note: "Including teaching in remote Indigenous communities." },
    { year: "2014", title: "Graduate Diploma of Education", org: "Griffith University", type: "Qualification", note: "" },
    { year: "2012", title: "Oral English Teacher", org: "Liaoning University, Shenyang, China · 2012–2013", type: "Teaching", note: "" },
    { year: "2011", title: "Bachelor's Degree, Multimedia", org: "Griffith University · 2005–2011", type: "Qualification", note: "Including study at the University of Oulu, Finland (2011)." },
    { year: "2004", title: "Diploma of Multimedia", org: "TAFE Queensland Brisbane · 2003–2004", type: "Qualification", note: "" }
  ]
};
