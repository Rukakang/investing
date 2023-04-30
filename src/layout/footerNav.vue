<template>
  <div class='footer'>
    <p class="intro rflex">
      <span>{{ $t('commons.ai') }}Admin</span>
      <span>lyj({{ $t('commons.wechatNumber') }})</span>
    </p>
    <p class="beian">2023.5.1</p>
  </div>
</template>


<script>

export default {
  name: "footerNav",
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="less">
.footer {
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  background: #fff;

  p {
    line-height: 30px;
  }

  .intro {
    width: 140px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
}
</style>


