<template>
  <div class="container main-container">
    <nav class="view-nav">
      <ul class="nav-list left">
        <li class="nav-item" v-for="nav in top_navs" :key="nav.id" @click="flag=nav.id">
          <a :class="{'active':flag==nav.id}">{{nav.name}}</a>
        </li>
      </ul>
    </nav>
    <div class="view welcome-view">
      <div class="welcome-context">
        <div class="feed welcome__feed">
          <ul class="entry-list">
            <li class="item">
              <div class="entry-box">
                <div class="entry">
                  <a class="books-list">
                    <a class="item" v-for="article in articles" :key="article.id">
                      <!--                      概括部分-->
                      <div class="poster">
                        <div class="lazy thumb poster-img loaded" style="background-image: url(../../assets/book_pic.jpg);">
                        </div>
                      </div>
                      <div class="info">
                        <div class="title"><!---->
                          <span>SpringBoot 源码解读与原理分析</span>
                        </div>
                        <div class="desc">从熟悉的场景逐步深入源码底层，理解SpringBoot的设计和原理。</div>
                        <div class="author">
                          <div class="author-info">
                            <a rel="" st:name="author" st:state="5d9c4a7b518825427b27645f" class="user">
                              <div class="lazy avatar hero loaded" style="background-image: url(../../assets/book_pic.jpg)"></div><a data-v-41ca7433="" data-v-bc0eacb4="" href="/user/5d9c4a7b518825427b27645f" target="_blank" rel="" class="username author-name">LinkedBear<!----></a>
                            </a>
                          </div>
                          <div class="author-desc">
                            <span  class="selfDescription">前浪潮集团Java工程师</span>
                          </div>
                        </div>
                        <div class="other">
                          <a rel="" tag="div" class="full-link"></a>
                          <div class="price">
                            <div class="price-text">￥29.9</div>
                            <!---->
                          </div>
                          <!----><!---->
                          <div class="messages">
                            <!---->
                            <span class="message">
                              <span >36小节</span>
                            </span>
                            <span class="message read-duration">
                              <span>阅读时长1111分</span>
                            </span>
                            <span class="message">
                              <span>448</span>
                              <span>人已购买</span>
                            </span>
                          </div>
                        </div>
                        <div class="footer-bar" style="display: none;">
                        </div>
                      </div>
                      <div class="m-aside">
                        <div class="price">￥29.9<!---->
                        </div><!----><!---->
                      </div>
                    </a>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <aside class="welcome__side welcome__side">
          <section class="section help">
            <a class="items author">
              <img src="https://b-gold-cdn.xitu.io/v3/static/img/author.c5d975e.png">
              <div class="title">成为作者</div>
            </a>
            <a class="items feedback">
              <img src="https://b-gold-cdn.xitu.io/v3/static/img/feedback.1230fb5.png">
              <div class="title">建议反馈</div>
            </a>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "SmallVolumes",
    data(){
      return {
        top_navs:[{id:1,name:'全部'},{id:2,name:'前端'},{id:3,name:'后端'},
          {id:4,name:'移动开发'},{id:5,name:'区块链'},{id:6,name:'人工智能'}],
        flag:1,
        articles:[{id:1},
          {id:2},
          {id:3},
          {id:4},
          {id:5},
          {id:6},
          {id:7}]
      }
    },
	}
</script>

