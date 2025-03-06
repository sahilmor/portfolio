import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AboutSection from "./components/AboutSection"
import Skills from "./components/SkillsSection"
import ExperienceSection from "./components/ExperienceSection"
// import AchievementSection from "./components/AchievementSection"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const page = () => {
  return (
    <div>
    <Tabs defaultValue="about" className="w-full p-4">
      <TabsList className="md:grid w-full grid-cols-3 bg-black/40 text-white">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        {/* <TabsTrigger value="achievements">Achievement</TabsTrigger> */}
      </TabsList>
      <TabsContent value="about">
        <AboutSection />
      </TabsContent>
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      <TabsContent value="experience">
        <ExperienceSection />
      </TabsContent>
      {/* <TabsContent value="achievements">
        <AchievementSection />
      </TabsContent> */}
    </Tabs>
    <ShootingStars />
    <StarsBackground />
    </div>
  )
}

export default page