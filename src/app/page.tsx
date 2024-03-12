import HomeAboutSection from "./_components/homeAboutSection/HomeAboutSection";
import HomeContactSection from "./_components/homeContactSection/HomeContactSection";
import HomeHeroSection from "./_components/homeHeroSection/HomeHeroSection";
import HomeProjectsSection from "./_components/homeProjectsSection/HomeProjectsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeProjectsSection />
            <HomeContactSection />
        </main>
    );
}
