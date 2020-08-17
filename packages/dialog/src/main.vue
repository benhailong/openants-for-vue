<!--url选择弹窗组件-->
<template>
  <el-dialog
    :title="atitle"
    :visible.sync="dialogVisible"
    :before-close="cancel"
  >
    <div class="dialog-content ">
      <div class="dialog-content-left">
        <el-scrollbar>
          <div style="height: 58vh" class="no-huakuai">
            <template v-for="(ant, index) in antData">
              <div :key="String(index)" v-if="ant.level == 2">
                <div
                  class="dialog-left-list"
                  @click="selectOneClick(index, ant)"
                >
                  <i class="el-icon-caret-bottom" v-if="select == index"></i>
                  <i class="el-icon-caret-right" v-else></i>
                  {{ ant.title }}
                </div>
                <template v-if="select == index">
                  <div
                    v-for="(cl, indext) in ant.childList"
                    :class="[
                      'dialog-left-list',
                      selectTwo == indext
                        ? 'dialog-left-list-twos'
                        : 'dialog-left-list-two'
                    ]"
                    :key="String(indext)"
                    @click="selectTwoClick(indext, cl)"
                  >
                    {{ cl.title }}
                  </div>
                </template>
              </div>
              <div
                :key="String(index)"
                v-if="ant.level == 1"
                @click="selectOneClick(index, ant)"
              >
                <div
                  :class="[
                    'dialog-left-list',
                    select == index
                      ? 'dialog-left-list-ones'
                      : 'dialog-left-list-one'
                  ]"
                >
                  {{ ant.title }}
                </div>
              </div>
            </template>
          </div>
        </el-scrollbar>
      </div>

      <div class="dialog-content-right">
        <el-scrollbar>
          <div style="height: 58vh" class="huakuai">
            <div
              class="dialog-content-right-alert"
              v-if="rightData.info != '' && rightData.info != undefined"
            >
              <el-alert :title="rightData.info" type="info" :closable="false">
              </el-alert>
            </div>
            <div v-if="rightData.type == 'call'">
              <!--             拨打电话-->
              <el-input
                placeholder=""
                v-model="call"
                size="mini"
                class="dialog-content-right-alert"
              >
                <template slot="prepend">电话</template>
              </el-input>
            </div>
            <div v-if="rightData.type == 'list'" style="text-align: left">
              <!--             列表-->
              <el-input
                placeholder=""
                v-model="search"
                size="mini"
                style="width: 40%;margin-bottom: 10px"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="getUrlList()"
                ></el-button>
              </el-input>
              <el-table
                v-bind:data="rightData.childList"
                style="width: 100%"
                border
                size="mini"
                height="375"
                :key="randomString"
                ref="singleTable"
                highlight-current-row
                row-key="id00001"
                :row-style="iRowStyle"
                :cell-style="iCellStyle"
                :header-row-style="iHeaderRowStyle"
                :header-cell-style="iHeaderCellStyle"
                @current-change="handleCurrentChange"
              >
                <el-table-column type="index" width="50"> </el-table-column>
                <el-table-column prop="aname" label="名称"> </el-table-column>
                <el-table-column label="操作" width="80" align="center">
                  <template>
                    <el-button size="mini" type="text">选择</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :page-size="15"
                :total="total"
                @current-change="pageGet"
              >
              </el-pagination>
            </div>
            <div v-if="rightData.type == 'url'">
              <!--             普通url-->
              <div>
                <div
                  style="font-size: 14px;margin-bottom: 10px;text-align: left"
                >
                  <i
                    class="el-icon-tickets"
                    style="color: #fb6638;margin-right: 10px"
                  ></i
                  >{{ rightData.title }}
                </div>
                <div class="ant-flex">
                  <div
                    v-for="(c, index) in rightData.childList"
                    :key="String(index)"
                    class="ant-dialog-btn"
                    :style="{
                      border:
                        changeUrl == index
                          ? '1px solid #fb6638'
                          : '1px #e5e5e5 solid'
                    }"
                    @click="changeUrl = index"
                  >
                    {{ c.title }}
                    <i
                      v-if="changeUrl == index"
                      class="el-icon-success"
                      style="color: #fb6638;font-size: 16px;position: absolute;margin: 24px auto auto 12px"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel" size="mini">取 消</el-button>
      <el-button type="primary" size="mini" @click="ok()">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import axios from "axios";
