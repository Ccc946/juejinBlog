<template>
  <div class="content">
    <div class="contexter nav-left">
      <div nav-list>
        <ul class="list-show">
          <li class="title" :class="{'active':cur==navleft.id}" v-for="navleft in navlefts" @click="cur=navleft.id">
            {{navleft.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="contexter hot-content">
      <div class="taking-list">
        <ul class="taking-show">
          <li class="taking" v-for="publish in published">
            <div class="total">
              <div class="top-content">
                <div class="icon-left">
                  <a>
                    <img src="../../assets/logo.png" width="30px">
                  </a>
                </div>
                <div class="content-right">
                  <div class="top">
                    <div class="auth">
                      <p class="name">{{publish.name}}</p>
                      <p class="tip">{{publish.tip}}</p>
                    </div>
                    <div class="like">关注</div>
                  </div>
                  <div class="matter">
                    <p>{{publish.content}}</p>
                  </div>
                </div>
              </div>
              <div class="detail">
                <div class="like-action about">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon like-icon">
                    <g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z">
                    </path>
                      <path stroke="#8A93A0" stroke-linejoin="round" d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z">
                      </path>
                    </g>
                  </svg>
                  <span>{{publish.like}}</span>
                </div>
                <div class="comment-action about">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon comment-icon">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z"></path>
                      <path stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z">
                      </path>
                    </g>
                  </svg>
                  {{publish.comment}}</div>
                <div class="share about">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon share-icon">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z"></path>
                      <g stroke="#8A93A0" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10 2.5v10M13.5 7h2.001c.552 0 .999.437.999.96v8.621c0 1.919-1.447 1.919-1.999 1.919H5.5c-.552 0-1.999 0-1.999-1.919v-8.62c0-.53.443-.961.999-.961H6.5M7.519 4.538L10.019 2l2.5 2.513">
                        </path>
                      </g>
                    </g>
                  </svg>
                  分享</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="contexter nav-right">
      <div class="pin-block">
        <header class="head-item">推荐热点</header>
        <ul class="show-hot">
          <li class="hot-new" v-for="hotnew in hotnews">
            <div class="new-content">{{hotnew.content}}</div>
            <div class="sat-item">
              <span>{{hotnew.text}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Hot",
    data(){
		  return{
        navlefts:[{id:1,name:'推荐'},{id:2,name:'热门'},{id:3,name:'关注'}, {id:4,name:'开源推荐'},
          {id:5,name:'内推招聘'},{id:6,name:'应用安利'},{id:7,name:'开发工具'},{id:8,name:'New资讯'},],
        cur:1,
        published:[{name:'Chen',tip:'JS开发者 @ 找工作',content:'学习数据集合的迭代任务，最让人不解的是，这种common practice在哪里？如果是集合是动态生成的，\n' +
            '                    转成数组不是一样的可以迭代，为什么要专门约定一种通用迭代算法？',like:56,comment:55},
          {name:'jalls',tip:'学生',content:'掘金的前端哥哥姐姐们可以帮忙看看简历吗，最近投递了很多实习生招聘，一次面试都没有，好怀疑自己😭。（现在大三在读）',like:56,comment:55},
          {name:'Chen',tip:'JS开发者 @ 找工作',content:'学习数据集合的迭代任务，最让人不解的是，这种common practice在哪里？如果是集合是动态生成的，\n' +
              '                    转成数组不是一样的可以迭代，为什么要专门约定一种通用迭代算法？',like:56,comment:55},
          {name:'Chen',tip:'JS开发者 @ 找工作',content:'学习数据集合的迭代任务，最让人不解的是，这种common practice在哪里？如果是集合是动态生成的，\n' +
              '                    转成数组不是一样的可以迭代，为什么要专门约定一种通用迭代算法？',like:56,comment:55},
          {name:'Chen',tip:'JS开发者 @ 找工作',content:'学习数据集合的迭代任务，最让人不解的是，这种common practice在哪里？如果是集合是动态生成的，\n' +
              '                    转成数组不是一样的可以迭代，为什么要专门约定一种通用迭代算法？',like:56,comment:55},
          {name:'Chen',tip:'JS开发者 @ 找工作',content:'学习数据集合的迭代任务，最让人不解的是，这种common practice在哪里？如果是集合是动态生成的，\n' +
              '                    转成数组不是一样的可以迭代，为什么要专门约定一种通用迭代算法？',like:56,comment:55},],
        hotnews:[{content:'【掘金 & 青云QingCloud】 福利来了！\n' +
      '              1. 通过此链接注册青云...',text:'23赞·155评论'},
          {content:'【掘金 & 青云QingCloud】 福利来了！\n' +
              '              1. 通过此链接注册青云...',text:'23赞·155评论'},
          {content:'【掘金 & 青云QingCloud】 福利来了！\n' +
              '              1. 通过此链接注册青云...',text:'23赞·155评论'},]
      }
    }
	}
</script>
<style scoped>
  .content {
    width: 100%;
    max-width: 960px;
    margin: 60px auto 0;
    display: flex;
  }
  .contexter{
    margin-top: 60px;
  }
  .nav-left{
    position: fixed;
    background: white;
    width: 112px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-radius: 2px;
  }
.total{
  background: white;
}
 .nav-left .title{
   margin: 13px;
   text-align: center;
   font-size: 16px;
   border-radius: 3px;
   width: 87px;
   height: 31px;
   line-height: 31px;
   cursor: pointer;
 }
  .nav-left .title:hover{
    background: #e6e6e6;
    color: #007fff;
  }
   .active{
     background: #e6e6e6;
     color: #007fff;
  }
   .taking{
     border-radius: 5px;
     box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
     margin-bottom: 8px;
   }
  .hot-content{
    width: 570px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-radius: 2px;
    margin-left: 140px;
  }
  .top-content{
    display: inline-flex;
  }
  .icon-left{
    width: 60px;
    display: flex;
    margin: 20px;
    border-radius: 15px;
  }
  .content-right{
    display: flex;
    flex-direction: column;
  }
   .top{
    margin: 20px 0;
  }
  .auth{
    float: left;
  }
  .auth .name{
    font-size: 18px;
    color: black;
    font-weight: 300;
  }
  .auth .tip{
    margin-top: 5px;
    color: #71777c;
  }
  .like{
    position: relative;
    margin: 0 20px 0 auto;
    width: 55px;
    height: 26px;
    border: 1px solid #37c701;
    color: #37c701;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
  }
  .like:hover{
    background: rgba(204,255,183,0.1);
  }
  .matter{
    margin: 5px 20px 20px 0;
    color: #2e3135;
    font-size: 15px;
    font-weight: 400;
  }
  .detail{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .about{
    width: 190px;
    line-height: 34px;
    text-align: center;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-top: 1px solid #e6e6e6;
    margin-left: .3em;
    font-size: 13px;
    font-weight: 500;
    color: #8a93a0;
  }
.icon{
  width: 18px;
  height: 18px;
}
  svg:not(:root) {
    overflow: hidden;
  }
  .nav-right{
    margin-left: 30px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
  .pin-block{
    background: white;
  }
  .head-item{
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #71777c;
    line-height: 35px;
    border-bottom: 1px solid #e9e9e9;
  }
  .hot-new{
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #e9e9e9;
  }
  .new-content{
    font-weight: 300;
    font-size: 13px;
  }
  .sat-item{
    font-size: 10px;
    color: #909090;
    margin-top: 5px;
  }
</style>
