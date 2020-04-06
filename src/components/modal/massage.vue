<template>
  <v-dialog
    v-model="visible"
    width="800px"
    overlay-color="#000"
    overlay-opacity="0.8"
    persistent
  >
    <div class="massage">
      <v-icon :color="icon[type].color">{{ icon[type].sorce }}</v-icon>
      <dl>
        <dt><slot />{{ title }}</dt>
        <dd>{{ description }}</dd>
      </dl>
      <div class="msgBottom">
        <v-btn width="380px" height="90px" outlined @click="done">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import util from 'util';

const timeout = util.promisify(setTimeout);

export default {
  props: ['type', 'title', 'description', 'slot', 'link'],
  data() {
    return {
      visible: false,
      icon: {
        info: { sorce: 'fa-info-circle', color: '#0085DE' },
        alert: { sorce: 'fa-exclamation-circle', color: '#d22828' },
        pass: { sorce: 'fa-envelope', color: '#c2c2c2' },
      },
      state: true,
    };
  },
  methods: {
    async open(value) {
      this.visible = value;

      if (value) {
        // setTimeout(() => {
        //   this.icon.pass.sorce = 'fa-envelope-open';
        // }, 1000);
        await timeout(1000);
        this.icon.pass.sorce = 'fa-envelope-open';
      } else {
        this.icon.pass.sorce = 'fa-envelope';
      }
    },
    done() {
      this.$emit('done');
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.massage {
  padding: 60px;
  font-size: 36px;
  border-radius: 20px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  .v-icon {
    font-size: 150px;
    animation: effect 1s forwards;
  }

  dl {
    margin-top: 40px;
    dt {
      font-size: 48px;
      font-weight: 500;
      word-break: keep-all;
    }
    dd {
      font-size: 32px;
      font-weight: 400;
      color: #888;
      word-break: keep-all;
      margin-top: 20px;
    }
  }

  .msgBottom{
    position:relative;
    animation: effectBtn 1s forwards;
  }

  .v-btn {
    margin-top: 60px;
    background: #292929;
    border-radius: 45px;
    border: 0px;
    font-size: 32px;
    color: #fff;
  }
}

@keyframes effect {
  0% {
    bottom: 150px;
  }
  100% {
    bottom: 0;
  }
}

@keyframes effectBtn{
  0%{
    bottom:-150px;
  }
  100%{
    bottom:0px;
  }
}

</style>
