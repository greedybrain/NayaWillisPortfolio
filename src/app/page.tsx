import HomeAboutSection from "./_components/homeAboutSection/HomeAboutSection";
import HomeContactSection from "./_components/homeContactSection/HomeContactSection";
import HomeHeroSection from "./_components/homeHeroSection/HomeHeroSection";
import HomeProjectsSection from "./_components/homeProjectsSection/HomeProjectsSection";
// import HomeTeamSection from "./_components/homeTeamSection/HomeTeamSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeProjectsSection />
            {/* <HomeTeamSection /> */}
            <HomeContactSection />
        </main>
    );
}
