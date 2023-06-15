import unict from "../../assets/unict.jpg";
import ovi from "../../assets/OVI.jpg";
import opinno from "../../assets/opinno.jpeg";
import edgemony from "../../assets/edgemony.png";

export const data = {
  projects: [
    { id: 1, title: "MoviePlex", url: "https://movie-plex.vercel.app/" },
    {
      id: 2,
      title: "SoundVibes",
      url: "https://sound-vibes-har1.vercel.app//",
    },
    {
      id: 3,
      title: "DailyTasks",
      url: "https://to-do-list-project-phi.vercel.app/",
    },
    { id: 4, title: "Cocktail", url: "https://cocktail-vite.vercel.app/" },
    {
      id: 5,
      title: "HireLand",
      url: "https://explorer-project-three.vercel.app/",
    },
  ],

  appFields: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "npm",
    "SASS",
    "CSS modules",
    "Vercel",
    "ES6",
    "Redux",
  ],

  softSkills: ["Pazienza", "Creatività", "Empatia", "Problem solving"],

  experiences: [
    {
      id: 1,
      company: "Università di Catania",
      task: "Stage Ricercatrice ambito IT",
      image: unict,
      period: "Maggio/ Giugno 2022",
    },
    {
      id: 2,
      company: "OVI-CNR",
      task: "Stage Ricercatrice ambito IT",
      image: ovi,
      period: "Settembre /Ottobre 2022",
    },
    {
      id: 3,
      company: "Edgemony",
      task: "Front-end Dev",
      image: edgemony,
      period: "Aprile 2023",
    },
    {
      id: 4,
      company: "Opinno",
      task: "Insegnante HTML,CSS, JS",
      image: opinno,
      period: "Maggio/ Giugno 2023",
    },
  ],
  education: [
    {
      id: 1,
      certificate: "Laurea Triennale in Lingue straniere",
      istitution: "Università degli studi di Parma",
      period: "2019",
    },

    {
      id: 2,
      certificate: "Laurea Magistrale in Digital Humanities",
      istitution: "Università degli studi di Catania",
      period: "2022",
    },
    {
      id: 3,
      certificate: "Borsa di studio Coding Women Sicily",
      istitution: "Edgemony",
      period: "2023",
    },
  ],
  contacts: {
    email: "ericandido1997@gmail.com",
    mobile: "3311754841",
    github: "https://github.com/EricaCandido",
    linkedin: "https://www.linkedin.com/in/erica-candido-8085a4259/",
    instagram: "https://www.instagram.com/ericandido/",
  },
};

//opzione 1 senza SSR
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.status(401).json({ message: "Method not granted" });
  }
}
