import { Data } from "../types";
import ch1 from "../assets/char1.jpg";
import ch2 from "../assets/char2.jpg";
import ch3 from "../assets/char3.jpg";

export const charactersData: Data[] = [
  {
    id: "characters-1",
    picture: ch1,
    title: "Spider-Man",
    description:
      'Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became Spider-Man.',
  },
  {
    id: "characters-2",
    picture: ch2,
    title: "Wolverine",
    description:
      'A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett\'s once mysterious past is filled with blood, war, and betrayal. Possessing an accelerated healing factor, keenly enhanced senses, and bone claws in each hand (along with his skeleton) that are coated in adamantium; Wolverine is, without question, the ultimate weapon.',
  },
  {
    id: "characters-3",
    picture: ch3,
    title: "Thor",
    description:
      "Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & Elder-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of no perceivable limits. Armed with his enchanted Uru hammer Mjolnir which helps him to channel his godly energies. The mightiest and the most beloved warrior in all of Asgard, a staunch ally for good and one of the most powerful beings in the multiverse/omniverse. Thor is also a founding member of the Avengers.",
  },
];
