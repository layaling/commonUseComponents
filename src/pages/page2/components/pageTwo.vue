<!--
 * @lastEditors: lingyang
 * @Date: 2019-12-16 15:31:22
 * @LastEditTime: 2020-07-06 18:03:52
--> 
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>循环表单校验</h2>
    <el-form :model="dynamicValidateForm" :rules="rules" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="domain.label"
        :key="domain.key"
        :prop="'domains.' + index + '.model'"
        :rules="domain.rule"
      >
        <el-input v-if="domain.type === 'input'" v-model="domain.model"></el-input>
        <el-select v-if="domain.type === 'select'"  v-model="domain.model">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-checkbox v-if="domain.type === 'checkbox'"  v-model="domain.model"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <h2>循环表格校验</h2>
    <el-form :model="tableForm" ref="tableForm">
      <el-table
        :data="tableForm.checkItemList"
        border
        ref="listTable"
        height="422"
      >
        <el-table-column
          v-for="(info, index) in checkItemListHeader" :key="index"  :prop="info.key"
          :label="info.label"
          :min-width="info.width"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <el-form-item :prop="'checkItemList.'+ scope.$index + '.' + info.key" :rules="info.rule">
               <p v-if="info.type === 'input'"><el-input v-model="scope.row[info.key]"></el-input></p>
                <p v-if="info.type === 'select'">
                  <el-select v-model="scope.row[info.key]">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </p>
                <p v-if="info.type === 'checkbox'">
                  <el-checkbox v-model="scope.row[info.key]"></el-checkbox>
                </p>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
      <el-form-item>
        <el-button size="mini" @click="handerSave('tableForm')">保存</el-button>
        <el-button size="mini" @click="handlerCancel('tableForm')">取消</el-button>
        <el-button size="mini" @click="handleAddNew">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dynamicValidateForm: {
        email:'',
        domains: [{
          type: 'input',
          modelName: 'str',
          model:'',
          label: '域名',
          value: '',
          rule: { required: true, message: '域名不能为空', trigger: 'blur'}
        },{
          type:'select',
          modelName: 'checkId',
          model:'',
          label: '下拉框',
          rule: { required: true, message: '下拉框不能为空', trigger: 'change'}
        },{
          type: 'checkbox',
          modelName:'box',
          model:'',
          label: '复选框',
          rule: { required: true, message: '复选框不能为空', trigger: 'change'}
        }]
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
      },
      options:[{
        value: 1,
        label: '测试'
      }],
      tableForm:{
        checkItemList: [{
          test01: '',
          test02: '',
          test03: '',
          test04: ''
        }],
      },
      checkItemListHeader: [
      {
        label: '测试001',
        width: '128',
        key: 'test01',
        type: 'input',
        rule: { required: true, message: '测试001不能为空', trigger: 'blur'}
      },
      {
        label: '测试002',
        width: '118',
        key: 'test02',
        type: 'select',
        rule: { required: true, message: '测试002不能为空', trigger: 'change'}
      }, {
        label: '测试003',
        width: '260',
        key: 'test03',
        type: 'input',
        rule: { required: true, message: '测试003不能为空', trigger: 'blur'}
      }, {
        label: '测试004',
        width: '80',
        key: 'test04',
        type: 'checkbox',
        rule: { required: true, message: '测试004不能为空', trigger: 'change'}
      }
    ], // 检查项目列表标题
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handerSave(tableForm) {
      console.log('save')
      console.log(this.$refs.tableForm)
      // this.$refs[tableForm].validateField
      this.$refs[tableForm].validate((valid) => {
        console.log(valid)
      })
    },
    handlerCancel(tableForm) {
      this.$refs[tableForm].resetFields();
    },
    handleAddNew() {
      this.tableForm.checkItemList.push({
        test01: '',
        test02: '',
        test03: '',
        test04: ''
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-dynamic{
  width: 600px;
}
</style>
<style>
.el-select{
  width: 100%;
}
.el-form-item__content{
  text-align: left;
}
</style>
