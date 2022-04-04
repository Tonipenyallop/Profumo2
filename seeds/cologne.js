/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cologne").del();
  await knex("cologne").insert([
    {
      name: "Naxos",
      concentration: "Eau de Parfum",
      size: "100ml",
      description:
        "Be transported to the heart of Sicily with Naxos, where top notes of fresh bergamot, lemon and lavender lead to an inspiring heart of cinnamon, honey and cashmere. Steeped in heritage but with a contemporary twist, this classically Italian fragrance is a bright and brilliant breath of fresh air.Grounding base notes of tobacco leaf, tonka and vanilla beans add an earthy, woody undertone. Naxos is a tribute to the grandeur and glamour of our home country.",
      url: "https://assets.goldenscent.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/0/8033488155070-xerjoff-xer-naxos-edp-100ml.png",
    },
    {
      name: "Alexandria II",
      concentration: "Parfum",
      size: "100ml",
      description:
        "Alexandria II opens with its sublime lavender, rosewood, cinnamon and rare fruity accords. A touch of rose in the backbone of Alexandria II enriches the lavender and deepens the rosewood. The Laotian oud brings a celestial meaning to this aromatic woody aura and echoes the excellent vanilla amber base.",
      url: "https://yuniqu.net/wp-content/uploads/2020/05/Xerjoff_Alexandria-II.png",
    },
    {
      name: "Renaissance",
      concentration: "Eau de Parfum",
      size: "100ml",
      description:
        "Authentically Italian in heart, body and soul, Renaissance is a sparkling bouquet of fruity accords. Inspired by our rich heritage and an homage to the glamour of our home country, Renaissance represents the inspiring character of Italy, opening with fresh top notes of Calabrian bergamot, mandarin and lemon. An enchanting heart of Bulgarian rose, mint and blossoming Lily of the Valley represents the exquisite and varied beauty of Italy while a classically warm base of cedar wood, patchouli, amber and musk dances across the skin with impossible delicacy.",
      url: "https://yuniqu.net/wp-content/uploads/2019/12/Xerjoff_Renaissance.png",
    },
    {
      name: "Nio",
      concentration: "Parfum",
      size: "50ml",
      description:
        "A woody aromatic character defines the Nio fragrance, which takes its name from a meteorite which showered over Japan in the late 19th century.  Created by Xerjoff’s master perfumers, this aromatic infusion of Mediterranean citrus and spice is an olfactory experience to behold. With top notes of bergamot, rose pepper and nutmeg, it leads to an earthy heart of jasmine and green leaves. Ancient cedar wood, guaiac wood and amber create a sweet and sensual base accord. This perfume is presented in a crystal flacon and enthroned in a leather box embedded with a piece of meteorite.",
      url: "https://xxivstore.com/wp-content/uploads/2021/10/XXIV-Xerjoff-Nio.png",
    },
    {
      name: "Mefisto Gentiluomo",
      concentration: "Eau de Parfum",
      size: "100ml",
      description:
        "MEFISTO GENTILUOMO is the perfect gentlemen’s cologne created in 1888 for the traditional Italian barber’s shops. With their handsome hardwood floors and leather chairs, the shops, combining traditional men’s grooming with political and literary conversations, were the perfect environment for the gentlemen who wished to look slick and sharp, ready for all special occasions. MEFISTO GENTILUOMO is a perfect blend of precious Italian citrus oils, Mediterranean lavender flowers and orris extracts, crafted with precious sandal and cedar woods. Soothing perfumed oils and shaving creams enrich the MEFISTO GENTILUOMO grooming experience, only available in authorised selected dealers.",
      url: "https://i.pinimg.com/originals/0a/b4/f8/0ab4f85e6be8314cef5900356135c585.png",
    },
  ]);
};
