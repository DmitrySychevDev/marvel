import { Series } from "../types";
import ser1 from "../assets/series1.jpg";
import ser2 from "../assets/series2.jpg";
import ser3 from "../assets/series3.jpg";
import ser4 from "../assets/series4.jpg";
import ser5 from "../assets/series5.jpg";

export const seriesData: Series[] = [
  {
    id: "series-1",
    title: "Spider-Man: Homecoming",
    description:
      "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
    picture: ser1,
    characters: ["characters-1", "characters-4"],
    comics: ["comics-4", "comics-5"],
  },
  {
    id: "series-2",
    title: "She-Hulk: Attorney-at-Law",
    description:
      "In She-Hulk: Attorney at Law, Jennifer Walters (Tatiana Maslany)—an attorney specializing in superhuman-oriented legal cases—must navigate the complicated life of a single, 30-something who also happens to be a green 6-foot-7-inch superpowered hulk.",
    picture: ser2,
    characters: ["characters-5"],
    comics: ["comics-2"],
  },
  {
    id: "series-3",
    title: "Loki | Season 1",
    description:
      "In Marvel Studios’ “Loki,” the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” Kate Herron directs and Michael Waldron is head writer. Debuts on Disney+ in June 9, 2021.",
    picture: ser3,
    characters: ["characters-3"],
    comics: ["comics-4"],
  },
  {
    id: "series-4",
    title: "Avengers: Infinity War",
    description:
      'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    picture: ser4,
    characters: [
      "characters-1",
      "characters-3",
      "characters-4",
      "characters-5",
    ],
    comics: ["comics-2", "comics-4", "comics-5"],
  },
  {
    id: "series-5",
    title: "Deadpool",
    description:
      "Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    picture: ser5,
    characters: ["characters-2"],
    comics: ["comics-3"],
  },
];
