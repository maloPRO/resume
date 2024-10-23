import PersonalInfo from "@/components/personalInfo";
import ProSummary from "@/components/proSummary";
import Proexperience from "@/components/proExperience";
import Achievements from "@/components/achievments";
import AddTraining from "@/components/addTraining";
import Declaration from "@/components/declaration";
import Education from "@/components/education";
import References from "@/components/references";
import Skills from "@/components/skills";
import Interests from "@/components/interests";
import { Metadata } from 'next';
import '../styles/App.css'


export const metadata: Metadata = {
  title: 'Resume Maker',
  description:
    'codingbeautydev.com: Coding - the art, the science, and the passion.',
};

export default function Home() {
  return (
    <div className="main">
      <PersonalInfo/>
      <ProSummary/>
      <Proexperience/>
      <Education/>
      <Skills/>
      <Achievements/>
      <AddTraining/>
      <Interests/>
      <References/>
      <Declaration/>
    </div>
  );
}
