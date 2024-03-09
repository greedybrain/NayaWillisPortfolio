import AppSection from "../0_common/AppSection";
import Projects from "./projects/Projects";
// import FixedWidthContainer from "../FixedWidthContainer";
import { cn } from "@/lib/utils";

const HomeProjectsSection = () => {
    const getNums = () => {
        const nums = [];
        for (let i = 0; i < 1000; i++) {
            nums.push(i);
        }
        return nums;
    };

    return (
        <AppSection className={cn("bg-[#fabfe2] border-b-2 border-b-black")}>
            {/* <FixedWidthContainer>
            </FixedWidthContainer> */}
            <div
                className={cn(
                    "bg-black",
                    "flex",
                    "gap-10",
                    "h-[60px]",
                    "items-center",
                    "w-[9999px]",
                )}
            >
                <p
                    // key={index}
                    className={cn(
                        "border-2 border-blue-500",
                        "text-center text-lg text-white",
                        "w-[175px]",
                    )}
                >
                    Featured Projects
                </p>
                {/* {getNums().map((_, index) => {
                    return (
                        <p
                            key={index}
                            className={cn(
                                "border-2 border-blue-500",
                                "w-[500px]",
                            )}
                        >
                            Featured Projects
                        </p>
                    );
                })} */}
            </div>
            <Projects />
        </AppSection>
    );
};

export default HomeProjectsSection;
