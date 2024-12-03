const remainingCourses = [
    {
      category: "Major Coursework - 30 Credit Hours",
      courses: [
        { name: "CSCE 121: Introduction to Program Design", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 181: Introduction to Computing", creditHours: 1, done: false, term: "", notes: "" },
        { name: "CSCE 221: Data Structures and Algorithms", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 222: Discrete Structures for Computing", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 312: Computer Organization", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 313: Introduction to Computer Systems", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 314: Programming Languages", creditHours: 3, done: false, term: "", notes: "" },
        { name: "CSCE 315: Programming Studio", creditHours: 4, done: false, term: "", notes: "" },
        { name: "CSCE 411/629: Design and Analysis of Algorithms", creditHours: 3, done: false, term: "", notes: "" },
        { name: "CSCE 481: Seminar", creditHours: 1, done: false, term: "", notes: "" },
        { name: "CSCE 482: Senior Capstone Design", creditHours: 3, done: false, term: "", notes: "" },
      ],
    },
    {
      category: "Supporting Coursework - 41 Credit Hours",
      courses: [
        { name: "ENGR 102: Engineering Lab I - Computation", creditHours: 3, done: false, term: "", notes: "" },
        { name: "ENGR/PHYS 216: Experimental Physics and Engineering Lab II", creditHours: 3, done: false, term: "", notes: "" },
        { name: "STAT 211: Principles of Statistics I", creditHours: 3, done: false, term: "", notes: "" },
        { name: "MATH 304: Linear Algebra", creditHours: 3, done: false, term: "", notes: "" },
        { name: "Emphasis Area I", creditHours: 4, done: false, term: "", notes: "" },
        { name: "Emphasis Area II", creditHours: 4, done: false, term: "", notes: "" },
        { name: "Emphasis Area III", creditHours: 4, done: false, term: "", notes: "" },
        { name: "Emphasis Area IV", creditHours: 4, done: false, term: "", notes: "" },
        {
          name: "System Elective",
          creditHours: 4,
          options: [
            "CSCE 410 (prereq: 313; 315 or 331) - Operating Systems",
            "CSCE 412 (prereq: 315 or 331) - Cloud Computing",
            "CSCE 456 (prereq: 313, MATH 152) - Real-Time Computing",
            "CSCE 462 (prereq: 313) - Microcomputer Systems",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Software Elective",
          creditHours: 4,
          options: [
            "CSCE 431/606 (prereq: 315 or 331) - Software Engineering",
            "CSCE 435 (prereq: 315 or 331) - Parallel Computing",
            "CSCE 438 (prereq: 315 or 331) - Distributed Objects Programming",
            "CSCE 451 (prereq: 313) - Software Reverse Engineering",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Information/Intelligence Elective",
          creditHours: 3,
          options: [
            "CSCE 420/625 (prereq: 411) - Artificial Intelligence",
            "CSCE 421 (prereq: MATH 304, STAT 211, CSCE 221) - Machine Learning",
            "CSCE 436 (coreq: 315 or 331) - Computer-Human Interaction",
            "CSCE 447 (prereq: C or better in 221 or 441) - Data Visualization",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Tracked Elective I",
          creditHours: 3,
          options: [
            "CSCE 433 (prereq: 315 or 331) - Formal Languages and Automata",
            "CSCE 444 (prereq: 315 or 331) - Structures of Interactive Information",
            "CSCE 470 (prereq: 315 or 331) - Information Storage and Retrieval",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Tracked Elective II",
          creditHours: 3,
          options: [
            "CSCE 469 (prereq: 350) - Advanced Computer Architecture",
            "CSCE 445 (prereq: 221) - Computers and New Media",
            "CSCE 449 (prereq: 221) - Applied Cryptography",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Untracked Elective",
          creditHours: 3,
          options: [
            "CSCE 402 - Law & Policy in Cybersecurity",
            "CSCE 477 (prereq: CSCE/CYBR 201) - Cybersecurity Risk",
          ],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
    {
      category: "Life and Physical Sciences - 14 Credit Hours",
      courses: [
        { name: "CHEM 107/117: General Chemistry for Engineering Students", creditHours: 4, done: false, term: "", notes: "" },
        { name: "PHYS 206: Newtonian Mechanics for Engineering and Science", creditHours: 3, done: false, term: "", notes: "" },
        {
          name: "Science Elective I",
          creditHours: 3,
          options: ["BIOL 101", "CHEM 101", "PHYS 201", "GEOL 101"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "Science Elective II",
          creditHours: 3,
          options: ["BIOL 102", "CHEM 102", "PHYS 202", "GEOL 102"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
    {
      category: "Mathematics - 8 Credit Hours",
      courses: [
        { name: "MATH 151: Engineering Mathematics I", creditHours: 4, done: false, term: "", notes: "" },
        { name: "MATH 152: Engineering Mathematics II", creditHours: 4, done: false, term: "", notes: "" },
      ],
    },
    {
      category: "Language, Philosophy, and Culture - 3 Credit Hours",
      courses: [
        {
          name: "Language, Philosophy, and Culture Elective",
          creditHours: 3,
          options: ["PHIL 111", "ENGL 212", "HIST 230", "CLAS 102"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
    {
      category: "Creative Arts - 3 Credit Hours",
      courses: [
        {
          name: "Creative Arts Elective",
          creditHours: 3,
          options: ["ARTS 150", "MUSC 200", "THAR 101", "ARCH 249"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
    {
      category: "Social and Behavioral Sciences - 3 Credit Hours",
      courses: [
        {
          name: "Social Science Elective",
          creditHours: 3,
          options: ["PSYC 107", "SOCI 205", "ECON 202", "ECON 203"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
    {
      category: "Citizenship - 12 Credit Hours",
      courses: [
        {
          name: "History I Elective",
          creditHours: 3,
          options: ["HIST 105", "HIST 106", "HIST 230", "HIST 258"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "History II Elective",
          creditHours: 3,
          options: ["HIST 105", "HIST 106", "HIST 230", "HIST 258"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        { name: "POLS 206", creditHours: 3, done: false, term: "", notes: "" },
        { name: "POLS 207", creditHours: 3, done: false, term: "", notes: "" },
      ],
    },
    {
      category: "General Electives - 1 Credit Hour",
      courses: [
        { name: "General Elective", creditHours: 1, done: false, term: "", notes: "" },
      ],
    },
    {
      category: "International and Cultural Diversity / Cultural Discourse",
      courses: [
        {
          name: "ICD Elective",
          creditHours: 0,
          options: ["ICD 101", "ICD 102", "ICD 103", "ICD 104"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
        {
          name: "CD Elective",
          creditHours: 0,
          options: ["CD 101", "CD 102", "CD 103", "CD 104"],
          selectedOption: "",
          done: false,
          term: "",
          notes: "",
        },
      ],
    },
  ];
  
  export default remainingCourses;
  