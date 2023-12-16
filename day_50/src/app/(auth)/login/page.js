import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn, useSession } from "next-auth/react";
export const metadata = {
  title: "Đăng nhập",
};

const Login = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#7878AE",
        display: "flex",
        position: "fixed",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "450px",
          bgcolor: "#fff",
          borderRadius: "8px",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            px: 1,
            marginY: "30px",
          }}
        >
          Đăng nhập
        </Typography>
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
          //   onClick={() => {
          //     signIn("google", { callbackUrl: "/profile" });
          //   }}
        >
          Đăng nhập với Google
        </Button>
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
          //   onClick={signIn("github", { callbackUrl: "/profile" })}
        >
          Đăng nhập với Github
        </Button>
        <Typography
          sx={{
            fontSize: "13px",
            fontStyle: "italic",
          }}
        >
          Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị
          khác
        </Typography>
      </Box>
    </Box>
  );
};
export default Login;
