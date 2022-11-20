import { Data } from "../types";
import com1 from "../assets/comics1.jpg";
import com2 from "../assets/comics2.jpg";
import com3 from "../assets/comics3.jpg";

export const comicsData: Data[] = [
  {
    id: "comics-1",
    title: "Fantastic Four",
    description:
      "The Fantastic Four were created in response to DC's Justice League and soon became the Silver Age's premier superhero team. Stan Lee and Jack Kirby collaborated on the opening 102 issues of the magazine, and told the adventures of Mr. Fantastic, the Thing, Invisible Woman and the Human Torch. This first volume ran through issue #416, before it was rebooted as Fantastic Four (vol. 2) (13 issues) as part of the short lived Heroes Reborn arc. The series was restarted again with issue 1 in Fantastic Four (vol. 3) before it reverted back to the original numbering with issue #500.",
    picture: com1,
  },
  {
    id: "comics-2",
    title: "The Incredible Hulk",
    description:
      "Continued from Tales to Astonish Vol.1 which was originally one of several anthology comics published by Marvel in the 1960's featuring one-shot monsters in their own tales. Over the years the series began to focus more upon some of the anti-heroes still famous to this day such as the Sub-Mariner and The Incredible Hulk. That is why, after 101 issues, that series changed its name to The Incredible Hulk with issue #102. Under this new name the series lasted thirty more years until it finally concluded with issue #474. The series was then revamped with a new number one and a new title, simply called Hulk (1998).",
    picture: com2,
  },
  {
    id: "comics-3",
    title: "The Uncanny X-Men",
    description:
      "This is a continuation of Stan Lee's and Jack Kirby's original The X-Men (Vol. 1). Beginning with issue #114 the descriptive \"Uncanny\" was added to the cover treatment but it wasn't until issue #142 that the volume's official name, via the indicia, was permanently changed to Uncanny X-Men.",
    picture: com3,
  },
];
