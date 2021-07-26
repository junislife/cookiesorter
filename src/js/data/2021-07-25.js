dataSetVersion = "2021-07-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Sort by game",
    key: "game",
    tooltip: "Sort by game",
    checked: false,
    sub: [
      { name: "Line", key: "line" },
      { name: "OvenBreak", key: "ob" },
      { name: "Cookie Wars", key: "cw" },
      { name: "Puzzle World", key: "pw" },
      { name: "Kingdom", key: "kd" },
    ]
  },
  {
    name: "Remove Special cookies",
    key: "special",
    tooltip: "Remove Special cookies (OvenBreak)"
  },
  {
    name: "Remove NPCs",
    key: "npc",
    tooltip: "Remove NPCs"
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
    img: "N3itVLs.png",
    opts: {
      game: ["line", "ob", "kd"]
    }
  },
  {
    name: "Alchemist Cookie",
    img: "rDMMsMW.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Almond Cookie",
    img: "jq3cLRZ.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Aloe Cookie",
    img: "Df0Reyu.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ananas Dragon Cookie",
    img: "zPJzICn.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Angel Cookie",
    img: "qYso1Lw.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Apple Cookie",
    img: "kFxmGBD.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Avocado Cookie",
    img: "ZFVzgqf.png",
    opts: {
      game: ["ob", "pw", "kd"]
    }
  },
  {
    name: "Banana Cookie",
    img: "ScuVAYj.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Beet Cookie",
    img: "42oYYu8.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Bell Pepper Cookie",
    img: "c069jtN.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Birthday Cake Cookie",
    img: "kjRICaL.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Blackberry Cookie",
    img: "vuUpjp3.png",
    opts: {
      game: ["line", "ob", "kd"]
    }
  },
  {
    name: "Blueberry Pie Cookie",
    img: "XIOQYUd.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Butter Pretzel Cookie",
    img: "0mU1pau.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Captain Ice Cookie",
    img: "f6AbKd8.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Carol Cookie",
    img: "0TlwkBI.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Carrot Cookie",
    img: "2l7rBzP.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Cheerleader Cookie",
    img: "ysjR0vY.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Cheesecake Cookie",
    img: "hc5rXGZ.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Cherry Blossom Cookie",
    img: "hc5rXGZ.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Cherry Cookie",
    img: "MpHrAGs.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Chess Choco Cookie",
    img: "x2oCDTv.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Chestnut Cookie",
    img: "HVi4wPr.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Chili Pepper Cookie",
    img: "HVi4wPr.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Churro Cookie",
    img: "NqJmU5x.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Cinnamon Cookie",
    img: "Xv0VeiO.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Cocoa Cookie",
    img: "Xv0VeiO.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Cookiedroid",
    img: "imJ8dQr.png",
    opts: {
      game: ["ob"],
      special: true
    }
  },
  {
    name: "Cookiemals",
    img: "1wmfBUN.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Cotton Candy Cookie",
    img: "dQ9OJQS.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Cream Puff Cookie",
    img: "gVdcMkP.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Cream Unicorn Cookie",
    img: "AiWgC5T.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Croissant Cookie",
    img: "t8EDtlA.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Cyborg Cookie",
    img: "XhBhapc.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Dark Choco Cookie",
    img: "ElLuDll.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Dark Enchantress Cookie",
    img: "C5Q59vl.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Devil Cookie",
    img: "GizWASj.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Dino-Sour Cookie",
    img: "cUiE4qf.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "DJ Cookie",
    img: "GPKX2VV.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Dr. Wasabi Cookie",
    img: "ItMY0KN.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Earl Grey Cookie",
    img: "ItMY0KN.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Fairy Cookie",
    img: "ItMY0KN.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Fig Cookie",
    img: "ItMY0KN.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Fire Spirit Cookie",
    img: "zpMsgqT.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Firecracker Cookie",
    img: "q6EG4e2.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "General Jujube Cookie",
    img: "SmUrs6C.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "GingerBrave",
    img: "SmUrs6C.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "GingerBright",
    img: "SmUrs6C.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Goblin Cookie",
    img: "vTL05z9.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Grapefruit Cookie",
    img: "iapLpqx.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Gumball Cookie",
    img: "womhu3q.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Herb Cookie",
    img: "4D7diwK.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Hero Cookie",
    img: "cIc4ajS.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Ice Candy Cookie",
    img: "EYkJrNU.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ice Juggler Cookie",
    img: "ydfp6sY.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ion Robot Cookie",
    img: "qahRYqP.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Kiwi Cookie",
    img: "DsEGdSI.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Knight Cookie",
    img: "p9UK3zF.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Kumiho Cookie",
    img: "dJZ03BS.png",
    opts: {
      game: ["ob", "cw", "kd"]
    }
  },
  {
    name: "Leek Cookie",
    img: "LOAHNed.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Lemon Cookie",
    img: "DwBXhO5.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Licorice Cookie",
    img: "DwBXhO5.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Lilac Cookie",
    img: "DwBXhO5.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Lime Cookie",
    img: "PKQIvXL.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Lobster Cookie",
    img: "PKQIvXL.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Macaron Cookie",
    img: "wgSqHi4.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Mala Sauce Cookie",
    img: "zJbcA9V.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Mango Cookie",
    img: "sd9pkND.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Marshmallow Cookie",
    img: "2G17l0E.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Matcha Cookie",
    img: "mPUzNjx.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "MelonBun Cookie",
    img: "v0ZiqXo.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Milk Cookie",
    img: "dPFCb5n.png",
    opts: {
      game: ["ob", "pw", "kd"]
    }
  },
  {
    name: "Millennial Tree Cookie",
    img: "ddp3CsX.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Mint Choco Cookie",
    img: "7OchV2i.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Mocha Ray Cookie",
    img: "ofRNnds.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Moon Rabbit Cookie",
    img: "Rd6kZ5o.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Moonlight Cookie",
    img: "eoOcLr7.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Muscle Cookie",
    img: "cdwRJ4i.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Mustard Cookie",
    img: "kncGSIQ.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Ninja Cookie",
    img: "KuUYdg0.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Onion Cookie",
    img: "TuRAbCD.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Orange Cookie",
    img: "zfWLDW2.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Pancake Cookie",
    img: "TzYN5fC.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Peach Cookie",
    img: "YeIJFix.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Peppermint Cookie",
    img: "gUFLcOA.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Pilot Cookie",
    img: "kiyADUl.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Pink Choco Cookie",
    img: "5n4pFkT.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pirate Cookie",
    img: "7YbT0Yd.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Pistachio Cookie",
    img: "PHTOkGK.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pitaya Dragon Cookie",
    img: "oNFfZoc.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Plum Cookie",
    img: "R2EJXKV.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Pomegranate Cookie",
    img: "D4KTu3J.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Popcorn Cookie",
    img: "5ZBOcbj.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Popping Candy Cookie",
    img: "LkBVVOz.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Princess Cookie",
    img: "0bv1ajo.png",
    opts: {
      game: ["line", "ob", "pw", "kd"]
    }
  },
  {
    name: "Prophet Cookie",
    img: "iD8zWMH.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Pudding Cookie",
    img: "3JkRHKx.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Purple Yam Cookie",
    img: "3JkRHKx.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Raspberry Mousse Cookie",
    img: "3JkRHKx.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Red Bean Cookie",
    img: "Er8B7xb.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Red Pepper Cookie",
    img: "0G5m5uX.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Rockstar Cookie",
    img: "0G5m5uX.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Roguefort Cookie",
    img: "BLsONXC.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Roll Cake Cookie",
    img: "ufCCgrc.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Rose Cookie",
    img: "XDvGpqe.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Salt Cookie",
    img: "ID7qjd3.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Sandwich Cookie",
    img: "GCPlOCb.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Scorpion Cookie",
    img: "wknZCTF.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Sea Fairy Cookie",
    img: "5tHzoCo.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Shining Glitter Cookie",
    img: "ZwRTOZL.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Skater Cookie",
    img: "TST46zm.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Skating Queen Cookie",
    img: "5WMxAdA.png",
    opts: {
      game: ["line", "ob", "cw"]
    }
  },
  {
    name: "Snow Sugar Cookie",
    img: "6YXd1aI.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Soda Cookie",
    img: "w39Sotd.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Sorbet Shark Cookie",
    img: "ONOEB8V.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Space Doughnut",
    img: "ONOEB8V.png",
    opts: {
      game: ["ob", "cw"]
    }
  },
  {
    name: "Sparkling Cookie",
    img: "6njTu4T.png",
    opts: {
      game: ["ob", "kd"]
    }
  },
  {
    name: "Spinach Cookie",
    img: "Gv0bgKw.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Squid Ink Cookie",
    img: "D1QHcZn.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Starfruit Cookie",
    img: "4F25eYZ.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Strawberry Cookie",
    img: "dYxrOaL.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Tiger Lily Cookie",
    img: "gENIoUE.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Timekeeper Cookie",
    img: "jMpmxxI.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Truffle Cookie",
    img: "MiD0PM2.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Vampire Cookie",
    img: "0SVVdEe.png",
    opts: {
      game: ["line", "ob", "cw", "kd"]
    }
  },
  {
    name: "Walnut Cookie",
    img: "e1mATob.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Werewolf Cookie",
    img: "Mola8y9.png",
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
    img: "Vf5jOGN.png",
    opts: {
      game: ["line", "ob"]
    }
  },
  {
    name: "Wind Archer Cookie",
    img: "TNOH3SO.png",
    opts: {
      game: ["line", "ob", "cw", "pw"]
    }
  },
  {
    name: "Wizard Cookie",
    img: "OvCCdBT.png",
    opts: {
      game: ["line", "ob", "cw", "pw", "kd"]
    }
  },
  {
    name: "Yoga Cookie",
    img: "DZOuMGf.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Yogurt Cream Cookie",
    img: "AKZFjEw.png",
    opts: {
      game: ["ob"]
    }
  },
  {
    name: "Zombie Cookie",
    img: "1Dj4jLA.png",
    opts: {
      game: ["line", "ob", "pw"]
    }
  },
  {
    name: "Artichoke Cookie",
    img: "sJfo7Ls.png",
    opts: {
      game: ["ob", "pw"]
    }
  },
  {
    name: "Bacon Cookie",
    img: "5QXddYo.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Choco Banana Cookie",
    img: "FbdTThi.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Choco Cup Cookie",
    img: "O5S9y05.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Coconut Cream Cookie",
    img: "9Eu6fNN.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Coffee Berry Cookie",
    img: "9Eu6fNN.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Flamenco Partner Cookies",
    img: "ZZ0iWtH.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Jelly Serpent Cookie",
    img: "HY1HnE4.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Piñata Cookie",
    img: "P8J8qoh.png",
    opts: {
      game: ["pw"]
    }
  },
  {
    name: "Plain Yogurt Cookie",
    img: "nuKrONZ.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Pudding Cookie Siblings",
    img: "RPjCyf0.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Pumpkin Cookie",
    img: "qsJQKyE.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Red Cheerleader Cookie",
    img: "UYIaaTM.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Spearmint Cookie",
    img: "6xxTTDI.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Black Raisin Cookie",
    img: "xR14e3I.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Buttercream Choco Cookie",
    img: "b1Y5iwm.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Cloud Cookie",
    img: "eSOpPtg.png",
    opts: {
      game: ["line", "cw"]
    }
  },
  {
    name: "Clover Cookie",
    img: "J3kLYjx.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Cream Cookie",
    img: "jnWib4g.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Custard Cookie III",
    img: "RHHDXhh.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Dark Cacao Cookie",
    img: "RIvRHv7.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Energy Drink Cookie",
    img: "MZp5gAb.png",
    opts: {
      game: ["cw"]
    }
  },
  {
    name: "Espresso Cookie",
    img: "1O2augE.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Golden Cheese Cookie",
    img: "CJrV50g.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Hollyberry Cookie",
    img: "I7gfzxn.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Latte Cookie",
    img: "zpTRFcY.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Madeleine Cookie",
    img: "jTlehjU.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Pastry Cookie",
    img: "69GUeoh.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Poison Mushroom Cookie",
    img: "NpNAZre.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Pure Vanilla Cookie",
    img: "huicwAB.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Rebel Cookie",
    img: "Bn7br6p.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Red Velvet Cookie",
    img: "bp1q270.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Rye Cookie",
    img: "gcQmGCB.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "Special Force Cookie",
    img: "efQGmoX.png",
    opts: {
      game: ["line"]
    }
  },
  {
    name: "Strawberry Crepe Cookie",
    img: "XDhZKzH.png",
    opts: {
      game: ["kd"]
    }
  },
  {
    name: "White Lily Cookie",
    img: "JimHO7K.png",
    opts: {
      game: ["kd"],
      npc: true
    }
  },
  {
    name: "Priestesses of the Stars",
    img: "7ExYPQH.png",
    opts: {
      game: ["ob"],
      npc: true
    }
  },
  {
    name: "Dozer",
    img: "aXKgFdJ.png",
    opts: {
      game: ["line"],
      dcp: true
    }
  },
  {
    name: "ch17 (Banana Peel Cookie)",
    img: "Q24OyLs.png",
    opts: {
      game: ["line"],
      dcp: true
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
  }
];
