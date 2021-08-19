<!-- 评价页 -->
<template>
  <div>
    <van-uploader :after-read="afterRead" v-model="fileList" />
    <button @click='safe'>保存</button>
    <input type="file" name="文件上传" id="fileup" @change='fileupload'>
  </div>

</template>

<script>
export default {
  data () {
    return {
      srcimg:'',
      objfile:[],
      fileList:[]
    };
  },

  components: {},

  computed: {},

  mounted() {
     
  },

  methods: {
    
    afterRead(file){  
      // 将文件转换为2进制文件
      this.objfile.push(file.file)
    },
    safe(){
      console.log(this.objfile)
      let fd = new FormData()
      fd.append('fileimg',this.objfile)
      // this.fileList.url = this.srcimg
    },
    fileupload(e){
        console.log(e)
    }
  }
}

</script>
<style  lang='less'>
</style>