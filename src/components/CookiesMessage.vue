<template>
  <div class="row" v-if="isOpen">
    <div class="col-md-6">
        {{ cookieMessage }}
      
    </div>
      <div class="col-md-2">
        <button class="btn btn-primary" @click="acceptGDPR">{{ cookieButtonTextAgree }}</button>
      </div>
      <div class="col-md-2">
          <button class="btn btn-primary" @click="denyGDPR">{{ cookieButtonTextDeny }}</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    cookieButtonTextAgree: {
      type: String,
      default: 'Aceptar'
    },
    cookieButtonTextDeny: {
      type: String,
      default: 'Rechazar'
    },
    cookieMessage: {
      type: String,
      default: 'Utilizamos cookies propias y de terceros para mejorar tu experiencia y nuestros servicios analizando la navegación en nuestra web.'
    },
    cookiePosition: {
      type: String,
      default: 'bottom'
    },
    cookieButtonClass: {
      type: String,
      default: 'cookie-message__button'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition() {
      return `cookie-message__${this.cookiePosition}`
    }
  },
  created() {
    if (!this.getAcceptStatus() === true) {
      this.isOpen = true
    }
  },
  methods: {
    setAccept() {
      localStorage.setItem('gdpr:cookie', true);
    },
    setDeny() {
      localStorage.setItem('gdpr:cookie', false);
    },
    getAcceptStatus() {
      return localStorage.getItem('gdpr:cookie');
    },
    acceptGDPR() {
      this.setAccept();
      this.isOpen = false;
      this.$emit('aceptar');
    },
    denyGDPR() {
      this.setDeny();
      this.isOpen = false;
      this.$emit('rechazar');
    }
  }
}
</script>

<style>
  
</style>