export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-white",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-white",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-white",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-white",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-white",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Flight Radar",
    des: "A live flight tracking application that uses real-time data to display the locations of flights across the globe.",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/hivdabzn/Flight-Radar", // GitHub linki ekleyin
  },
  {
    id: 2,
    title: "JS Gmail Clone",
    des: "A Gmail clone built using JavaScript. It includes features such as email management, inbox display, and sending/receiving emails.",
    img: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/hivdabzn/JS-Gmail-Clone", // GitHub linki ekleyin
  },
  {
    id: 3,
    title: "Amazon Clone Project (React)",
    des: "A fully functional clone of the Amazon e-commerce platform built with React, allowing users to browse products, add them to the cart, and complete purchases.",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/hivdabzn/AmazonCloneProjesireact", // GitHub linki ekleyin
  },
  {
    id: 4,
    title: "React Native Instagram Clone",
    des: "An Instagram clone built with React Native. It includes features like user authentication, media uploading, and social interactions, replicating the Instagram experience on mobile devices.",
    img: "",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/hivdabzn/reactnative_instragramclone", // GitHub linki ekleyin
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Hivda was an absolute pleasure. Her professionalism, attention to detail, and commitment to delivering outstanding results were evident throughout our project. Hivda's enthusiasm and passion for development are truly inspiring. If you're looking to enhance your website and brand, Hivda is the perfect partner.",
    name: "Perihan Özbay",
    title: "CEO of InnovateTech",
  },
  {
    quote:
      "It was fantastic working with Hivda. She brings great expertise to the table, always focused on achieving the best outcome for the project. Her approach to development is innovative and highly professional. If you want someone who truly cares about your project, Hivda is the one to choose.",
    name: "Beritan Kızıl",
    title: "Product Manager at DigitalVision",
  },
  {
    quote:
      "Hivda's work is exceptional. She has a great understanding of both the technical and creative sides of web and mobile development. Throughout the project, she was communicative, proactive, and delivered high-quality results on time. Highly recommend her for any development needs.",
    name: "Zilan Bozan",
    title: "Lead Developer at TechXperts",
  },
  {
    quote:
      "Working with Hivda was a game changer. She is highly skilled, and her attention to detail ensures every part of the project is executed flawlessly. She's a reliable and professional partner, and it was a pleasure collaborating with her.",
    name: "Emir Demirtaş",
    title: "Marketing Director at WebSolutions",
  },
  {
    quote:
      "I highly recommend Hivda for any development work. Her creativity, technical skills, and ability to meet deadlines make her an invaluable asset to any project. Working with Hivda was an excellent experience, and I look forward to future collaborations.",
    name: "Ali Can Yılmaz",
    title: "Founder at Digital Hub",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
