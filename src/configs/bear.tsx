import { FaPaw, FaVuejs } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
  GiEnergySword,
  GiCat,
  GiFishEscape
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine, RiNewspaperFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { CgFormatText } from "react-icons/cg";
import { BiCube, BiGame } from "react-icons/bi";
import { BsFillImageFill, BsGrid1X2 } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";

import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a cool ape nft lost in the human..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "certificate-verifier",
        title: "Certificate Verification System",
        file: "https://raw.githubusercontent.com/sayuru-akash/laravel-certificate-verifier/main/README.md",
        icon: <RiGamepadLine />,
        excerpt: "Certificate authenticity validation using Laravel...",
        link: "https://github.com/sayuru-akash/laravel-certificate-verifier"
      },
      {
        id: "roborabbits",
        title: "NFT Landing Website",
        file: "https://raw.githubusercontent.com/sayuru-akash/nft-landing-page-roborabbits/main/README.md",
        icon: <HiFire />,
        excerpt: "An NFT Landing page developed using HTML,CSS,JS...",
        link: "https://github.com/sayuru-akash/nft-landing-page-roborabbits/"
      },
      {
        id: "airline-reservation",
        title: "Airline Reservation System",
        file: "https://raw.githubusercontent.com/sayuru-akash/airline-reservation-system/master/README.md",
        icon: <FaVuejs />,
        excerpt: "Airline seat reservation system developed using C#...",
        link: "https://github.com/sayuru-akash/airline-reservation-system"
      },
      {
        id: "hotel-reservation",
        title: "Hotel Reservation Website",
        file: "https://raw.githubusercontent.com/sayuru-akash/hotel-reservation-system/main/README.md",
        icon: <GiEnergySword />,
        excerpt: "A simple hotel reservation web application using JSP...",
        link: "https://github.com/sayuru-akash/hotel-reservation-system"
      },
      {
        id: "music-notation-recogntion",
        title: "Music Recognition Website",
        file: "https://raw.githubusercontent.com/sayuru-akash/music-notation-recognizer/main/README.md",
        icon: <RiNewspaperFill />,
        excerpt: "Music notation recognition system using Python, OpenCV...",
        link: "https://github.com/sayuru-akash/music-notation-recognizer"
      },
      {
        id: "sign-language-recogntion",
        title: "Hand Sign Recognition Website",
        file: "https://raw.githubusercontent.com/sayuru-akash/sign-language-recognizer/main/README.md",
        icon: <RiNewspaperFill />,
        excerpt: "Music notation recognition system using Python, OpenCV...",
        link: "https://github.com/sayuru-akash/sign-language-recognizer"
      },
      {
        id: "yshopping",
        title: "Android Shopping App",
        file: "https://raw.githubusercontent.com/sayuru-akash/yshopping-android-application/main/README.md",
        icon: <GiJumpingDog />,
        excerpt: "Android shopping application developed using Kotlin...",
        link: "https://github.com/sayuru-akash/yshopping-android-application"
      },
      {
        id: "accident-tracker",
        title: "Accident Tracking Website",
        file: "https://raw.githubusercontent.com/sayuru-akash/accident-tracking-website/main/README.md",
        icon: <CgFormatText />,
        excerpt: "Accident and insurance management web application...",
        link: "https://github.com/sayuru-akash/accident-tracking-website"
      },
      {
        id: "codeigniter-lms",
        title: "Codeigniter LMS",
        file: "https://raw.githubusercontent.com/sayuru-akash/main/README.md",
        icon: <AiFillAudio />,
        excerpt: "Speech emotion recognition using Keras and sklearn...",
        link: "https://saumikasenanayake.lk"
      },
      {
        id: "wordpress-lms",
        title: "WordPress LMS",
        file: "https://raw.githubusercontent.com/sayuru-akash/main/README.md",
        icon: <BiGame />,
        excerpt: "An interactable version of my resume, powered by Vue...",
        link: "https://smartitacademy.lk/"
      }
    ]
  }
];

export default bear;
