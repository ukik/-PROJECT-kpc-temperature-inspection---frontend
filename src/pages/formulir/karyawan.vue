<template>
    <q-page>
        <div class="q-pa-md">
            <q-card class="my-card">
                <q-card-section style="padding-top: 12px;">
                    <q-toolbar style="padding:0px">
                        <q-icon name="font_download" size="lg" />
                        <q-toolbar-title>Formulir Karyawan</q-toolbar-title>
                    </q-toolbar>
                </q-card-section>

                <q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset">

                        <div :class="$q.platform.is.mobile == undefined ? 'row q-col-gutter-md' : 'row'">

                            <div :class="$q.platform.is.mobile == undefined ? 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-col-gutter-md' : 'row col-12 col-xs-2 col-sm-12 col-md-12 col-lg-8 col-xl-8'">

                                <!-- Nama -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <q-input 
                                      ref="name_employee" 
                                      outlined 
                                      clearable
                                      v-model="form.name_employee" 
                                      label="Nama" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi nama lengkap karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Position -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="position_employee" 
                                      outlined
                                      clearable
                                      v-model="form.position_employee" 
                                      :options="positions" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      label="Posisi" :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih posisi karyawan'" 
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
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="nik_employee" 
                                      outlined 
                                      clearable
                                      type="text" 
                                      v-model="form.nik_employee" 
                                      label="Nomor Induk" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi nomor induk karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 16 || 'Maximal 16 char'
                                      ]" />
                                </div>

                                <!-- Telpon -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="telpon_employee" 
                                      outlined 
                                      clearable
                                      type="text" 
                                      v-model="form.telpon_employee" 
                                      label="Telpon" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi nomor telpon karyawan'" 
                                      mask="(+62###) #### - ########" 
                                      unmasked-value 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 20 || 'Maximal 16 char'
                                      ]" />
                                </div>

                                <!-- Email -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="email_employee" 
                                      outlined 
                                      clearable
                                      type="text" 
                                      v-model="form.email_employee" 
                                      label="Email" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi email karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char',
                                        val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please type correct email'
                                      ]" />

                                </div>

                                <!-- Birth Place -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="birth_place_employee" 
                                      outlined 
                                      clearable
                                      v-model="form.birth_place_employee" 
                                      label="Tempat Lahir" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi tempat lahir karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 50 || 'Maximal 50 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Birth Date -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                    <q-input 
                                      ref="birth_date_employee" 
                                      outlined 
                                      clearable
                                      readonly
                                      v-model="form.birth_date_employee" 
                                      mask="date" 
                                      label="Tanggal Lahir" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi tanggal lahir karyawan'" 
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
                                      v-model="form.gender_employee" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih jenis kelamin karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-radio keep-color v-model="form.gender_employee" val="0" label="Laki-laki" color="teal" />
                                            <q-radio keep-color v-model="form.gender_employee" val="1" label="Perempuan" color="orange" />
                                        </template>

                                    </q-field>

                                    <!-- <transition name="fade">
                                <div class="q-field__bottom row items-start">
                                  <div class="q-field__messages col">
                                    <div>Wajib: pilih jenis kelamin karyawan</div>
                                  </div>
                                </div>
                              </transition> -->

                                </div>

                                <!-- Marital -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="q-field__label no-pointer-events  ellipsis">Status Pernikahan</div>

                                    <q-field 
                                      ref="marital_employee" 
                                      borderless 
                                      clearable
                                      v-model="form.marital_employee" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih status pernikahan karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-radio keep-color v-model="form.marital_employee" val="0" label="Lajang" color="red" />
                                            <q-radio keep-color v-model="form.marital_employee" val="1" label="Menikah" color="cyan" />
                                        </template>

                                    </q-field>
                                    <!-- <transition name="fade">
                                <div class="q-field__bottom row items-start">
                                  <div class="q-field__messages col">
                                    <div>Wajib: pilih status pernikahan karyawan</div>
                                  </div>
                                </div>
                              </transition> -->

                                </div>

                                <!-- Alamat -->
                                <div class="col-12">
                                    <q-input 
                                      ref="address_employee" 
                                      outlined 
                                      clearable
                                      v-model="form.address_employee" 
                                      label="Alamat" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi alamat karyawan'" 
                                       
                                      type="textarea" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length >= 10 || 'Maximal 10 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Password -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="password_employee" 
                                      v-model="form.password_employee" 
                                      outlined 
                                      clearable
                                      type="password" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi password karyawan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length >= 5 || 'Maximal 5 char'
                                      ]" />
                                </div>

                                <!-- Confirmation -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-input 
                                      ref="password_confirmation_employee" 
                                      v-model="form.password_confirmation_employee.confirmation" 
                                      outlined 
                                      clearable
                                      :type="form.password_confirmation_employee.visibility ? 'password' : 'text'" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi konfirmasi password karyawan'" 
                                      :rules="[
                                        rulePasswordConfirmation
                                      ]">
                                        <template v-slot:append>
                                            <q-icon :name="form.password_confirmation_employee.visibility ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="form.password_confirmation_employee.visibility = !form.password_confirmation_employee.visibility" />
                                        </template>
                                    </q-input>
                                </div>

                            </div>

                            <div class="col-12 col-xs-2 col-sm-12 col-md-4 col-lg-4 col-xl-4" :style="$q.platform.is.mobile == undefined ? 'width: 34.5%;' : 'width:100%;'">

                                <q-field 
                                  ref="photo_employee" 
                                  borderless 
                                  v-model="form.photo_employee" 
                                  :hint="$q.platform.is.mobile ? '' : 'Wajib: upload foto profil karyawan'" 
                                  lazy-rules 
                                  :rules="[
                                    value => !!value || 'Required *'
                                  ] ">
                                    <q-uploader label="Foto" :factory="factoryFn" style="width:100%;">

                                        <template v-slot:header="scope">
                                            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">

                                                <q-btn v-if="scope.queuedFiles.length > 0" icon="clear_all" @click="scope.removeQueuedFiles" round dense flat>
                                                    <q-tooltip content-style="font-size: 13px">Hapus semua gambar</q-tooltip>
                                                </q-btn>

                                                <q-btn v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat>
                                                    <q-tooltip content-style="font-size: 13px">Hapus gambar di upload</q-tooltip>
                                                </q-btn>

                                                <!-- <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" /> -->

                                                <div class="col">
                                                    <div class="q-uploader__title">Foto Profil</div>
                                                    <div class="q-uploader__subtitle">silahkan diisi</div>
                                                    <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                                </div>
                                                <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                    <q-uploader-add-trigger />
                                                    <q-tooltip content-style="font-size: 13px">Ambil gambar</q-tooltip>
                                                </q-btn>

                                                <!-- <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                <q-tooltip>Upload Files</q-tooltip>
                              </q-btn> -->

                                                <!-- <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                <q-tooltip>Abort Upload</q-tooltip>
                              </q-btn> -->
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

                                                    <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                                                        <img style="height:100%;" v-pointer @click="onZoom(file.__img.src)" @load="factoryFn(file.__img.src)" :src="file.__img.src">
                                                    </q-item-section>

                                                    <q-item-section top side>
                                                      <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="scope.removeFile(file)">
                                                          <q-tooltip content-style="font-size: 12px">Hapus gambar</q-tooltip>
                                                      </q-btn>
                                                    </q-item-section>
                                                </q-item>

                                            </q-list>
                                        </template>
                                    </q-uploader>
                                </q-field>
                            </div>
                        </div>
                        <!-- <q-separator spaced />

                        <q-toggle v-model="accept" label="I accept the license and terms" /> -->

                        <div class="q-pt-lg q-pb-mb">
                            <q-btn
                              class="glossy"
                              style="min-width:150px"
                              color="primary"
                              label="proses "
                              type="submit" 
                              :loading="loading"
                            >
                              <q-icon class="q-pl-lg" name="cloud_upload" />
                              <template v-slot:loading>
                                <q-spinner-hourglass class="on-left" />
                                Wait...
                              </template>                  
                            </q-btn>   
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>

                    </q-form>

                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,

      positions: positionsArray,


      form: {
        // no: "",
        // uuid: "",
        name_employee: "",
        position_employee: "",
        nik_employee: "",
        telpon_employee: "",
        email_employee: "",
        birth_place_employee: "",
        birth_date_employee: "",
        gender_employee: "",
        marital_employee: "",
        address_employee: "",
        password_employee: "",
        // plain_password_employee: "",
        photo_employee: "",
        // verification_employee: "",
        // disable_employee: "",
        // created_at: "",
        // updated_at: "",

        password_confirmation_employee: { // client only, not send to server
          confirmation: "",
          visibility: false,
        },        

      }
    }
  },
  computed: {
    host() {
      if (this.$q.platform.is.mobile) {
        return "http://172.16.210.123/[PROJECT] kpc temperatur inspection/public";
      } else {
        return "http://localhost:8000";
      }
    }    
  },
  watch:{
   'form.birth_date_employee': function(val){
     console.log(val);
    //  this.date = val.replace(/\//g, '-');
    //  console.log(val.replace(/\//g, '-'));
   },
    // IMPORTANT
    // update vuex
    form: {
      handler: function(before, after) {
        const vm = this;
        console.log('form', vm.form);
        
        vm.onAction({
          data: vm.form,
          type: "form"
        });

      },
      deep: true
    }      
  },
  mounted() {
    const vm = this;
    vm.form = vm["get_formulir_karyawan_form"];
  },   
  methods: {
    onAction(payload) {
      this["set_formulir_karyawan"]({
        data: payload.data,
        type: payload.type
      });
    },      
    factoryFn (files) {
      // returning a Promise
      console.log(files);
      this.form.photo_employee = files
    },
    rulePasswordConfirmation(val){
      console.log(val); 
      const vm = this
      return new Promise((resolve, reject) => {
        if(val !== vm.form.password_employee) {
          resolve(false || "Password konfirmasi salah"); 
        }
        resolve(!!val.toString() || "* Required"); // support numerice
      });
    },
    onSubmit () {
      const object = formName
      const vm = this
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          
          const element = object[key];
          // console.log(vm.$refs[key].hasError, element);

          if (vm.$refs[key].hasError) {
            vm.$q.notify({
              color: "negative",
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

      vm.fetchData()
      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: 'red-5',
      //     textColor: 'white',
      //     icon: 'warning',
      //     message: 'You need to accept the license and terms first'
      //   })
      // }
      // else {
      //   this.$q.notify({
      //     color: 'green-4',
      //     textColor: 'white',
      //     icon: 'cloud_done',
      //     message: 'Submitted'
      //   })
      // }
    },
    buildURL() {
      return `${this.host}/api/v1/employee`;
    },    
    fetchData: _.debounce(function() {

      var vm = this;

      vm.loading = true;

      vm.$axios
        .post(vm.buildURL())
        .then(function(response) {
          //console.log(response.data);
          //console.log(response.data.payload.data.length);
          
          vm.loading = false;

          if (response.data.payload.data.length > 0) {

            // vm.$q.notify({
            //   color: "positive",
            //   message: "Success",
            //   actions: [
            //     {
            //       label: "Tutup",
            //       color: "white",
            //       handler: () => {
            //         /* console.log('wooow') */
            //       }
            //     }
            //   ]
            // });

            vm.onAction({
              data: response.data.payload,
              type: "payload"
            });

            return

          } else {

            vm.$q.notify({
              color: "warning",
              message: "Maaf! Tidak ada data yang ditemukan",
              icon: "report_problem",
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

            return
          }

          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;

          vm.$q.notify({
            color: "negative",
            message: "Maaf! Server tidak merespon permintaan anda",
            icon: "report_problem",
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
          
        });
    }, 1000),

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
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
  password_employee: "password karyawan",
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