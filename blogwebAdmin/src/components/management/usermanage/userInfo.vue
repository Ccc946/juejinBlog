<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="ID"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.username }}</p>
          <p>邮箱: {{ scope.row.email }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="手机号"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-document"></i>
        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getAllUser,deleteUser } from '../../../api/admin';
	export default {
		name: "userInfo",
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      handleDelete(index, row) {
        this.$confirm('此操作将删除用户数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
           const res = deleteUser(row.id);
            res.then(data => {
              const res = getAllUser();
                res
                .then(data => {
                  this.tableData = data;
                })
                .catch(e => {
                  alert(e);
                })
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(e=>{
              alert(e);
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    created(){
      const res = getAllUser();
      res
       .then(data => {
         this.tableData = data;
       })
       .catch(e => {
         alert(e);
       })
    }
	}
</script>

<style scoped>

</style>
