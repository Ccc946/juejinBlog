<template>
  <div class="all">
    <div class="topic-list topic-list">
      <div class="title">全部话题</div>
      <div class="list">
        <div class="topic-item topic-item" v-for="data in datas" :key="data.id">
          <a class="icon">
            <img src="../../assets/logo.png" width="60px">
          </a>
          <div class="content">
            <a>{{data.name}}</a>
            <span>关注：{{data.like}}·热度：{{data.hot}}</span>
            <span class="subscribe followed"> + 关注</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
		name: "Topic",
    data(){
		  return {
        datas:[{id:1,name:'开源项目',like:122,hot:456},{id:2,name:'New资讯',like:122,hot:456},
          {id:3,name:'好文推荐',like:122,hot:456},{id:4,name:'开源项目',like:122,hot:456},
          {id:5,name:'读书笔记',like:122,hot:456}, {id:6,name:'今日最佳',like:122,hot:456},
          {id:7,name:'代码秀',like:122,hot:456},{id:8,name:'开源项目',like:122,hot:456}]
      }
    }
	}
</script>

<style scoped>
  .all{
    background: white;
  }
  .topic-list{
    width: 100%;
    max-width: 960px;
    margin: 60px auto;
    display: flex;
    flex-direction: column;

  }
  .topic-list .title {
    padding: 0 1.2rem;
    text-align: left;
    font-size: 2rem;
    color: #0e0e0e;
    font-weight: 600;
    margin: 2rem 0;
  }
  .topic-list .list{
    display: flex;
    flex-direction: row;
    max-width: 920px;
    flex-wrap: wrap;
  }
  .topic-item{
    display: flex;
    flex-grow: 0;
    padding: 1.5rem 1rem;
    align-items: flex-start;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
  .content {
    color: #8a9aa9;
    width: 12rem;
    max-width: 12rem;
    letter-spacing: normal;
    text-align: left;
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
  }
  .content a, .content span {
    justify-content: center;
  }
  a {
    font-weight: 600;
    color: #2e3135;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover{
    color: #007fff;
  }
  span{
    padding-top: .5rem;
    font-size: 0.8rem;
  }
  .followed{
    color: #37c701;
  }
  .subscribe {
    cursor: pointer;
  }

</style>
