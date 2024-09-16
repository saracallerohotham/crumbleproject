const images = import.meta.glob("./*.jpeg", { eager: true });

export const menu = [
  {
    id: 1,
    title: "Banana Split",
    description:
      "Delicious banana split cookie with creamy frosting and sprinkles.",
    price: "$3.50",
    imageSrc: images["./bananasplitt.jpeg"].default,
    category: "Fruit Inspired",
  },
  {
    id: 2,
    title: "Cheesecake",
    description: "Creamy cheesecake cookie with a graham cracker crust.",
    price: "$4.00",
    imageSrc: images["./cheesecake.jpeg"].default,
    category: "Dessert Flavors",
  },
  {
    id: 3,
    title: "Lemon Pie",
    description: "Zesty lemon pie cookie with a tangy glaze.",
    price: "$3.75",
    imageSrc: images["./lemonpie.jpeg"].default,
    category: "Fruit Inspired",
  },
  {
    id: 4,
    title: "Mint",
    description: "Refreshing mint-flavored cookie with chocolate drizzle.",
    price: "$3.25",
    imageSrc: images["./mint.jpeg"].default,
    category: "Refreshing",
  },
  {
    id: 5,
    title: "Cherry Pie",
    description: "Sweet cherry pie cookie topped with whipped cream.",
    price: "$3.80",
    imageSrc: images["./cherrypie.jpeg"].default,
    category: "Fruit Inspired",
  },
  {
    id: 6,
    title: "Chocolate Chips",
    description:
      "Classic chocolate chip cookie with a crispy edge and chewy center.",
    price: "$3.00",
    imageSrc: images["./chips.jpeg"].default,
    category: "Classics",
  },
  {
    id: 7,
    title: "Nutella",
    description: "Decadent Nutella-filled cookie with a rich chocolate flavor.",
    price: "$4.25",
    imageSrc: images["./nutella.jpeg"].default,
    category: "Chocolate Lovers",
  },
  {
    id: 8,
    title: "Olivia Rodrigo",
    description: "Sour and sweet cookie inspired by Olivia Rodrigo's hits.",
    price: "$4.50",
    imageSrc: images["./oliviarodrigo.jpeg"].default,
    category: "Pop Culture",
  },
  {
    id: 9,
    title: "Chocolate Cake",
    description: "Moist chocolate cake cookie with rich ganache topping.",
    price: "$4.00",
    imageSrc: images["./chocolatecake.jpeg"].default,
    category: "Chocolate Lovers",
  },
  {
    id: 10,
    title: "Chocolate Cherry",
    description: "Chocolate and cherry fusion in a soft-baked cookie.",
    price: "$4.10",
    imageSrc: images["./chocolatecherry.jpeg"].default,
    category: "Fruit Inspired",
  },
  {
    id: 11,
    title: "Cold Shark",
    description: "Icy blue cookie with a frosty bite and gummy shark topping.",
    price: "$3.90",
    imageSrc: images["./coldshark.jpeg"].default,
    category: "Fun & Novelty",
  },
  {
    id: 12,
    title: "Purple",
    description: "A vibrant purple cookie with berry flavors.",
    price: "$3.50",
    imageSrc: images["./purple.jpeg"].default,
    category: "Fruit Inspired",
  },
  {
    id: 13,
    title: "Oreo Party",
    description: "Cookie packed with Oreos and a creamy frosting swirl.",
    price: "$4.00",
    imageSrc: images["./oreoparty.jpeg"].default,
    category: "Cookies & Cream",
  },
  {
    id: 14,
    title: "Waffle",
    description: "Cookie with a waffle flavor and maple syrup drizzle.",
    price: "$3.75",
    imageSrc: images["./waffle.jpeg"].default,
    category: "Breakfast Inspired",
  },
  {
    id: 15,
    title: "Colors",
    description: "Rainbow-colored cookie with a burst of fruity flavors.",
    price: "$3.50",
    imageSrc: images["./colors.jpeg"].default,
    category: "Fun & Novelty",
  },
  {
    id: 16,
    title: "Cookie Monster",
    description:
      "Blue cookie stuffed with chocolate chips and cookie dough chunks.",
    price: "$4.50",
    imageSrc: images["./cookiemonster.jpeg"].default,
    category: "Fun & Novelty",
  },
  {
    id: 17,
    title: "Vanilla",
    description: "Classic vanilla cookie with a smooth, buttery flavor.",
    price: "$3.20",
    imageSrc: images["./vanila.jpeg"].default,
    category: "Classics",
  },
];

menu.forEach((product) => {
  console.log(product.category);
});
