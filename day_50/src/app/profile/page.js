"use client";
import { signIn, useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import { Link } from "next/link";
import { hasCookie } from "cookies-next";
import {
  GoogleButtonProfile,
  GithubButtonProfile,
  BoxProfile,
  Logout,
} from "../components/loginButton/loginButton";
// export const metadata = {
//   title: "Profile",
// };

const Profile = () => {
  const { data } = useSession();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#7878AE",
        // display: "flex",
        position: "fixed",
        inset: 0,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "gray",
          width: "100%",
          height: "50px",
        }}
      ></Box>
      <Box
        sx={{
          width: "80%",
          margin: "30px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={data?.user.image}
            alt="avatar"
            sx={{ width: "50px", height: "50px", borderRadius: "50px" }}
          ></Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", color: "red" }}>
              {data?.user.name}
            </Typography>
            <Typography sx={{ fontStyle: "itatlic", fontSize: "13px" }}>
              {data?.user.email}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {hasCookie("loginGg") ? (
              <BoxProfile props={data?.user.name} />
            ) : (
              <GoogleButtonProfile />
            )}
            {hasCookie("loginGithub") ? (
              <BoxProfile props={data?.user.name} />
            ) : (
              <GithubButtonProfile />
            )}
          </Box>
          <Logout />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
