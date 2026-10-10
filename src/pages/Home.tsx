import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { FoundingStory } from '../components/home/FoundingStory';
import { Values } from '../components/home/Values';
import { PlatformPreview } from '../components/home/PlatformPreview';
import { StructurePreview } from '../components/home/StructurePreview';
import { LatestNews } from '../components/home/LatestNews';
import { WhatsOn } from '../components/home/WhatsOn';
import { JoinCta } from '../components/home/JoinCta';
import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo();

  return (
    <>
      <Hero />
      <Stats />
      <FoundingStory />
      <Values />
      <PlatformPreview />
      <StructurePreview />
      <LatestNews />
      <WhatsOn />
      <JoinCta />
    </>
  );
}
