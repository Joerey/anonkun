if (Meteor.isClient) {
  Template.hello.greeting = function() {
    return "Welcome to anonkun.";
  };

  Template.hello.events({
    'click input': function() {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}

var boards = [{
  "_id": "anonkun_board_yuri",
  "i": ["https://www.filepicker.io/api/file/i5xvjNvtRFGTT22UiLnR", "https://www.filepicker.io/api/file/ZKTI2pSSN5FaHf3o7QJP", "https://www.filepicker.io/api/file/E7HiQi38TqO3d7uvBMyC"],
  "sub": 30,
  "t": "yuri"
}, {
  "_id": "anonkun_board_nsfw",
  "i": ["https://www.filepicker.io/api/file/i5xvjNvtRFGTT22UiLnR", "https://www.filepicker.io/api/file/ZKTI2pSSN5FaHf3o7QJP", "https://www.filepicker.io/api/file/kR85BuhQQrqeRIHpknA1"],
  "sub": 8,
  "t": "nsfw"
}, {
  "_id": "anonkun_board_golden-empire",
  "i": ["https://www.filepicker.io/api/file/YpRdOUXdSnG9O37YwIbx", "https://www.filepicker.io/api/file/mLKJjGjbT6CtrbuJ1Ohx", "https://www.filepicker.io/api/file/PV7ofpe2QNycbSFlFs98"],
  "sub": 8,
  "t": "golden-empire"
}, {
  "_id": "anonkun_board_smut",
  "i": ["https://www.filepicker.io/api/file/kR85BuhQQrqeRIHpknA1", "https://www.filepicker.io/api/file/MznevprxQjefOazC7cN5", "https://www.filepicker.io/api/file/ytTO5RSTRgWTxUvTGMtk"],
  "sub": 8,
  "t": "smut"
}, {
  "_id": "anonkun_board_fantasy",
  "i": ["https://www.filepicker.io/api/file/kR85BuhQQrqeRIHpknA1", "https://www.filepicker.io/api/file/YpRdOUXdSnG9O37YwIbx", "https://www.filepicker.io/api/file/qZROuDDXSBCXrrnlN8V5"],
  "sub": 7,
  "t": "fantasy"
}, {
  "_id": "anonkun_board_romance",
  "i": ["https://www.filepicker.io/api/file/i5xvjNvtRFGTT22UiLnR", "https://www.filepicker.io/api/file/7dMFaaH1To6MiMKBThZe", "https://www.filepicker.io/api/file/E7HiQi38TqO3d7uvBMyC"],
  "sub": 6,
  "t": "romance"
}, {
  "_id": "anonkun_board_anime",
  "i": ["https://www.filepicker.io/api/file/YpRdOUXdSnG9O37YwIbx", "https://www.filepicker.io/api/file/aAMbEKSmSLy6Qp3oqw7S", "https://www.filepicker.io/api/file/rHIqXFd7SBePdqCQqazm"],
  "sub": 6,
  "t": "anime"
}, {
  "_id": "anonkun_board_fate-stay-night",
  "i": ["https://www.filepicker.io/api/file/n3Jwc7N6RBuo0CPRyRbX", "https://www.filepicker.io/api/file/yIkAyL7aSwCsoo7Dh865", "https://www.filepicker.io/api/file/OQuwA0lMS3a99Dq5AiaN"],
  "sub": 6,
  "t": "fate-stay-night"
}, {
  "t": "comedy",
  "_id": "anonkun_board_comedy",
  "sub": 5,
  "i": ["https://www.filepicker.io/api/file/h8TjBOl4RHqnbWbZg6DQ", "https://www.filepicker.io/api/file/rqN6ATagSQqYyVr6980P", "https://www.filepicker.io/api/file/sHGgAFGqT8qG59QHVLzw"]
}, {
  "_id": "anonkun_board_mecha",
  "i": ["https://www.filepicker.io/api/file/1jAZMTmsS0qCyVJEozH8", "https://www.filepicker.io/api/file/shILjQ5Tl2e0CNtMGoIQ", "https://www.filepicker.io/api/file/cUJEQ9n7QgCCdHbudsT7"],
  "sub": 5,
  "t": "mecha"
}]

var stories = [{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
},{
  "_id": "-JHFWJTKGnjrb--_Fb1X",
  "d": "The Second Installment of Magi-Tech. Will periodically place information on the setting and characters here. On Hiatus.",
  "i": ["https://www.filepicker.io/api/file/dHSQEUUcTKGnGyM0cosw"],
  "like": ["-J-EJYyZhpcz9oqi-6ZO", "a617f070c10bb388a295fcc7825f6464", "-J54KQs14W_aKSfVp0gc", "40568d2ea97ecb5e8277506193a53acb", "d61d28a0302d56ac7509088b1e6c1428", "19e1ab169ad3c4be1e6ba2316081a146", "40d863b3846ef7cc9345669669e48acc", "066a96e992e56a41a09f8eb920ff5d64"],
  "lr": {
    "r": ["-JHFWJTKGnjrb--_Fb1X"],
    "nt": "chat",
    "b": "Yes she did, otherwise she would have, rightfully, assumed we are going to axe her family to prevent future uprisings forming around them",
    "ct": 1395174644322,
    "rt": 1395174644322,
    "ut": 1395174644322,
    "u": "Anon",
    "_id": "-JILssS0SbyEKcZO6JFz"
  },
  "nt": "story",
  "p": 1044,
  "r": ["fantasy"],
  "t": "MagiTech-The Blood of Spirits",
  "ta": ["fantasy", "hiatus", "magic technology", "mad science", "war", "monster girl", "steampunk", "grey morality", "nsfw", "chubby protagonist", "large cast", "time fuckery", "military regime", "series", "politics", "how do i military?"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }, {
    "n": ""
  }],
  "ut": 1395174644322,
  "w": 2888
}, {
  "_id": "-J9HIk6RUP5uU7FGYnOr",
  "d": "A young man dies- But this isn't his end. Explore a setting full of ghosts, demons, vampires, and more!",
  "i": ["https://www.filepicker.io/api/file/xOvfU0nuTF2tpJbSZFp2"],
  "isLive": false,
  "like": ["2618190150ae03c418b7f65a2ae4e519", "-JEUi1XJ-eMLCh56hHL3", "dd379f133896d2045b5cc5ffe78789d8", "SPuGeTs3tQZicLEkE", "3dc1f2e0f83aabff7725f65fbd3003de", "b9599cdae42f9470928d2d36baf9bb3e", "24ccfd4628ea9410afca83b6c2417e49", "f9ccd0dc2f325d652a2a84db89647458", "-J7uclUHSsX0in2wsMp1", "-JH9gPOvc-32U8tBvbic", "173426f0e3e36a586ed36fae735f7a66", "02c085f012e90f11a51bc14df6aa4b0f"],
  "lr": {
    "r": ["-J9HIk6RUP5uU7FGYnOr"],
    "nt": "chat",
    "b": "Could also be no clan at all.  After all, she wasn't sired by another vampire.",
    "ct": 1395168417148,
    "rt": 1395168417148,
    "ut": 1395168417148,
    "u": [{
      "n": "DragoonExMachina",
      "_id": "-JEKHoRMRnfewL4bXbV_"
    }],
    "_id": "-JILW78QqKT3CSNVB760"
  },
  "nextLive": false,
  "nt": "story",
  "p": 647,
  "r": ["fantasy"],
  "t": "FLATLINE",
  "ta": ["fantasy", "urban fantasy", "heavily reader driven", "male protagonist", "undead protagonist"],
  "u": [{
    "_id": "-J9HAa6lJjyaMtKj1Mmf",
    "n": "FutureExabyte"
  }, {
    "n": ""
  }],
  "ut": 1395168417148,
  "w": 7778
}, {
  "_id": "-JHFZoyugvla8kWLI8jb",
  "d": "Welcome to Marriage Quest, where you start off having already conquered your love interest! However, will it truly be a Happily Ever After? Make the right choice and your lives together will be filled with bliss! Choose wrongly, and you'll discover how America has such a high divorce rate! Good luck!",
  "i": ["https://www.filepicker.io/api/file/n6OXEGXIS5mdRe3x4DJa"],
  "isLive": false,
  "like": ["-JHEt_VyH37ePRUrvE71", "-J7uclUHSsX0in2wsMp1", "-J54KQs14W_aKSfVp0gc", "d61d28a0302d56ac7509088b1e6c1428", "r27wrafkKrSGkdXvc", "b71846d94e777b089d8f0a7d8a5ae3e9", "d9d9ef4250f2932fa4534d7a43378bda", "173426f0e3e36a586ed36fae735f7a66"],
  "lr": {
    "r": ["-JHFZoyugvla8kWLI8jb"],
    "nt": "chat",
    "b": "So who is getting raped today?",
    "ct": 1395164864050,
    "rt": 1395164864050,
    "ut": 1395164864050,
    "u": [{
      "n": "killertpu",
      "a": "https://www.filepicker.io/api/file/0QUfxg6dTei2zB1cgqjm",
      "_id": "-J7uclUHSsX0in2wsMp1"
    }],
    "_id": "-JILIZgGfhZXt7rQ9w8_"
  },
  "nextLive": 1395187200000,
  "nt": "story",
  "p": 1612,
  "r": ["random"],
  "t": "Marriage Quest",
  "ta": ["nsfw", "crying author", "marriage", "no love for author", "silly endings", "swole protagonist", "slice of life", "chef protagonist", "original city do not steal", "falsely accused protagonist", "borrowed hatter's dice", "monster girls", "errybody wants swole", "dragon loli chiropractor", "no u"],
  "u": [{
    "_id": "-J3Zg2fI87a1MsRfeVNC",
    "a": "https://www.filepicker.io/api/file/FFUD5SISbaczHJOv8yvq",
    "n": "Nox"
  }],
  "ut": 1395164864050,
  "w": 11819
}]