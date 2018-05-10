<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
      <el-form-item label="关键词:">
        <el-input v-model="formInline.keyword" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item label="状态:">
        <el-select v-model="formInline.userType" placeholder="请选择状态">
          <el-option label="全部" value="全部"></el-option>
          <el-option label="优化中" value="优化中"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="task-list">
      <h3>任务列表</h3>
      <el-table :data="tableData" border style="width: 100%" height="400" size="mini">
        <el-table-column fixed prop="key" label="关键词">
        </el-table-column>
        <el-table-column fixed prop="engine" label="搜索引擎" width="150">
        </el-table-column>
        <el-table-column fixed prop="state" label="状态" width="150">
        </el-table-column>
        <el-table-column fixed prop="time" label="时间" width="150">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button size="mini">修改</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        keyword: '',

      },
      tableData: [{
        key: 'LED',
        engine: 'google.com',
        state: '优化中',
        time: '2018-05-08',
      }, {
        key: 'LED',
        engine: 'google.com',
        state: '优化中',
        time: '2018-05-08',
      }, {
        key: 'LED',
        engine: 'google.com',
        state: '优化中',
        time: '2018-05-08',
      }, ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {

    }
  },

}

</script>
<style scoped>
.task-list h3 {
  line-height: 40px;
  font-weight: bold;
}

</style>
