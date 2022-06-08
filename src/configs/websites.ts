import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Blog",
        img: "img/sites/avatar.svg",
        link: "https://sayuru.dev/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/sayuru-akash"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/sayuruakash"
      },
      {
        id: "my-twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/sayuru_akash"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/sayuru.s"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:hi@sayuru.dev"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "gmail",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "https://mail.google.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      }
    ]
  }
};

export default websites;
