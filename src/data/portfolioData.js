import img1 from '../assets/project_img1.png';
import img2 from '../assets/project_img2.png';
import img3 from '../assets/project_img3.png';
import img4 from '../assets/project_img4.png';

export const portfolioData = [
  {
    id: "ecommerce-solution",
    title: "Premium E-Commerce Concept",
    category: "E-Commerce",
    shortDesc: "A high-performance online shopping platform designed for modern retail.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    featured: true,
    thumbnail: "bg-gray-800",
    image: img1,
    problem: "Many retail businesses struggle to create an online store that is both visually stunning and capable of handling high traffic and large inventories without slowing down.",
    solution: "We engineered a robust e-commerce architecture concept that features lightning-fast load times, a seamless checkout experience, and a scalable product management system.",
    features: ["Custom Shopping Cart", "Advanced Product Filtering", "Secure Payment Gateway Integration", "Admin Dashboard", "User Accounts & Wishlists", "Mobile-First Design"],
    outcome: "This solution template provides a foundation for businesses to launch their digital storefronts quickly, ensuring high conversion rates and a premium user experience."
  },
  {
    id: "corporate-business",
    title: "Corporate Business Template",
    category: "Business",
    shortDesc: "A professional and authoritative website concept for corporate firms.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    featured: false,
    thumbnail: "bg-gray-800",
    image: img2,
    problem: "Corporate entities often need a digital presence that instantly communicates trust, authority, and professionalism to their clients and partners.",
    solution: "We designed a clean, structured corporate website template focused on clear communication, service showcases, and lead generation.",
    features: ["Service Showcases", "Team Profiles", "Appointment Booking Logic", "Secure Contact Forms", "CMS Integration Ready"],
    outcome: "A highly professional digital footprint designed to increase client trust, streamline inquiries, and establish a strong brand identity."
  },
  {
    id: "creative-portfolio",
    title: "Creative Agency Portfolio",
    category: "Portfolio",
    shortDesc: "An immersive digital portfolio demo for creatives and agencies.",
    tech: ["React", "Framer Motion", "CSS Grid"],
    featured: false,
    thumbnail: "bg-gray-800",
    image: img3,
    problem: "Creatives and agencies need a visually stunning way to showcase their high-resolution work without compromising website loading speed.",
    solution: "We developed a minimalist, highly optimized portfolio layout with smooth page transitions, dynamic masonry galleries, and lazy loading techniques.",
    features: ["Masonry Image Grid", "Smooth Page Transitions", "High-Res Image Optimization", "Minimalist UI", "Interactive Contact Section"],
    outcome: "A stunning digital portfolio structure that loads instantly, providing an immersive viewing experience to help creatives secure high-profile clients."
  },
  {
    id: "saas-landing-page",
    title: "SaaS Launch Landing Page",
    category: "Landing Pages",
    shortDesc: "A high-converting landing page concept for new product launches.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    featured: false,
    thumbnail: "bg-gray-800",
    image: img4,
    problem: "Startups need conversion-optimized landing pages to capture early-access leads and clearly communicate their product's value proposition before launch.",
    solution: "We designed a high-impact, single-page layout with a compelling copy structure, strong clear CTAs, and integrated lead-capture mechanisms.",
    features: ["Conversion-Optimized Layout", "Lead Capture Form Integration", "A/B Testing Ready", "Fast Loading Performance", "Responsive Design"],
    outcome: "This landing page template is engineered to maximize ad traffic ROI, successfully capturing qualified leads and driving product awareness."
  }
];
