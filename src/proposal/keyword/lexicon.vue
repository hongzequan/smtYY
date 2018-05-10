<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
      <el-form-item label="关键词:">
        <el-input v-model="formInline.companyName" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item label="添加时间:">
        <el-input v-model="formInline.uid" placeholder="请添加时间"></el-input>
      </el-form-item>
      <el-form-item label="类型:">
        <el-select v-model="formInline.userType" placeholder="请选择类型">
          <el-option label="通用词" value="通用词"></el-option>
          <el-option label="前缀词" value="前缀词"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作人:">
        <el-input v-model="formInline.uid" placeholder="请输入操作人姓名"></el-input>
      </el-form-item>
      <el-form-item label="状态:">
        <el-select v-model="formInline.userType" placeholder="请选择状态">
          <el-option label="开启" value="开启"></el-option>
          <el-option label="禁用" value="禁用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态:">
        <el-select v-model="formInline.userType" placeholder="请选择状态">
          <el-option label="开启" value="开启"></el-option>
          <el-option label="禁用" value="禁用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行业:">
        <el-select v-model="formInline.userType" placeholder="请选择行业">
          <el-option label="通用" value="通用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="task-list">
      <h3>任务列表</h3>
      <el-table :data="tableData" border style="width: 100%" height="300" size="mini">
        <el-table-column fixed prop="userName" label="用户名称" width="150">
        </el-table-column>
        <el-table-column prop="uid" label="UID" width="120">
        </el-table-column>
        <el-table-column prop="companyName" label="公司名称" width="250">
        </el-table-column>
        <el-table-column prop="agent" label="代理商名称" width="200">
        </el-table-column>
        <el-table-column prop="userType" label="用户版本" width="120">
        </el-table-column>
        <el-table-column prop="registerTime" label="注册时间" width="120">
        </el-table-column>
        <el-table-column prop="lastLoginTime" label="最后登录时间" width="120">
        </el-table-column>
        <el-table-column prop="distributionTime" label="分配时间" width="120">
        </el-table-column>
        <el-table-column prop="receiveTime" label="领取状态" width="120">
        </el-table-column>
        <el-table-column prop="operationTime" label="操作时间" width="120">
        </el-table-column>
        <el-table-column prop="serverState" label="服务状态" width="120" fixed="right">
        </el-table-column>
        <el-table-column prop="serverTime" label="操作时间" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-dropdown size="mini">
              <el-button type="primary" size="mini">菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>登录</el-dropdown-item>
                <el-dropdown-item>重置密码</el-dropdown-item>
                <el-dropdown-item>修改公司名称</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        companyName: '',
        uid: '',
        user: '',
        agent: '',
        userType: '',
        userState: '',
        serverState: '',
      },
      tableData: [{
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '已完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '已完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '已完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }, {
        userName: 'hongzequan',
        uid: '1',
        companyName: '厦门二五八网络科技集团股份有限公司',
        agent: '258',
        userType: '试用期',
        registerTime: '2018-05-08',
        lastLoginTime: '2018-05-08',
        distributionTime: '2018-05-08',
        registerTime: '2018-05-08',
        receiveTime: '2018-05-08',
        operationTime: '2018-05-08',
        serverState: '未完成',
        serverTime: '2018-05-08',
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
