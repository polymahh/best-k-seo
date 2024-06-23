import { config } from "@/lib/config";
import image1 from "@/public/images/team-01.png";
import image2 from "@/public/images/team-02.png";
import image3 from "@/public/images/team-03.png";
import image4 from "@/public/images/team-04.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Devid Smith",
    designation: "Marketing Director",
    image: image1,
    content: `We've seen a significant boost in our online visibility and traffic since partnering with ${config.siteTitleShort}. Their tailored SEO strategies and seamless integrations with our existing tools have streamlined our processes and provided us with actionable insights`,
  },
  {
    id: 2,
    name: "Jhon Abraham",
    designation: "CEO",
    image: image2,
    content: `${config.siteTitleShort} transformed our SEO game. Their in-depth audits and on-page optimizations have not only improved our search engine rankings but also enhanced the overall user experience of our website. The automated reporting feature has been a game-changer, allowing us to stay on top of our metrics `,
  },
  {
    id: 3,
    name: "Maria Blanco",
    designation: "Small Business Owner",
    image: image3,
    content: `Working with ${config.siteTitleShort} has been a fantastic experience. Their expertise in local SEO helped us attract more customers from our area, and the real-time analytics integration has made it easy to track our progress. Our online presence has never been stronger!`,
  },
  {
    id: 4,
    name: "Kristen Harper",
    designation: "Chief Marketing Officer",
    image: image4,
    content: `${config.siteTitleShort} has been instrumental in driving our online growth. Their comprehensive SEO audits and strategic keyword research have significantly increased our website traffic and lead generation. The team's professionalism and expertise have exceeded our expectations`,
  },
];
