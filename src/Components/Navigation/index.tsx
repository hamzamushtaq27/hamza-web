import { useState } from "react";
import * as S from "./style";

type MenuItemType =
  | "홈"
  | "정신건강 진단"
  | "AI 상담"
  | "마이페이지";

interface NavigationProps {
  onMenuSelect?: (menuNumber: number) => void;
  mode?: number; // mode 속성 추가
}

const Navigation: React.FC<NavigationProps> = ({ onMenuSelect }) => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItemType>("홈");

  const handleMenuClick = (menuName: MenuItemType): void => {
    setSelectedMenu(menuName);
    const menuNumber = getMenuNumber(menuName);

    // 부모 컴포넌트에 선택된 메뉴 번호 전달
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
      case "마이페이지":
        return 4;
      default:
        return 1;
    }
  };

  // const getMenuIcon = (menuName: MenuItemType, isActive: boolean) => {
  //   switch (menuName) {
  //     case "요약":
  //       return isActive ? playIcon : globeIcon;
  //     case "기능 명세서":
  //       return isActive ? bookIcon_p : bookIcon;
  //     case "캘린더":
  //       return isActive ? calendarIcon_p : calendarIcon;
  //     case "칸반 보드":
  //       return isActive ? boardIcon_p : boardIcon;
  //     case "이슈":
  //       return isActive ? issueIcon_p : issueIcon;
  //     case "목록":
  //       return isActive ? listIcon_p : listIcon;
  //     default:
  //       return globeIcon;
  //   }
  // };

  return (
    <S.NavigationContainer>
      <S.MenuItem
        className={selectedMenu === "홈" ? "active" : ""}
        onClick={() => handleMenuClick("홈")}
      >
        {selectedMenu === "홈" && <S.ActiveBar />}
        <S.IconWrapper>
          {/* <img src={getMenuIcon("목록", selectedMenu === "목록")} alt="목록" /> */}
        </S.IconWrapper>
        <span>홈</span>
      </S.MenuItem>

      <S.MenuItem
        className={selectedMenu === "정신건강 진단" ? "active" : ""}
        onClick={() => handleMenuClick("정신건강 진단")}
      >
        {selectedMenu === "정신건강 진단" && <S.ActiveBar />}
        <S.IconWrapper>
          {/* <img src={getMenuIcon("목록", selectedMenu === "목록")} alt="목록" /> */}
        </S.IconWrapper>
        <span>정신건강 진단</span>
      </S.MenuItem>

      <S.MenuItem
        className={selectedMenu === "AI 상담" ? "active" : ""}
        onClick={() => handleMenuClick("AI 상담")}
      >
        {selectedMenu === "AI 상담" && <S.ActiveBar />}
        <S.IconWrapper>
          {/* <img src={getMenuIcon("목록", selectedMenu === "목록")} alt="목록" /> */}
        </S.IconWrapper>
        <span>AI 상담</span>
      </S.MenuItem>
      <S.MenuItem
        className={selectedMenu === "마이페이지" ? "active" : ""}
        onClick={() => handleMenuClick("마이페이지")}
      >
        {selectedMenu === "마이페이지" && <S.ActiveBar />}
        <S.IconWrapper>
          {/* <img src={getMenuIcon("목록", selectedMenu === "목록")} alt="목록" /> */}
        </S.IconWrapper>
        <span>마이페이지</span>
      </S.MenuItem>
    </S.NavigationContainer>
  );
};

export default Navigation;
