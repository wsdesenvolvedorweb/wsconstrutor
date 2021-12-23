<template>
    <div>
        <Header></Header>
        <section id="contact">
            <b-container fluid>
                <div class="content">
                    <h1 class="text-center">Entre em contato conosco</h1>
                    <b-row>
                        <b-col sm="6" md="6">
                            <address id="address">
                                <p>Rua Nossa Senhora da Aparecida, 609</p>
                                <p>CEP: 13068 - 507</p>
                                <p>Bairro: Vila Padre Anchieta</p>
                                <p>Campinas - SP</p>
                                <p><font-awesome-icon :icon="['fas', 'phone']" :style="{fontSize}" title="Telefone"></font-awesome-icon>: (19) 98238 - 0486</p>
                                <p><font-awesome-icon :icon="['fab', 'whatsapp']" :style="{fontSize, color: 'darkgreen'}" title="WhatsApp"></font-awesome-icon>: (19) 98238 - 0486</p>
                                <p><font-awesome-icon :icon="['fab', 'telegram']" :style="{fontSize, color: '#007bff'}" title="Telegram"></font-awesome-icon>: (19) 98238 - 0486</p>
                            </address>
                        </b-col>
                        <b-col sm="6" md="6">
                            <b-form>
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group
                                            label="Nome:"
                                            label-for="name"
                                        >
                                            <b-form-input
                                                type="text"
                                                placeholder="Informe o seu nome"
                                                v-model="contact.name"
                                                required
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group 
                                            label="E-mail:" 
                                            label-for="email"
                                        >
                                            <b-form-input
                                                type="email"
                                                placeholder="Informe o seu e-mail"
                                                v-model="contact.email"
                                                required
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group
                                            label="Assunto:"
                                            label-for="subject"
                                        >
                                            <b-form-input
                                                type="text"
                                                placeholder="Informe o assunto"
                                                v-model="contact.subject"
                                                required
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group
                                            label="Mensagem:"
                                            label-for="message"
                                        >
                                            <b-form-textarea
                                                placeholder="Digite a sua mensagem"
                                                rows="5"
                                                no-resize
                                                v-model="contact.message"
                                                required
                                            ></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-form-group class="text-center">
                                    <b-button type="submit" variant="outline-success" class="m-2" @click.prevent="validateContact">Enviar</b-button>
                                    <b-button type="reset" variant="outline-secondary">Limpar</b-button>
                                </b-form-group>
                            </b-form>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            fontSize: "50px",
            contact: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    },
    methods: {
        // ! Utilização do método em ambiente de desenvolvimento, não será usado em produção.
        async sendEmail() {
            await axios.post("http://localhost:3001/contact", {
                name: this.contact.name,
                email: this.contact.email,
                subject: this.contact.subject,
                message: this.contact.message
            }).then((response) => {
                this.contact = response.data
            }).catch((error) => {
                return this.$toast.error("Erro ao enviar o e-mail!: ", error)
            })
        },
        validateContact() {
            if(this.contact.name === "" || this.contact.email === "" || this.contact.subject === "" || this.contact.message === "") {
                return this.$toast.error("Campos de preenchimento obrigatório!")
            }
            if(this.contact.name !== "" && this.contact.email !== "" && this.contact.subject !== "" && this.contact.message !== "") {
                this.sendEmail()
                this.$toast.success("Mensagem enviada com sucesso!")
                this.reset()
            }
        },
        reset() {
            this.contact.name = ""
            this.contact.email = ""
            this.contact.subject = ""
            this.contact.message = ""
        }
    },
    head: {
        title: "Contato - WS - Construtor"
    }
}
</script>

<style scoped>
section#contact {
    padding: 8px;
}

div.content {
    margin: 5px;
}

address#address p {
  margin-bottom: 0;
  color: black;
}

input::placeholder, textarea::placeholder {
    color: #189dd4
}
</style>