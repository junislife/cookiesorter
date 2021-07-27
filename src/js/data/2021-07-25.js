dataSetVersion = "2021-07-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Sort by game",
    key: "game",
    checked: false,
    sub: [
      { name: "Line", key: "line" },
      { name: "OvenBreak", key: "ob" },
      { name: "Cookie Wars", key: "cw" },
      { name: "Puzzle World", key: "pw" },
      { name: "Kingdom", key: "kd" }
    ]
  },
  {
    name: "Remove Special cookies",
    key: "special",
    tooltip: "Remove Special cookies (OvenBreak)"
  },
  {
    name: "Remove NPCs",
    key: "npc"
  },
  {
    name: "Remove Dozer and ch17",
    key: "dcp",
    tooltip: "Remove Dozer and ch17 (Banana Peel Cookie)"
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Adventurer Cookie",
    img: "wHBq0VU.png",
    opts: {
      game: ["line", "ob", "kd"]
    }
  },
  {
    name: "Alchemist Cookie",
    img: "trctXhT.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Almond Cookie",
    img: "Nv8uxqW.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Aloe Cookie",
    img: "pxELyu5.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ananas Dragon Cookie",
    img: "RBXeJCE.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Angel Cookie",
    img: "jfiYunm.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Apple Cookie",
    img: "wyCphVi.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Artichoke Cookie",
    img: "PAHOkLf.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Avocado Cookie",
    img: "DwjP0et.png",
    opts: {
      game: ["ob", "pw", "kd"]
    }
  },
  {
    name: "Bacon Cookie",
    img: "f0inSJj.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Banana Cookie",
    img: "XQtEZRQ.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Beet Cookie",
    img: "2PGYjxl.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Bell Pepper Cookie",
    img: "CBhYbbo.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Birthday Cake Cookie",
    img: "uN1IdpN.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Black Raisin Cookie",
    img: "zcmYTYb.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Blackberry Cookie",
    img: "nKUWJpe.png",
    opts: {
      game: ["line", "ob", "kd"]
    }
  },
  {
    name: "Blueberry Pie Cookie",
    img: "SlVb89d.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Butter Pretzel Cookie",
    img: "DyNhJph.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Buttercream Choco Cookie",
    img: "m3sQLWO.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Captain Ice Cookie",
    img: "E0UR5pW.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Carol Cookie",
    img: "1ql8IAq.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Carrot Cookie",
    img: "SNn4DgU.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "ch17 (Banana Peel Cookie)",
    img: "AhnfUSE.png",
    opts: {
      game: ["line"],
      dcp: true
    }
  },
  {
    name: "Cheerleader Cookie",
    img: "XwK163K.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Cheesecake Cookie",
    img: "MJeh1eA.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Cherry Blossom Cookie",
    img: "BfX1j34.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Cherry Cookie",
    img: "0atx3yH.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Chess Choco Cookie",
    img: "PPU9pnN.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Chestnut Cookie",
    img: "B9hCpto.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Chili Pepper Cookie",
    img: "oI53gQ8.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Choco Banana Cookie",
    img: "zd1nY2k.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Choco Cup Cookie",
    img: "pbgGr4d.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Churro Cookie",
    img: "nexVlWs.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Cinnamon Cookie",
    img: "h7bELmO.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Cloud Cookie",
    img: "LcHMZJy.png",
    opts: {
      game: ["line", "cw"]
    }
  },
  {
    name: "Clover Cookie",
    img: "jqvWLJT.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Cocoa Cookie",
    img: "lTdKkac.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Coconut Cream Cookie",
    img: "LvKqtWH.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Coffee Berry Cookie",
    img: "5hjSepL.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Coffee Cookie",
    img: "aZPvvKr.png",
    opts: {
      game: ["line", "cw"]
    }
  },
  {
    name: "Cookiedroid",
    img: "W9S5UtO.png",
    opts: {
      game: ["ob"],
      special: true
    }
  },
  {
    name: "Cookiemals",
    img: "d6tRhiR.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Cotton Candy Cookie",
    img: "alScF4z.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Cream Cookie",
    img: "AIr29Qm.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Cream Puff Cookie",
    img: "80ts8AF.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Cream Unicorn Cookie",
    img: "bVpvJVE.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Croissant Cookie",
    img: "3wp06BB.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Custard Cookie III",
    img: "byHilY6.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Cyborg Cookie",
    img: "uZaNcMb.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Dark Cacao Cookie",
    img: "o1IdjaG.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Dark Choco Cookie",
    img: "bIXSrH8.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Dark Enchantress Cookie",
    img: "8VZQFlO.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Devil Cookie",
    img: "JGXoZMS.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Dino-Sour Cookie",
    img: "lwq9edr.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "DJ Cookie",
    img: "yak7NUa.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Dr. Wasabi Cookie",
    img: "NnzVWqa.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Dozer",
    img: "VtpEPYx.png",
    opts: {
      game: ["line"],
      dcp: true
    }
  },
  {
    name: "Earl Grey Cookie",
    img: "WVAACr5.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Energy Drink Cookie",
    img: "41hAl6o.png",
    opts: {
      game: ["cw"]
    }
  },
  {
    name: "Espresso Cookie",
    img: "6f8BC3Z.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Fairy Cookie",
    img: "IzcMvaU.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Fig Cookie",
    img: "MyWL1dP.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Fire Spirit Cookie",
    img: "JNSITqb.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Firecracker Cookie",
    img: "2HWjwPB.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Flamenco Partner Cookies",
    img: "Fxl5k6E.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "General Jujube Cookie",
    img: "0c4i4NW.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "GingerBrave",
    img: "k6yBBJp.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "GingerBright",
    img: "8BnAYnG.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Goblin Cookie",
    img: "8vb61g3.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Golden Cheese Cookie",
    img: "v3dLazP.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Grapefruit Cookie",
    img: "LrckOK7.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Gumball Cookie",
    img: "7QFD71T.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Herb Cookie",
    img: "rTihCZv.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Hero Cookie",
    img: "l7vOggX.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Hollyberry Cookie",
    img: "NAqtFyD.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Ice Candy Cookie",
    img: "AVIA1ga.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ice Juggler Cookie",
    img: "VZd8PUM.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ion Robot Cookie",
    img: "Wkd2SRe.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Jelly Serpent Cookie",
    img: "uw7KtXI.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Kiwi Cookie",
    img: "gMVowVM.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Knight Cookie",
    img: "gqyZX2F.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Kumiho Cookie",
    img: "tWCVNAL.png",
    opts: {
      game: ["ob", "cw", "kd"]
    }
  },
  {
    name: "Latte Cookie",
    img: "ePxtQVL.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Leek Cookie",
    img: "ZWvqHEH.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Lemon Cookie",
    img: "ghfGeRL.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Licorice Cookie",
    img: "dT4Yzse.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Lilac Cookie",
    img: "YHFS5uK.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Lime Cookie",
    img: "pQR7tX3.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Lobster Cookie",
    img: "9uHXboM.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Macaron Cookie",
    img: "ugkTH7q.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Madeleine Cookie",
    img: "lIBAvWq.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Mala Sauce Cookie",
    img: "7I0Ex1y.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Mango Cookie",
    img: "7PLxVUk.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Marshmallow Cookie",
    img: "1mLHBFi.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Matcha Cookie",
    img: "kh9SzS5.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Melon Bun Cookie",
    img: "1zKJPQI.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Milk Cookie",
    img: "c63X9ZH.png",
    opts: {
      game: ["ob", "pw", "kd"]
    }
  },
  {
    name: "Millennial Tree Cookie",
    img: "AMjj256.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Mint Choco Cookie",
    img: "XlmaHjN.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Mocha Ray Cookie",
    img: "HFtizmX.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Moon Rabbit Cookie",
    img: "pSmXjGW.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Moonlight Cookie",
    img: "nTjpTAX.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Muscle Cookie",
    img: "OvQISqV.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Mustard Cookie",
    img: "v5OrM1O.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ninja Cookie",
    img: "E1nxVt8.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Onion Cookie",
    img: "M7zmPGX.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Orange Cookie",
    img: "eFBwIlM.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Pancake Cookie",
    img: "JiWI4Sv.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Pastry Cookie",
    img: "fBbM8Yu.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Peach Cookie",
    img: "yP9khmr.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Peppermint Cookie",
    img: "qWud3kG.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Pilot Cookie",
    img: "tohfl0z.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Piñata Cookie",
    img: "vAiWcKe.png",
    opts: {
      game: ["pw"]
    }
  },
  {
    name: "Pink Choco Cookie",
    img: "aZZtdoq.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pirate Cookie",
    img: "yBv1AS2.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Pistachio Cookie",
    img: "8ALMcFf.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pitaya Dragon Cookie",
    img: "GM03Vrb.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Plain Yogurt Cookie",
    img: "5kCZPUr.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Plum Cookie",
    img: "2gG8k0b.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Poison Mushroom Cookie",
    img: "2DpWpGT.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Police Cookie",
    img: "wNEn7ky.png",
    opts: {
      game: ["line"],
      npc: true
    }
  },
  {
    name: "Pomegranate Cookie",
    img: "Fyk0q9D.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Popcorn Cookie",
    img: "l1nWNlk.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Popping Candy Cookie",
    img: "kXwjASd.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Priestess Cookie A",
    img: "0wk0NOy.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Priestess Cookie B",
    img: "qAinknV.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Priestesses of the Stars",
    img: "Sr1Te01.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Princess Cookie",
    img: "eyis4aK.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Prophet Cookie",
    img: "wD82mBo.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pudding Cookie Siblings",
    img: "yoX1tl1.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Pudding Cookie",
    img: "V8tHHvH.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Pumpkin Cookie",
    img: "hykbJBh.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Pure Vanilla Cookie",
    img: "KkY5jKT.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Purple Yam Cookie",
    img: "HhS6W3N.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Raspberry Mousse Cookie",
    img: "Hkml4Qd.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Rebel Cookie",
    img: "wLNGRkq.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Red Bean Cookie",
    img: "14jROEX.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Red Cheerleader Cookie",
    img: "FXJWq8u.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Red Pepper Cookie",
    img: "I1N8fXq.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Red Velvet Cookie",
    img: "HnLFPHT.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Rockstar Cookie",
    img: "EV4yjGW.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Roguefort Cookie",
    img: "ya6Kvur.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Roll Cake Cookie",
    img: "USYeIBC.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Rose Cookie",
    img: "QuYbezz.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Rye Cookie",
    img: "izDCe6A.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Salt Cookie",
    img: "ed41AS8.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Sandwich Cookie",
    img: "aZZxbbe.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Scorpion Cookie",
    img: "OM4ChnC.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Sea Fairy Cookie",
    img: "9ljkkgw.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Shining Glitter Cookie",
    img: "t0x8gNJ.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Skater Cookie",
    img: "XuznXDF.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Skating Queen Cookie",
    img: "m5mj9tY.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Snow Sugar Cookie",
    img: "OQyYkZp.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Soda Cookie",
    img: "YzQLLMQ.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Sorbet Shark Cookie",
    img: "5qaX57O.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Space Doughnut",
    img: "pLZzQVf.png",
    opts: {
      game: ["ob", "cw"]
    }
  },
  {
    name: "Sparkling Cookie",
    img: "RMWZvc9.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Spearmint Cookie",
    img: "VOSYBVE.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Special Force Cookie",
    img: "13nLnLw.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Spinach Cookie",
    img: "JVUDlda.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Squid Ink Cookie",
    img: "rG4e5lx.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Starfruit Cookie",
    img: "lZopZL7.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Strawberry Cookie",
    img: "xQOvACY.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Strawberry Crepe Cookie",
    img: "00l0e6z.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Tiger Lily Cookie",
    img: "Ap2RqDs.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Timekeeper Cookie",
    img: "5SkY3AH.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Truffle Cookie",
    img: "KXHQTFO.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Vampire Cookie",
    img: "AgfVAdf.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Walnut Cookie",
    img: "ZqOEnMb.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Werewolf Cookie",
    img: "AMBRfPg.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Whipped Cream Cookie",
    img: "OO8tHTw.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "White Choco Cookie",
    img: "9QWAIyP.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "White Lily Cookie",
    img: "ab5SoKF.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Wind Archer Cookie",
    img: "ZVkZvH0.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Wizard Cookie",
    img: "t1aa8d8.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Yoga Cookie",
    img: "odQ7QmV.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Yogurt Cream Cookie",
    img: "TEJut5f.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Zombie Cookie",
    img: "7Ld0vns.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  }
];
