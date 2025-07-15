// import * as S from "./style";

const Profile = () => {

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.replace("/login");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page content.</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Profile;