<style scoped>
  /*<!--  分类  -->*/
  .container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
  }
  .view-nav {
    position: fixed;
    top: 61px;
    width: 100%;
    height: 2.5rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
  }
  .view-nav, .view-nav:before {
    left: 0;
    background-color: #fff;
  }
  .nav-list{
    position: relative;
  }
  .view-nav .nav-list {
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    line-height: 1;
  }
  .view-nav .nav-list .nav-item {
    height: 100%;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #71777c;
    padding: 0 1rem;
  }
  .nav-item {
    position: relative;
    cursor: pointer;
  }
  a:hover {
    color: #007fff;
    text-decoration: none;
  }
  .active{
    color: #007fff;
  }

  /*文章部分*/
  .main-container>.view{
    margin-top: 5.17rem;
  }
  .welcome-context{
    display: flex;
    align-items: flex-start;
    margin-top: 60px;
  }
  .welcome-context .welcome__feed {
    overflow: hidden;
    flex-grow: 1;
    margin-top: 60px;
  }
  .category-nav .list-header{
    width: 100%;
  }
  .list-header .list-nav, .list-header .nav-list {
    display: flex;
    justify-content: space-between;
  }
  .nav-item .active, .category-nav .list-header .nav-list .nav-item.dropdown a {
    color: #007fff;
  }
  .list-header .left .nav-item {
    padding: 0 1rem;
    font-size: 0.8rem;
    border-right: 1px solid hsla(0,0%,59.2%,.2);
  }
  /*文章概括部分*/
  .item:not(:last-child) {
    border-bottom: 1px solid rgba(178,186,194,.15);
  }
  .item >a{
    color: inherit;
  }

  .meta-list .item.username {
    display: flex;
    align-items: baseline;
  }
  .meta-list .item.tag
  {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title{
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
  }

  .action-list>.item.like {
    padding: 0;
  }
  .action-list>.item{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 .8rem;
    height: 1.5rem;
    font-size: 1.083rem;
    line-height: 1;
    white-space: nowrap;
    color: #b2bac2;
    border-radius: 1px;
    border: 1px solid #edeeef;
  }
  .action-list>.item .title-box {
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    height: 100%;
  }
  .action-list>.item .count{
    color: #b2bac2;
    margin-left: .2em;
    font-weight: 300;
  }
  .action-list>.item.comment{
    margin-left: -1px;
    padding: 0;
  }
  .action-list>.item.share.close {
    margin-left: -1px;
  }

  /*侧边区域*/
  .welcome-context .welcome__side{
    width: 240px;
    min-width: 240px;
    margin-left: 20px;
    margin-top: 60px;
  }
  .welcome__side .section {
    background-color: #fff;
    border-radius: 2px;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .title {
    font-weight: 600;
  }


  .welcome__side .section{
    background-color: #fff;
    border-radius: 2px;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .link-section .link-list{
    padding: 0;
  }
  .link-section .item{
    position: relative;
  }
  .link-section .link{
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100%;
  }
  .link-section .icon{
    width: 2rem;
    margin-right: .8rem;
  }
  .link-section .title{
    position: relative;
    font-size: 0.8rem;
    line-height: 1;
    color: #333;
  }
  .books-list{
    width: 100%;
    max-width: 700px;
    box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #e6e8e8;
  }
  .item{
    display: flex;
    padding: 25px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
  }
  .poster {
    width: 100px;
    height: 140px;
    flex-shrink: 0;
    box-shadow: 3px 4px 12px 0 rgba(0,0,0,.2);
    overflow: hidden;
    background-color: #ccc;
    background-image: url(../../assets/book_pic.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .info{
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 14px;
    color: #2e3135;
    padding-left: 22px;
  }
  .m-aside{
    min-width: 80px;
    margin-left: 10px;
    flex-shrink: 0;
    align-self: center;
    display: none;
    z-index: 3;
  }
  .m-aside .price{
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    background-color: #f0f7ff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #07f;
    position: relative;
    z-index: 2;
  }
  .info .title{
    color: inherit;
    font-size: 20px;
    font-weight: 400;
  }
  .info .title:hover{
    color: #007fff;
  }
  .info .desc{
    margin-top: 5px;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #71777c;
  }
  .info .author{
    display: flex;
    align-items: center;
    margin-top: 6px;
    overflow: hidden;
    white-space: nowrap;
  }
  .info .other{
    margin-top: 6px;
    display: flex;
    align-items: center;
  }
  .info .footer-bar{
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .info .author .author-info {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .info .author .author-desc{
    color: #71777c;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info .author .user{
    display: inline-flex;
    align-items: center;
    color: #000;
  }
  .info .author .author-desc .selfDescription{
    margin-left: 10px;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }
  .info .other .price{
    color: #ed7b11;
    font-size: 18px;
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
  }
  .info .author .author-name{
    color: #000;
    font-weight: 300;
  }
  .section help{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .help .items:first-child {
    position: relative;
  }
   .help .items .title{
    margin-top: 8px;
    font-size: 13px;
  }
  .items:hover {
    background-color: #f9f9f9;
  }
  .help .items{
    flex-grow: 1;
    display: flex;
    height: 90px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #71777b;
    border-bottom: 1px solid rgba(218,218,218,0.95);
  }
  .items .author{
    border-bottom: #e6e6e6 1px solid;
  }
  .help .items img{
    width: auto;
    height: 28px;
  }
  .section{
    width: 240px;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
    background-color: #fff;
  }
</style>
