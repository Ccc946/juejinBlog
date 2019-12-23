<template>
  <div @click="hidePanel">
    <header st:block="editorHeader" class="header editor-header">
      <div class="left-box">
        <div class="logo"></div>
      </div>
      <input
        placeholder="输入文章标题..."
        spellcheck="false"
        maxlength="80"
        class="title-input title-input"
        v-model="title"
      />
      <div class="right-box">
        
        
        <div st:block="publishPopup" class="publish-popup publish-popup with-padding">
          <div class="pub" @click.stop="publish">
            <span class="title">发布</span>
          </div>
          <div class="panel" v-show="panelShow" @click.stop>
            <div class="title">发布文章</div>
            <div class="category-box">
              <div class="sub-title">分类</div>
              <div class="category-list">
                <div class="item" v-for="categoryList in categoryLists" :key="categoryList.id"
                :class="{active:categoryNum==categoryList.name}" @click="categoryNum = categoryList.name">{{categoryList.name}}</div>
              </div>
            </div>
            <button st:name="publishBtn" @click="submit" class="publish-btn">确定并发布</button>
            <!---->
          </div>
        </div>
        <nav class="navigator main-navigator with-padding">
          <div
            class="toggle-btn"
            style="background-image: url(&quot;http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg&quot;);"
          ></div>
        </nav>
      </div>
    </header>
    <div class="markdown">
      <div class="container">
        <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="min-height: 600px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { writeArticle } from "../../api/user";
import { getClientSize } from "../../util/util";
import { mapMutations } from "vuex";

export default {
  name: "",
  props: [],
  components: {
    mavonEditor
  },
  data() {
    return {
      title: '',
      content: "",
      html: "",
      configs: {},
      panelShow: false,
      categoryLists:[{id:1,name:'后端'},{id:2,name:'前端'},{id:3,name:'Android'},{id:4,name:'iOS'},
      {id:5,name:'人工智能'},{id:6,name:'开发工具'},{id:7,name:'代码人生'},{id:8,name:'阅读'},],
      categoryNum: '后端',
    };
  },
  computed: {
    width() {
      return getClientSize().width;
    },
    height() {
      return getClientSize().height;
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      let formdata = new FormData();

      this.$upload
        .post("/上传接口地址", formdata)
        .then(res => {
          console.log(res.data);
          this.$refs.md.$img2Url(pos, res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    ...mapMutations({
      flag:"flag"
    }),
    // 提交
    submit() {
      if(this.title == '' || this.content == ''){
        this.$message.error('题目和内容不能为空！');
      }else{
        const res = writeArticle({
          author:localStorage.getItem('userName'),
          category: this.categoryNum,
          title: this.title,
          content: this.content
        });
        res
        .then(data => {
          this.flag('/');
          this.$message.success('文章添加成功！');
          this.$router.push('/');
        })
        .catch(e => {
          alert(e);
        });
      }
    },
    publish() {
      this.panelShow = true;
    },
    hidePanel() {
      this.panelShow = false;
    }
  },
  mounted() {}
};
</script>
<style scoped>
 .markdown {
  top: 64px;
  position: absolute;
  width: 100%;
}
.header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 1.4rem;
  height: 63px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 10000;
}

.left-box {
  display: none;
}
.title-input {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  border: none;
  flex: 1 1 auto;
  height: 100%;
  outline: none;
}
.left-box,
.right-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.content-image-fetcher {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.334rem;
  white-space: nowrap;
  color: #39af0c;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.with-padding {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
.main-image-selector {
  position: relative;
}
.publish-popup {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.with-padding {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
.pub {
  border: 1px solid #007fff;
  font-size: 1rem;
  white-space: nowrap;
  color: #007fff;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pub .title {
  padding: 10px 15px;
  font-size: 1rem;
}
.pub:hover {
  background: rgba(0, 128, 255, 0.06);
}
.panel {
  position: absolute;
  margin: 1rem -2.7rem 0 0;
  padding: 2rem;
  top: 100%;
  right: 0;
  width: 25rem;
  font-size: 1rem;
  white-space: nowrap;
  color: #909090;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 1px 2px #f1f1f1;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2000;
}
.panel .title {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: hsla(218, 9%, 51%, 0.8);
}
.panel .category-box {
  margin-bottom: 1rem;
}
.panel .sub-title {
  margin-bottom: 1rem;
  font-size: 1rem;
}
.panel .category-list,
.panel .tag-list {
  white-space: normal;
}
.panel .category-list .item,
.panel .tag-list .item {
  display: inline-block;
  margin: 0 0.6rem 0.8rem 0;
  padding: 0.4rem 0.7rem;
  font-size: 0.9rem;
  white-space: nowrap;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  cursor: pointer;
}
.panel .category-list .item.active,
.panel .category-list .item:hover,
.panel .tag-list .item.active,
.panel .tag-list .item:hover {
  color: #007fff;
  border-color: rgba(0, 127, 255, 0.15);
  background-color: rgba(0, 127, 255, 0.05);
}
.panel .publish-btn {
  display: block;
  margin: 0 auto;
  padding: 0.6rem 1.2rem;
  color: #007fff;
  background: #fff;
  border: 1px solid currentColor;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
}
.toggle-btn {
  width: 2.667rem;
  height: 2.667rem;
  border-radius: 50%;
  background-color: #eee;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.with-padding:last-child {
  padding-right: 0;
}
</style>