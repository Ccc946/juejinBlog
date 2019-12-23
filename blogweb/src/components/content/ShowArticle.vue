<template>
  <div class="context">
    <div class="main-comment">
      <div class="comment-item">
        <ul class="comment-list">
          <li class="show-comment">
            <div class="box-item">
              <div class="auth">
                <a class="icon">
                  <img src="../../assets/logo.png" width="30" />
                  <span>{{article.author}}</span>
                </a>
              </div>
              <div class="category">
                <span>{{article.createtime}}</span>
                <span>阅读 {{article.comment}}</span>
                <span>文章类型：{{article.category}}</span>
              </div>
              <div class="title-pic">
                <img src="../../assets/pic.jpg" alt width="520" />
              </div>
              <div class="show-article">
                <h1>{{article.title}}</h1>
                <mavon-editor 
                  :toolbarsFlag="false"  
                  :subfield="false" 
                  defaultOpen="preview" 
                  v-model="article.content" 
                  />
              </div>
              <comment></comment>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
    <div class="person-art">
      <div class="nav-list">
        <header class="nav-title">关于作者</header>
        <ul class="ans-list">
          <div class="about-author">
            <img src="../../assets/logo.png" width="40" />
            <span>{{article.author}}</span>
          </div>
          <div class="like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              class="zan"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" />
                <path
                  fill="#7BB9FF"
                  d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
                />
              </g>
            </svg>
            <span>获得点赞 {{article.like}}</span>
          </div>
          <div class="comment">
            <svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" />
                <path
                  fill="#7BB9FF"
                  d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
                />
              </g>
            </svg>
            <span>文章被阅读 {{article.comment}}</span>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./Comment";
import { getArticle } from "../../api/user";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "ShowArticle",
  components: {
    mavonEditor,
    Comment
  },
  data() {
    return {
      article: {},
      newans: [
        { text: "hazard~7 回答了： vue/cli脚手架 4.0.5 运行 vue ui报错" }
      ],
      
    };
  },
  mounted() {
    const res = getArticle(this.$route.params.id);
    res
        .then(data => {
          this.article = data;
        })
        .catch(e => {
          alert(e);
        });
  },
  methods: {
    
  }
};
</script>

<style scoped>
.clearfix:before {
  content: "";
  display: table;
}
.context {
  width: 100%;
  max-width: 960px;
  margin: 60px auto 0;
  display: flex;
}
.main-comment {
  margin-top: 60px;
  width: 650px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
}
.show-comment {
  margin-bottom: 8px;
}
.box-item {
  background: #ffffff;
  display: inline-flex;
  flex-direction: column;
  border-radius: 2px;
  width: 100%;
  overflow: hidden;
}
.box-item:hover {
  background: #fafafa;
}
.auth {
  padding: 20px;
  cursor: pointer;
  color: #b2bac2;
  font-size: 16px;
  font-weight: 400;
  width: 100px;
}
.auth a {
  text-decoration: none;
}
.auth a:hover {
  color: #007fff;
}
.title {
  color: #71777c;
  font-weight: 400;
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
}
.title:hover {
  color: #2e3135;
}
.content {
  padding: 10px 20px;
  font-size: 15px;
  color: #909090;
  font-weight: 300;
}
.title-pic {
  margin: 10px auto;
}
.category {
  margin: 0 20px;
  width: 100%;
}
.show-article {
  margin: 10px 20px;
}
.cat-text {
  color: #b2bac2;
  border: 1px solid #b2bac2;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
}
.cat-text:hover {
  color: #007fff;
  border: 1px solid #007fff;
}

/*侧边部分*/
.person-art {
  margin: 60px 0 0 30px;
  width: 250px;
}
.write-problem {
  margin-bottom: 10px;
}
.btn {
  background: #007fff;
  color: white;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  width: 100%;
  line-height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #007fff;
}
.btn:hover {
  color: #fff9ff;
  background: #007eee;
}
.nav-list {
  background: #ffffff;
}
.nav-title {
  color: #909090;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  padding: 10px 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.show-list {
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
  cursor: pointer;
}
.ans-list {
  margin: 10px;
}
.about-author {
  margin: 5px;
  cursor: pointer;
  font-size: 15px;
}
.like {
  margin: 10px 10px;
  font-size: 14px;
  color: #000;
}
.comment {
  margin: 5px 10px 20px 10px;
  padding-bottom: 20px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
}
.like > span{
    margin-left: 10px;
    position: absolute;
    margin-top: 3px;
}
.comment > span{
    margin-left: 10px;
    position: absolute;
    margin-top: 3px;
}
</style>
