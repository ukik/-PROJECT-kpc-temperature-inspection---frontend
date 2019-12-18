<template>
    <q-page>
        <div class="q-pa-md">
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
                          <q-item-label>Formulir Inspeksi</q-item-label>
                        </q-item-section>
                      </q-toolbar-title>
                    </q-toolbar>                    
                </q-card-section>
                <q-card-section>
                    <q-form>
                            <div :class="!isMobileViewport ? 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-col-gutter-md' : 'row col-12 col-xs-2 col-sm-12 col-md-12 col-lg-8 col-xl-8'">

                              <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <q-select
                                  outlined
                                  ref="month"
                                  options-dense
                                  v-model="form.month"
                                  emit-value
                                  readonly
                                  clearable=""
                                  map-options
                                  :disable="loading"
                                  :options="monthColumns"
                                  option-value="value"
                                  label="Bulan"
                                  style="min-width: 100%;"
                                  :hint="isMobileViewport ? '' : 'Wajib: pilih nama bulan'"
                                  class="float-left"
                                  behavior="dialog" />
                              </div>

                              <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <q-input
                                  outlined
                                  ref="year"
                                  type="number"
                                  readonly
                                  :disable="loading"
                                  v-model="form.year"
                                  label="Tahun"
                                  style="min-width: 100%;"
                                  :hint="isMobileViewport ? '' : 'Wajib: diisi tahun'"
                                  class="float-right" />
                              </div>


                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="uuid_tb_equipment"
                                    outlined
                                    emit-value
                                    map-options
                                    behavior="dialog"
                                    v-model="form.uuid_tb_equipment"
                                    readonly
                                    :options="equipmentColumns"
                                    option-value="value"
                                    label="Alat"
                                    style="min-width: 100%;"
                                   >
                                    <template v-slot:no-option>
                                      <q-item>
                                        <q-item-section class="text-grey">No results</q-item-section>
                                      </q-item>
                                    </template>
                                  </q-select>
                                </div>

                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="uuid_tb_location"
                                    outlined
                                    emit-value
                                    map-options
                                    behavior="dialog"
                                    v-model="form.uuid_tb_location"
                                    :options="locationColumns"
                                    option-value="value"
                                    label="Alat"
                                    style="min-width: 100%;"
                                    readonly
                                    >
                                    <template v-slot:no-option>
                                      <q-item>
                                        <q-item-section class="text-grey">No results</q-item-section>
                                      </q-item>
                                    </template>
                                  </q-select>
                                </div>                                

                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="place_inspection"
                                    v-model="form.place_inspection"
                                    emit-value
                                    map-options
                                    outlined
                                    behavior="dialog"
                                    :options="placeColumns"
                                    readonly
                                    option-value="value"
                                    label="Letak"
                                    style="min-width: 100%;"
                                    >
                                  </q-select>
                                </div>

                                <!-- Nama -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                  <!-- Auto Complete Name -->
                                  <q-select
                                    ref="uuid_tb_employee"
                                    v-model="form.uuid_tb_employee"
                                    use-input
                                    behavior="dialog"
                                    outlined
                                    readonly
                                    hide-selected                                
                                    fill-input
                                    input-debounce="0"
                                    label="Nama"
                                    emit-value 
                                    map-options 
                                    option-value="value"                                     
                                    :options="employeeColumns"
                                   >
                                      <template v-slot:no-option>
                                        <q-item>
                                          <q-item-section class="text-grey">
                                            No results
                                          </q-item-section>
                                        </q-item>
                                      </template>
                                  </q-select>

                                </div>

                                <!-- Schedule -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                  <q-select
                                    ref="uuid_tb_schedule"
                                    outlined
                                    emit-value
                                    map-options
                                    behavior="dialog"
                                    v-model="form.uuid_tb_schedule"
                                    :options="scheduleColumns"
                                    option-value="value"
                                    label="Alat"
                                    style="min-width: 100%;"
                                    readonly
                                    >
                                    <template v-slot:no-option>
                                      <q-item>
                                        <q-item-section class="text-grey">No results</q-item-section>
                                      </q-item>
                                    </template>
                                  </q-select>
                                </div>      


                                <!-- Kondisi -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="condition_inspection" 
                                      outlined 
                                      readonly
                                      v-model="form.condition_inspection" 
                                      :options="conditions" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      label="Kondisi" 
                                      behavior="dialog"
                                      >
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
                                              
                                            </q-item-section>
                                          </q-item>
                                        </template>                                           
                                    </q-select>
                                </div>

                                <!-- Cuaca -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="weather_inspection" 
                                      outlined 
                                      readonly
                                      v-model="form.weather_inspection" 
                                      :options="weathers" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      behavior="dialog"
                                      label="Cuaca" 
                                      >

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
                                              
                                            </q-item-section>
                                          </q-item>
                                        </template>                                      
                                    </q-select>
                                </div>

                                <!-- Grease Shoot -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="grease_shoot_inspection" 
                                      outlined
                                       readonly
                                      
                                      maxlength="3"
                                      min="0"
                                      type="number"
                                      v-model="form.grease_shoot_inspection" 
                                      label="Grease Shoot" 
                                      />
                                    
                                </div>

                                <!-- Temperature -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="temperature_inspection" 
                                      outlined 
                                      readonly
                                      
                                      maxlength="30"                                      
                                      min="0"
                                      type="number"
                                      v-model="form.temperature_inspection" 
                                      label="Temperatur" 
                                     />
                                   
                                </div>

                                <!-- Rain -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="rain_inspection" 
                                      outlined 
                                      readonly
                                      min="0"
                                      
                                      maxlength="3"                                      
                                      type="number"
                                      v-model="form.rain_inspection" 
                                      label="Curah Hujan" 
                                      />
                                   
                                </div>

                                <!-- Current Upnormal Inspection -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sekarang</div> -->
                                    <q-field 
                                    disable=""
                                      ref="current_upnormal_inspection" 
                                      borderless dense
                                      v-model="form.current_upnormal_inspection" 
                                      style="padding-bottom:0px"
                                      >
                                        <template v-slot:control>
                                            <q-item-section avatar class="q-pl-sm">
                                              <q-icon name="build" />
                                            </q-item-section>                                               
                                            <q-item-section avatar>
                                              <q-item-label class="radio-title">Kondisi Upnormal Sekarang</q-item-label>
                                              <q-item-label caption  class="radio-title">Jika ada keterangan tambahan</q-item-label>
                                            </q-item-section>
                                            <q-radio keep-color v-model="form.current_upnormal_inspection" val="0" label="Tidak Ada" color="red" />
                                            <q-radio keep-color v-model="form.current_upnormal_inspection" val="1" label="Ada" color="teal" />
                                        </template>

                                    </q-field>

                                    <transition name="fade">
                                      <!-- Current Upnormal Information (CUI) -->
                                      <q-input 
                                         v-if="form.current_upnormal_inspection == '1' || form.current_upnormal_inspection == 'ada'"
                                        readonly
                                        ref="cui_description_inspection_information" 
                                        outlined 
                                        v-model="form.current_upnormal_description_inspection" 
                                        label="Keterangan" 
                                        type="textarea" 
                                        />
                                     
                                    </transition>

                                </div>

                                <!-- Last Upnormal Inspection -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sebelumnya</div> -->

                                    <q-field 
                                    disable=""
                                      ref="last_upnormal_inspection" 
                                      borderless 
                                      dense
                                      v-model="form.last_upnormal_inspection" 
                                      style="padding-bottom:0px"
                                      >
                                        <template v-slot:control>
                                            <q-item-section avatar class="q-pl-sm">
                                              <q-icon name="build" />
                                            </q-item-section>                                        
                                            <q-item-section avatar>
                                              <q-item-label><div class="radio-title">Kondisi Upnormal Sebelumnya</div></q-item-label>
                                              <q-item-label caption  class="radio-title">Jika ada keterangan tambahan</q-item-label>
                                            </q-item-section>
                                            <q-radio keep-color v-model="form.last_upnormal_inspection" val="0" label="Tidak Ada" color="red" />
                                            <q-radio keep-color v-model="form.last_upnormal_inspection" val="1" label="Ada" color="teal" />
                                        </template>

                                    </q-field>

                                    <transition name="fade">
                                      <!-- Last Upnormal Information (LUI) -->
                                      <q-input 
                                         v-if="form.last_upnormal_inspection == '1' || form.last_upnormal_inspection == 'ada'"
                                        readonly
                                        ref="lui_description_inspection_information" 
                                        outlined 
                                        v-model="form.last_upnormal_description_inspection" 
                                        label="Keterangan" 
                                        
                                        type="textarea"
                                        />
                                   
                                    </transition>

                                </div>

                                <!-- Common Information -->
                                 <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12">
                                    <q-input 
                                      ref="com_description_inspection_information" 
                                      outlined 
                                      readonly
                                      v-model="form.common_description_inspection" 
                                      label="Keterangan Lainnya" 
                                     
                                      type="textarea"/>
                               
                                </div>

                         </div>

                        <div 
                          :style="isMobileViewport ? 'display: flex; justify-content: center; margin-top: 0px;' : ''" 
                          :class="!isMobileViewport ? 'q-pt-lg q-pb-mb' : ''">
                            <q-btn
                             v-if="!routeProps.valid_inspection && get_credentials.role != 1"
                              class=""
                              style="min-width:150px"
                              color="primary"
                              label="Ubah "
                              type="submit" 
                              outline=""
                              @click="$router.push({ 
                                name: 'formulir-inspeksi',           
                                query: {
                                    // dynamic props
                                    routeProps: {
                                      origin: routeProps.origin,
                                      valid_inspection:
                                        routeProps.valid_inspection == 'true' ? true : false // set di target component props ['valid']
                                    }
                                  } 
                                })"
                              :loading="loading"
                            >
                              <q-icon class="q-pl-lg" name="edit" />               
                            </q-btn>   

                            <q-btn :disable="loading" v-if="!isMobileViewport" label="Sebelumnya" color="primary" outline="" class="q-ml-sm" @click="$router.back()"/>

                            <q-btn :disable="loading" v-if="isMobileViewport" round icon="keyboard_arrow_left" color="primary" outline="" class="q-ml-sm" @click="$router.back()"/>

                        </div>


                        <!-- <div :style="isMobileViewport ? 'display: flex; justify-content: center; margin-top: 0px;' : ''" class="q-pt-lg q-pb-mb">
                          <q-btn
                            v-if="!routeProps.valid_inspection"
                            class="glossy"
                            style="min-width:150px"
                            color="primary"
                            label="ubah "
                            to="formulir-inspeksi"
                            :loading="loading"
                          >
                            <q-icon class="q-pl-lg" name="edit" />
                          </q-btn>    
                            <q-btn label="Kembali" outline="" @click="$router.back()" color="primary"  class="q-ml-sm" />
                        </div> -->

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

