<template>
  <div id="art">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="id"
        width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="标题"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-document"></i>
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="作者"
        width="160">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>作者: {{ scope.row.author }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.author }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column
        label="内容"
        width="280">
        <template slot-scope="scope">
          <i class="el-icon-document"></i>
          <span style="margin-left: 10px">{{ scope.row.content }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="类型"
        width="120">
        <template slot-scope="scope">
          <i class="el-icon-search"></i>
          <span style="margin-left: 10px">{{ scope.row.category }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Form -->
    <el-dialog width="50%" title="修改文章" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.author" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.category" placeholder="请选择文章类型">
            <el-option label="后端" value="后端"></el-option>
            <el-option label="前端" value="前端"></el-option>
            <el-option label="Android" value="Android"></el-option>
            <el-option label="iOS" value="iOS"></el-option>
            <el-option label="人工智能" value="人工智能"></el-option>
            <el-option label="开发工具" value="开发工具"></el-option>
            <el-option label="代码人生" value="代码人生"></el-option>
            <el-option label="阅读" value="阅读"></el-option>

          </el-select>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onsubmit()">保 存</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getAllArticle,deleteArticle,changeArticle } from '../../../api/admin';
	export default {
		name: "Article",
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          id:0,
          title: '',
          category: '',
          author:'',
          content:''
        },
        formLabelWidth: '120px',
        isRouterAlive:true
      }
    },
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.form.id = row.id;
        this.form.author = row.author;
        this.form.title = row.title;
        this.form.category = row.category;
        this.form.content = row.content;
      },
      handleDelete(index, row) {
        this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          const res = deleteArticle(
            row.id
          );
          res
          .then((data)=>{
            this.getdata();
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
          .catch((e)=>{
            alert(e)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePreview(file) {
        // console.log(file);
      },
      onsubmit(){
        this.dialogFormVisible = false;
        const res = changeArticle(this.form);
        res
          .then((data)=>{
            this.getdata();
            this.$message({
              type: 'success',
              message: '修改成功'
            });
          })
          .catch((e)=>{
            alert(e)
          })
      },
      getdata() {
          const res = getAllArticle({});
        res
          .then(result=>{
            this.tableData = result;
          })
          .catch((e)=>{
            alert(e)
          })
        }
      
    },
    mounted: function () {
      this.getdata();
    },
	}
</script>

<style scoped>
  .el-select{
    display: block;
  }
</style>
