/* File dove inserire TUTTI i contenuti del sito: tecnologie usate, progetti, nomi, etc.. */

import {
    game_design,
    frontend,
    vr,
    director,
    eurosystem,
    iis_romero,
    level_up,
    mystery_house,
    tp,
    unito,
    css,
    git,
    html,
    javascript,
    reactjs,
    threejs,
    blender,
    cplus,
    csharp,
    maya,
    unity,
    unreal,
    vue,
    
    elemhands,
    airport,
    mario_party,
    peach_castle,
    sign_it_up,
    ski,
    sydney_stop,
    tune_it_up,
    death_corner,
    mobile,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      cv: "https://drive.google.com/file/d/1qt-rdA-30Rbakvhqz97imTjuoMsPrHSs/view?usp=sharing",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Technical Game Designer",
      icon: game_design,
    },
    {
      title: "VR/AR Developer",
      icon: vr,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Technical Director",
      icon: director,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
      mobile: true,
    },
    /* {
      name: "Unreal",
      icon: unreal,
      mobile: false
    }, */
    {
      name: "Csharp",
      icon: csharp,
      mobile: true,
    },/* 
    {
      name: "Cplus",
      icon: cplus,
      mobile: false,
    },   */  
    /* {
      name: "git",
      icon: git,
      mobile: false,
    },    
    {
      name: "Maya",
      icon: maya,
      mobile: false,
    },
    {
      name: "Blender",
      icon: blender,
      mobile: false,
    }, */
    {
      name: "HTML 5",
      icon: html,
      mobile: true,
    },
    {
      name: "CSS 3",
      icon: css,
      mobile: true,
    },
    {
      name: "JavaScript",
      icon: javascript,
      mobile: true,
    },
    {
      name: "React JS",
      icon: reactjs,
      mobile: true,
    },
    {
      name: "Three JS",
      icon: threejs,
      mobile: true,
    },
    {
      name: "Vue",
      icon: vue,
      mobile: true,
    },
  ];
  
  const experiences = [
    {
      title: "Game Master",
      company_name: "Mystery House",
      icon: mystery_house,
      iconBg: "#ab84ff",
      date: "November 2019 - December 2019",
      points: [
        "Acted as a game master in an escape room setting.",
        "Monitored players' progress throughout the game.",
        "Helped enhance players' overall enjoyment and satisfaction.",
        "Ensured adherence to game rules and safety protocols.",
        "Provided timely assistance and hints to players when needed.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "TP - a collaborative design studio",
      icon: tp,
      iconBg: "#000",
      date: "July 2021 - December 2021",
      points: [
        "Worked as both a developer and tester for the studio.",
        "Contributed to projects encompassing both frontend and backend development.",
        "Acquired proficiency in different coding styles and methodologies.",
        "Leveraged skills to ensure high-quality software development and testing.",
        "Continued learning and self-improvement to stay updated with industry trends.",
      ],
    },
    {
      title: "Computer Science Teacher",
      company_name: "IIS Romero",
      icon: iis_romero,
      iconBg: "#ab84ff",
      date: "December 2021 - July 2022",
      points: [
        "Taught computer science to students aged 14 to 18.",
        "Covered theoretical aspects of computer science, including: CS history, fundamentals of hardware and software, algorithms, data structures, and computational thinking",
        "Worked on practical projects with students, including web development and database management.",
        "Tailored lessons to suit the different learning styles and interests of students.",
        "Fostered a collaborative learning environment, where students can share ideas and learn from each other."
      ],
    },
    {
      title: "VR/AR/XR Developer",
      company_name: "EuroSystem S.p.A (ex Ragtag XR Studio)",
      icon: eurosystem,
      iconBg: "#000",
      date: "July 2022 - November 2023",
      points: [
        "Designed and created applications for virtual/augmented/mixed reality (VR/AR/MR) experiences.",
        "Optimized applications for performance and usability across different platforms and devices.",
        "Incorporated user feedback and iterative testing to refine and improve the VR/AR/MR experience.",
        "Scripted, in C#, interactive elements and animations to enhance user immersion",
        "Collaborated with artists, designers, and other developers to create engaging experiences."
      ],
    },
    {
      title: "Academic Researcher (VR/AR/XR Development)",
      company_name: "University of Turin",
      icon: unito,
      iconBg: "#ab84ff",
      date: "November 2023 - April 2024",
      points: [
        "Focused on developing applications tailored for academic research purposes, addressing specific research questions and objectives.",
        "Developed of a skiing simulator for a study on the effects of VR on physical performance.",
        "Integrated various hardware devices and sensors, such as eye-tracking devices, and motion capture systems.",
        "Conducted user studies and experiments to evaluate the effectiveness of VR/AR/XR applications in research settings.",
        "Collaborated with researchers from different disciplines to better understand the focus of the research itself."
      ],
    },
    {
      title: "Technical Game Designer & Technical Director",
      company_name: "Level Up Lab",
      icon: level_up,
      iconBg: "#000",
      date: "March 2023 - Present",
      points: [
        "Collaborating closely with the design team to conceptualize gameplay systems and features for 'Elemhands,' our first VR puzzle game, up for release in December 2024.",
        "Ensuring that gameplay systems and features are well-suited for VR immersion, considering factors such as player comfort, interaction design, and spatial awareness.",
        "Collaborating with the Turin's Institute for the Deaf to incorporate American Sign Language (ASL) as a game mechanic, promoting inclusivity and accessibility in 'Elemhands'.",
        "Offering support to the programming team in implementing VR-specific mechanics and interactions, such as hand tracking, gesture detection, and spatial audio, as well as working"+
        " with ASL as a unique gameplay element to enhance immersion and interaction, providing players with a novel and inclusive gaming experience.",
        "Conducting regular code reviews and quality assurance checks to maintain code cleanliness, consistency, and adherence to best practices.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "VR 4 Airport: "+
      "a use case on Experiential Training for Neuroatypical Users",
      year: 2021,
      description:
        "VR experience designed to help better" +
        " prepare neuroatypical users to face their worries and anxieties about the most socially" + 
        " challenging situations while easing them into a safe space created to help them overcome" + 
        " their fears.",
      tags: [
        {
          name: "VR",
          color: "orange-text-gradient",
        },
        {
          name: "AutismResearch",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: airport,
      source_code_link: "https://drive.google.com/file/d/19GRDMnfLeahDtLRuyXl4vDam9LYqWo07/view?usp=sharing",
    },
    {
      name: "Sydney, Stop!",
      year: 2022,
      description:
        "Project for my University course on Virtual Reality Systems, where I've developed a " +
        "VR asymmetric endless runner, where the player on the PC has to run and jump to avoid " +
        "obstacles and collecting coins, while the person in VR has to stop the other player " +
        "by grabbing rocks from the ground and throwing them at the runner.",
      tags: [
        {
          name: "VR",
          color: "orange-text-gradient",
        },
        {
          name: "GameProgramming",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: sydney_stop,
      source_code_link: "https://drive.google.com/file/d/1J1D51xomzrLpf_bToDNu6W0szhTgfehM/view?usp=sharing",
    },
    {
      name: "Death Around the Corner",
      year: 2022,
      description:
        "An example of an horror digital gamebook, developed with Unity and Yarn Spinner, where " +
        "the protagonist has to escape from a frightening dungeon, making choices that will lead to " +
        "multiple endings, some of which are deadly.",
      tags: [
        {
          name: "Gamebook",
          color: "orange-text-gradient",
        },
        {
          name: "GameDesign",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: death_corner,
    },
    {
      name: "Automation for videogames: a case study on Mario Party 8",
      year: 2023,
      description:
        "Project for my University course on Computer Vision and Image Processing where I've" +
        "developed an automation system for the minigame 'Logger Heads' of Mario Party 8, using " +
        "OpenCV and Python, which can play the game autonomously and achieve the highest score possible " +
        "by detecting when to make the character split the log and when to duck down.",
      tags: [
        {
          name: "ComputerVision",
          color: "orange-text-gradient",
        },
        {
          name: "Automation",
          color: "pink-text-gradient",
        },
        {
          name: "DolphinEmulator",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
      ],
      image: mario_party,
      source_code_link: "https://drive.google.com/file/d/1U7HTdIL1_Ikhj5ZvHHn5CdH4LJ5djJVt/view?usp=sharing",
    },
    {
      name: "Tune It Up! - An Asymmetric VR Karaoke Experience",
      year: 2023,
      description:
        "First of two projects for my University course on Game Design and Gamification" +
        " for which I've developed an asymmetric VR karaoke, based on the popular franchise" +
        " 'Singstar', where one player sings and the other player(s) get to vote and influence" +
        " the performance by using their own controllers.",
      tags: [
        {
          name: "VR",
          color: "orange-text-gradient",
        },
        {
          name: "GameProgramming",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: tune_it_up,
      source_code_link: "https://docs.google.com/presentation/d/1xgED7xwGq8g7ZF-o8PtW-luP55Bbl3Cx/edit?usp=sharing&ouid=107963032162216166104&rtpof=true&sd=true",
      second_src_link: "https://www.youtube.com/watch?v=LyL_aOQPHxI",
    },
    {
      name: "Sign It Up! - An AR Karaoke for learning American Sign Language (ASL) through music!",
      year: 2023,
      description:
        "Second of two projects for my University course on Game Design and Gamification where " +
        "I've designed a spin-off of the previous project, 'Tune It Up!', strongly focused on " + 
        "learning Sign Language through music, where the player has to sign the lyrics of the song",
      tags: [
        {
          name: "GameDesign",
          color: "orange-text-gradient",
        },
        {
          name: "PitchDocument",
          color: "pink-text-gradient",
        },
        {
          name: "SignLanguage",
          color: "pink-text-gradient",
        },
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
      ],
      image: sign_it_up,
      source_code_link: "https://docs.google.com/presentation/d/113P9ZSqolAlm3NOMcsNiJ8vho3j7UaaH/edit?usp=sharing&ouid=107963032162216166104&rtpof=true&sd=true",
    },
    {
      name: "360° VR Experience: Peach Castle from Super Mario 64",
      year: 2024,
      description:
        "Project for my University course on Computer Graphics where I've created a 360° VR experience, " + 
        "using Maya and Arnold, of Peach's Castle from Super Mario 64: the topics covered by this project " +
        "were 3D modelling, texture mapping, and animation.",
      tags: [
        {
          name: "Modelling",
          color: "orange-text-gradient",
        },
        {
          name: "Animation",
          color: "orange-text-gradient",
        },
        {
          name: "GameArt",
          color: "pink-text-gradient",
        },
        {
          name: "Maya",
          color: "blue-text-gradient",
        },
      ],
      image: peach_castle,
      second_src_link: "https://www.youtube.com/watch?v=Ndgx1ZSdL-U",
    },
    {
      name: "Pista 35 - Skiing Training",
      year: 2024,
      description:
        "VR experience designed for a study on the effects of VR on physical performance, " +
        "where users can train themselves on a realistic scenario based on the Pista 35 " + 
        "situated in Bardonecchia, Italy, right on what is known as the 'Ambin group': a sub-range " +
        "of the Cottian Alps, in the Western Alps of Italy, near the French border.",
      tags: [
        {
          name: "VR",
          color: "orange-text-gradient",
        },
        {
          name: "SportsTraining",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: ski,
    },
    {
      name: "Elemhands",
      year: 2024,
      description:
        "VR puzzle game, which will be released in December 2024, designed to let players " +
        "enjoy a unique and immersive experience, where they will have to solve environmental puzzles" +
        " using their hands and gestures based on American Sign Language (ASL).",
      tags: [
        {
          name: "VR",
          color: "orange-text-gradient",
        },
        {
          name: "SignLanguage",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
      ],
      image: elemhands,
      source_code_link: "https://drive.google.com/file/d/1VocUsGwd0-SYRN5TM3EBfR0IJZPt1iZ9/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, projects };