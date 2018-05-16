<template>
  <div>
    <Crumb :cur="1" ref="Crumb"></Crumb>
    <div class="form-view" ref="Form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="">
          <el-input v-model="formInline.companyName" placeholder="公司名查询"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.uid" placeholder="UID查询"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder="用户名查询"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.agent" placeholder="代理商名称查询"></el-input>
        </el-form-item>
        <el-form-item label="用户版本">
          <el-select v-model="formInline.userType" placeholder="请选择">
            <el-option label="全部" value="0"></el-option>
            <el-option label="试用期用户" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="领取状态:">
          <el-select v-model="formInline.userState" placeholder="请选择">
            <el-option label="全部" value="0"></el-option>
            <el-option label="试用期用户" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服务状态:">
          <el-select v-model="formInline.serverState" placeholder="请选择">
            <el-option label="全部" value="0"></el-option>
            <el-option label="试用期用户" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList"><i class="iconfont icon-yonghu"></i>查询</el-button>
          <el-button type="info"><i class="iconfont icon-yonghu"></i>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="view">
      <h3 class="h3-title">任务列表 <small>你需要在30个工作日内引导客户完成建站</small></h3>
      <el-table :data="tableData" border :stripe="true" style="width: 100%" size="mini" :height="400">
        <el-table-column fixed prop="userName" label="用户名称" width="150">
        </el-table-column>
        <el-table-column prop="uid" label="UID" width="120" align="center" sortable>
        </el-table-column>
        <el-table-column prop="companyName" label="公司名称" width="250">
        </el-table-column>
        <el-table-column prop="agent" label="代理商名称" width="200" align="center">
        </el-table-column>
        <el-table-column prop="userType" label="用户版本" width="120" align="center">
        </el-table-column>
        <el-table-column prop="registerTime" label="注册时间 最后登录时间" width="150" :render-header="renderHeader" align="center">
          <template slot-scope="scope">
           <!-- 随便你自定义，通过（scope.row）拿到当前行数据-->
           <p>{{scope.row.registerTime}}</p>
           <p>{{scope.row.lastLoginTime}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="distributionTime" label="分配时间" width="120" align="center">
        </el-table-column>
        <el-table-column prop="receiveType" label="领取状态/操作时间" width="200" align="center">
            <template slot-scope="scope">
             <!-- 随便你自定义，通过（scope.row）拿到当前行数据-->
             {{scope.row.receiveType}}<em>/</em><span class="gray">{{scope.row.operationTime}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="serverState" label="服务状态/操作时间" width="300" align="center">
              <template slot-scope="scope">
             <!-- 随便你自定义，通过（scope.row）拿到当前行数据-->
            <div style="display: inline-block;width: 150px;">
              {{scope.row.serverState}}<em>/</em><span class="gray">{{scope.row.serverTime}}</span>
            </div>
             <el-button type="primary" size="mini" ><i class="iconfont icon-yonghu"></i>查看进度</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="success" class="el-button--normal" icon="iconfont icon-yonghu" titile="登录"  size="mini"></el-button>
            <el-button type="warning" class="el-button--normal" icon="iconfont icon-yonghu" title="修改密码"  size="mini"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import crumb from '../../components/crumb'
export default {
  components: {
    'Crumb': crumb,
  },
  data() {
    return {
      tableHeight: 0,
      formInline: {
        companyName: '',
        uid: '',
        user: '',
        agent: '',
        userType: '0',
        userState: '0',
        serverState: '0',
      },
      tableData: []
    }
  },
  created: function () {
   
  },
  mounted: function() {
    console.log('客服页面加载完成')
    this.getList();
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
    getList() {
      let that = this;
      that.$post('/customer', that.formInline)
        .then(function(response) {
          if (response.Flag == 'Y') {
            console.log(response.Data)
            that.tableData = response.Data
          }
        })
        .catch(function(error) {
          console.log('error', error)
        })
    },
    // 用于处理表格头部多行问题
    renderHeader(createElement, { column, _self }) {
      let label = column.label;
      let labelArr = label.split(' ');
      return createElement(
        'div', {
          'class': 'header-center'
        }, [
          createElement('div', {
            attrs: { type: 'text' },
          }, [labelArr[0]]),
          createElement('div', {
            attrs: { type: 'text' },
          }, [labelArr[1] || ''])
        ]
      );
    },
  },
}

</script>
