import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import * as S from "./style";

interface UserProfile {
  email: string;
  nickname: string;
  profileImage: string; // DataURL or URL
  phoneNumber: string;
  birthDate: string;
}

const DUMMY_PROFILE: UserProfile = {
  email: "krddr3435@email.com",
  nickname: "krddr",
  profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
  phoneNumber: "010-5762-8452",
  birthDate: "2000-11-07",
};

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const error = ""
  const [editModal, setEditModal] = useState(false);
  const [pwModal, setPwModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [deactivateModal, setDeactivateModal] = useState(false);
  const [form, setForm] = useState<UserProfile>(DUMMY_PROFILE);
  const [imagePreview, setImagePreview] = useState<string>(DUMMY_PROFILE.profileImage);
  const [pwForm, setPwForm] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  const [pwMsg, setPwMsg] = useState("");
  // const [updateMsg, setUpdateMsg] = useState("");
  const updateMsg = ""
  const [deactivateMsg, setDeactivateMsg] = useState("");
  const [deactivated, setDeactivated] = useState(false);

  // 더미 사용자 정보 조회
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProfile(DUMMY_PROFILE);
      setForm(DUMMY_PROFILE);
      setImagePreview(DUMMY_PROFILE.profileImage);
      setLoading(false);
    }, 500);
  }, []);

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 이미지 파일 업로드 핸들러
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setForm((prev) => ({ ...prev, profileImage: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // 프로필 수정 (더미)
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setProfile({ ...profile!, ...form });
      setEditModal(false);
    }, 500);
  };

  // 비밀번호 변경 (더미)
  const handlePwChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPwMsg("");
    if (pwForm.newPassword !== pwForm.newPasswordConfirm) {
      setPwMsg("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    setTimeout(() => {
      setPwForm({ currentPassword: "", newPassword: "", newPasswordConfirm: "" });
      setPwModal(false);
    }, 500);
  };

  // 실제 로그아웃 동작
  const doLogout = () => {
    alert("로그아웃 되었습니다. (더미)");
    setLogoutModal(false);
    // 실제 API 예시 (주석처리)
    // localStorage.removeItem("accessToken");
    // window.location.replace("/login");
  };

  // 실제 계정 비활성화 동작
  const doDeactivate = () => {
    setDeactivateMsg("");
    setTimeout(() => {
      setDeactivateMsg("계정이 비활성화되었습니다. (더미)");
      setDeactivated(true);
      setDeactivateModal(false);
    }, 500);
    // 실제 API 예시 (주석처리)
    // try {
    //   const res = await fetch("/api/auth/deactivate", {
    //     method: "DELETE",
    //     headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
    //   });
    //   if (!res.ok) throw new Error("계정 비활성화 실패");
    //   setDeactivateMsg("계정이 비활성화되었습니다.");
    //   localStorage.removeItem("accessToken");
    //   setTimeout(() => window.location.replace("/login"), 1500);
    // } catch (e: any) {
    //   setDeactivateMsg(e.message);
    // }
  };

  if (loading) return <S.LoadingContainer>로딩 중...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>에러: {error}</S.ErrorContainer>;
  if (deactivated) return <S.DeactivatedContainer>계정이 비활성화되었습니다. (더미)</S.DeactivatedContainer>;
  if (!profile) return <S.NoDataContainer>사용자 정보 없음</S.NoDataContainer>;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>프로필</S.HeaderTitle>
      </S.Header>

      <S.ProfileSection>
        <S.ProfileImageContainer>
          <S.ProfileImage src={profile.profileImage || "https://via.placeholder.com/100"} alt="프로필" />
        </S.ProfileImageContainer>
        <S.ProfileName>{profile.nickname}</S.ProfileName>
        <S.ProfileEmail>{profile.email}</S.ProfileEmail>
      </S.ProfileSection>

      <S.InfoSection>
        <S.InfoItem>
          <S.InfoLabel>전화번호</S.InfoLabel>
          <S.InfoValue>{profile.phoneNumber}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>생년월일</S.InfoLabel>
          <S.InfoValue>{profile.birthDate}</S.InfoValue>
        </S.InfoItem>
      </S.InfoSection>

      <S.ButtonSection>
        <S.ActionButton onClick={() => setEditModal(true)}>
          프로필 수정
        </S.ActionButton>
        <S.ActionButton onClick={() => setPwModal(true)}>
          비밀번호 변경
        </S.ActionButton>
      </S.ButtonSection>

      <S.BottomSection>
        <S.SecondaryButton onClick={() => setLogoutModal(true)}>
          로그아웃
        </S.SecondaryButton>
        <S.DangerButton onClick={() => setDeactivateModal(true)}>
          계정 비활성화
        </S.DangerButton>
        {deactivateMsg && <S.Message $danger>{deactivateMsg}</S.Message>}
      </S.BottomSection>

      {/* 프로필 수정 모달 */}
      {editModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalHeader>
              <S.ModalTitle>프로필 수정</S.ModalTitle>
              <S.ModalClose onClick={() => setEditModal(false)}>&times;</S.ModalClose>
            </S.ModalHeader>
            <form onSubmit={handleUpdate}>
              <S.ImageUploadSection>
                <S.ImagePreview src={imagePreview || "https://via.placeholder.com/100"} alt="미리보기" />
                <S.ImageUploadButton htmlFor="profileImageUpload">이미지 변경</S.ImageUploadButton>
                <S.ImageUploadInput id="profileImageUpload" type="file" accept="image/*" onChange={handleImageChange} />
              </S.ImageUploadSection>
              
              <S.FormGroup>
                <S.FormLabel htmlFor="nickname">닉네임</S.FormLabel>
                <S.FormInput id="nickname" name="nickname" value={form.nickname} onChange={handleChange} placeholder="닉네임을 입력하세요" />
              </S.FormGroup>
              
              <S.FormGroup>
                <S.FormLabel htmlFor="phoneNumber">전화번호</S.FormLabel>
                <S.FormInput id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="전화번호를 입력하세요" />
              </S.FormGroup>
              
              <S.FormGroup>
                <S.FormLabel htmlFor="birthDate">생년월일</S.FormLabel>
                <S.FormInput id="birthDate" name="birthDate" type="date" value={form.birthDate} onChange={handleChange} />
              </S.FormGroup>
              
              <S.ModalButtonGroup>
                <S.PrimaryButton type="submit">저장</S.PrimaryButton>
              </S.ModalButtonGroup>
              {updateMsg && <S.Message>{updateMsg}</S.Message>}
            </form>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 비밀번호 변경 모달 */}
      {pwModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalHeader>
              <S.ModalTitle>비밀번호 변경</S.ModalTitle>
              <S.ModalClose onClick={() => setPwModal(false)}>&times;</S.ModalClose>
            </S.ModalHeader>
            <form onSubmit={handlePwChange}>
              <S.FormGroup>
                <S.FormLabel htmlFor="currentPassword">현재 비밀번호</S.FormLabel>
                <S.FormInput id="currentPassword" type="password" name="currentPassword" placeholder="현재 비밀번호" value={pwForm.currentPassword} onChange={e => setPwForm({ ...pwForm, currentPassword: e.target.value })} />
              </S.FormGroup>
              
              <S.FormGroup>
                <S.FormLabel htmlFor="newPassword">새 비밀번호</S.FormLabel>
                <S.FormInput id="newPassword" type="password" name="newPassword" placeholder="새 비밀번호" value={pwForm.newPassword} onChange={e => setPwForm({ ...pwForm, newPassword: e.target.value })} />
              </S.FormGroup>
              
              <S.FormGroup>
                <S.FormLabel htmlFor="newPasswordConfirm">새 비밀번호 확인</S.FormLabel>
                <S.FormInput id="newPasswordConfirm" type="password" name="newPasswordConfirm" placeholder="새 비밀번호 확인" value={pwForm.newPasswordConfirm} onChange={e => setPwForm({ ...pwForm, newPasswordConfirm: e.target.value })} />
              </S.FormGroup>
              
              <S.ModalButtonGroup>
                <S.PrimaryButton type="submit">변경</S.PrimaryButton>
              </S.ModalButtonGroup>
              {pwMsg && <S.Message $danger>{pwMsg}</S.Message>}
            </form>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 로그아웃 확인 모달 */}
      {logoutModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalHeader>
              <S.ModalTitle>로그아웃</S.ModalTitle>
              <S.ModalClose onClick={() => setLogoutModal(false)}>&times;</S.ModalClose>
            </S.ModalHeader>
            <S.ConfirmText>정말 로그아웃 하시겠습니까?</S.ConfirmText>
            <S.ModalButtonGroup>
              <S.PrimaryButton type="button" onClick={doLogout}>확인</S.PrimaryButton>
              <S.SecondaryButtonModal type="button" onClick={() => setLogoutModal(false)}>취소</S.SecondaryButtonModal>
            </S.ModalButtonGroup>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 계정 비활성화(탈퇴) 확인 모달 */}
      {deactivateModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalHeader>
              <S.ModalTitle>계정 비활성화</S.ModalTitle>
              <S.ModalClose onClick={() => setDeactivateModal(false)}>&times;</S.ModalClose>
            </S.ModalHeader>
            <S.ConfirmText>정말 계정을 비활성화(탈퇴)하시겠습니까?</S.ConfirmText>
            <S.ModalButtonGroup>
              <S.DangerButtonModal type="button" onClick={doDeactivate}>확인</S.DangerButtonModal>
              <S.SecondaryButtonModal type="button" onClick={() => setDeactivateModal(false)}>취소</S.SecondaryButtonModal>
            </S.ModalButtonGroup>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 모달이 열려 있을 때 NavigationBar 딤 오버레이 */}
      {(editModal || pwModal || logoutModal || deactivateModal) && <S.NavDim />}
    </S.Container>
  );
};

export default Profile;