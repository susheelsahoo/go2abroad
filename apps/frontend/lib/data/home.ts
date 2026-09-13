export type Destination = { name: string; slug: string; description: string; image: string; flag: string };
export type University = { name: string; city: string; country: string; initials: string; accent: string; course: string; fee: string };

export const destinations: Destination[] = [
  { name: "United Kingdom", slug: "uk", description: "World-class degrees, rich culture and global career pathways.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85", flag: "🇬🇧" },
  { name: "Australia", slug: "australia", description: "Innovative learning in a vibrant, welcoming student community.", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=85", flag: "🇦🇺" },
  { name: "Canada", slug: "canada", description: "Career-focused education with an excellent quality of life.", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=85", flag: "🇨🇦" },
  { name: "United States", slug: "usa", description: "Shape your future at some of the world's leading institutions.", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=85", flag: "🇺🇸" },
];

export const universities: University[] = [
  { name: "University of Manchester", city: "Manchester", country: "United Kingdom", initials: "UM", accent: "#d8523e", course: "MSc Data Science", fee: "£28,000 / year" },
  { name: "Monash University", city: "Melbourne", country: "Australia", initials: "MU", accent: "#e5a92f", course: "Master of Business", fee: "A$44,000 / year" },
  { name: "University of Toronto", city: "Toronto", country: "Canada", initials: "UT", accent: "#1572a1", course: "MEng Computer Engineering", fee: "C$56,000 / year" },
];

export const courses = [
  ["Computer Science", "Build the future with a degree in technology.", "⌘"], ["Business & Management", "Turn ideas into impact across the world.", "↗"], ["Engineering", "Design solutions for a changing world.", "⌁"], ["Healthcare", "Make a difference where it matters most.", "+"],
];

export const faqs = [
  ["When should I start planning to study abroad?", "Ideally, start 8–12 months before your preferred intake. Our counsellors can help you map out the right timeline."],
  ["How do I choose the right country and university?", "We look at your goals, academic profile, budget and preferred lifestyle to create a shortlist that fits you."],
  ["Can Go2Abroad help with scholarships and funding?", "Yes. We can help you discover relevant scholarships and understand your options for funding your education."],
];