export default {
  mixins: [role_auth],
  props: ['routeProps'],
  data () {
    return {
      loading: false,

      positions: positionsArray,
      conditions: conditionsArray,
      weathers: weatherArray,

      employeeColumns: [],
      equipmentColumns: [],
      scheduleColumns: [],
      locationColumns: [],
      placeColumns: [
        {
          label: "Tidak Ada",
          value: "",
          disable: false,
          category: "1"
        }
      ],
    }
  },
  watch: {
    "$route.name": function(val) {
      alert(this.get_formulir_inspeksi_update)
      if (this.get_formulir_inspeksi_update == false) this.$router.back();
    }
  },
  computed: {
    form(){
      return  this["get_formulir_inspeksi_form"];
    },
    monthColumns() {
      let data = [];
      for (let index = 1; index <= 12; index++) {
        const val = index <= 9 ? "0" + index : index;
        data.push({
          label: MonthConverter(val),
          value: val,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }

      return data;
    },      
  },
  mounted() {
    const vm = this;

    if (vm.get_formulir_inspeksi_update == false) vm.$router.back();

    // console.log(this.$props, this.$route);

    if (vm.get_formulir_inspeksi_update == false) this.$router.back();
    
    vm.equipmentColumns = vm["get_formulir_inspeksi_equipmentColumns"];

    vm.locationColumns = vm["get_formulir_inspeksi_locationColumns"];

    vm.scheduleColumns = vm["get_formulir_inspeksi_scheduleColumns"];

    vm.employeeColumns = vm["get_formulir_inspeksi_employeeColumns"];

    // jika di vuex kosong
    if(vm.equipmentColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = result;
        // console.log("vm.equipmentColumns", vm.equipmentColumns);
      });
    }
    
    console.log("vm.locationColumns", vm.locationColumns);
    
    if(vm.locationColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment-location`,
            key: "location"
          })
        );
      }).then(result => {
        // label: "auto grease n x"
        // value: "TLL-97d91708-57da-3d10-8db5-89e17b8ca128"
        // uuid: "TLL-97d91708-57da-3d10-8db5-89e17b8ca128"
        // disable: false
        // required: true
        // category: 0
        // location: undefined

        // label: "Bearing Breaker"
        // value: "TLL-f5e54b7f-9852-3f4d-858b-529d9992c2a0"
        // uuid: "TLL-f5e54b7f-9852-3f4d-858b-529d9992c2a0"
        // disable: false
        // required: false
        // category: 2
        // place: "1"      
        vm.locationColumns = result;
        console.log("vm.locationColumns", vm.locationColumns);
      });
    }

    if(vm.scheduleColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/schedule?type=select`,
            key: "schedule"
          })
        );
      }).then(result => {
        vm.scheduleColumns = result;
        // console.log("vm.scheduleColumns", vm.scheduleColumns);
      });
    }    

    if(vm.employeeColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/employee?type=select`,
            key: "employee"
          })
        );
      }).then(result => {
        vm.employeeColumns = result;
        // console.log("vm.employeeColumns", vm.employeeColumns);
      });
    }

  },  
  methods: {
    /**
     * -------------------------------------------------------------
     * Rule Block
     * -------------------------------------------------------------
     */        
    requestTransformAxios(type) {
      var vm = this;

      let options = [];

      vm.$axios
        .get(type.url)
        .then(function(response) {

            for (let i = 0; i < response.data.payload.length; i++) {
              
              if(type.key == 'schedule') {
                options.push({
                  label: response.data.payload[i]["label_" + type.key],
                  value: response.data.payload[i].uuid,
                  uuid: response.data.payload[i].uuid,
                  disable: false,
                  required: i == 0 ? true : false,
                  category: i,
                  location: response.data.payload[i].location
                });
              } else if(type.key == 'location'){
                options.push({
                  label: response.data.payload[i].name, //["label_" + type.key],
                  value: response.data.payload[i].uuid,
                  uuid: response.data.payload[i].uuid,
                  disable: false,
                  required: i == 0 ? true : false,
                  category: i,
                  place: response.data.payload[i].place,
                  //location: response.data.payload[i].location
                });
              } else {
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

            }


        })
        .catch(function(error) {});

        vm.actionVuex({
          data: options,
          type: type.key + "Columns"
        });
        return options;
    },    

    /**
     * -------------------------------------------------------------
     * Action Block
     * -------------------------------------------------------------
     */   
    actionVuex(payload) {
      this["set_formulir_inspeksi"]({
        data: payload.data,
        type: payload.type
      });
    },    
  }
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

function MonthConverter(bulan) {
  // console.log(bulan);

  switch (bulan.toString()) {
    case "01":
      return (bulan = "Januari");
      break;
    case "02":
      return (bulan = "Februari");
      break;
    case "03":
      return (bulan = "Maret");
      break;
    case "04":
      return (bulan = "April");
      break;
    case "05":
      return (bulan = "Mei");
      break;
    case "06":
      return (bulan = "Juni");
      break;
    case "07":
      return (bulan = "Juli");
      break;
    case "08":
      return (bulan = "Agustus");
      break;
    case "09":
      return (bulan = "September");
      break;
    case "10":
      return (bulan = "Oktober");
      break;
    case "11":
      return (bulan = "November");
      break;
    case "12":
      return (bulan = "Desember");
      break;
  }
}

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

div.radio-title {
  white-space: nowrap; 
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>