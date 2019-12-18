<template>
    <q-page>
        <div class="q-pa-md">
            <info-validation v-if="rule_props != null && !loading" :_rule="rule_props" />
          
            <q-card class="my-card">
                <q-card-section style="padding-top: 12px;">
                    <!-- TITLE -->
                    <q-toolbar style="padding:0px">
                      <q-icon
                        v-if="!isMobileViewport"
                        name="keyboard_arrow_left"
                        size="lg"
                        v-pointer
                        @click="$router.back()"
                      >
                        <q-tooltip
                          content-style="font-size: 14px"
                          anchor="center left"
                          self="center right"
                        >Kembali</q-tooltip>
                      </q-icon>
                      <q-toolbar-title>
                        <q-item-section>
                          <q-item-label>Formulir Karyawan</q-item-label>
                        </q-item-section>
                      </q-toolbar-title>
                    </q-toolbar>                    
                </q-card-section>

                <q-card-section>

                    <q-form @submit="onSubmitHandler" @reset="onResetHandler">

                        <div :class="!isMobileViewport ? 'row q-col-gutter-md' : 'row'">

                            <div :class="!isMobileViewport ? 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-col-gutter-md' : 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8'">

                                <!-- Nama -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <q-input 
                                      ref="name_employee" 
                                      outlined 
                                      counter
                                      maxlength="50"
                                      clearable 
                                      :disable="loading"
                                      v-model="form.name_employee" 
                                      label="Nama" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi nama lengkap karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char'
                                      ]" />
                        
                                </div>

                                <!-- Position -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="position_employee" 
                                      outlined
                                      clearable 
                                      :disable="loading || get_credentials.role != 0"
                                      v-model="position_employee" 
                                      :options="positions" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      label="Posisi" 
                                      :hint="isMobileViewport ? '' : 'Wajib: pilih posisi karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 1 || 'Maximal 1 char'
                                      ]">

                                        <template v-slot:option="scope">
                                          <q-item
                                            v-bind="scope.itemProps"
                                            v-on="scope.itemEvents"
                                          >
                                            <q-item-section avatar>
                                              <q-icon name="assignment_ind" />
                                            </q-item-section>
                                            <q-item-section>
                                              <q-item-label v-html="scope.opt.label" />
                                              <!-- <q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                                            </q-item-section>
                                          </q-item>
                                        </template>                                         
                                        <template v-slot:append>
                                            <!-- <q-icon name="event" class="cursor-pointer" /> -->
                                        </template>
                                    </q-select>
                                </div>

                                <!-- NIK -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="nik_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      maxlength="16"                                      
                                      type="text" 
                                      v-model="form.nik_employee" 
                                      label="Nomor Induk" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi nomor induk karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length == 16 || 'Harus 16 char',
                                        val => !isNaN(val) || 'Harus angka'
                                      ]" />
                                </div>
                
                                <!-- Telpon -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="telpon_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      maxlength="20"                                      
                                      type="text" 
                                      v-model="form.telpon_employee" 
                                      label="Telpon" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi nomor telpon karyawan'" 
                                      mask="(+62###) #### - ########" 
                                      unmasked-value 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 20 || 'Maximal 16 char'
                                      ]" />
                                </div>

                                <!-- Email -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="email_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      maxlength="50"                                           
                                      type="text" 
                                      v-model="form.email_employee" 
                                      label="Email" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi email karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char',
                                        val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please type correct email'
                                      ]" />

                                </div>

                                <!-- Birth Place -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="birth_place_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      maxlength="50"                                            
                                      v-model="form.birth_place_employee" 
                                      label="Tempat Lahir" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi tempat lahir karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char'
                                      ]" />
                                    
                                </div>

                                <!-- Birth Date -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                    <q-input 
                                      ref="birth_date_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      readonly
                                      v-model="form.birth_date_employee" 
                                      mask="date" 
                                      label="Tanggal Lahir" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi tanggal lahir karyawan'" 
                                      lazy-rules 
                                      :rules="['date']">
                                        <template v-slot:append>
                                            <q-icon name="event" class="cursor-pointer">
                                                <q-popup-proxy 
                                                  ref="qDateProxy" 
                                                  transition-show="scale" 
                                                  transition-hide="scale">
                                                    <q-date v-model="form.birth_date_employee" @input="() => $refs.qDateProxy.hide()" />
                                                </q-popup-proxy>
                                            </q-icon>
                                        </template>
                                    </q-input>

                                </div>

                                <!-- Gender -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="q-field__label no-pointer-events  ellipsis">Jenis Kelamin</div>
                                    <q-field 
                                      ref="gender_employee" 
                                      borderless 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.gender_employee" 
                                      :hint="isMobileViewport ? '' : 'Wajib: pilih jenis kelamin karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-radio keep-color v-model="form.gender_employee" val="0" label="Laki-laki" color="teal" />
                                            <q-radio keep-color v-model="form.gender_employee" val="1" label="Perempuan" color="orange" />
                                        </template>

                                    </q-field>


                                </div>

                                <!-- Marital -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="q-field__label no-pointer-events  ellipsis">Status Pernikahan</div>

                                    <q-field 
                                      ref="marital_employee" 
                                      borderless 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.marital_employee" 
                                      :hint="isMobileViewport ? '' : 'Wajib: pilih status pernikahan karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-radio keep-color v-model="form.marital_employee" val="0" label="Lajang" color="red" />
                                            <q-radio keep-color v-model="form.marital_employee" val="1" label="Menikah" color="cyan" />
                                        </template>

                                    </q-field>
              
                                </div>

                                <!-- Alamat -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12">
                                    <q-input 
                                      ref="address_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.address_employee" 
                                      label="Alamat" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi alamat karyawan'" 
                                      counter                                          
                                      type="textarea" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length >= 10 || 'Minimal 10 char'
                                      ]" />
                                  
                                </div>

                                <!-- <q-separator spaced /> -->
                                <q-toggle v-if="updated" class="full-width q-mb-md" v-model="renewal_password" label="Perbarui password?" />
                                <!-- <p> -->


                                <!-- Password -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" v-if="renewal_password || !updated" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="password_employee" 
                                      v-model="form.password_employee" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter                             
                                      type="password" 
                                      label="Password" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi password karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length >= 5 || 'Minimal 5 char'
                                      ]" />
                                </div>

                                <!-- Confirmation -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" v-if="renewal_password || !updated" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="password_confirmation" 
                                      v-model="password_confirmation.confirmation" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      label="Password Confirmation" 
                                      minlength="5"                                          
                                      :type="password_confirmation.visibility ? 'password' : 'text'" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi konfirmasi password karyawan'" 
                                      :rules="[
                                        passwordConfirmationRule
                                      ]">
                                        <template v-slot:append>
                                            <q-icon :name="password_confirmation.visibility ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="password_confirmation.visibility = !password_confirmation.visibility" />
                                        </template>
                                    </q-input>
                                </div>

                            </div>

                            <div :class="!isMobileViewport ? 'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' : 'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'" >

                                  <q-field 
                                    ref="photo_employee" 
                                    borderless 
                                    v-model="form.photo_employee" 
                                    :hint="isMobileViewport ? '' : 'Opsional: upload foto profil di HP'" 
                                    >
                                        <q-uploader label="Foto" :factory="onFilePickerHandler" style="width:100%;">

                                            <template v-slot:header="scope">
                                                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">

                                                    <q-btn :disable="loading" v-if="scope.queuedFiles.length > 0 && isMobileViewport" icon="delete" @click="scope.removeQueuedFiles" round dense flat>
                                                        <q-tooltip content-style="font-size: 13px">Hapus semua gambar</q-tooltip>
                                                    </q-btn>

                                                    <q-btn :disable="loading" v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat>
                                                        <q-tooltip content-style="font-size: 13px">Hapus gambar dari upload</q-tooltip>
                                                    </q-btn>

                                                    <div class="col">
                                                        <div class="q-uploader__title">Foto Profil</div>
                                                        <div class="q-uploader__subtitle">silahkan diisi</div>
                                                    </div>
                                                    <q-btn :disable="loading" v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                        <q-uploader-add-trigger />
                                                        <q-tooltip content-style="font-size: 13px">Ambil gambar</q-tooltip>
                                                    </q-btn>
                                                </div>
                                            </template>

                                            <template v-slot:list="scope">
                                                <q-list separator>

                                                    <q-item v-for="file in scope.files" :key="file.name">
                                                      
                                                        <q-item-section>
                                                            <q-item-label class="full-width ellipsis">
                                                                {{ file.name }}
                                                            </q-item-label>

                                                            <q-item-label caption>
                                                                Status: {{ file.__status }}
                                                            </q-item-label>

                                                            <q-item-label caption>
                                                                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                                                            </q-item-label>
                                                        </q-item-section>

                                                        <q-item-section v-if="file.__img" thumbnail style="margin:0px">
                                                        <!-- <q-item-section v-if="file.__img" thumbnail class="gt-xs"> -->
                                                            <img style="height:100%;" v-pointer @click="onZoom(file.__img.src)" @load="onFilePickerHandler(file.__img.src)" :src="file.__img.src">
                                                        </q-item-section>

                                                        <q-item-section top side v-if="!isMobileViewport">
                                                            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="scope.removeFile(file)">
                                                                <q-tooltip content-style="font-size: 12px">Hapus gambar</q-tooltip>
                                                            </q-btn>
                                                        </q-item-section>
                                                    </q-item>

                                                </q-list>
                                            </template>
                                        </q-uploader>                                                      
                                    </q-field>

                                    <div
                         
                                      v-if="updated || form.photo_employee.length > 0"
                                    >
                                      <div class="q-pb-md q-mt-md text-center text-bold text-black-4">Photo Terakhir</div>
                                      <div style="display: flex;justify-content: center; margin-bottom: 30px;">
                                        <img
                                          style="height:100%;width:100%; border-radius:10px;"
                                          v-pointer
                                          id="image"
                                          @click="onZoom(form.photo_employee)"
                                          :src="form.photo_employee"
                                        />
                                      </div>
                                    </div>
                                </div>


                        </div>

                        <div 
                          :style="isMobileViewport ? 'display: flex; justify-content: center; margin-top: 0px;' : ''" 
                          :class="!isMobileViewport ? 'q-pt-lg q-pb-mb' : ''">
                            <q-btn
                              class=""
                              style="min-width:150px"
                              color="primary"
                              label="proses "
                              type="submit" 
                              outline=""
                              :loading="loading"
                            >
                              <q-icon class="q-pl-lg" name="cloud_upload" />
                              <template v-slot:loading>
                                <q-spinner-hourglass class="on-left" />
                                Wait...
                              </template>                  
                            </q-btn>   

