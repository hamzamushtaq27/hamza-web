import * as S from "./style";
import HomeIcon from "../../assets/icons/homeIcon.svg";
import SelfDiagnosisIcon from "../../assets/icons/SelfDiagnosisIcon.svg";
import AiConsultationIcon from "../../assets/icons/ai.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";
import HospitalIcon from "../../assets/icons/hospitalIcon.svg";

type MenuItemType = "홈" | "정신건강 진단" | "AI 상담" | "병원 찾기" | "마이";

interface NavigationProps {
  onMenuSelect?: (menuNumber: number) => void;
  selectedMenu: MenuItemType;
  setSelectedMenu: (menu: MenuItemType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  onMenuSelect,
  selectedMenu,
  setSelectedMenu,
}) => {
  const handleMenuClick = (menuName: MenuItemType): void => {
    setSelectedMenu(menuName);
    const menuNumber = getMenuNumber(menuName);
    if (onMenuSelect) {
      onMenuSelect(menuNumber);
    }
  };

  const getMenuNumber = (menuType: MenuItemType): number => {
    switch (menuType) {
      case "홈":
        return 1;
      case "정신건강 진단":
        return 2;
      case "AI 상담":
        return 3;
      case "병원 찾기":
        return 4;
      case "마이":
        return 5;
      default:
        return 1;
    }
  };

  const getMenuIcon = (menuName: MenuItemType, isActive: boolean) => {
    switch (menuName) {
      case "홈":
        return isActive ? HomeIcon : HomeIcon;
      case "정신건강 진단":
        return isActive ? SelfDiagnosisIcon : SelfDiagnosisIcon;
      case "AI 상담":
        return isActive ? AiConsultationIcon : AiConsultationIcon;
      case "병원 찾기":
        return isActive ? HospitalIcon : HospitalIcon;
      case "마이":
        return isActive ? ProfileIcon : ProfileIcon;
      default:
        return HomeIcon;
    }
  };

  return (
    <S.NavigationContainer>
      <S.MenuItem
        $isActive={selectedMenu === "홈"}
        onClick={() => handleMenuClick("홈")}
      >
        {selectedMenu === "홈" && <S.ActiveBar />}
        <S.IconWrapper $isActive={selectedMenu === "홈"}>
          <img src={getMenuIcon("홈", selectedMenu === "홈")} alt="홈" />
        </S.IconWrapper>
        <span>홈</span>
      </S.MenuItem>

      <S.MenuItem
        $isActive={selectedMenu === "정신건강 진단"}
        onClick={() => handleMenuClick("정신건강 진단")}
      >
        {selectedMenu === "정신건강 진단" && <S.ActiveBar />}
        <S.IconWrapper $isActive={selectedMenu === "정신건강 진단"}>
          <img
            src={getMenuIcon("정신건강 진단", selectedMenu === "정신건강 진단")}
            alt="정신건강 진단"
          />
        </S.IconWrapper>
        <span>정신건강 진단</span>
      </S.MenuItem>

      <S.MenuItem
        $isActive={selectedMenu === "AI 상담"}
        onClick={() => handleMenuClick("AI 상담")}
      >
        {selectedMenu === "AI 상담" && <S.ActiveBar />}
        <S.IconWrapper $isActive={selectedMenu === "AI 상담"}>
          <img
            src={getMenuIcon("AI 상담", selectedMenu === "AI 상담")}
            alt="AI 상담"
          />
        </S.IconWrapper>
        <span>AI 상담</span>
      </S.MenuItem>

      <S.MenuItem
        $isActive={selectedMenu === "병원 찾기"}
        onClick={() => handleMenuClick("병원 찾기")}
      >
        {selectedMenu === "병원 찾기" && <S.ActiveBar />}
        <S.IconWrapper $isActive={selectedMenu === "병원 찾기"}>
          <img src={getMenuIcon("병원 찾기", selectedMenu === "병원 찾기")} alt="병원 찾기" />
        </S.IconWrapper>
        <span>병원 찾기</span>
      </S.MenuItem>

      <S.MenuItem
        $isActive={selectedMenu === "마이"}
        onClick={() => handleMenuClick("마이")}
      >
        {selectedMenu === "마이" && <S.ActiveBar />}
        <S.IconWrapper $isActive={selectedMenu === "마이"}>
          <img src={getMenuIcon("마이", selectedMenu === "마이")} alt="마이" />
        </S.IconWrapper>
        <span>마이</span>
      </S.MenuItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
