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
  - Leave any field as "" (or an empty list []) to hide it.
  - Only include students' names or faces if you have permission.
  ============================================================
*/

window.PORTFOLIO = {
  teacher: {
    name: "Benjamin Driscoll",
    role: "Year 5 Classroom Teacher",
    school: "Musgrave Hill State School",
    location: "Southport, Queensland",
    experience: "Teaching at Musgrave Hill State School since 2017",
    subjects: ["All learning areas (generalist)"],
    yearLevels: "Year 5",
    email: "bjdri0@eq.edu.au",
    resume: "",           // e.g. "files/resume.pdf" — leave "" to hide the button
    photo: "",            // e.g. "images/headshot.jpg" — leave "" to show initials
    intro:
      "I teach Year 5 across every learning area — which means I get to connect the dots for my students, from fractions in the morning to the stories they write after lunch. This portfolio shows how I plan, what learning looks like in our classroom, and what my students create.",
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
    {
      slug: "fraction-action",
      title: "Fraction Action",
      subject: "Mathematics",
      year: "Year 5",
      duration: "5 weeks",
      term: "Term 2, 2026",
      bigIdea: "A fraction is a number — and the same amount can be named in many different ways.",
      summary:
        "Students build a deep understanding of fractions and their link to decimals using hands-on materials, then run a class 'pizza shop' to solve real fraction problems.",
      tags: ["Hands-on materials", "Problem solving", "Fractions & decimals"],
      standards: [
        "Compare and order common unit fractions and locate them on a number line",
        "Investigate equivalent fractions",
        "Recognise that the place value system extends to tenths and hundredths"
      ],
      understandings: [
        "The whole matters: one half of a small pizza is not the same as one half of a large one.",
        "Equivalent fractions name the same amount in different ways.",
        "Tenths and hundredths can be written as fractions or decimals."
      ],
      questions: [
        "How can a bigger number on the bottom mean a smaller piece?",
        "Where do we see fractions outside of maths lessons?"
      ],
      intentions: [
        "Represent fractions using models, number lines and symbols",
        "Find and explain equivalent fractions",
        "Convert between fractions and decimals for tenths and hundredths"
      ],
      criteria: [
        "I can show a fraction three different ways",
        "I can place fractions on a number line and explain my thinking",
        "I can prove two fractions are equivalent using a model or a fraction wall"
      ],
      assessments: {
        summative: [
          { title: "Pizza shop problem-solving task", desc: "Students take and fill 'orders' involving equivalent fractions and decimals, recording their reasoning." },
          { title: "End-of-unit check-in", desc: "Short written assessment matched to the pre-test so growth can be compared." }
        ],
        formative: [
          { title: "Pre-test", desc: "Used to form flexible small groups before the unit starts." },
          { title: "Mini whiteboard checks", desc: "Every lesson — 'show me' questions to spot misconceptions in real time." },
          { title: "Exit tickets", desc: "One question each lesson; sorted into 'got it', 'nearly', 'not yet' to plan the next day's groups." }
        ]
      },
      lessons: [
        { week: "Week 1", title: "What is a whole?", focus: "Pre-test; folding paper strips, pattern blocks and sharing problems to explore parts of a whole and parts of a set." },
        { week: "Week 2", title: "Fractions on a number line", focus: "Human number line, fraction walls; comparing and ordering unit fractions." },
        { week: "Week 3", title: "Same amount, different name", focus: "Equivalent fractions with fraction walls and area models; number talks." },
        { week: "Week 4", title: "Tenths and hundredths", focus: "Decimats and money; connecting fractions to decimals on place value charts." },
        { week: "Week 5", title: "The pizza shop", focus: "Problem-solving task, post-test and student reflection on their growth." }
      ],
      differentiation: [
        { group: "Students needing support", strategy: "Concrete materials available throughout, a daily small-group 'pre-teach' session, and fraction walls on desks." },
        { group: "EAL/D learners", strategy: "Visual vocabulary cards (numerator, denominator, equivalent) and sentence frames for explaining reasoning." },
        { group: "Students ready for extension", strategy: "Open-ended 'prove it' problems, including comparing fractions with different denominators." }
      ],
      resources: [
        { label: "Unit planner", url: "" },
        { label: "Pizza shop task cards", url: "" },
        { label: "Pre- and post-test", url: "" }
      ],
      reflection: {
        wentWell: "Starting with paper strips and pattern blocks paid off — students who usually avoid maths were explaining equivalence to their partners by Week 3.",
        change: "Decimals felt rushed in Week 4. Next time I'll give tenths and hundredths a full week each and link them to measurement.",
        impact: "Class average rose from 38% on the pre-test to 79% on the post-test; every student showed growth."
      }
    },

    {
      slug: "worlds-of-our-own",
      title: "Worlds of Our Own: Narrative Writing",
      subject: "English",
      year: "Year 5",
      duration: "6 weeks",
      term: "Term 1, 2026",
      bigIdea: "Great writers read like writers — they borrow techniques from the books they love.",
      summary:
        "Using picture books and novel extracts as mentor texts, students plan, draft, revise and publish an illustrated story for their Foundation reading buddies.",
      tags: ["Mentor texts", "Writing process", "Authentic audience"],
      standards: [
        "Understand how authors develop characters and settings",
        "Plan, draft and publish imaginative texts using a clear structure",
        "Use a range of sentence types and punctuation, including dialogue"
      ],
      understandings: [
        "Stories need a problem that matters to the character.",
        "Showing a character's feelings is more powerful than telling them.",
        "Writers improve their work through revision, not just correction."
      ],
      questions: [
        "What makes a reader want to turn the page?",
        "How do authors make us care about a character?"
      ],
      intentions: [
        "Plan a narrative with an orientation, complication and resolution",
        "Use 'show, don't tell' to describe characters' feelings",
        "Revise a draft using feedback and a checklist"
      ],
      criteria: [
        "My story has a clear beginning, problem and ending",
        "I show how my character feels through actions, dialogue and thoughts",
        "I can point to changes I made after feedback"
      ],
      assessments: {
        summative: [
          { title: "Published illustrated story", desc: "Assessed with a narrative rubric, then read aloud to Foundation buddies." }
        ],
        formative: [
          { title: "Writer's notebook entries", desc: "Short daily writing that practises one technique from the mentor text." },
          { title: "Writing conferences", desc: "One-on-one check-ins each week with a single goal recorded for each student." },
          { title: "Two stars and a wish", desc: "Structured peer feedback on drafts." }
        ]
      },
      lessons: [
        { week: "Week 1", title: "Reading like writers", focus: "Mentor text read-alouds; noticing how authors hook readers; starting writer's notebooks." },
        { week: "Week 2", title: "Characters who feel real", focus: "Character profiles; modelled 'show, don't tell' writing." },
        { week: "Week 3", title: "Setting the scene", focus: "Descriptive language using images and senses; story mapping." },
        { week: "Week 4", title: "Problems and solutions", focus: "Planning story structure; drafting the orientation and complication." },
        { week: "Week 5", title: "Revise, don't just fix", focus: "Peer feedback, conferences, dialogue punctuation mini-lessons." },
        { week: "Week 6", title: "Publish and share", focus: "Publishing and illustrating; author celebration with Foundation buddies." }
      ],
      differentiation: [
        { group: "Students needing support", strategy: "Story planners with picture prompts, shared writing in small groups, and speech-to-text for drafting." },
        { group: "EAL/D learners", strategy: "Word banks of feelings and 'said' alternatives, and oral rehearsal with a partner before writing." },
        { group: "Students ready for extension", strategy: "Experiment with a flashback or a change in narrator." }
      ],
      resources: [
        { label: "Mentor text list", url: "" },
        { label: "Narrative rubric (student version)", url: "" }
      ],
      reflection: {
        wentWell: "Writing for real little readers made a huge difference — students revised far more willingly because they wanted their buddies to enjoy the story.",
        change: "Some stories grew too long to finish. Next time I'll set a page limit and teach 'one problem, one solution' earlier.",
        impact: "Students' rubric scores for character development improved by an average of one full level."
      }
    },

    {
      slug: "survival-stars",
      title: "Survival Stars: Adaptations",
      subject: "Science",
      year: "Year 5",
      duration: "5 weeks",
      term: "Term 3, 2025",
      bigIdea: "Living things have features and behaviours that help them survive in their environment.",
      summary:
        "Students investigate how animals and plants are adapted to their environments, test an adaptation in a fair test, and design a creature built to survive.",
      tags: ["Fair testing", "Inquiry", "Design task"],
      standards: [
        "Living things have structural features and adaptations that help them survive",
        "Plan and conduct a fair test, identifying variables to change and keep the same",
        "Communicate ideas and findings using scientific language and representations"
      ],
      understandings: [
        "Adaptations can be structural (body parts) or behavioural (actions).",
        "An adaptation that helps in one environment might be useless in another.",
        "A fair test changes only one thing at a time."
      ],
      questions: [
        "Why can't a polar bear live in the desert?",
        "How do scientists know their test is fair?"
      ],
      intentions: [
        "Identify structural and behavioural adaptations",
        "Plan and carry out a fair test",
        "Explain how an adaptation helps a living thing survive"
      ],
      criteria: [
        "I can sort adaptations into structural and behavioural and give examples",
        "I can name what I changed, measured and kept the same in my test",
        "My creature design explains how each adaptation helps it survive"
      ],
      assessments: {
        summative: [
          { title: "Design a Survival Star", desc: "Students design a creature for an assigned environment and explain each adaptation using scientific language." }
        ],
        formative: [
          { title: "Science journal", desc: "Predictions, observations and results recorded for each investigation." },
          { title: "Card sort check-in", desc: "Sorting adaptations into categories in pairs, with explanations." }
        ]
      },
      lessons: [
        { week: "Week 1", title: "Amazing adaptations", focus: "Hook with animal video clips; what students know and wonder; defining adaptation." },
        { week: "Week 2", title: "Structural or behavioural?", focus: "Card sorts, case studies of desert and polar animals, plant adaptations in the school garden." },
        { week: "Week 3", title: "The blubber glove test", focus: "Planning and conducting a fair test on insulation; recording and graphing results." },
        { week: "Week 4", title: "Mismatched environments", focus: "What happens when environments change? Discussion and reasoning tasks." },
        { week: "Week 5", title: "Design a Survival Star", focus: "Design task, gallery walk and self-assessment." }
      ],
      differentiation: [
        { group: "Students needing support", strategy: "Fair test planning template with picture cues, and mixed-ability investigation groups with clear roles." },
        { group: "Students ready for extension", strategy: "Research an animal whose adaptations are becoming less useful due to environmental change." }
      ],
      resources: [
        { label: "Fair test planning template", url: "" }
      ],
      reflection: {
        wentWell: "The blubber glove test was the highlight — students could explain insulation and the idea of a fair test in their own words.",
        change: "Group roles need to be clearer; a few students did all the recording. I'll add role cards for each investigation.",
        impact: ""
      }
    },

    {
      slug: "our-place-our-stories",
      title: "Our Place, Our Stories",
      subject: "Humanities",
      year: "Year 5",
      duration: "6 weeks",
      term: "Term 4, 2025",
      bigIdea: "Our local community has a history, and the people who live here are the keepers of its stories.",
      summary:
        "An inquiry into local history that integrates Humanities, English and The Arts. Students interview community members and curate a class museum for families.",
      tags: ["Inquiry learning", "Integrated with The Arts", "Community connection"],
      standards: [
        "Investigate how and why a community has changed over time",
        "Locate and use information from a range of sources, including people",
        "Present findings using a range of communication forms"
      ],
      understandings: [
        "Places change over time, and some things stay the same.",
        "People remember the past differently, depending on their experiences.",
        "Historians ask good questions and check more than one source."
      ],
      questions: [
        "How has our community changed, and why?",
        "Whose stories should be told in our class museum?"
      ],
      intentions: [
        "Ask open questions to find out about the past",
        "Compare old and new sources, such as photos, maps and interviews",
        "Present a museum exhibit that tells a story about change"
      ],
      criteria: [
        "I can write interview questions that get detailed answers",
        "I can describe a change and give a reason for it using evidence",
        "My exhibit teaches visitors something new about our community"
      ],
      assessments: {
        summative: [
          { title: "Class museum exhibit", desc: "Exhibit with a written label, artefact or artwork, and an oral explanation to families." }
        ],
        formative: [
          { title: "Question-writing workshop", desc: "Students practise turning closed questions into open ones." },
          { title: "Then-and-now photo analysis", desc: "Paired analysis with a see–think–wonder routine." }
        ]
      },
      lessons: [
        { week: "Week 1", title: "What's the story here?", focus: "Local walk, mystery artefacts, launching the inquiry question." },
        { week: "Week 2", title: "Then and now", focus: "Comparing old photos and maps; see–think–wonder routine." },
        { week: "Week 3", title: "Asking good questions", focus: "Interview skills, role-play, preparing for community visitors." },
        { week: "Week 4", title: "Community voices", focus: "Interviews with grandparents and local community members; note-taking." },
        { week: "Week 5", title: "Building the museum", focus: "Designing exhibits, writing labels, creating artworks." },
        { week: "Week 6", title: "Museum opening", focus: "Families visit the class museum; student reflections." }
      ],
      differentiation: [
        { group: "Students needing support", strategy: "Interview question bank, recording devices instead of note-taking, and label writing frames." },
        { group: "Students ready for extension", strategy: "Create a digital timeline linking several interviews and sources." }
      ],
      resources: [
        { label: "Family letter and interview guide", url: "" }
      ],
      reflection: {
        wentWell: "Over 40 family members came to the museum opening. Students spoke with real confidence about 'their' part of the community's history.",
        change: "Coordinating visitors took a lot of time. Next year I'll send the family letter home in Week 1 and ask a parent helper to manage bookings.",
        impact: ""
      }
    }
  ],

  /*
    CLASSROOM EVIDENCE
    category: pick one of the categories below, or make your own
    unit: optional — the slug of a related unit, to link to it
  */
  evidence: [
    {
      title: "Fraction walls and number talks",
      category: "Lesson in action",
      date: "May 2026",
      unit: "fraction-action",
      image: "",
      alt: "",
      description: "Students use paper fraction walls to prove whether 2/4 and 3/6 are the same amount, then share strategies in a whole-class number talk.",
      demonstrates: "Moving from concrete to abstract, and building a classroom culture where students explain and justify their thinking."
    },
    {
      title: "Exit tickets to small groups",
      category: "Assessment & feedback",
      date: "May 2026",
      unit: "fraction-action",
      image: "",
      alt: "",
      description: "A sorted pile of exit tickets and the next morning's flexible grouping plan.",
      demonstrates: "Using daily formative data to decide who needs reteaching, who needs practice and who is ready for challenge."
    },
    {
      title: "From first draft to published story",
      category: "Student work",
      date: "March 2026",
      unit: "worlds-of-our-own",
      image: "",
      alt: "",
      description: "A student's planner, first draft with conference notes, and final illustrated book.",
      demonstrates: "Feedback that students act on — the final story shows much stronger character development."
    },
    {
      title: "The blubber glove investigation",
      category: "Lesson in action",
      date: "August 2025",
      unit: "survival-stars",
      image: "",
      alt: "",
      description: "Students test how well different materials insulate against iced water, recording temperatures in their science journals.",
      demonstrates: "Hands-on inquiry and explicit teaching of fair testing."
    },
    {
      title: "Class museum opening",
      category: "Student work",
      date: "November 2025",
      unit: "our-place-our-stories",
      image: "",
      alt: "",
      description: "Students present exhibits about local history to families and community members.",
      demonstrates: "Authentic audiences, community partnerships and student voice."
    },
    {
      title: "Calm corner and class agreement",
      category: "Classroom environment",
      date: "Ongoing",
      unit: "",
      image: "",
      alt: "",
      description: "A student-designed calm corner, a class agreement written together in Week 1, and our visual daily timetable.",
      demonstrates: "Predictable routines and a positive, inclusive environment that supports wellbeing and self-regulation."
    }
  ],

  /*
    PROFESSIONAL GROWTH
    type: e.g. "Qualification", "Professional learning", "Leadership", "Award"
  */
  growth: [
    { year: "2026", title: "Numeracy Team Member", org: "Musgrave Hill State School", type: "Leadership", note: "Help lead whole-school use of concrete materials in Years 3–6." },
    { year: "2025", title: "Structured Literacy Professional Learning", org: "Your Professional Learning Provider", type: "Professional learning", note: "Applied explicit phonics and spelling routines in daily literacy blocks." },
    { year: "2024", title: "Mentor Teacher", org: "Musgrave Hill State School", type: "Leadership", note: "Supervised a pre-service teacher through their final placement." },
    { year: "2017", title: "Classroom Teacher", org: "Musgrave Hill State School", type: "Teaching", note: "" },
    { year: "2016", title: "Bachelor of Education (Primary)", org: "Your University", type: "Qualification", note: "" }
  ]
};