<q-btn :disable="loading" v-if="!isMobileViewport" label="Reset" type="reset" color="primary" outline="" class="q-ml-sm" />
<q-btn :disable="loading" v-if="!isMobileViewport" label="Sebelumnya" color="primary" outline="" class="q-ml-sm" @click="$router.back()"/>

<q-btn :disable="loading" v-if="isMobileViewport" round="" icon="delete_outline" type="reset" color="primary" outline="" class="q-ml-sm" />
<q-btn :disable="loading" v-if="isMobileViewport" round icon="keyboard_arrow_left" color="primary" outline="" class="q-ml-sm" @click="$router.back()"/>

                        </div>

                    </q-form>

                </q-card-section>
            </q-card>
        </div>

    <!-- place QPageScroller at end of page -->
    <scroll-to-top />

    </q-page>
</template>

<script>
import role_auth from "../../../helpers/role_auth";

import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  mixins: [role_auth],
  data () {
    return {
      loading: false,
      buildURL: `/api/v1/employee`,
      picked: false,
      positions: positionsArray,
      renewal_password: false,
      rule_props: null,
    }
  },
  computed: {
    password_confirmation(){
      return  this["get_formulir_karyawan_password_confirmation"];
    },
    form(){
      return  this["get_formulir_karyawan_form"];
    },
    updated(){
      return this.$store.state.formulir_karyawan.data.update
    },
    position_employee: {
      get(){
        return this.form.position_employee.toString()
      },
      set(val){
        this.form.position_employee = val.toString()
      }
    }
  },
  mounted(){
    console.log(this.form)

    if(this.form.name_employee.length <= 0 && this.get_credentials.role != 0)
      this.$router.replace({ name: 'karyawan-biodata' })

    if(this.updated)
      this.imageExist(this.form.photo_employee, "image");
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Rule Block
     * -------------------------------------------------------------
     */   
    passwordConfirmationRule(val){
      // console.log(val); 
      const vm = this
      return new Promise((resolve, reject) => {
        if(val !== vm.form.password_employee) {
          resolve(false || "Password konfirmasi salah"); 
        }
        resolve(!!val.toString() || "* Required"); // support numerice
      });
    },

    /**
     * -------------------------------------------------------------
     * Vuex Block
     * -------------------------------------------------------------
     */    
    actionVuex(payload) {
      this["set_formulir_karyawan"]({
        data: payload.data,
        type: payload.type
      });
    },      

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */    
    requestAxios: _.debounce(function() {

      var vm = this;

      // vm.loading = true;

      // console.log(vm.form)

      vm.$axios[vm.updated ? 'put' : 'post'](vm.buildURL, vm.form)
        .then(function(response) {
          // console.log('axios',response.data);

          vm.loading = false;

          if (response.data.status == "validation") {
              const object = response.data.payload
              let message = ""
              for (const key in object) {
                  if (object.hasOwnProperty(key)) {
                      const element = object[key];
                      message += "- " + element + "<br>"
                  }
              }
              // console.log(message);
              vm.rule_props = message


              // takes an element object scroll-to-element
              // top-element ada di App.vue
              const target = getScrollTarget(document.getElementById("top-element"))
              const offset = document.getElementById("top-element").offsetTop
              const duration = 750
              setScrollPosition(target, offset, duration)                     
              return
          }

          if (response.data.payload) {

             vm.actionVuex({
              data: null,
              type: "reset_form"
            });

            vm["set_karyawan_biodata"]({
              data: response.data.payload,
              type: 'replace'
            });

            vm.$router.push({
              name: 'private-redirect-success-karyawan'
            })
            
          } 
        })
        .catch(function(error) {

          vm.loading = false;
          
        });
    }, 1000),

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */  
    onFilePickerHandler (files) {
      this.picked = true
      this.form.photo_employee = files
    },
    onSubmitHandler () {

      // // takes an element object
      // const target = getScrollTarget(document.getElementById("top-element"))
      // const offset = document.getElementById("top-element").offsetTop
      // const duration = 1000
      // setScrollPosition(target, offset, duration)


      const vm = this

      let object = formName
      if(vm.renewal_password) {
          object['password_employee'] = "password karyawan"
      }

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          
          const element = object[key];
          // console.log(vm.$refs[key].hasError, element);

          if (vm.$refs[key].hasError) {
            vm.$q.notify({
              color: "warning",
              message: `Perhatian! Kolom ${element} wajib diisi`,
              icon: "report_problem",
              position: "top",
              actions: [
                {
                  label: "Tutup",
                  color: "white",
                  handler: () => {
                    /* console.log('wooow') */
                  }
                }
              ]
            });
            return;            
          }
          
        }
      }

      vm.requestAxios()

      vm.loading = true;
    },
    onResetHandler () {
      this.actionVuex({
        data: null,
        type: "reset_form"
      });  
    },
  }
}

const formName = {
  name_employee: "mama karyawan",
  position_employee: "posisi karyawan",
  nik_employee: "nomor induk karyawan",
  telpon_employee: "telpon karyawan",
  email_employee: "email karyawan",
  birth_place_employee: "tempat lahir karyawan",
  birth_date_employee: "tanggal lahir karyawan",
  gender_employee: "jenis kelamin karyawan",
  marital_employee: "status pernikahan karyawan",
  address_employee: "alamat karyawan",
  // password_employee: "password karyawan",
  photo_employee: "foto profil karyawan",
}

const positionsArray = [
  {
    label: "Super Admin",
    value: "0",
    disable: false,
    required: false,
    category: "0"
  },
  {
    label: "Supervisor",
    value: "1",
    disable: false,
    required: false,
    category: "1"
  },
  {
    label: "Temperature Man",
    value: "2",
    disable: false,
    required: false,
    category: "2"
  },
]

</script>

<style lang="css" scoped>
.my-content {
  padding: 10px 15px;
  background: rgba(86,61,124,.15);
  border: 1px solid rgba(86,61,124,.2);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>