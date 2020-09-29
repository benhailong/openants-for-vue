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
          <div style="height: 54vh" class="no-huakuai">
            <div
              :key="String(0)"
              @click="selectOneClick({ id: 0, title: '全部' })"
            >
              <div
                :class="[
                  'dialog-left-list',
                  select == 0 ? 'dialog-left-list-ones' : 'dialog-left-list-one'
                ]"
              >
                全部
              </div>
            </div>
            <template v-for="(ant, index) in antData">
              <div :key="String(index)" @click="selectOneClick(ant)">
                <div
                  :class="[
                    'dialog-left-list',
                    select == ant.id
                      ? 'dialog-left-list-ones'
                      : 'dialog-left-list-one'
                  ]"
                  style="display: flex;justify-content: space-between"
                >
                  <div>{{ ant.title }}</div>
                  <div v-if="select == ant.id" style="display: flex;">
                    <div @click="update">
                      <i class="el-icon-edit"></i>
                    </div>
                    <div style="width: 10px;text-align: center">|</div>
                    <div @click="delbox">
                      <i class="el-icon-delete"></i>
                    </div>
                    <div style="width: 10px"></div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </el-scrollbar>
        <div style="text-align: center">
          <el-popover placement="top" width="160" v-model="visible">
            <p style="margin: 0">添加分组</p>
            <el-input
              v-model="input"
              placeholder="请输入分组名称"
              style="margin-top: 10px;margin-bottom: 10px"
              size="mini"
            ></el-input>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false"
                >取消</el-button
              >
              <el-button type="primary" size="mini" @click="visible = false"
                >确定</el-button
              >
            </div>
            <el-button slot="reference" size="mini" style="margin-top: 5px"
              >添加分组</el-button
            >
          </el-popover>
        </div>
      </div>

      <div class="dialog-content-right">
        <el-scrollbar>
          <div style="height: 58vh" class="huakuai">
            <div
              style="display: flex;justify-content: space-between;margin-bottom: 10px"
            >
              <el-input
                placeholder="搜索图片名称"
                v-model="input4"
                size="mini"
                style="width: 200px"
              >
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-button type="primary" size="mini">上传图片</el-button>
            </div>
            <div class="image-dialog-imglist">
              <div class="block dis" v-for="fit in 15" :key="fit">
                <!-- 鼠标点击显示 s-->
                <!--                <div class="image-dialog-imglist-sl">-->
                <!--                  <i class="el-icon-check"></i>-->
                <!--                </div>-->
                <!-- 鼠标点击显示 e-->
                <!-- 鼠标hover显示 如果鼠标点击选中了，不需要显示下面的部分内容 s-->
                <i class="el-icon-error image-dialog-del" @click="delImage"></i>
                <div class="image-dialog-imglist-hover">
                  200*200
                </div>
                <!-- 鼠标hover显示 e-->
                <!--                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"-->
                <el-image
                  style="width: 110px; height: 110px;border-radius: 5px"
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3646262474,2245266927&fm=26&gp=0.jpg"
                  fit="contain"
                ></el-image>
                <div class="demonstration" style="text-align: center">
                  {{ fit }}
                </div>
              </div>
            </div>
            <div class="block" style="text-align: right;margin-top: 15px">
              <el-pagination layout="prev, pager, next" :total="1000">
              </el-pagination>
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
  name: "AntImageDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    atitle: {
      // 弹窗的标题
      type: String,
      default: "图片选择器"
    },
    antData: {
      // 弹窗的数据
      type: Array
    }
  },
  data() {
    return {
      // 需要的数据S
      box: "",
      // 需要的数据E
      visible: false,
      visible2: true,
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
    // 修改左侧分类名称
    update() {
      this.$prompt("修改分组名称", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "分组名称不能为空"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    // 删除分组
    delbox() {
      this.$confirm("你将永久删除该图片分组, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delImage() {
      this.$confirm("你将永久删除该图片, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    cancel() {
      this.$emit("dialog-cancel");
    },
    pageGet(e) {
      console.log(e);
      this.currentPage = e;
      this.getUrlList();
    },
    // 点击了没有二级的一级菜单
    selectOneClick(e) {
      this.select = e.id;
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
    // 获取所有分组列表
    getBoxList() {
      var boxData = this.antData.getBox;
      var data = new FormData();

      let obj = JSON.parse(JSON.stringify(boxData.parame));
      for (var i in obj) {
        var property = obj[i];
        data.append(i, property);
      }

      let _this = this;
      debugger;
      axios
        .post(boxData.url, obj, {
          // headers: {
          //   uniacid: "2"
          // },
        })
        .then(res => {
          console.log("请求结果：", res);
        });

      // axios
      //   .post(boxData.url, data, {
      //     headers: {
      //       uniacid: "2",
      //       "sec-fetch-dest": "empty",
      //       "sec-fetch-mode": "cors",
      //       "sec-fetch-site": "cross-site",
      //       withCredentials: true
      //     }
      //   })
      //   .then(re => {
      //     var res = re.data;
      //     console.log(res);
      //     if (res.code == 0) {
      //       _this.box = res.data;
      //     }
      //   });
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
    this.getBoxList();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
