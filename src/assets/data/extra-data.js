/*
 * projects variable which holds data on each extracurricular I have completed
 */

const extra = [
  {
    title: "Original Projects",
    copy: "",
    projects: [
      {
        title: "Photo Matching App" ,
        copy: "Returns a work of art from a curated list with the same dominant color (in its top three dominant colors) given an uploaded image. A development tool for a data science grad student.",
        link: "https://bradleyhop.github.io/scratch-aic/",
        img: {
          src: "aic.png",
          alt: "screenshot of art institute of Chicago API photo matching app",
        },
        github: "https://github.com/mrutherfoord/AIC-Photo-Match/tree/master/frontEnd",
      },
      {
        title: "Post-Rock Band Name Generator" ,
        copy: "Based on a meme, create a post-rock band name based on a set of criteria.",
        link: "https://bradleyhop.github.io/postRockBandName/",
        img: {
          src: "postrockBandname.jpg",
          alt: "screenshot of post rock band name quiz",
        },
        github: "https://github.com/bradleyhop/postrock-bandname/",
      },
      {
        title: "Terminal Quote Generator",
        link: "https://bradleyhop.github.io/randomQuotes/extraCreditRQ/random.html",
        copy: "A spin-off from the freeCodeCamp quote generator; gives a terminal feeling to the computer programming-themed quotes.",
        img: {
          src: "terminalQuote.jpg",
          alt: "screenshot of terminal style random quote generator",
        },
        github: "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/randomQuotes/extraCreditRQ/",
      },
      {
        title: "Wikipedia Article Search and Preview" ,
        link: "https://bradleyhop.github.io/wikiSearchApp/",
        copy: "This was an old freeCodeCamp project no longer a part of the official cirriculum. Uses Wikimedia's API and Boostrap to show article previews.",
        img: {
          src: "wikiSearch.jpg",
          alt: "screenshot of wikipedia search and preview article application",
        },
        github: "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/wikiSearchApp",
      },
    ],
  }
];

export default extra;
