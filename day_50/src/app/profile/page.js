import { signIn, useSession } from "next-auth/react";
import { Link } from "next/link";
export const metadata = {
  title: "Profile",
};

const Profile = () => {
  const { data } = useSession();
  console.log(data);
  return <div></div>;
};

export default Profile;
