import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const loading = document.querySelector(".loading");
const list = document.querySelector(".posts");

let page = 1;
let isLoaded = false;
const app = {
  rootEl: document.querySelector(".posts"),
  query: {
    _limit: PAGE_LIMIT,
    _page: page,
  },
  render: function (posts) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    posts.map(({ name, title, comment }) => {
      let post = document.createElement("div");
      post.className = "post-item";
      post.innerHTML = `
            <div class="avatar-user">
                <img src="./imgs/user-avatar.jpg" alt="avatar-user">
            </div>
            <div class="post-box">
                <div class="user-info">
                    <h3 class="user-name">${stripHtml(name)}</h3>
                    <div class="title">${stripHtml(title)}</div>
                    <div class="post-content">
                        ${stripHtml(comment)}
                    </div>
                </div>
                <div class="img-post">
                    <img src="./imgs/ngoctrinh.png" alt="ngotrinh">
                </div>
                <div class="interact">
                    <div class="comment-box">
                        <img src="./imgs/comment-interac.svg" alt="comment">
                        <span>53</span>
                    </div>
                    <div class="retweet-box">
                        <img src="./imgs/retweet-interac.svg" alt="retweet">
                        <span>11</span>
                    </div>
                    <div class="like-box">
                        <img src="./imgs/like-interac.svg" alt="like">
                        <span>209</span>
                    </div>
                    <div class="view-box">
                        <img src="./imgs/view.svg" alt="view">
                        <span>18.4k</span>
                    </div>
                </div>
            </div>`;
      this.rootEl.append(post);
    });
  },
  //call API
  getPosts: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    queryString = queryString ? "?" + queryString : "";
    const { data: posts } = await client.get(`/posts${queryString}`);
    if (posts.length) {
      this.render(posts);
      isLoaded = true;
      loading.style.display = "none";
    } else {
      isLoaded = false;
      loading.style.display = "flex";
    }
  },

  //show page more
  showPage: function () {
    // add event scroll
    window.addEventListener("scroll", () => {
      let haftHeight = this.rootEl.clientHeight * 0.8;
      if (isLoaded) {
        if (window.scrollY > haftHeight + 20) {
          page++;
          this.query._page = page;
          this.getPosts(this.query);
          loading.style.display = "flex";
          isLoaded = false;
        }
      }
    });
  },

  // Khởi dong app
  start: function () {
    this.getPosts(this.query);
    this.showPage();
  },
};

//chay App
app.start();
