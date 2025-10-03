import ScrollAnimation from "./scroll-animation";

export default function Footer() {
  return (
    <footer className="w-full bg-shadow/20 border-t border-gengar/30 py-8 px-6">
      <ScrollAnimation animation="ghost-fade">
        <div className="max-w-6xl mx-auto text-center text-purple-400/60">
          <p>© 2024 Dylan Dao · Haunting the web since 2021</p>
        </div>
      </ScrollAnimation>
    </footer>
  );
}