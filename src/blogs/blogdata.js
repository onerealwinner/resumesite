export function getBlogData() {
  return [
    {
      id: 1,
      title: "90's Tech Background",
      image: "images/blog/1.svg",
      filesource: "../../blogs/TechInLate90s",
      date: "July 12th, 2023",
      author: "Daniel Mudge",
      category: "Careers",
    },
    {
      id: 2,
      title: "Common Misconceptions About Payment",
      image: "images/blog/2.svg",
      filesource: "../../blogs/common-misconceptions-about-payment.md",
      date: "07 February, 2020",
      author: "Bolby",
      category: "Tutorial",
    },
    {
      id: 3,
      title: "3 Things To Know About Startup Business",
      image: "images/blog/3.svg",
      filesource: "../../blogs/things-to-know-about-startup-business.md",
      date: "06 February, 2020",
      author: "Bolby",
      category: "Business",
    },
    {
      id: 4,
      title: "3 Things To Know About Startup Business",
      image: "images/blog/3.svg",
      filesource: "../../blogs/things-to-know-about-startup-business.md",
      date: "06 February, 2020",
      author: "Bolby",
      category: "Business",
    },

    {
      id: 5,
      title: "3 Things To Know About Startup Business",
      image: "images/blog/3.svg",
      filesource: "../../blogs/things-to-know-about-startup-business.md",
      date: "06 February, 2020",
      author: "Bolby",
      category: "Business",
    },
    {
      id: 6,
      title: "3 Things To Know About Startup Business",
      image: "images/blog/3.svg",
      filesource: "../../blogs/things-to-know-about-startup-business.md",
      date: "06 February, 2020",
      author: "Bolby",
      category: "Business",
    },
  ];
}

export function getNospaceTitle(filesource) {
  let tempArr = filesource.split("/");
  let fileName = tempArr[tempArr.length - 1];
  let getName = fileName.slice(0, -3);
  return getName;
}
