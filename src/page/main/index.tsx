import { useState } from "react";
import Navigation from "../../Components/NavigationBar";
import Home from "../../Components/Home";
import Profile from "../../Components/Profile";
import SelfDiagnosis from "../../Components/SelfDiagnosis";
import AiConsultation from "../../Components/aiConsultation";
import * as S from './style';

const Main = () => {
  const [selectedMenuNumber, setSelectedMenuNumber] = useState<number>(1);

  const renderMainContent = () => {
    switch (selectedMenuNumber) {
      case 1:
        return <Home />;
      case 2:
        return <SelfDiagnosis />;
      case 3:
        return <AiConsultation />;
      case 4:
        return <Profile />;
      default:
        return <Home />;
    }
  };

  const handleMenuSelect = (menuNumber: number) => {
    setSelectedMenuNumber(menuNumber);
  };
  return (
    <div>
      <S.MainContent>{renderMainContent()}</S.MainContent>
      <Navigation onMenuSelect={handleMenuSelect} />
    </div>
  );
};

export default Main;
