<template>
  <div class="comment-list-box" id="comment-box" manual="true">
    <div class="title">评论</div>

    <div class="comment-form comment-form">
      <div class="avatar-box">
        <div
          data-src="http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg"
          class="lazy avatar avatar loaded"
          style="background-image: url(&quot;http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg&quot;);"
        ></div>
      </div>
      <div class="form-box">
        <div class="input-box">
          <div class="auth-card">
            <div
              contenteditable="true"
              spellcheck="false"
              :placeholder="placeholder"
              class="rich-input empty"
              ref="content"
              v-html="content"
              @input="changeText"
              @focus="focusFunc"
              @blur="blurFunc"
            >
            </div>
          </div>
        </div>
        <div class="action-box" v-show="showBox">
          <div class="emoji emoji-btn">
            <div class="emoji-box">
              <div
                data-src="https://b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg"
                class="lazy icon loaded immediate"
                style="background-image: url(&quot;https://b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg&quot;);"
              ></div>
              <span>表情</span>
            </div>
            <!---->
          </div>
          <div class="submit">
            <span>Ctrl or ⌘ + Enter{{content}}</span>
            <button @click="submit" class="submit-btn" :disabled="disabled">评论</button>
          </div>
        </div>
      </div>
      <input type="file" class="hidden" />
    </div>
    <div class="comment-list comment-list">
      <div class="item" v-for="tableData in tableDatas" :key="tableData.id">
        <div class="comment comment">
          <div
            st:block="userPopover"
            st:state="5bf583d96fb9a049f23c617d"
            class="user-popover-box popover"
          >
            <!---->
            <a href="" target="_self" rel class="user-link">
              <div
                data-src="http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg"
                class="lazy avatar avatar loaded"
                style="background-image: url(&quot;http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg&quot;);"
              ></div>
            </a>
          </div>
          <div class="content-box comment-divider-line">
            <div class="meta-box">
              <div
                st:block="userPopover"
                st:state="5bf583d96fb9a049f23c617d"
                class="user-popover-box"
              >
                <!---->
                <a
                  href=""
                  target="_self"
                  rel
                  class="username username ellipsis"
                >
                  {{tableData.name}}
                  <a
                    href=""
                    target="_self"
                    rel
                    class="rank"
                  >
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-1.636691c.svg" alt="lv-1" />
                  </a>
                </a>
              </div>
              <div class="position">前端开发工程师 @ letjs.dev</div>
            </div>
            <div class="content">{{ tableData.infomation }}</div>
            <!---->
            <div class="reply-stat">
              <time
                datetime="2019-12-21T17:09:05.999Z"
                title="Sun Dec 22 2019 01:09:05 GMT+0800 (中国标准时间)"
                class="time"
              >{{ tableData.createtime }}</time>
              <div class="action-box">
                <div class="like-action action">
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    class="icon like-icon"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z" />
                      <path
                        stroke="#8A93A0"
                        stroke-linejoin="round"
                        d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"
                      />
                    </g>
                  </svg>
                  <!---->
                </div>
                <div class="comment-action action">
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    class="icon comment-icon"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z" />
                      <path
                        stroke="#8A93A0"
                        stroke-linejoin="round"
                        d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"
                      />
                    </g>
                  </svg>
                  <span class="action-title">回复</span>
                </div>
              </div>
            </div>
            <!---->
            <div class="sub-comment-list sub-comment-list">
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { writeComment, getComment } from "../../api/user";
export default {
    data() {
        return {
            tableDatas:[],
            showBox:false,
            content:'',
            isChange: false,
            disabled: true,
            placeholder:'输入评论...'
        }
    },
    methods: {
      changeText($event) {
        if($event.target.innerHTML != ''){
            this.isChange = true;
            this.disabled = false;
            this.placeholder = '';
        }else{
            this.isChange = false;
            this.disabled = true;
            this.placeholder = '输入评论...';
        }
      },
      blurFunc($event) {
        this.showBox = this.isChange;
        this.content = $event.target.innerHTML;
      },
      focusFunc() {
        if(this.$store.state.userToken){
            this.showBox = true;
        }else{
            this.$store.commit('regOrLogin', 2);
        }
        
      },
      submit(){
        const res = writeComment({
            article_id: this.$route.params.id,
            user_id: this.$store.state.userId,
            infomation: this.content,
            name: this.$store.state.userName
        });
        res.then(data => {
            this.content = '';
            this.$refs.content.innerHTML = '';
            this.showBox = false;
            this.isChange = false;
            this.disabled = true;
            this.placeholder = '输入评论...';
            const res = getComment(this.$route.params.id);
            res.then(data =>{
                this.tableDatas = data;
            }).catch(e => {
                alert(e);
            })
        }).catch(e => {
            alert(e);
        })
      }
    },
    created() {
        const res = getComment(this.$route.params.id);
        res.then(data =>{
            this.tableDatas = data;
        }).catch(e => {
            alert(e);
        })
    }
};
</script>

