import HomeAboutSection from "./_components/homeAboutSection/HomeAboutSection";
import HomeHeroSection from "./_components/homeHeroSection/HomeHeroSection";
import HomeProjectsSection from "./_components/homeProjectsSection/HomeProjectsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeProjectsSection />
        </main>
    );
}
