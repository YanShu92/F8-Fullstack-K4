"use client";

import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn, useSession, signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { setCookie, deleteCookie } from "cookies-next";
export function GoogleButton() {
  return (
    <Button
      startIcon={<GoogleIcon />}
      variant="contained"
      sx={{
        py: "5px",
        width: "300px",
        fontStyle: "italic",
        fontSize: "normal",
        color: "#000",
        textTransform: "none",
      }}
      onClick={() => {
        setCookie("loginGg", "google");
        signIn("google", { callbackUrl: "/profile" });
      }}
    >
      Đăng nhập với Google
    </Button>
  );
}

export function GoogleButtonProfile() {
  return (
    <Button
      startIcon={<GoogleIcon />}
      variant="contained"
      sx={{
        my: 2,
        fontStyle: "italic",
        fontSize: "normal",
        color: "#000",
        textTransform: "none",
      }}
      onClick={() => {
        setCookie("loginGg", "google");
        signIn("google", { callbackUrl: "/profile" });
      }}
    >
      Login
    </Button>
  );
}

export function GithubButton() {
  return (
    <Button
      startIcon={<GitHubIcon />}
      variant="contained"
      sx={{
        my: 2,
        bgcolor: "#000",
        fontStyle: "italic",
        textTransform: "none",
        fontSize: "normal",
        width: "300px",
        py: "5px",
        ":hover": {
          bgcolor: "#2d1b04c9",
        },
      }}
      onClick={() => {
        setCookie("loginGithub", "github");

        signIn("github", { callbackUrl: "/profile" });
      }}
    >
      Đăng nhập với Github
    </Button>
  );
}

export function GithubButtonProfile() {
  return (
    <Button
      startIcon={<GitHubIcon />}
      variant="contained"
      sx={{
        my: 2,
        bgcolor: "#000",
        fontStyle: "italic",
        textTransform: "none",
        fontSize: "normal",
        py: "5px",
        ":hover": {
          bgcolor: "#2d1b04c9",
        },
      }}
      onClick={() => {
        setCookie("loginGithub", "github");

        signIn("github", { callbackUrl: "/profile" });
      }}
    >
      Login
    </Button>
  );
}

export function BoxProfile({ props }) {
  return (
    <Button
      variant="contained"
      sx={{
        my: 2,
        bgcolor: "#000",
        fontStyle: "italic",
        textTransform: "none",
        fontSize: "normal",
        py: "5px",
        ":hover": {
          bgcolor: "#2d1b04c9",
        },
      }}
    >
      {props}
    </Button>
  );
}

export function Logout() {
  return (
    <Button
      startIcon={<LogoutIcon />}
      variant="contained"
      sx={{
        my: 2,
        bgcolor: "red",
        textTransform: "none",
        fontSize: "normal",
        py: "5px",
        ":hover": {
          bgcolor: "orange",
        },
      }}
      onClick={() => {
        signOut({ callbackUrl: "/login" });
        deleteCookie("loginGg");
        deleteCookie("loginGithub");
      }}
    >
      Đăng xuất
    </Button>
  );
}
