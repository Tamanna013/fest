import { Card, CardContent } from "./card"; // Assuming these components are defined in the card file
import { Star } from "lucide-react"; // Replace this with your fest logo or symbol

// Define the type for a testimonial
type Testimonial = {
  name: string;
  content: string;
};

// Sample testimonial data
const testimonials: Testimonial[] = [
  { name: "Rahul Sharma", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  { name: "Meera Joshi", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  { name: "Amit Verma", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  { name: "Riya Patel", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" }
];

// Define the Testimonials component
export default function Testimonials(): JSX.Element {
  return (
    <div className="bg-black p-10 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-blue-800 to-black border-2 border-blue-500 rounded-2xl p-8 w-140 h-[500px] relative overflow-hidden shadow-2xl transition-transform transform hover:scale-105"
        >
          {/* Fest Symbol inside the card */}
          <div className="absolute top-3 left-3 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <Star size={28} /> {/* Replace with your fest symbol/logo */}
          </div>

          <CardContent className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            {/* Testimonial content with padding at the top and big quotes */}
            <p className="text-white text-2xl mb-6 relative px-6 flex-1 flex items-center justify-center pt-12">
              <span className="text-6xl absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 text-blue-300 opacity-40">“</span>
              {testimonial.content}
              <span className="text-6xl absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 text-blue-300 opacity-40">”</span>
            </p>
            {/* Name at the bottom-right corner */}
            <h3 className="text-white font-bold absolute bottom-4 right-4 text-lg">{testimonial.name}</h3>
          </CardContent>

          {/* Adding an image as the background with faint blue-black glow effect */}
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/brick.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-black opacity-20 rounded-xl"></div>
        </Card>
      ))}
    </div>
  );
}
