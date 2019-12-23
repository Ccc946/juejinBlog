<template>
  <div class="context">
    <div class="main-comment">
      <div class="comment-item">
        <ul class="comment-list">
          <li class="show-comment" v-for="question in questions" :key="question.id">
            <div class="box-item">
              <div class="auth">
                <a class="icon">
                  <img src="../../assets/logo.png" width="30">
                  <span>{{question.auth}}</span>
                </a>
              </div>
              <div class="title">{{question.title}}</div>
              <div class="content">{{question.content}}</div>
              <div class="category"><span class="cat-text">{{question.category}}</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="person-art">
      <div class="write-problem">
        <button class="btn">我要提问</button>
      </div>
      <div class="nav-list">
        <header class="nav-title">最新回答</header>
        <ul class="ans-list">
          <li class="show-list" v-for="newan in newans" :key="newan.id">
            <p>{{newan.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "QueAndAns",
    data(){
		  return{
		    questions:[{id:1,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
        category:'Golang'},
          {id:2,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},
          {id:3,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},
          {id:4,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},
          {id:5,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},
          {id:6,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},
          {id:7,auth:'Chen',title:'Obfuscation 程序代码',content:'Problem Description It is a well-known fact that if you mix up the letters of a word, while leaving the fi...',
            category:'Golang'},],
        newans:[{text:'hazard~7 回答了： vue/cli脚手架 4.0.5 运行 vue ui报错'},
          {text:'hazard~7 回答了： vue/cli脚手架 4.0.5 运行 vue ui报错'},
          {text:'hazard~7 回答了： vue/cli脚手架 4.0.5 运行 vue ui报错'},
          {text:'hazard~7 回答了： vue/cli脚手架 4.0.5 运行 vue ui报错'},]
      }
    }
	}
</script>

<style scoped>
  .context{
    width: 100%;
    max-width: 960px;
    margin: 60px auto 0;
    display: flex;
  }
  .main-comment{
    margin-top: 60px;
    width: 650px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.05);
  }
  .show-comment{
    margin-bottom: 8px;
  }
  .box-item{
    background: #ffffff;
    display: inline-flex;
    flex-direction: column;
    border-radius: 2px;
  }
  .box-item:hover{
    background: #fafafa;
  }
  .auth{
    padding: 20px;
    cursor: pointer;
    color: #b2bac2;
    font-size: 16px;
    font-weight: 400;
    width: 100px;
  }
  .auth a{
    text-decoration: none;
  }
  .auth a:hover{
    color: #007fff;
  }
  .title{
    color: #71777c;
    font-weight: 400;
    font-size: 18px;
    padding: 0 20px;
    cursor: pointer;
  }
  .title:hover{
    color: #2e3135;
  }
  .content{
    padding:10px 20px;
    font-size: 15px;
    color: #909090;
    font-weight: 300;
  }
  .category{
    margin: 20px;
  }
  .cat-text{
    color: #b2bac2;
    border: 1px solid #b2bac2;
    border-radius: 15px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .cat-text:hover{
    color: #007fff;
    border: 1px solid #007fff;
  }

  /*侧边部分*/
  .person-art{
    margin: 60px 0 0 30px;
    width: 250px;
  }
  .write-problem{
    margin-bottom: 10px;
  }
  .btn{
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
  .btn:hover{
    color: #fff9ff;
    background: #007eee;
  }
  .nav-list{
    background: #ffffff;
  }
  .nav-title{
    color: #909090;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    padding-left: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05) ;
  }
  .show-list{
    padding: 10px;
    border-bottom: 1px solid #e9e9e9;
    cursor: pointer;
  }
</style>
