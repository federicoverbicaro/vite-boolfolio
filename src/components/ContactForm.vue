<script>
import axios from 'axios';
import {store} from '../store'

export default {
  name : 
  'ContactForm',
  components : {
    
  },
  data() {
    return {
        store,
        name: '',
        email: '',
        message: '',
        errors :{},
        success: false
    }
  },
  methods: {
    sendForm(){
        const data = {
            name: this.name,  
            email: this.email,
            message: this.message
        }

        this.errors = {};

        axios.post(`${this.store.apiBaseUrl}/api/contacts`, 
                data
        ).then(res =>{

            this.success = res.data.success;

            if(!this.succes){
                this.errors = res.data.errors
            }else{
                this.name = ''
                this.email = ''
                this.message = ''
            }


        })
    }

  },
  mounted() {
  },
}
</script>

<template>

    <div>
        <h2 class="mt-3">Modulo di Contatto</h2>

        <div class="alert alert-success mt-3" v-if="success" role="alert">
            Messaggio Inviato 
        </div>


        <div>
            <form action="" @submit.prevent=" sendForm()">
                <div class="mt-3">
                    <input type="text" class="form-control" :class="{'is-invalid ': errors.name}" name="name" id="name"
                    placeholder="Nome"
                    v-model="name">

                    <p v-for="(error,index) in errors.name" :key='`${index}`' class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <div class="mt-3">
                    <input type="email" class="form-control" :class="{'is-invalid ': errors.email}" name="email" id="email"
                    placeholder="Email"
                    v-model="email">

                    <p v-for="(error,index) in errors.email" :key='`${index}`' class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <div class="mt-3">
                    <textarea class="form-control" :class="{'is-invalid ': errors.message}"  name="message" id="message" cols="30" rows="10" v-model="message"></textarea>

                    <p v-for="(error,index) in errors.message" :key='`${index}`' class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <button class="btn btn-primary mt-4 " type="submit">Send</button>
            </form>
        </div>
    </div>


</template>

<style scoped></style>
