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
            <template v-for="ant in box">
              <div :key="String(ant.id)" @click="selectOneClick(ant)">
                <div
                  :class="[
                    'dialog-left-list',
                    select == ant.id
                      ? 'dialog-left-list-ones'
                      : 'dialog-left-list-one'
                  ]"
                  style="display: flex;justify-content: space-between"
                >
                  <div>{{ ant.name }}</div>
                  <div v-if="select == ant.id" style="display: flex;">
                    <div @click="updateBox(ant)">
                      <i class="el-icon-edit"></i>
                    </div>
                    <div style="width: 10px;text-align: center">|</div>
                    <div @click="delbox(ant.id)">
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
              v-model="boxname"
              placeholder="请输入分组名称"
              style="margin-top: 10px;margin-bottom: 10px"
              size="mini"
            ></el-input>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false"
                >取消</el-button
              >
              <el-button type="primary" size="mini" @click="saveBox(0)"
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
                v-model="search"
                size="mini"
                style="width: 200px"
                @keyup.enter.native="getImagesByBoxidAndPage()"
              >
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-upload
                class="upload-demo"
                :action="updateImage.url"
                :headers="updateImage.headers"
                :data="updateData"
                multiple
                :file-list="imageList"
                :show-file-list="true"
                :before-upload="beforeAvatarUpload"
                :on-success="uploadSuccess"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </div>
            <div class="image-dialog-imglist">
              <div
                class="block dis"
                v-for="(img, index) in imageData"
                :key="String(index)"
              >
                <!-- 选中之后的方法 -->
                <div
                  class="image-dialog-imglist-sl"
                  v-if="changeImage == index"
                  @click="changeImage = -1"
                >
                  <i class="el-icon-success"></i>
                </div>
                <!-- 鼠标hover显示 如果鼠标点击选中了，不需要显示下面的部分内容 s-->
                <i
                  class="el-icon-error image-dialog-del"
                  v-if="changeImage != index"
                  @click="delImage(img)"
                ></i>
                <div
                  class="image-dialog-imglist-hover"
                  v-if="changeImage != index"
                  @click="changeImage = index"
                >
                  {{ img.width }} * {{ img.high }}
                </div>
                <!-- 鼠标hover显示 如果鼠标点击选中了，不需要显示下面的部分内容 e-->
                <el-image
                  style="width: 110px; height: 110px;border-radius: 5px"
                  :src="rootUrl + img.url"
                  fit="contain"
                  @click="changeImage = index"
                ></el-image>
                <div
                  class="demonstration"
                  style="text-align: center"
                  @click="changeImage = index"
                >
                  {{ img.name | ellipsis }}
                </div>
              </div>
            </div>
            <div class="block" style="text-align: right;margin-top: 15px">
              <el-pagination
                layout="prev, pager, next"
                :total="total"
                @current-change="pageGet"
              >
              </el-pagination>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel" size="mini">取 消</el-button>
      <el-button type="primary" size="mini" @click="retImage">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {
  getBoxList,
  getImagesByBoxidAndPage,
  saveBox,
  delBox,
  delImageById
} from "../../../js/do";
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
      type: Object
    },
    rootUrl: {
      // 图片的连接
      type: String
    },
    reqest: {
      // 额外参数，用于点击确认时候返回
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 需要的数据S
      box: "",
      search: "", // 搜索词
      boxname: "", // 分组名称
      select: 0, // 当前选中的一级目录
      page: 1, // 当前页面，只有在需要分页查询的时候才会用到
      imageData: "", // 获取到的图片数据
      total: 1, // 总条数，只有在需要分页查询的时候才会用到
      imageList: [],
      updateImage: this.antData.updateImage,
      updateData: this.antData.updateImage.parame,
      changeImage: -1,
      // 需要的数据E
      visible: false,
      visible2: true,
      randomString: "", // table 的随机数不用传
      selectTwo: 0, // 当前选中的二级目录
      rightData: {},
      retJson: {}, // 最终返回的json
      call: "", // 手机号码
      changeUrl: 0
    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      }
      return value;
    }
  },
  methods: {
    pageGet(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getImagesByBoxidAndPage();
    },
    uploadSuccess() {
      console.log("sss");
      this.imageList = [];
      this.getImagesByBoxidAndPage();
    },
    // 图片上传
    beforeAvatarUpload(file) {
      console.log("beforeAvatarUpload");
      var arr = ["image/jpeg", "image/png", "image/gif"];

      var fileType = file.type;
      var isJPG = false;

      arr.forEach(item => {
        if (item === fileType) {
          isJPG = true;
          return; // 跳出本次循环
        }
      });

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG,JPEG,PNG,GIF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 修改左侧分类名称
    updateBox(e) {
      this.$prompt("修改分组名称", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /\S/,
        inputValue: e.name,
        inputErrorMessage: "分组名称不能为空"
      })
        .then(({ value }) => {
          this.saveBox(e.id, value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    // 删除分组
    delbox(e) {
      this.$confirm("你将永久删除该图片分组, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var boxData = this.antData.delImageBox;
          let _this = this;
          // 删除图片分组
          delBox(boxData.url, boxData.parame, boxData.headers, e, res => {
            _this.visible = false;
            if (res.code == 0) {
              _this.$message({
                message: "删除成功",
                type: "success"
              });
              _this.getBoxList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 删除图片
    delImage(e) {
      this.$confirm("你将永久删除该图片, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.delImageById(e);
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

    // 点击了没有二级的一级菜单
    selectOneClick(e) {
      this.select = e.id;
      this.updateData.boxid = e.id;
      console.log(this.updateData);
      // 根据点击查询数据
      this.getImagesByBoxidAndPage();
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
      let _this = this;
      // 获取图片分类
      getBoxList(boxData.url, boxData.parame, boxData.headers, res => {
        _this.box = res.data;
      });
    },
    // 搜索图片列表
    getImagesByBoxidAndPage() {
      var imagePostData = this.antData.getImage;
      let _this = this;
      getImagesByBoxidAndPage(
        imagePostData.url,
        imagePostData.parame,
        imagePostData.headers,
        _this.select,
        _this.search,
        _this.page,
        res => {
          if (res.code == 0) {
            _this.imageData = res.data.list;
            _this.total = res.data.total;
          }
        }
      );
    },
    saveBox(id, name = "") {
      var addImageBox = this.antData.saveImageBox;
      let _this = this;
      if (name == "") {
        name = this.boxname;
      }
      saveBox(
        addImageBox.url,
        addImageBox.parame,
        addImageBox.headers,
        id,
        name,
        res => {
          console.log(res);
          _this.visible = false;
          if (res.code == 0) {
            _this.$message({
              message: "保存成功",
              type: "success"
            });
            _this.getBoxList();
          }
        }
      );
    },
    delImageById(e) {
      var delImage = this.antData.delImage;
      let _this = this;
      delImageById(
        delImage.url,
        delImage.parame,
        delImage.headers,
        e.id,
        res => {
          console.log(res);
          _this.visible = false;
          if (res.code == 0) {
            _this.$message({
              message: "删除成功",
              type: "success"
            });
            _this.getImagesByBoxidAndPage();
          }
        }
      );
    },
    // 提交将数据返回
    retImage() {
      // 如果是电话
      this.$emit("antClick", {
        img: this.imageData[this.changeImage],
        root: this.rootUrl,
        reqest: this.reqest
      });
      this.$emit("dialog-cancel");
    }
  },
  mounted() {
    this.getBoxList();
    this.updateData.boxid = 0;
    console.log(this.updateData);
    this.getImagesByBoxidAndPage();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
