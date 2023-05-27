import HeaderSection from '../components/header/HeaderSection';
import MainSection from '../components/main/MainSection';
import SearchSection from '../components/main/SearchSection';
import { useParams } from "react-router-dom";

const SectionPage = () => {

  const { titleSection } = useParams();

  return (
    <>
    <HeaderSection />
    <MainSection sectionTitle={titleSection}/>
    <SearchSection sectionTitle={titleSection}/>
    </>
  )
}

export default SectionPage;