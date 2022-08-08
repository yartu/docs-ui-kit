<template>
  <usage>
    <template #title>Form</template>
    <template #component>
      <y-form ref="testForm" name="login-form" @yartu-submit="login">
        <y-input
          label="E-Mail"
          placeholder="Enter your e-mail or username"
          id="login-email"
          v-model="mail"
          :rules="['EMAIL']"
          helper
          required
        ></y-input>
      </y-form>
      <!-- <y-button @click="login" primary>Login</y-button> -->
    </template>
  </usage>
  <copy-to-clip-board>
    &lt;y-form ref="testForm" name="login-form" @yartu-submit="login"&gt;{{
      "\n  "
    }}
    &lt;y-input label="E-Mail" placeholder="Enter your e-mail or username"{{
      "\n   "
    }}id="login-email" v-model="mail" :rules="['EMAIL']" helper required&gt;{{'\n   '}}&lt;y-input&gt;{{'\n '}}&lt;y-form&gt;
  </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";

const yartuForm = ref(null);
const mail = ref("");

const login = () => {
  yartuForm.value.validate();
  alert("logged in");
};
</script>
