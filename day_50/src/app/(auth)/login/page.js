import {
  GithubButton,
  GoogleButton,
} from "@/app/components/loginButton/loginButton";
import { Box, Typography } from "@mui/material";
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
        <GoogleButton />
        <GithubButton />
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