<style scoped>
.comment-list-box {
  position: relative;
  background-color: #fff;
}
.comment-list-box .title {
  color: #8a9aa9;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 1.67rem 0 5px;
}
.comment-form {
  display: flex;
  position: relative;
  padding: 1rem 1.333rem;
  background-color: #fafbfc;
  border-radius: 3px;
  margin: 1.333rem 0.5rem;
}
.avatar-box {
  flex: 0 0 auto;
}
.avatar {
  margin: 0 1rem 0 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eee;
}
.form-box {
  flex: 1 1 auto;
  position: relative;
}
.input-box {
  font-size: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
}
.auth-card {
  position: relative;
}
.rich-input {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #17181a;
  outline: none;
  min-height: 1em;
}
.hidden {
  display: none;
}
.rich-input:before {
  content: attr(placeholder);
  position: absolute;
  opacity: 0.4;
  pointer-events: none;
  user-select: none;
}
.comment-list {
  margin: 0 1.666rem 0 4.85rem;
}
.comment-list .item:not(:last-child) {
  margin-bottom: 1.333rem;
}
.comment {
  display: flex;
}
.popover {
  height: 33px;
}
.user-popover-box {
  display: inline;
}
.user-link {
  flex: 0 0 auto;
}
.lazy:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: inherit;
  border-radius: inherit;
}
.content-box {
  margin-left: 0.833rem;
  flex: 1 1 auto;
}
.meta-box {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  line-height: 1;
  white-space: nowrap;
}
.content {
  margin-top: 0.55rem;
  font-size: 1rem;
  line-height: 1.2rem;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  color: #505050;
}
.reply-stat {
  display: flex;
  margin: 1rem 0;
  font-weight: 400;
}
.sub-comment-list {
  margin: 1rem 0;
  padding: 0 0 0 1rem;
  background-color: #fafbfc;
  border-radius: 3px;
}
.user-popover-box {
  display: inline;
}
.meta-box .position {
  color: #8a9aa9;
  font-size: 0.8rem;
  margin-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 16rem;
}
.meta-box .username {
  flex: 1 1 auto;
  width: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 400;
}
.rank {
  margin-left: 0.2rem;
  vertical-align: middle;
}
.reply-stat .delete,
.reply-stat .time {
  font-size: 0.8rem;
  color: #8a9aa9;
  cursor: default;
}
.reply-stat .action-box .action {
  display: flex;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;
}
.reply-stat .action-box {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  min-width: 8.8rem;
  color: #8a93a0;
  user-select: none;
}
svg:not(:root) {
  overflow: hidden;
}
.reply-stat .action-box .action-title {
  margin-left: 0.25rem;
}
a {
  text-decoration: none;
}
.action-box {
    display: flex;
    align-items: center;
    margin: .65rem 0 0;
}
.emoji {
    position: relative;
}
.submit {
    flex: 0 0 auto;
    margin-left: auto;
}
.submit span {
    color: #c2c2c2;
    margin-right: 8px;
    font-size: 13px;
}
.submit .submit-btn:disabled {
    cursor: default;
    opacity: .4;
}
.submit .submit-btn {
    flex: 0 0 auto;
    margin-left: auto;
    padding: .5rem 1.1rem;
    font-size: 0.9rem;
    color: #fff;
    background-color: #027fff;
    border-radius: 2px;
    cursor: pointer;
}
button:disabled {
    cursor: not-allowed;
}
.button, button {
    -webkit-appearance: none;
    appearance: none;
    background-color: #007fff;
    color: #fff;
    border-radius: 2px;
    border: none;
    padding: .5rem 1.3rem;
    outline: none;
    transition: background-color .3s,color .3s;
    cursor: pointer;
}
.emoji .emoji-box {
    display: flex;
    align-items: center;
    position: relative;
    color: #027fff;
    cursor: pointer;
    font-size: 1.2rem;
}
.emoji .emoji-box .icon {
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: cover;
}
.lazy {
    position: relative;
}
.action-box .emoji-btn span {
    font-size: 13px;
}
.emoji .emoji-box span {
    padding: .166rem;
    font-size: 13px;
}
</style>