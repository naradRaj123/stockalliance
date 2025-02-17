import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mayank Mishra",
    designation: "Co-founder @investasia",
    image: image1,
    content:
      "Stock Alliance delivered a high-quality software solution that exceeded our expectations, enhancing both our efficiency and customer experience.",
  },
  {
    id: 2,
    name: "Gaurav Shrivastav",
    designation: "Founder @Integer infotech",
    image: image2,
    content:
      "Stock Alliance Private Limited delivered exactly what we needed, on time and within budget. Their team's expertise and support made the entire process smooth and stress-free.",
  }
];
