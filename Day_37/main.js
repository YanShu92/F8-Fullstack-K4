import { client } from "./client.js";
import { config } from "./config.js";
const { SERVER_API_AUTH } = config;

client.setUrl(SERVER_API_AUTH);
const app = {
  root: document.querySelector(".container"),
  isLogin: function () {
    const status = localStorage.getItem("access_token") ? true : false;
    return status;
  },
  render: function () {
    let html;
    if (!this.isLogin()) {
      html = `<header class="header">
        <div class="logo">
          <img src="./imgs/logo.svg" alt="logo" />
        </div>
        <div class="login">
          <img src="./imgs/profile.svg" alt="login-icon" />
          <span>Login</span>
        </div>
      </header>
      <main class="main">
        <article>
          <div class="posts">
                <span class="loader"></span>
          </div>
        </article>
        <aside>
          <div class="subscribe">
            <h3>Subscribe to Premium</h3>
            <p>
              Subscribe to unlock new features and if eligible, receive a
              share of ads revenue.
            </p>
            <button>Subscribe</button>
          </div>
          <div class="trends">
            <h3>Trends for you</h3>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>#zkSync</p>
              <span>113k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Chúc</p>
              <span>22.3k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Chào</p>
              <span>22.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Ăn</p>
              <span>33.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Nhiều</p>
              <span>22.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>#Web3</p>
              <span>23.1k posts</span>
            </div>
            <button class="btn-show">Show more</button>
          </div>
        </aside>
      </main>`;
      this.root.innerHTML = html;
    } else {
      html = `<header class="header">
        <div class="logo">
          <img src="./imgs/logo.svg" alt="logo" />          
        </div>
        <div class="logout-box">
            <span class="profile">Chào bạn: <span class="user-name-header">Loading...</span></span>
            <button class="btn btn-logout">Đăng xuất</button>          
        </div>
      </header>
      <main class="main">
        <article>
            <div class="user-post">
                <div class="avatar-user">
                    <img src="./imgs/avatar.jpg" alt="avatar-user" />
                </div>
                <div class="user-post-box">
                    <div class="user-name">Loading</div>
                    <input type="text" class="user-title" placeholder="Please Enter The Title" required>
                    <textarea name="user-post-content" id="user-post-content" cols="30" rows="10" class="user-post-content" placeholder="Please Enter the Content"></textarea>
                    <input type="text" class="picker" placeholder="Set Time to Post">
                    <button class="btn-post">Post</button>
                </div>
            </div>
          <div class="posts">
            <span class="loader"></span>
          </div>
        </article>
        <aside>
          <div class="subscribe">
            <h3>Subscribe to Premium</h3>
            <p>
              Subscribe to unlock new features and if eligible, receive a
              share of ads revenue.
            </p>
            <button>Subscribe</button>
          </div>
          <div class="trends">
            <h3>Trends for you</h3>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>#zkSync</p>
              <span>113k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Chúc</p>
              <span>22.3k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Chào</p>
              <span>22.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Ăn</p>
              <span>33.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>Nhiều</p>
              <span>22.4k posts</span>
            </div>
            <div class="trend">
              <span>Trending in VietNam</span>
              <p>#Web3</p>
              <span>23.1k posts</span>
            </div>
            <button class="btn-show">Show more</button>
          </div>
        </aside>
      </main>`;
      this.root.innerHTML = html;
      this.getProfile();
    }

    this.getPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.root.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("login")) {
        this.loginForm();
      }
    });
  },

  loginForm: function () {
    let html;
    html = `<div class="login-box">
        <div class="login-content-box">
            <div class="logo">
                <img src="./imgs/logo.svg" alt="logo">
            </div>
            <div class="login-content">
                <h3>Đăng nhập</h3>
                <p>Hãy đăng nhập để cùng chia sẻ những khoảng khắc tuyệt vời trên mạng xã hội Blogger X. Nếu chưa có tài khoản, bạn hãy <a href="">đăng ký ngay</a> để cùng trải nghiệm những điều tuyệt vời nhất</p>
            </div>
            <button><a href="#" class = "home">Về trang chủ</a></button>
        </div>
        <form action="" class="login-form">
            <div class="form-control">
                <label for="email">Enter your email</label>
                <input type="email" class="email" name="email" value  id="email" required>
            </div>
            <div class="form-control">
                <label for="password">Enter your password</label>
                <input type="password" class="password" name="password" value  id="password" required>
            </div>
            <button class="btn btn-login">Đăng nhập</button>
            <hr>
            <span class="question">Bạn mới biết đến Blogger X? <a href="#" class = "signup">Đăng ký</a></span>
        </form>
    </div>`;
    this.root.innerHTML = html;
    const goHome = this.root.querySelector(".login-content-box .home");
    goHome.addEventListener("click", (e) => {
      e.preventDefault();
      this.render();
    });

    const signup = this.root.querySelector(".login-form .signup");
    signup.addEventListener("click", (e) => {
      e.preventDefault();
      this.signupForm();
    });
  },

  signupForm: function () {
    let html;
    html = `<div class="signup-box">
        <div class="signup-content-box">
            <div class="logo">
                <img src="./imgs/logo.svg" alt="logo">
            </div>
            <div class="signup-content">
                <h3>Đăng ký</h3>
                <p>Hãy đăng ký tài khoản để cùng kết nối, chia sẻ với bạn bè những khoảng khắc tuyệt vời trong cuộc sống trên mạng xã hội Blogger X. Nếu đã có tài khoản, bạn hãy <a href="">đăng nhập ngay</a> để cùng trải nghiệm những điều tuyệt vời nhất</p>
            </div>
            <button><a href="#" class = "home">Về trang chủ</a></button>
        </div>
        <form action="" class="signup-form">
            <div class="form-control">
                <label for="name">Enter your name</label>
                <input type="text" class="name" name="name" id="name" value >
            </div>
            <div class="form-control">
                <label for="email">Enter your email</label>
                <input type="text" class="email" name="email" id="email" value>
            </div>
            <div class="form-control">
                <label for="password">Enter your password</label>
                <input type="password" class="password" name="password" value  id="password">
            </div>
            <button class="btn btn-signup">Đăng ký</button>
            <hr>
            <span class="question">Bạn đã có tài khoản X? <a href="#" class="login">Đăng nhập</a></span>
        </form>
    </div>`;
    this.root.innerHTML = html;

    const goHome = this.root.querySelector(".signup-content-box .home");
    goHome.addEventListener("click", (e) => {
      e.preventDefault();
      this.render();
    });
    const login = this.root.querySelector(".signup-form .login");
    login.addEventListener("click", (e) => {
      e.preventDefault();
      this.loginForm();
    });
  },

  addEvent: function () {
    this.root.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("login-form")) {
        const emailEl = e.target.querySelector(".email");
        const passwordEl = e.target.querySelector(".password");

        const email = emailEl.value;
        const password = passwordEl.value;
        this.login({ email, password });
      }

      if (e.target.classList.contains("signup-form")) {
        const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");

        const nameEl = e.target.querySelector(".name");
        const emailEl = e.target.querySelector(".email");
        const passwordEl = e.target.querySelector(".password");

        const name = stripHtml(nameEl.value.trim());
        const email = stripHtml(emailEl.value.trim());
        const password = stripHtml(passwordEl.value.trim());

        if (name === null || name === "") {
          this.toast({
            title: "Error",
            message: "Vui lòng nhập tên",
            type: "warning",
            duration: 5000,
          });
          return;
        }

        if (email === null || email === "") {
          this.toast({
            title: "Error",
            message: "Vui lòng nhập email",
            type: "warning",
            duration: 5000,
          });
          return;
        }

        // validate email
        const emailFormat = /^\S+@\S+\.\S+$/;
        if (email && !email.match(emailFormat)) {
          this.toast({
            title: "Error",
            message: "Email không hợp lệ",
            type: "warning",
            duration: 5000,
          });
          return;
        }

        if (password === null || password === "") {
          this.toast({
            title: "Error",
            message: "Vui lòng nhập mật khẩu",
            type: "warning",
            duration: 5000,
          });
          return;
        }

        // validate password
        var errors = {
          uppercase: {
            regex: /[A-Z]/,
            description: "Cần ít nhất 1 kí tự hoa",
          },
          lowercase: {
            regex: /[a-z]/,
            description: "Cần ít nhất 1 kí tự chữ thường",
          },
          digit: { regex: /[0-9]/, description: "Cần ít nhất 1 kí tự số" },
          special: {
            regex: /[^A-Za-z0-9]/,
            description: "Cần ít nhất 1 kí tự đặc biệt",
          },
          length: {
            test: (e) => e.length > 8,
            description: "Cần nhiều hơn 8 kí tự",
          },
        };

        const isValidate = Object.entries(errors).flatMap(
          ([name, { test, regex, description }]) => {
            const isValid = test ? test(password) : regex.test(password);
            return isValid ? [] : { description, name };
          }
        );
        if (isValidate.length) {
          console.log(isValidate);
          this.toast({
            title: "Error",
            message: `${isValidate[0].description}`,
            type: "warning",
            duration: 5000,
          });
          return;
        }

        this.signupPost({ name, email, password });
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-logout")) {
        e.preventDefault();
        this.logout();
      }

      if (e.target.classList.contains("btn-post")) {
        const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
        const newBlogTitle = this.root.querySelector(".user-title");
        const newBlogContent = this.root.querySelector(".user-post-content");
        const newBlogTime = this.root.querySelector(".picker");
        const title = stripHtml(newBlogTitle.value.trim());
        const content = stripHtml(newBlogContent.value.trim());
        let time = stripHtml(newBlogTime.value.trim());

        if (time) {
          const dateNow = new Date();
          const dateBlog = new Date(time);
          if (dateNow - dateBlog > 0) {
            this.toast({
              title: "Thông báo!",
              message: "Cần đặt thời gian trong tương lai!",
              type: "info",
              duration: 5000,
            });
            return;
          }

          dateBlog.setHours(dateNow.getHours());
          dateBlog.setMinutes(dateNow.getMinutes());
          dateBlog.setSeconds(dateNow.getSeconds());
          if (
            dateNow.getDate() === dateBlog.getDate() &&
            dateNow.getMonth() === dateBlog.getMonth() &&
            dateNow.getFullYear() == dateBlog.getFullYear()
          ) {
            time = "";
          } else {
            time = String(dateBlog);
          }
        } else {
          newBlogTime.type = "text";
        }

        if (title && content) {
          this.newBlog({ title, content, newBlogTitle, newBlogContent, time });
          newBlogTitle.value = "";
          newBlogContent.value = "";
          newBlogTime.value = "";
        } else {
          this.toast({
            title: "Thông báo!",
            message: "Vui lòng nhập nội dung và tiêu đề bài đăng",
            type: "info",
            duration: 5000,
          });
        }
      }

      if (e.target.classList.contains("user-name")) {
        this.getPostsByUser(e.target.dataset.userid, e.target.innerText);
      }

      if (e.target.classList.contains("picker")) {
        e.target.type = "date";
      }

      if (
        e.target.parentElement.classList.contains("logo") ||
        e.target.classList.contains("logo")
      ) {
        this.render();
      }
    });

    if (this.isLogin()) {
      this.root.querySelector(".picker").addEventListener("blur", (e) => {
        if (!e.target.value) {
          e.target.type = "text";
          // this.toast({
          //   title: "Thành công!",
          //   message: `Bài sẽ được đăng vào ${this.formatDatePost(time)}`,
          //   type: "success",
          //   duration: 5000,
          // });
        }
      });
    }
  },

  loadingData: function (status = true) {
    const dataLoading = document.querySelector(".data-loading");
    if (status) {
      dataLoading.classList.add("show");
    } else {
      dataLoading.classList.remove("show");
    }
  },

  login: async function (data) {
    this.loadingData();
    try {
      //Call API
      const { response, data: token } = await client.post("/auth/login", data);
      this.loadingData(false);
      if (!response.ok) {
        throw new Error("Email hoặc mật khẩu không chính xác");
      }
      //Thêm token vào Storage (localStorage)
      localStorage.setItem("access_token", token.data.accessToken);
      localStorage.setItem("refresh_token", token.data.refreshToken);

      this.toast({
        title: "Thành công!",
        message: "Bạn đã đăng nhập thành công vào Blog X",
        type: "success",
        duration: 5000,
      });
      //Render
      this.render();
      // this.refreshToken();
    } catch (e) {
      this.toast({
        title: "Thất bại!",
        message: e.message,
        type: "error",
        duration: 5000,
      });
    }
  },

  signupPost: async function (data) {
    this.loadingData();
    try {
      //Call API
      const { response } = await client.post("/auth/register", data);
      this.loadingData(false);

      console.log(response);
      if (!response.ok) {
        throw new Error("Đăng ký thất bại. Email đã được đăng ký");
      }

      this.toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký tài khoản thành công",
        type: "success",
        duration: 5000,
      });
      this.loginForm();
      const email = this.root.querySelector(".email");
      const password = this.root.querySelector(".password");
      email.value = data.email;
      password.focus();
    } catch (e) {
      this.toast({
        title: "Thất bại!",
        message: e.message,
        type: "error",
        duration: 5000,
      });
    }
  },

  refreshToken: async function () {
    const { response, data: refresh } = await client.post(
      "/auth/refresh-token",
      {
        refreshToken: localStorage.getItem("refresh_token"),
      }
    );
    if (response.ok) {
      localStorage.setItem("access_token", refresh.data.token.accessToken);
      localStorage.setItem("refresh_token", refresh.data.token.refreshToken);
    }
    console.log(response);

    return response;
  },

  newBlog: async function ({
    title,
    content,
    newBlogTitle,
    newBlogContent,
    time,
  }) {
    if (!time) {
      let accessToken = localStorage.getItem("access_token");
      let refreshToken = localStorage.getItem("refresh_token");
      client.setToken(accessToken);
      const { response } = await client.post(`/blogs`, { title, content });
      if (response.ok) {
        this.root.querySelector(
          ".posts"
        ).innerHTML = `<span class="loader"></span>`;
        this.getPosts();
        this.toast({
          title: "Thành công!",
          message: "Bạn đã đăng bài thành công",
          type: "success",
          duration: 5000,
        });
        newBlogTitle = "";
        newBlogContent = "";
      } else {
        const res = await this.refreshToken();
        if (res.ok) {
          client.setToken(localStorage.getItem("access_token"));
          this.root.querySelector(
            ".posts"
          ).innerHTML = `<span class="loader"></span>`;
          this.getPosts();
          this.toast({
            title: "Thành công!",
            message: "Bạn đã đăng bài thành công",
            type: "success",
            duration: 5000,
          });
        }
      }
    } else {
      this.root.querySelector(".picker").type = "text";
      this.root.querySelector(".picker").value = "";
    }
  },

  formatDate: function (time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const getTime =
      hours < 12
        ? `${hours}h sáng:${minutes}phút`
        : `${hours - 12}h chiều:${minutes}phút`;
    return getTime;
  },

  formatDatePost: function (time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timePost = ` ngày ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    let getTime =
      hours < 12
        ? `${hours}h sáng:${minutes}phút`
        : `${hours - 12}h chiều:${minutes}phút`;
    return getTime + timePost;
  },

  handleTime: function (time) {
    const timeMS = (new Date().getTime() - new Date(time).getTime()) / 1000;
    if (timeMS < 60) {
      return "Vừa Xong";
    } else if (timeMS < 3600) {
      return `${Math.floor(timeMS / 60)} phút trước`;
    } else if (timeMS < 86400) {
      return `khoảng ${Math.floor(timeMS / 3600)} giờ trước`;
    } else if (timeMS < 2628000) {
      return `khoảng ${Math.floor(timeMS / 86400)} ngày trước`;
    } else if (timeMS < 31536000) {
      return `khoảng ${Math.floor(timeMS / 2419200)} tháng trước`;
    } else {
      return `khoảng ${Math.floor(timeMS / 31536000)} năm trước`;
    }
  },

  getPostsByUser: async function (userId, userName) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(this.isLogin());
    if (this.isLogin()) {
      this.root.querySelector(
        ".user-post"
      ).innerHTML = `<h2>View các bài đăng của ${userName}</h2>`;
    } else {
      this.root.querySelector("article").innerHTML = `<div class="user-post">
      <h2>View các bài đăng của ${userName}</h2>
      </div>
      <div class="posts"></div>`;
    }
    const posts = document.querySelector(".posts");
    posts.innerHTML = `<span class="loader"></span>`;
    const loader = posts.querySelector(".loader");
    loader.classList.add("show");
    const { data: blogsByUser, response } = await client.get(
      `/users/${userId}`
    );
    if (response.ok) {
      loader.classList.remove("show");
      blogsByUser.data.blogs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      blogsByUser.data.blogs.forEach((blog) => {
        const blogEL = document.createElement("div");
        blogEL.className = "post-item";
        blogEL.innerHTML = `<div class="avatar-user">
            <img src="./imgs/avatar.jpg" alt="avatar-user" />
        </div>
        <div class="post-box">
            <div class="user-info">
                <h3 class="user-name" data-userid="${stripHtml(
                  blog.userId
                )}">${stripHtml(userName)}</h3>
                <div class="post-time-box">
                    <span class="dot">.</span>
                    <span class="post-time">${this.handleTime(
                      blog.createdAt
                    )}</span>
                </div>
                <div class="post-timeup">${this.formatDate(
                  blog.createdAt
                )}</div>
            </div>
            <div class="post-title">${this.handleRegex(
              stripHtml(blog.title)
            )}</div>
            <div class="post-content">${this.handleRegex(
              stripHtml(blog.content)
            )}</div>
            <a href="#" class="post-showmore" data-index = "${stripHtml(
              blog._id
            )}">Show more</a>
        </div>`;
        posts.append(blogEL);
      });

      const showMore = document.querySelectorAll(".post-showmore");
      showMore.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          this.getPost(e.target.dataset.index);
        });
      });
    } else {
      setTimeout(() => {
        location.reload();
      }, 10000);
    }
  },
  //call API
  getPosts: async function () {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    const loader = document.querySelector(".loader");
    loader.classList.add("show");
    const posts = document.querySelector(".posts");
    const { data: blogs, response } = await client.get(`/blogs`);
    if (response.ok) {
      loader.classList.remove("show");
      blogs.data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      blogs.data.forEach((blog) => {
        const blogEL = document.createElement("div");
        blogEL.className = "post-item";
        blogEL.innerHTML = `<div class="avatar-user">
            <img src="./imgs/avatar.jpg" alt="avatar-user" />
        </div>
        <div class="post-box">
            <div class="user-info">
                <h3 class="user-name" data-userid="${stripHtml(
                  blog.userId._id
                )}">${stripHtml(blog.userId.name)}</h3>
                <div class="post-time-box">
                    <span class="dot">.</span>
                    <span class="post-time">${this.handleTime(
                      blog.createdAt
                    )}</span>
                </div>
                <div class="post-timeup">${this.formatDate(
                  blog.createdAt
                )}</div>
            </div>
            <div class="post-title">${this.handleRegex(
              stripHtml(blog.title)
            )}</div>
            <div class="post-content">${this.handleRegex(
              stripHtml(blog.content)
            )}</div>
            <a href="#" class="post-showmore" data-index = "${stripHtml(
              blog._id
            )}">Show more</a>
        </div>`;
        posts.append(blogEL);
      });

      const showMore = document.querySelectorAll(".post-showmore");
      showMore.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          this.getPost(e.target.dataset.index);
        });
      });
    } else {
      setTimeout(() => {
        location.reload();
      }, 10000);
    }
  },

  getPost: async function (blogId) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (this.isLogin()) {
      const userPost = this.root.querySelector(".user-post");
      userPost.style.display = "none";
    }
    const posts = document.querySelector(".posts");
    posts.innerHTML = "";
    const loader = document.createElement("span");
    loader.className = "loader show";
    posts.append(loader);
    const { data: blog, response } = await client.get(`/blogs/${blogId}`);
    if (response.ok) {
      loader.classList.remove("show");
      console.log(blog);
      let html = `
        <div class = "view-blog">
            <p>View blog</p>
            <button class="home">Go Home</button>
        </div>
        <div class="post-item">
            <div class="avatar-user">
            <img src="./imgs/avatar.jpg" alt="avatar-user" />
            </div>
            <div class="post-box">
            <div class="user-info">
                <h3 class="user-name">${stripHtml(blog.data.userId.name)}</h3>
                <div class="post-time-box">
                    <span class="dot">.</span>
                    <span class="post-time">${this.handleTime(
                      blog.data.createdAt
                    )}</span>
                </div>
                <div class="post-timeup">${this.formatDate(
                  blog.data.createdAt
                )}</div>
            </div>
            <div class="post-title">${this.handleRegex(
              stripHtml(blog.data.title)
            )}</div>
            <div class="post-content">${this.handleRegex(
              stripHtml(blog.data.content)
            )}</div>            
            </div>
      </div>`;
      posts.innerHTML = html;
      const btnHome = posts.querySelector(".home");
      btnHome.addEventListener("click", (e) => {
        this.render();
      });
    }
  },

  toast: function ({
    title = "",
    message = "",
    type = "info",
    duration = 3000,
  }) {
    const toastEl = document.querySelector("#toast");
    // console.log(toastEl);
    if (toastEl) {
      const toast = document.createElement("div");

      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        toastEl.removeChild(toast);
      }, duration + 1000);

      // Remove toast when clicked
      toast.addEventListener("click", (e) => {
        if (e.target.closest(".toast__close")) {
          toastEl.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      });

      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle",
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      toastEl.appendChild(toast);
    }
  },

  getProfile: async function () {
    try {
      let accessToken = localStorage.getItem("access_token");
      client.setToken(accessToken);
      let results = await client.get("/users/profile");
      console.log(results);
      if (!results.response.ok) {
        const res = await this.refreshToken();
        console.log(res);
        if (res.ok) {
          this.getProfile();
        } else {
          console.log(1111);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          this.loginForm();
          this.toast({
            title: "Thất bại!",
            message: "Phiên làm việc hết hạn. Đăng nhập lại",
            type: "error",
            duration: 5000,
          });
        }
      } else {
        const { response, data: user } = results;
        const profileEl = this.root.querySelector(".user-name-header");
        const profileName = this.root.querySelector(".user-name");
        profileEl.innerText = user.data.name;
        profileName.innerText = user.data.name;
        profileName.dataset.userid = user.data._id;
      }
    } catch (e) {
      console.log(e.message);
    }
  },

  handleRegex: function (content) {
    //regex space
    const patternSpace = /\s+/g;
    content = content.replace(patternSpace, " ");

    //regex line
    const patternLine = /\n+/g;
    content = content.replace(patternLine, "\n");

    //regex mail
    // const partternMail = /(([\w\.-]{3,})@([\w\.-]{1,}\.[a-z]{2,}))/gi;
    // content = content.replace(
    //   partternMail,
    //   `<a href= "mailto:$1" target="_blank">$1</a>`
    // );

    //regex phone
    const partternPhone = /((?:0|\+84)\d{9})/gi;
    content = content.replace(
      partternPhone,
      `<a href= "tel:$1" target="_blank">$1</a>`
    );

    // regex link
    const partternLink =
      /((?:(?:http|https):\/\/|)(?:(?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9@-_\.]*\.[a-z]{2,}(?::\d{2,}|))(?:\/[^\s]*|))/gi;
    content = content.replace(
      partternLink,
      `<a href= "$1" target="_blank"><div>$1</div></a>`
    );

    //regex mail
    // const partternMail = /(([\w\.-]{3,})@([\w\.-]{1,}\.[a-z]{2,}))/gi;
    // content = content.replace(
    //   partternMail,
    //   `<a href= "mailto:$1" target="_blank">$1</a>`
    // );

    const partternMail =
      /<a href= "((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))" target="_blank">/gi;
    content = content.replace(
      partternMail,
      `<a href= "mailto:$2" target="_blank">`
    );

    //regex Youtobe
    const patternYoutube =
      /<div>((?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?[^>]*(?:watch|embed)?(?:[^>]*v=|v\/|\/)([\w\-_]+)\&?(?:[^>]+|))<\/div>/g;

    content = content.replace(
      patternYoutube,
      ` <div>$1
    <iframe src="https://www.youtube.com/embed/$2" width="420" height="315"></iframe>
    </div>`
    );

    return content;
  },

  logout: async function () {
    const accessToken = localStorage.getItem("access_token");
    client.setToken(accessToken);
    let results = await client.post("/auth/logout");
    console.log(results);
    if (!results.response.ok) {
      const res = await this.refreshToken();
      if (res.ok) {
        this.logout();
      } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        this.loginForm();
        this.toast({
          title: "Thất bại!",
          message: "Phiên làm việc hết hạn. Đăng nhập lại",
          type: "error",
          duration: 5000,
        });
      }
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.loginForm();
      this.toast({
        title: "Thành công!",
        message: "Bạn đã đăng xuất tài khoản thành công",
        type: "success",
        duration: 5000,
      });
    }
  },

  start: function () {
    //Khởi động ứng dụng
    this.render();
    this.addEvent();
  },
};

app.start();
