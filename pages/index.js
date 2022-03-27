export default function Home() {
  const outfits = [
    {
      name: "Monday Death Day",
      type: "spring",
      description: "My favorite casual fit!",
      items: [],
    },
    {
      name: "TGIF",
      type: "summer",
      description: "Katy Perry doesn't hold a candle to this.",
      items: [
        {
          photoUrl: null,
        },
        {
          photoUrl: null,
        },
        {
          photoUrl: null,
        },
      ],
    },
    {
      name: "Seashell bikini eiusmod sunt est officia ad cillum esse pariatur sit ex proident labore.",
      type: "summer",
      description:
        "Ullamco nostrud id ex pariatur adipisicing ipsum in ex nostrud commodo anim non mollit.",
      items: [
        {
          photoUrl: null,
        },
        {
          photoUrl: null,
        },
      ],
    },
  ];

  const itemTypes = [
    "all",
    "top",
    "bottom",
    "outerwear",
    "footwear",
    "accessory",
  ];
  const outfitTypes = ["all", "spring", "summer", "fall", "winter"];

  const itemSortOptions = [
    {
      title: "Name",
      type: "name",
    },

    {
      title: "Times Used",
      type: "timesUsed",
    },
  ];

  const outfitSortOptions = [
    {
      title: "Name",
      type: "name",
    },
  ];

  return (
    <div className="mx-auto my-8 px-4">
      <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
        Be patient, we are still building the home page.
      </p>
    </div>
  );
}
