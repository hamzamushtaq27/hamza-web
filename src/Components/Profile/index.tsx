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
  email: "dummy@email.com",
  nickname: "더미유저",
  profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
  phoneNumber: "010-1234-5678",
  birthDate: "2000-01-01",
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

  if (loading) return <div style={{textAlign:'center',marginTop:60}}>로딩 중...</div>;
  if (error) return <div style={{textAlign:'center',marginTop:60}}>에러: {error}</div>;
  if (deactivated) return <div style={{textAlign:'center',marginTop:60}}>계정이 비활성화되었습니다. (더미)</div>;
  if (!profile) return <div style={{textAlign:'center',marginTop:60}}>사용자 정보 없음</div>;

  return (
    <S.ProfileContainer>
      <S.ProfileCard>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
          <S.ProfileImage src={profile.profileImage || "https://via.placeholder.com/100"} alt="프로필" />
          <S.ProfileTitle>{profile.nickname}</S.ProfileTitle>
          <S.ProfileEmail>{profile.email}</S.ProfileEmail>
        </div>
        <div style={{ fontSize: 16, color: '#444', marginBottom: 14 }}>
          <div style={{ marginBottom: 10 }}><b style={{ color: '#6c757d' }}>전화번호:</b> {profile.phoneNumber}</div>
          <div style={{ marginBottom: 10 }}><b style={{ color: '#6c757d' }}>생년월일:</b> {profile.birthDate}</div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <S.ProfileButton $primary style={{ flex: 1 }} onClick={() => setEditModal(true)}>프로필 수정</S.ProfileButton>
          <S.ProfileButton $primary style={{ flex: 1 }} onClick={() => setPwModal(true)}>비밀번호 변경</S.ProfileButton>
        </div>
        <S.ProfileDivider />
        <div style={{ display: 'flex', gap: 12 }}>
          <S.ProfileButton style={{ flex: 1 }} onClick={() => setLogoutModal(true)}>로그아웃</S.ProfileButton>
          <S.ProfileButton $danger style={{ flex: 1 }} onClick={() => setDeactivateModal(true)}>계정 비활성화(탈퇴)</S.ProfileButton>
        </div>
        {deactivateMsg && <S.ProfileMsg $danger>{deactivateMsg}</S.ProfileMsg>}
      </S.ProfileCard>

      {/* 프로필 수정 모달 */}
      {editModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalClose onClick={() => setEditModal(false)}>&times;</S.ModalClose>
            <S.ModalTitle>프로필 수정</S.ModalTitle>
            <form onSubmit={handleUpdate}>
              <S.ProfileImageUploadWrapper>
                <S.ProfileImagePreview src={imagePreview || "https://via.placeholder.com/100"} alt="미리보기" />
                <S.ProfileImageUploadButton htmlFor="profileImageUpload">이미지 업로드</S.ProfileImageUploadButton>
                <S.ProfileImageUploadInput id="profileImageUpload" type="file" accept="image/*" onChange={handleImageChange} />
              </S.ProfileImageUploadWrapper>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="nickname">닉네임</S.CustomInputLabel>
                <S.CustomInput id="nickname" name="nickname" value={form.nickname} onChange={handleChange} placeholder="닉네임을 입력하세요" />
              </S.CustomInputWrapper>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="phoneNumber">전화번호</S.CustomInputLabel>
                <S.CustomInput id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="전화번호를 입력하세요" />
              </S.CustomInputWrapper>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="birthDate">생년월일</S.CustomInputLabel>
                <S.CustomInput id="birthDate" name="birthDate" type="date" value={form.birthDate} onChange={handleChange} placeholder="생년월일" />
              </S.CustomInputWrapper>
              <S.ProfileButton $primary type="submit" style={{ width: '100%', marginTop: 8 }}>저장</S.ProfileButton>
              {updateMsg && <S.ProfileMsg>{updateMsg}</S.ProfileMsg>}
            </form>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 비밀번호 변경 모달 */}
      {pwModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalClose onClick={() => setPwModal(false)}>&times;</S.ModalClose>
            <S.ModalTitle>비밀번호 변경</S.ModalTitle>
            <form onSubmit={handlePwChange}>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="currentPassword">현재 비밀번호</S.CustomInputLabel>
                <S.CustomInput id="currentPassword" type="password" name="currentPassword" placeholder="현재 비밀번호" value={pwForm.currentPassword} onChange={e => setPwForm({ ...pwForm, currentPassword: e.target.value })} />
              </S.CustomInputWrapper>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="newPassword">새 비밀번호</S.CustomInputLabel>
                <S.CustomInput id="newPassword" type="password" name="newPassword" placeholder="새 비밀번호" value={pwForm.newPassword} onChange={e => setPwForm({ ...pwForm, newPassword: e.target.value })} />
              </S.CustomInputWrapper>
              <S.CustomInputWrapper>
                <S.CustomInputLabel htmlFor="newPasswordConfirm">새 비밀번호 확인</S.CustomInputLabel>
                <S.CustomInput id="newPasswordConfirm" type="password" name="newPasswordConfirm" placeholder="새 비밀번호 확인" value={pwForm.newPasswordConfirm} onChange={e => setPwForm({ ...pwForm, newPasswordConfirm: e.target.value })} />
              </S.CustomInputWrapper>
              <S.ProfileButton $primary type="submit" style={{ width: '100%', marginTop: 8 }}>비밀번호 변경</S.ProfileButton>
              {pwMsg && <S.ProfileMsg>{pwMsg}</S.ProfileMsg>}
            </form>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 로그아웃 확인 모달 */}
      {logoutModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalClose onClick={() => setLogoutModal(false)}>&times;</S.ModalClose>
            <S.ModalTitle>로그아웃</S.ModalTitle>
            <div style={{ textAlign: 'center', fontSize: 17, color: '#444', marginBottom: 10 }}>
              정말 로그아웃 하시겠습니까?
            </div>
            <S.ConfirmModalButtonWrapper>
              <S.ProfileButton $primary type="button" onClick={doLogout}>확인</S.ProfileButton>
              <S.ProfileButton type="button" onClick={() => setLogoutModal(false)}>취소</S.ProfileButton>
            </S.ConfirmModalButtonWrapper>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 계정 비활성화(탈퇴) 확인 모달 */}
      {deactivateModal && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalClose onClick={() => setDeactivateModal(false)}>&times;</S.ModalClose>
            <S.ModalTitle>계정 비활성화(탈퇴)</S.ModalTitle>
            <div style={{ textAlign: 'center', fontSize: 17, color: '#444', marginBottom: 10 }}>
              정말 계정을 비활성화(탈퇴)하시겠습니까?
            </div>
            <S.ConfirmModalButtonWrapper>
              <S.ProfileButton $danger type="button" onClick={doDeactivate}>확인</S.ProfileButton>
              <S.ProfileButton type="button" onClick={() => setDeactivateModal(false)}>취소</S.ProfileButton>
            </S.ConfirmModalButtonWrapper>
          </S.ModalBox>
        </S.ModalBackground>
      )}

      {/* 모달이 열려 있을 때 NavigationBar 딤 오버레이 */}
      {(editModal || pwModal || logoutModal || deactivateModal) && <S.NavDim />}
    </S.ProfileContainer>
  );
};

export default Profile;
