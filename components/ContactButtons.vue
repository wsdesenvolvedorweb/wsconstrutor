<template>
  <div>
    <b-container class="text-center">
        <b-row>
            <b-col>
                <b-button type="button" variant="outline-light">
                    <a href="https://wa.me/5519982380486" target="_blank" class="link-contact">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" :style="{fontSize: iconSize}"></font-awesome-icon>Entre em contato agora mesmo
                    </a>
                </b-button>
            </b-col>
            <b-col>
                <b-button type="button" variant="outline-light">
                    <a href="https://t.me/wsdesenvolvedorweb" target="_blank" class="link-contact">
                        <font-awesome-icon :icon="['fab', 'telegram']" :style="{fontSize: iconSize}"></font-awesome-icon>Entre em contato agora mesmo
                    </a>
                </b-button>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            iconSize: "50px"
        }
    }
}
</script>

<style scoped>
a.link-contact {
    color: rgb(68, 67, 67);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a.link-contact:hover {
    color: black;
    text-decoration: none;
}
</style>