export default {
  name: "AntUrlDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    atitle: {
      // 弹窗的标题
      type: String,
      default: "链接选择"
    },
    antData: {
      // 弹窗的标题
      type: Array
    }
  },
  data() {
    return {
      randomString: "", // table 的随机数不用传
      select: 0, // 当前选中的一级目录
      selectTwo: 0, // 当前选中的二级目录
      rightData: {},
      retJson: {}, // 最终返回的json
      call: "", // 手机号码
      changeUrl: 0,
      search: "", // 搜索词
      currentPage: 1, // 当前页面，只有在需要分页查询的时候才会用到
      total: 1 // 总条数，只有在需要分页查询的时候才会用到
    };
  },
  methods: {
    pageGet(e) {
      console.log(e);
      this.currentPage = e;
      this.getUrlList();
    },
    // 选择
    handleCurrentChange(val) {
      console.log("选中了", val);
      this.retJson["type"] = "list";
      this.retJson["data"] = val;
    },
    // 修改行高
    iRowStyle: function({ row, rowIndex }) {
      return "height:35px;";
    },
    iHeaderRowStyle: function({ row, rowIndex }) {
      return "height:35px";
    },
    iCellStyle: function({ row, column, rowIndex, columnIndex }) {
      return "padding:0px";
    },
    iHeaderCellStyle: function({ row, column, rowIndex, columnIndex }) {
      return "padding:0px;background:#F7F7F7";
    },
    cancel() {
      this.$emit("dialog-cancel");
    },
    // 点击了二级菜单
    selectTwoClick(index, e) {
      this.selectTwo = index;
      this.change(e);
    },
    // 点击了没有二级的一级菜单
    selectOneClick(index, e) {
      this.selectTwo = 0;
      this.select = index;
      if (e.level == 1) {
        this.change(e);
      } else {
        this.change(e.childList[0]);
      }
    },
    change(e) {
      console.log("change", e);
      if (e.type != "list") {
        this.rightData = e;
      } else {
        this.currentPage = 1;
        this.rightData = e;
        this.rightData.childList = [];
        this.getUrlList();
      }
    },
    // 搜索获取列表
    getUrlList() {
      var data = new FormData();

      let obj = JSON.parse(JSON.stringify(this.rightData.search.parame));
      for (var i in obj) {
        var property = obj[i];
        data.append(i, property);
      }

      data.set("search", this.search); // 搜索关键词
      data.set("pageSize", 15); // 每页显示15条
      data.set("currentPage", this.currentPage); // 当前页m面

      let _this = this;

      axios.post(this.rightData.search.url, data).then(re => {
        // axios.post(url, data1).then(re => {
        var res = re.data;
        console.log(res);
        if (res.code == 0) {
          // _this.$set(_this.rightData, "childList", res.date.list);
          _this.randomString = new Date().toString();
          _this.rightData.childList = res.date.list;
          console.log(
            "当前" + this.currentPage + "返回数据：",
            _this.rightData.childList
          );

          _this.total = res.date.total;
        }
      });
    },
    // 提交将数据返回
    ok() {
      // 如果是电话
      if (this.rightData.type == "call") {
        this.retJson = { type: "call", data: { phone: this.call } };
      } else if (this.rightData.type == "url") {
        this.retJson["type"] = "url";
        this.retJson["data"] = this.rightData.childList[this.changeUrl];
      }

      this.$emit("antClick", this.retJson);
    }
  },
  mounted() {
    if (this.antData[0].level == 1) {
      this.change(this.antData[0]);
    } else {
      this.change(this.antData[0].childList[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme-default/css/ants.css";
@import "../../theme-default/css/diy.css";
</style>
