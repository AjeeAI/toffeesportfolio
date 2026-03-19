export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-24 flex justify-between items-center border-t border-surfaceHighest text-label-md text-gray-500">
      <p>Deborah Ojo © 2024 All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
      </div>
    </footer>
  );
}