import { useState } from "react";
import Navigation from "../../Components/NavigationBar";
import Home from "../../Components/Home";
import Profile from "../../Components/Profile";
import SelfDiagnosis from "../../Components/SelfDiagnosis";
import AiConsultation from "../../Components/aiConsultation";
import * as S from "./style";
import FindHospital from "../../Components/FindHostpital";

const menuNumberToName = (
  num: number
): "홈" | "정신건강 진단" | "AI 상담" | "마이" => {
  switch (num) {
    case 1:
      return "홈";
    case 2:
      return "정신건강 진단";
    case 3:
      return "AI 상담";
    case 4:
      return "마이";
    default:
      return "홈";
  }
};

const menuNameToNumber = (name: string): number => {
  switch (name) {
    case "홈":
      return 1;
    case "정신건강 진단":
      return 2;
    case "AI 상담":
      return 3;
    case "마이":
      return 4;
    default:
      return 1;
  }
};

const Main = () => {
  const [selectedMenuNumber, setSelectedMenuNumber] = useState<number>(1);
  const [selectedMenu, setSelectedMenu] = useState<
    "홈" | "정신건강 진단" | "AI 상담" | "마이"
  >("홈");

  const renderMainContent = () => {
    switch (selectedMenuNumber) {
      case 1:
        return (
          <Home
            onGoToDiagnosis={() => {
              setSelectedMenuNumber(2);
              setSelectedMenu("정신건강 진단");
            }}
          />
        );
      case 2:
        return <SelfDiagnosis />;
      case 3:
        return <AiConsultation />;
      case 4:
        return <FindHospital />;
      case 5:
        return <Profile />;
      default:
        return <Home />;
    }
  };

  const handleMenuSelect = (menuNumber: number) => {
    setSelectedMenuNumber(menuNumber);
    setSelectedMenu(menuNumberToName(menuNumber));
  };

  return (
    <div>
      <S.MainContent>{renderMainContent()}</S.MainContent>
      <Navigation
        onMenuSelect={handleMenuSelect}
        selectedMenu={selectedMenu}
        setSelectedMenu={(menu) => {
          setSelectedMenu(menu);
          setSelectedMenuNumber(menuNameToNumber(menu));
        }}
      />
    </div>
  );
};

export default Main;
