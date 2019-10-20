<template>
    <q-page>
        <div class="q-pa-md">
            <q-card class="my-card">
                <q-card-section style="padding-top: 12px;">
                    <q-toolbar style="padding:0px">
                        <q-icon name="font_download" size="lg" />
                        <q-toolbar-title>Formulir Inspeksi</q-toolbar-title>
                    </q-toolbar>
                </q-card-section>

                <q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset">

                            <div :class="$q.platform.is.mobile == undefined ? 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-col-gutter-md' : 'row col-12 col-xs-2 col-sm-12 col-md-12 col-lg-8 col-xl-8'">

                                <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="uuid_tb_equipment"
                                    outlined
                                    emit-value
                                    map-options
                                    clearable 
                                    behavior="dialog"
                                    v-model="form.uuid_tb_equipment"
                                    @input="onSelectHandler($event, 'equipment')"
                                    @filter="filterEquipment"
                                    @filter-abort="abortFilterFn"
                                    :options="equipmentColumns"
                                    option-value="value"
                                    label="Alat"
                                    style="min-width: 100%;"
                                    :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih nama alat'"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *',
                                      val => val && val.length <= 40 || 'Maximal 40 char'
                                    ]">
                                    <template v-slot:no-option>
                                      <q-item>
                                        <q-item-section class="text-grey">No results</q-item-section>
                                      </q-item>
                                    </template>
                                  </q-select>
                                </div>

                                <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="uuid_tb_location"
                                    emit-value
                                    map-options
                                    outlined
                                    clearable 
                                    behavior="dialog"
                                    v-model="form.uuid_tb_location"
                                    :options="locationColumns"
                                    @input="onSelectHandler($event, 'location')"
                                    :disable="form.uuid_tb_equipment == '' ? true : false"
                                    option-value="value"
                                    label="Lokasi"
                                    :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih lokasi'"
                                    style="min-width: 100%;"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *',
                                      val => val && val.length <= 40 || 'Maximal 40 char'
                                    ]">
                                        <template v-slot:option="scope">
                                          <q-item
                                            v-bind="scope.itemProps"
                                            v-on="scope.itemEvents"
                                          >
                                            <q-item-section>
                                              <q-item-label v-html="scope.opt.label" />
                                              <!-- <q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                                            </q-item-section>
                                            <q-item-section avatar>
                                              <q-item-label> {{ scope.opt.place == 0 ? '' : 'Kanan / Kiri' }} </q-item-label>
                                            </q-item-section>                                            
                                          </q-item>
                                        </template>                                          
                                        <template v-slot:no-option>
                                          <q-item>
                                            <q-item-section class="text-grey">No results</q-item-section>
                                          </q-item>
                                        </template>
                                  </q-select>
                                </div>

                                <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="place_inspection"
                                    v-model="form.place_inspection"
                                    emit-value
                                    map-options
                                    outlined
                                    behavior="dialog"
                                    :options="placeColumns"
                                    @input="onSelectHandler($event, 'place')"
                                    :disable="form.uuid_tb_location == ''|| placeColumns.length == 1 ? true : false"
                                    option-value="value"
                                    label="Letak"
                                    :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih letak'"
                                    style="min-width: 100%;"
                                    lazy-rules 
                                    :rules="[
                                      rulePlace      
                                    ]">
                                    <template v-if="form.place_inspection" v-slot:append>
                                      <q-icon 
                                        name="cancel" 
                                        @click.stop="form.place_inspection = ''" 
                                        class="cursor-pointer" />
                                    </template>     
                                  </q-select>
                                </div>

                                <!-- Nama -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                                  <!-- Auto Complete Name -->
                                  <q-select
                                    ref="uuid_tb_employee"
                                    v-model="form.uuid_tb_employee"
                                    use-input
                                    behavior="dialog"
                                    outlined
                                    clearable
                                    hide-selected
                                    fill-input
                                    input-debounce="0"
                                    label="Nama"
                                    emit-value 
                                    map-options 
                                    option-value="value"                                     
                                    :options="employeeColumns"
                                    @filter="filterEmployee"
                                    @filter-abort="abortFilterFn"
                                    :hint="$q.platform.is.mobile ? '' : 'Wajib: isi nama Temperature Man'"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *',
                                      val => val && val.length <= 50 || 'Maximal 50 char'
                                    ]" >
                                      <!-- <template v-if="form.uuid_tb_employee" v-slot:append>
                                        <q-icon 
                                          name="cancel" 
                                          @click.stop="form.uuid_tb_employee = ''" 
                                          class="cursor-pointer" />
                                      </template>                                     -->
                                      <template v-slot:no-option>
                                        <q-item>
                                          <q-item-section class="text-grey">
                                            No results
                                          </q-item-section>
                                        </q-item>
                                      </template>
                                  </q-select>

                                </div>


                                <!-- Kondisi -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="condition_inspection" 
                                      outlined 
                                      clearable
                                      v-model="form.condition_inspection" 
                                      :options="conditions" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      label="Kondisi" 
                                      behavior="dialog"
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih kondisi alat'" 
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
                                              <q-icon name="check_circle_outline" />
                                            </q-item-section>
                                            <q-item-section>
                                              <q-item-label v-html="scope.opt.label" />
                                              <!-- <q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                                            </q-item-section>
                                          </q-item>
                                        </template>                                           
                                        <!-- <template v-slot:append>
                                          <q-icon name="event" class="cursor-pointer" />
                                        </template> -->
                                    </q-select>
                                </div>

                                <!-- Cuaca -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="weather_inspection" 
                                      outlined 
                                      clearable
                                      v-model="form.weather_inspection" 
                                      :options="weathers" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      behavior="dialog"
                                      label="Cuaca" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: pilih kondisi cuaca'" 
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
                                              <q-icon name="check_circle_outline" />
                                            </q-item-section>
                                            <q-item-section>
                                              <q-item-label v-html="scope.opt.label" />
                                              <!-- <q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                                            </q-item-section>
                                          </q-item>
                                        </template>                                      
                                          <!-- <template v-slot:append>
                                            <q-icon name="event" class="cursor-pointer" />
                                        </template> -->
                                    </q-select>
                                </div>

                                <!-- Grease Shoot -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="grease_shoot_inspection" 
                                      outlined
                                      clearable 
                                      min="0"
                                      type="number"
                                      v-model="form.grease_shoot_inspection" 
                                      label="Grease Shoot" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi bilangan grease shoot'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 3 || 'Maximal 3 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Rain -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="temperature_inspection" 
                                      outlined 
                                      clearable
                                      min="0"
                                      type="number"
                                      v-model="form.temperature_inspection" 
                                      label="Temperatur" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi bilangan temperatur'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 3 || 'Maximal 3 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Rain -->
                                <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="rain_inspection" 
                                      outlined 
                                      clearable
                                      min="0"
                                      type="number"
                                      v-model="form.rain_inspection" 
                                      label="Curah Hujan" 
                                      :hint="$q.platform.is.mobile ? '' : 'Wajib: isi bilangan curah hujan'" 
                                      lazy-rules 
                                      :rules="[
                                        val => val && val.length > 0 || 'Required *',
                                        val => val && val.length <= 3 || 'Maximal 3 char'
                                      ]" />
                                    </q-input>
                                </div>

                                <!-- Current Upnormal Inspection -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sekarang</div> -->
                                    <q-field 
                                      ref="current_upnormal_inspection" 
                                      borderless dense
                                      v-model="form.current_upnormal_inspection" 
                                      style="padding-bottom:0px"
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-item-section avatar class="q-pl-sm">
                                              <q-icon name="build" />
                                            </q-item-section>                                               
                                            <q-item-section avatar>
                                              <q-item-label>Kondisi Upnormal Sekarang</q-item-label>
                                              <q-item-label caption>Jika ada keterangan tambahan</q-item-label>
                                            </q-item-section>
                                            <q-radio keep-color v-model="form.current_upnormal_inspection" val="0" label="Tidak Ada" color="red" />
                                            <q-radio keep-color v-model="form.current_upnormal_inspection" val="1" label="Ada" color="teal" />
                                        </template>

                                    </q-field>

                                    <transition name="fade">
                                      <!-- Current Upnormal Information (CUI) -->
                                      <q-input 
                                         v-if="form.current_upnormal_inspection == 1"
                                        :disable="form.current_upnormal_inspection == 0 ? true : false"
                                        ref="cui_description_inspection_information" 
                                        outlined 
                                        v-model="cui_description_inspection_information" 
                                        label="Keterangan" 
                                        :hint="$q.platform.is.mobile ? '' : 'Opsional: Opsional: isi keterangan kondisi upnormal sekarang'" 
                                        type="textarea" 
                                        />
                                      </q-input>
                                    </transition>

                                </div>

                                <!-- Last Upnormal Inspection -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sebelumnya</div> -->

                                    <q-field 
                                      ref="last_upnormal_inspection" 
                                      borderless dense
                                      v-model="form.last_upnormal_inspection" 
                                      style="padding-bottom:0px"
                                      lazy-rules 
                                      :rules="[
                                        value => !!value || 'Required *'
                                      ] ">
                                        <template v-slot:control>
                                            <q-item-section avatar class="q-pl-sm">
                                              <q-icon name="build" />
                                            </q-item-section>                                        
                                            <q-item-section avatar>
                                              <q-item-label>Kondisi Upnormal Sebelumnya</q-item-label>
                                              <q-item-label caption>Jika ada keterangan tambahan</q-item-label>
                                            </q-item-section>
                                            <q-radio keep-color v-model="form.last_upnormal_inspection" val="0" label="Tidak Ada" color="red" />
                                            <q-radio keep-color v-model="form.last_upnormal_inspection" val="1" label="Ada" color="teal" />
                                        </template>

                                    </q-field>

                                    <transition name="fade">
                                      <!-- Last Upnormal Information (LUI) -->
                                      <q-input 
                                         v-if="form.last_upnormal_inspection == 1"
                                        :disable="form.last_upnormal_inspection == 0 ? true : false"
                                        ref="lui_description_inspection_information" 
                                        outlined 
                                        v-model="lui_description_inspection_information" 
                                        label="Keterangan" 
                                        :hint="$q.platform.is.mobile ? '' : 'Opsional: isi keterangan kondisi upnormal sebelumnya'" 
                                        type="textarea"
                                        />
                                      </q-input>
                                    </transition>

                                </div>

                                <!-- Common Information -->
                                 <div class="col-12">
                                    <q-input 
                                      ref="com_description_inspection_information" 
                                      outlined 
                                      v-model="com_description_inspection_information" 
                                      label="Keterangan Lainnya" 
                                      :hint="$q.platform.is.mobile ? '' : 'Opsional: isi dengan keterangan tambahan lainnya'" 
                                      type="textarea"/>
                                    </q-input>
                                </div>

                                
                                <div class="col-12">
                                  <q-field 
                                    ref="screenshoot_inspection" 
                                    borderless 
                                    v-model="form.screenshoot_inspection" 
                                    :hint="$q.platform.is.mobile ? '' : 'Opsional: upload screenshot temperatur di HP'" 
                                    lazy-rules 
                                    :rules="[
                                      value => !!value || 'Required *'
                                    ]" >
                                        <q-uploader label="Foto" :factory="factoryFn" style="width:100%;">

                                            <template v-slot:header="scope">
                                                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">

                                                    <q-btn v-if="scope.queuedFiles.length > 0" icon="clear_all" @click="scope.removeQueuedFiles" round dense flat>
                                                        <q-tooltip content-style="font-size: 13px">Hapus semua gambar</q-tooltip>
                                                    </q-btn>

                                                    <q-btn v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat>
                                                        <q-tooltip content-style="font-size: 13px">Hapus gambar di upload</q-tooltip>
                                                    </q-btn>

                                                    <div class="col">
                                                        <div class="q-uploader__title">Screenshot Temperatur</div>
                                                        <div class="q-uploader__subtitle">silahkan diisi</div>
                                                    </div>
                                                    <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
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
      conditions: conditionsArray,
      weathers: weatherArray,

      employeeColumns: [],
      equipmentColumns: [],
      locationColumns: [],
      placeColumns: [
        {
          label: "Tidak Ada",
          value: "",
          disable: false,
          category: "1"
        }
      ],

      password_confirmation_employee: {
        confirmation: "",
        visibility: false,
      },        

      form: {
        // no:'',
        // uuid:'',
        uuid_tb_employee:'',
        // uuid_tb_inspection:'',
        uuid_tb_location:'',
        uuid_tb_equipment:'',
        // equipment_inspection:'', // kolom ini rencananya dibatalkan
        // location_inspection:'', // kolom ini rencananya dibatalkan
        place_inspection:'',
        condition_inspection:'',
        grease_shoot_inspection:'',
        weather_inspection:'',
        temperature_inspection:'',
        rain_inspection:'',
        current_upnormal_inspection: '0',
        last_upnormal_inspection: '0',
        screenshoot_inspection:'',
        // created_at:'',
        // updated_at:'',
        
        tb_mutation_inspection_information: [
          {
            // uuid:'',
            // uuid_tb_inspection:'', // from backend
            label_inspection_information:'',
            description_inspection_information:'',
            // created_at:'',
            // updated_at:'',
          }
        ]
      }
    }
  },
  computed: {
    set_tb_mutation_inspection_information(){
      const vm = this
      return function(label, value) {
        const array = vm.form.tb_mutation_inspection_information
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if(element.label_inspection_information == label){
            vm.form.tb_mutation_inspection_information[i].description_inspection_information = value
            return
          }
        }
        vm.form.tb_mutation_inspection_information.push({
          label_inspection_information: label,
          description_inspection_information: value,
        })
        return
      }
    },
    get_tb_mutation_inspection_information(){
      const vm = this
      return function(label) {
        const array = vm.form.tb_mutation_inspection_information
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if(element.label_inspection_information == label){
            return element.description_inspection_information
          }
        }
        return ''
      }
    },    
    cui_description_inspection_information: {
      get(){
        return this.get_tb_mutation_inspection_information('cui')
      },
      set(val){
        // console.log('va', val);
        this.set_tb_mutation_inspection_information('cui', val)
      }
    },
    lui_description_inspection_information: {
      get(){
        return this.get_tb_mutation_inspection_information('lui')
      },
      set(val){
        this.set_tb_mutation_inspection_information('lui', val)
      }
    },
    com_description_inspection_information: {
      get(){
        return this.get_tb_mutation_inspection_information('com')
      },
      set(val){
        this.set_tb_mutation_inspection_information('com', val)
      }
    },        
    host() {
      if (this.$q.platform.is.mobile) {
        return "http://172.16.210.123/[PROJECT] kpc temperatur inspection/public";
      } else {
        return "http://localhost:8000";
      }
    }    
  },
  watch:{
    //  'form.birth_date_employee': function(val){
    //    console.log(val);
    //   //  console.log(val.replace(/\//g, '-'));
    //   },

    // IMPORTANT
    // update vuex
    form: {
      handler: function(before, after) {
        const vm = this;
        console.log('form', vm.form);
        const store = vm["get_formulir_inspeksi_equipmentColumns"];

        let locations = [];

        // dipanggil untuk singkronisasi equipment dropdown (equipmentColumns)
        for (let i = 0; i < store.length; i++) {
          if (store[i].value == after.equipment) {
            // dipanggil untuk singkronisasi location dropdown (locationColumns)
            for (
              let j = 0;
              j < store[i].location.length;
              j++
            ) {
              const element = store[i].location[j];

              locations.push({
                label: element.name_location,
                value: element.uuid,
                uuid: element.uuid,
                disable: false,
                required: j == 0 ? true : false,
                category: j,
                place: element.place
              });
            }

            vm.locationColumns = locations;

            vm.onAction({
              data: locations,
              type: "locationColumns"
            });
          }
        }
        
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

    vm.form = vm["get_formulir_inspeksi_form"];

    vm.equipmentColumns = vm["get_formulir_inspeksi_equipmentColumns"];

    vm.locationColumns = vm["get_formulir_inspeksi_locationColumns"];

    vm.employeeColumns = vm["get_formulir_inspeksi_employeeColumns"];

    if(vm.equipmentColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.onAxios({
            url: `${vm.host}/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = result;
        console.log("vm.equipmentColumns", vm.equipmentColumns);
      });
    }

    if(vm.employeeColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.onAxios({
            url: `${vm.host}/api/v1/employee?type=select`,
            key: "employee"
          })
        );
      }).then(result => {
        vm.employeeColumns = result;
        console.log("vm.employeeColumns", vm.employeeColumns);
      });
    }

  },  
  methods: {
    rulePlace(val){
      console.log('rulePlace', val, this.placeColumns.length);
      const vm = this
      return new Promise((resolve, reject) => {
        if(vm.placeColumns.length == 3) {
          if(val.length == 0) {          
            resolve(!!val.toString() || "* Required"); // support numerice
          }
        }
        
        resolve(true)
      });
    },
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return 'color:'+color;
    },

    factoryFn (files) {
      // returning a Promise
      // console.log(files);
      this.form.screenshoot_inspection = files
    },

    filterEmployee (val, update, abort) {
      // call abort() at any time if you can't retrieve data somehow
      const vm = this

      // console.log(vm["get_formulir_inspeksi_employeeColumns"]);
      
      setTimeout(() => {
        update(() => {
          if (val === '') {
            vm.employeeColumns = vm["get_formulir_inspeksi_employeeColumns"]
          }
          else {
            const needle = val.toLowerCase()
            vm.employeeColumns = vm["get_formulir_inspeksi_employeeColumns"]
            .filter(v => v.label.toLowerCase().indexOf(needle) > -1)
          }
        })
      }, 500)
    },    

    filterEquipment(val, update, abort) {
      var vm = this;

      if (vm.equipmentColumns.length > 0) {
        // already loaded
        update();
        return;
      }

      new Promise(resolve => {
        resolve(
          vm.onAxios({
            url: `${vm.host}/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = result;
        // console.log("vm.equipmentColumns", vm.equipmentColumns);

        setTimeout(() => {
          update();
        }, 500);
      });
    },
    abortFilterFn() {
      // console.log('delayed filter aborted')
    },    
    onAxios(type) {
      var vm = this;

      let options = [];

      vm.$axios
        .get(type.url)
        .then(function(response) {
          // console.log(response.data.payload);

          for (let i = 0; i < response.data.payload.length; i++) {
            options.push({
              label: response.data.payload[i]["name_" + type.key],
              value: response.data.payload[i].uuid,
              uuid: response.data.payload[i].uuid,
              disable: false,
              required: i == 0 ? true : false,
              category: i,
              location: response.data.payload[i].location
            });
          }

        })
        .catch(function(error) {});

        vm.onAction({
          data: options,
          type: type.key + "Columns"
        });
        return options;
    },    

    onAction(payload) {
      this["set_formulir_inspeksi"]({
        data: payload.data,
        type: payload.type
      });
    },    

    onSelectHandler(data, type) {
      const vm = this;

      console.log(data, type);

      if (type == "equipment") {
        vm.form.uuid_tb_location = "";
        vm.form.place_inspection = "";
      }
      
      vm.$refs['uuid_tb_location'].resetValidation()
      vm.$refs['place_inspection'].resetValidation()

      if (type == "location") {

        // dipanggil untuk singkronisasi place dropdown (placeColumns)
        for (let i = 0; i < vm.locationColumns.length; i++) {
          const element = vm.locationColumns[i];
          if (element.value == data) {
            switch (Number(element.place)) {
              case 0:
                vm.form.place_inspection = "";
                vm.placeColumns = [
                  {
                    label: "Tidak Ada",
                    value: "",
                    disable: true,
                    category: "1"
                  }
                ];
                break;
              case 1:
                vm.form.place_inspection = "";
                vm.placeColumns = [
                  {
                    label: "Kanan / Kiri",
                    value: "",
                    disable: true,
                    category: "0"
                  },
                  {
                    label: "Kanan",
                    value: "A",
                    disable: false,
                    category: "1"
                  },
                  {
                    label: "Kiri",
                    value: "B",
                    disable: false,
                    category: "2"
                  }
                ];
                break;
            }
          }
        }
      }

      vm.form[type] = data;

      // vm.fetchData();
    },    

    onSubmit () {
      const object = formName
      const vm = this
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          
          const element = object[key];
          console.log(vm.$refs[key].hasError, element);

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
            return    
          }
        }
      }

      vm.fetchData()
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
    // no:'',
    // uuid:'',
    uuid_tb_employee:'nama karyawan',
    // uuid_tb_inspection:'',
    uuid_tb_location:'lokasi inspeksi',
    uuid_tb_equipment:'nama alat diinspeksi',
    // equipment_inspection:'', // kolom ini rencananya dibatalkan
    // location_inspection:'', // kolom ini rencananya dibatalkan
    place_inspection:'letak saat inspeksi',
    condition_inspection:'kondisi saat inspeksi',
    grease_shoot_inspection:'grease shoot saat inspeksi',
    weather_inspection:'cuaca saat inspeksi',
    temperature_inspection:'temperatur saat inspeksi',
    rain_inspection:'curah hujan saat inspeksi',
    // current_upnormal_inspection:'kondisi upnormal saat inspeksi',
    // last_upnormal_inspection:'kondisi upnormal terakhir inspeksi',
    // screenshoot_inspection:'screenshoot lampiran',
}


const conditionsArray = [
  {
    label: "Noise",
    value: "1",
    disable: false,
    required: false,
    category: "1"
  },
  {
    label: "Dusty",
    value: "2",
    disable: false,
    required: false,
    category: "2"
  },
  {
    label: "Vibrate",
    value: "3",
    disable: false,
    required: false,
    category: "3"
  },
]

const weatherArray = [
  {
    label: "Cerah",
    value: "1",
    disable: false,
    required: false,
    category: "1"
  },
  {
    label: "Mendung",
    value: "2",
    disable: false,
    required: false,
    category: "2"
  },
  {
    label: "Hujan",
    value: "3",
    disable: false,
    required: false,
    category: "3"
  },
  {
    label: "Kabut",
    value: "4",
    disable: false,
    required: false,
    category: "4"
  },
  {
    label: "Angin",
    value: "5",
    disable: false,
    required: false,
    category: "5"
  },
  {
    label: "Lainnya",
    value: "6",
    disable: false,
    required: false,
    category: "6"
  },
]


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