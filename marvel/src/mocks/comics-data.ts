import { Comics } from "../types";
import com1 from "../assets/comics1.jpg";
import com2 from "../assets/comics2.jpg";
import com3 from "../assets/comics3.jpg";
import com4 from "../assets/comics4.jpg";
import com5 from "../assets/comics5.jpg";
import com6 from "../assets/comics6.jpg";

export const comicsData: Comics[] = [
  {
    id: "comics-1",
    title: "Fantastic Four",
    description:
      "The Fantastic Four were created in response to DC's Justice League and soon became the Silver Age's premier superhero team. Stan Lee and Jack Kirby collaborated on the opening 102 issues of the magazine, and told the adventures of Mr. Fantastic, the Thing, Invisible Woman and the Human Torch. This first volume ran through issue #416, before it was rebooted as Fantastic Four (vol. 2) (13 issues) as part of the short lived Heroes Reborn arc. The series was restarted again with issue 1 in Fantastic Four (vol. 3) before it reverted back to the original numbering with issue #500.",
    picture: com1,
    characters: ["characters-6"],
    series: [],
  },
  {
    id: "comics-2",
    title: "The Incredible Hulk",
    description:
      "Continued from Tales to Astonish Vol.1 which was originally one of several anthology comics published by Marvel in the 1960's featuring one-shot monsters in their own tales. Over the years the series began to focus more upon some of the anti-heroes still famous to this day such as the Sub-Mariner and The Incredible Hulk. That is why, after 101 issues, that series changed its name to The Incredible Hulk with issue #102. Under this new name the series lasted thirty more years until it finally concluded with issue #474. The series was then revamped with a new number one and a new title, simply called Hulk (1998).",
    picture: com2,
    characters: ["characters-5"],
    series: ["series-2"],
  },
  {
    id: "comics-3",
    title: "The Uncanny X-Men",
    description:
      "This is a continuation of Stan Lee's and Jack Kirby's original The X-Men (Vol. 1). Beginning with issue #114 the descriptive \"Uncanny\" was added to the cover treatment but it wasn't until issue #142 that the volume's official name, via the indicia, was permanently changed to Uncanny X-Men.",
    picture: com3,
    characters: ["characters-2"],
    series: ["series-5"],
  },
  {
    id: "comics-4",
    title: "The Avengers",
    description:
      "The first Avengers ongoing series, the one that started the Earth's Mightiest Heroes' campaign for justice and freedom. They will save the world, and if they can't, they will avenge it. And there came a day, a day unlike any other when Earth's mightiest heroes joined forces to face the threats no single superhero could withstand! The Avengers were born!",
    picture: com4,
    characters: [
      "characters-1",
      "characters-3",
      "characters-4",
      "characters-5",
    ],
    series: ["series-5"],
  },
  {
    id: "comics-5",
    title: "The Spectacular Spider-Man",
    description:
      'The second monthly Spider-Man series and the second most popular volume next to the Amazing Spider-Man that started back in the 1970\'s. The cover-title started out as "Peter Parker: The Spectacular Spider-Man", but the "Peter Parker" part was dropped with issue 134. The comic lasted until 1998 for a total of 263 issues. A second volume named Spectacular Spider-Man started in 2003.',
    picture: com5,
    characters: ["characters-1"],
    series: ["series-1"],
  },
  {
    id: "comics-6",
    title: "Wolverine",
    description:
      " HELL ON EARTH - AN A.X.E. TIE-IN! The Hand's HELLBRIDE seeks revenge on WOLVERINE and SOLEM. But with Earth reeling from the revelations of A.X.E., a dire play from the Best There Is may be the planet's last, best hope!",
    picture: com6,
    characters: ["characters-2"],
    series: [],
  },
];
