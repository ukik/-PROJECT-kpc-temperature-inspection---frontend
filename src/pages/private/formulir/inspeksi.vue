<template>
    <q-page>
        <div class="q-pa-md">
            <info-validation v-if="rule_props != null  && !loading" :_rule="rule_props" />

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

                    <q-form @submit="onSubmitHandler" @reset="onResetHandler">

                            <div :class="!isMobileViewport ? 'row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-col-gutter-md' : 'row col-12 col-xs-2 col-sm-12 col-md-12 col-lg-8 col-xl-8'">

                              <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <!-- v-model="this['get_inspeksi_temperatur_panel_'+routeProps.origin+'_pagination'].month" -->
                                <q-select
                                  outlined
                                  ref="month"
                                  options-dense
                                  v-model="form.month"
                                  emit-value
                                  clearable=""
                                  map-options
                                  :disable="loading"
                                  :options="monthColumns"
                                  @input="onSelectHandler($event, 'month')"
                                  option-value="value"
                                  label="Bulan"
                                  style="min-width: 100%;"
                                  :hint="isMobileViewport ? '' : 'Wajib: pilih nama bulan'"
                                  class="float-left"
                                  behavior="dialog"
                                  lazy-rules 
                                  :rules="[
                                    val => val && val.length > 0 || 'Required *'
                                  ]"/>
                              </div>

                              <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <!-- v-model="this['get_inspeksi_temperatur_panel_'+routeProps.origin+'_pagination'].year" -->
                                <q-input
                                  outlined
                                  ref="year"
                                  type="number"
                                  :min="minYear"
                                  :max="maxYear"
                                  step="1"
                                  :disable="loading"
                                  v-model="form.year"
                                  @input="onSelectHandler($event, 'year')"
                                  label="Tahun"
                                  style="min-width: 100%;"
                                  :hint="isMobileViewport ? '' : 'Wajib: diisi tahun'"
                                  class="float-right"
                                  lazy-rules 
                                  :rules="[
                                    commonRule
                                  ]"/>
                              </div>


                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="uuid_tb_equipment"
                                    outlined
                                    emit-value
                                    map-options
                                    clearable 
                                      :disable="loading" 
                                    behavior="dialog"
                                    v-model="form.uuid_tb_equipment"
                                    @input="onSelectHandler($event, 'equipment')"
                                    @filter="onFilterEquipmentHandler"
                                    @filter-abort="onAbortFilterHandler"
                                    :options="equipmentColumns"
                                    option-value="value"
                                    label="Alat"
                                    style="min-width: 100%;"
                                    :hint="isMobileViewport ? '' : 'Wajib: pilih nama alat'"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *'
                                    ]">
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
                                    clearable 
                                    behavior="dialog"
                                    v-model="form.uuid_tb_location"
                                    @input="onSelectHandler($event, 'location')"
                                    @filter="onFilterLocationHandler"
                                    @filter-abort="onAbortFilterHandler"
                                    :disable="loading || form.uuid_tb_equipment == ''"
                                    :options="locationColumns"
                                    option-value="value"
                                    label="Lokasi"
                                    style="min-width: 100%;"
                                    :hint="isMobileViewport ? '' : 'Wajib: pilih nama lokasi'"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *'
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

                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <q-select
                                    ref="place_inspection"
                                    v-model="form.place_inspection"
                                    emit-value
                                    map-options
                                    outlined
                                     
                                    behavior="dialog"
                                    :options="placeColumns"
                                    @input="onSelectHandler($event, 'place')"
                                    :disable="loading || form.uuid_tb_location == '' || placeColumns.length == 1"
                                    option-value="value"
                                    label="Letak"
                                    :hint="isMobileViewport ? '' : 'Wajib: pilih letak'"
                                    style="min-width: 100%;"
                                    lazy-rules 
                                    :rules="[
                                      placeRule      
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
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                  <!-- Auto Complete Name -->
                                  <q-select
                                    ref="uuid_tb_employee"
                                    v-model="form.uuid_tb_employee"
                                    use-input
                                    behavior="dialog"
                                    outlined
                                    clearable 
                                      :disable="loading"
                                    hide-selected                                
                                    fill-input
                                    input-debounce="0"
                                    label="Karyawan"
                                    emit-value 
                                    map-options 
                                    :hint="isMobileViewport ? '' : 'Wajib: pilih nama karyawan'"
                                    option-value="value"                                     
                                    :options="employeeColumns"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *'
                                    ]">
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
                                    clearable 
                                      :disable="loading"
                                    behavior="dialog"
                                    v-model="form.uuid_tb_schedule"
                                    :options="scheduleColumns"
                                    option-value="value"
                                    label="Jadwal"
                                    :hint="isMobileViewport ? '' : 'Wajib: pilih nama jadwal'"
                                    style="min-width: 100%;"
                                    lazy-rules 
                                    :rules="[
                                      val => val && val.length > 0 || 'Required *'
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
                                              <q-item-label> {{ scope.opt.time }} </q-item-label>
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

                                <!-- Kondisi -->
                                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="condition_inspection" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.condition_inspection" 
                                      :options="conditions" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      label="Kondisi" 
                                      behavior="dialog"
                                      :hint="isMobileViewport ? '' : 'Wajib: pilih kondisi alat'" 
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
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <q-select 
                                      ref="weather_inspection" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.weather_inspection" 
                                      :options="weathers" 
                                      emit-value 
                                      map-options 
                                      option-value="value" 
                                      behavior="dialog"
                                      label="Cuaca" 
                                      :hint="isMobileViewport ? '' : 'Wajib: pilih kondisi cuaca'" 
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
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="grease_shoot_inspection" 
                                      outlined
                                      clearable 
                                      :disable="loading" 
                                      counter
                                      maxlength="3"
                                      min="0"
                                      type="number"
                                      v-model="form.grease_shoot_inspection" 
                                      label="Grease Shoot" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi bilangan grease shoot'" 
                                      lazy-rules 
                                      :rules="[greaseShootRule]" />
                                    
                                </div>

                                <!-- Temperature -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="temperature_inspection" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      counter
                                      maxlength="30"                                      
                                      min="0"
                                      type="number"
                                      v-model="form.temperature_inspection" 
                                      label="Temperatur" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi bilangan temperatur'" 
                                      lazy-rules 
                                      :rules="[
                                        temperatureRule
                                      ]" />
                                   
                                </div>

                                <!-- Rain -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <q-input 
                                      ref="rain_inspection" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      min="0"
                                      counter
                                      maxlength="3"                                      
                                      type="number"
                                      v-model="form.rain_inspection" 
                                      label="Curah Hujan" 
                                      :hint="isMobileViewport ? '' : 'Wajib: isi bilangan curah hujan'" 
                                      lazy-rules 
                                      :rules="[
                                       rainRule
                                      ]" />
                                   
                                </div>

                                <!-- Current Upnormal Inspection -->
                                <div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sekarang</div> -->
                                    <q-field 
                                      ref="current_upnormal_inspection" 
                                      borderless 
                                       
                                      :disable="loading"
                                      dense
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
                                         v-if="form.current_upnormal_inspection == '1'"
                                        :disable="loading || form.current_upnormal_inspection == 0 ? true : false"
                                        ref="cui_description_inspection_information" 
                                        outlined 
                                        clearable 
                          
                                        v-model="form.current_upnormal_description_inspection" 
                                        label="Keterangan" 
                                        :hint="isMobileViewport ? '' : 'Opsional: Opsional: isi keterangan kondisi upnormal sekarang'" 
                                        type="textarea" 
                                        />
                                     
                                    </transition>

                                </div>

                                <!-- Last Upnormal Inspection -->
                                <div :style="isMobileViewport ? 'margin-bottom:15px' : ''" class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <!-- <div class="q-field__label no-pointer-events  ellipsis">Kondisi Upnormal Sebelumnya</div> -->

                                    <q-field 
                                      ref="last_upnormal_inspection" 
                                      borderless 
                                       
                                      :disable="loading"
                                      dense
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
                                         v-if="form.last_upnormal_inspection == '1'"
                                        :disable="loading || form.last_upnormal_inspection == 0 ? true : false"
                                        ref="lui_description_inspection_information" 
                                        outlined 
                                        clearable 
                             
                                        v-model="form.last_upnormal_description_inspection" 
                                        label="Keterangan" 
                                        :hint="isMobileViewport ? '' : 'Opsional: isi keterangan kondisi upnormal sebelumnya'" 
                                        type="textarea"
                                        />
                                   
                                    </transition>

                                </div>

                                <!-- Common Information -->
                                 <div class="col-12">
                                    <q-input 
                                      ref="com_description_inspection_information" 
                                      outlined 
                                      clearable 
                                      :disable="loading"
                                      v-model="form.common_description_inspection" 
                                      label="Keterangan Lainnya" 
                                      :hint="isMobileViewport ? '' : 'Opsional: isi dengan keterangan tambahan lainnya'" 
                                      type="textarea"/>
                               
                                </div>
                         </div>

                        <div 
                          :style="isMobileViewport ? 'display: flex; justify-content: center; margin-top: 0px;' : ''" 
                          :class="!isMobileViewport ? 'q-pt-lg q-pb-mb' : ''">
                            <q-btn
                              class=""
                              style="min-width:150px"
                              color="primary"
                              label="Proses "
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
  // props: ['routeProps'],  
  props: {
    routeProps: {
      default: () => ({
          origin: "invalid", // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh admin)
          valid_inspection: false // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh admin)
      })
    }
  },
  data () {
    return {
      loading: false,
      buildURL: `/api/v1/mutation/inspection`,

      positions: positionsArray,
      conditions: conditionsArray,
      weathers: weatherArray,

      rule_props: null,

      maxYear: new Date().getFullYear() + 1,
      minYear: 2017,


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
        form: {
            uuid_tb_employee: '',
             uuid_tb_schedule: '',
            uuid_tb_location: '',
            uuid_tb_equipment: '',
            place_inspection: '',
            condition_inspection: '1',
            grease_shoot_inspection: '1',
            weather_inspection: '1',
            temperature_inspection: '1',
            rain_inspection: '1',
            current_upnormal_inspection: '0',
            current_upnormal_description_inspection: null,
            last_upnormal_inspection: '0',
            last_upnormal_description_inspection: null,
            common_description_inspection: null,
            screenshoot_inspection: '1',
            valid_inspection: "",
            year: null, //new Date().getFullYear(),
            month: null,

        },

    }
  },
  computed: {
    updated(){
      return this.$store.state.formulir_inspeksi.data.update
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
  watch: {
    "$route.name": function(val) {
      alert(this.get_formulir_inspeksi_update)
      if (this.get_formulir_inspeksi_update == false) this.$router.back();
    },
    "form.year": function(val) {
      // console.log(val);
      if (val > this.maxYear) {
        this.form.year = this.maxYear;
      }
      if (val < this.minYear) {
        this.form.year = this.minYear;
      }
    },    
    "form.grease_shoot_inspection":function(val) {
      if(val > 100) {
        this.form.grease_shoot_inspection = 100
      }
      if(val < 0) {
        this.form.grease_shoot_inspection = 0
      }
    }, 
    "form.rain_inspection":function(val) {
      if(val > 100) {
        this.form.rain_inspection = 100
      }
      if(val < 0) {
        this.form.rain_inspection = 0
      }
    }, 
    "form.temperature_inspection":function(val) {
      if(val > 100) {
        this.form.temperature_inspection = 100
      }
      if(val < 0) {
        this.form.temperature_inspection = 0
      }
    },         
    "get_formulir_inspeksi_equipmentColumns":function(val) {
      this.equipmentColumns = val
    }, 
    "get_formulir_inspeksi_locationColumns":function(val) {
      this.locationColumns = val
    },     
    "get_formulir_inspeksi_scheduleColumns":function(val) {
      this.scheduleColumns = val
    }, 
    "get_formulir_inspeksi_employeeColumns":function(val) {
      this.employeeColumns = val
    },       
    // IMPORTANT
    // update vuex
    form: {
      handler: function(before, after) {
        const vm = this;
        // console.log('form', vm.form);

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
                label: vm.getCapitalize(element.name_location),
                value: element.uuid,
                uuid: element.uuid,
                disable: false,
                required: j == 0 ? true : false,
                category: j,
                place: element.place
              });
            }

            vm.locationColumns = locations;

            vm.actionVuex({
              data: locations,
              type: "locationColumns"
            });
          }
        }

        vm.actionVuex({
          data: vm.form,
          type: "form"
        });

      },
      deep: true
    }   
  },
  mounted() {

    const vm = this;


    // if (vm.get_formulir_inspeksi_form == false) vm.$router.back();
    if (vm.get_formulir_inspeksi_update == false) vm.$router.back();

    vm.form = vm["get_formulir_inspeksi_form"];

    console.log(vm.form);
    

    vm.equipmentColumns = vm["get_formulir_inspeksi_equipmentColumns"];

    vm.locationColumns = vm["get_formulir_inspeksi_locationColumns"];

    vm.scheduleColumns = vm["get_formulir_inspeksi_scheduleColumns"];

    vm.employeeColumns = vm["get_formulir_inspeksi_employeeColumns"];

    if(vm.equipmentColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.actionVuex({
          type: 'equipmentColumns',
          data: result 
        })
      });
    }
    
    // tidak perlu karena akan menghancurkan konstruksi transform 
    if(vm.locationColumns.length <= 0) {
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment-location`,
            key: "location"
          })
        );
      }).then(result => {
        vm.actionVuex({
          type: 'locationColumns',
          data: result 
        })
        // console.log("vm.locationColumns", vm.locationColumns);
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
        vm.actionVuex({
          type: 'scheduleColumns',
          data: result 
        })
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
        vm.actionVuex({
          type: 'employeeColumns',
          data: result 
        })
        // console.log("vm.employeeColumns", result);
      });
    }

  },  
  methods: {
    /**
     * -------------------------------------------------------------
     * Rule Block
     * -------------------------------------------------------------
     */       
    commonRule(val) {
      // simulating a delay

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(!!val.toString() || "* Required"); // support numerice
        }, 1000);
      });
    },

    placeRule(val){
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
    greaseShootRule(val){
      const vm = this
      return new Promise((resolve, reject) => {
        if(vm.form.grease_shoot_inspection == undefined) {
          resolve(false || "* Required"); // support numerice
        }
        if(vm.form.grease_shoot_inspection.length > 0) {
          resolve(!!val.toString() || "* Required"); // support numerice
        }
        if(vm.form.grease_shoot_inspection.length <= 3) {
          resolve(!!val.toString() || "Maximal 3 char"); // support numerice
        }
        resolve(true)
      });
    },
    temperatureRule(val){
      const vm = this
      return new Promise((resolve, reject) => {
        if(vm.form.temperature_inspection == undefined) {
          resolve(false || "* Required"); // support numerice
        }        
        if(vm.form.temperature_inspection.length > 0) {
          resolve(!!val.toString() || "* Required"); // support numerice
        }
        if(vm.form.temperature_inspection.length <= 3) {
          resolve(!!val.toString() || "Maximal 3 char"); // support numerice
        }

        resolve(true)
      });
    },
    rainRule(val){
      const vm = this
      return new Promise((resolve, reject) => {
        if(vm.form.rain_inspection == undefined) {
          resolve(false || "* Required"); // support numerice
        }        
        if(vm.form.rain_inspection.length > 0) {
          resolve(!!val.toString() || "* Required"); // support numerice
        }
        if(vm.form.rain_inspection.length <= 3) {
          resolve(!!val.toString() || "Maximal 3 char"); // support numerice
        }

        resolve(true)
      });
    },

    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */ 
    onFilterEquipmentHandler(val, update, abort) {
      var vm = this;

      console.log('vm.locationColumns', vm.locationColumns);

      if (vm.equipmentColumns.length > 0) {
        // already loaded
        update();
        return;
      }

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

        setTimeout(() => {
          update();
        }, 500);
      });
    },

    onFilterLocationHandler(val, update, abort) {
      var vm = this;

      if (vm.locationColumns.length > 0) {
        // already loaded
        update();
        return;
      }

      // justru gunakan equipment
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

        setTimeout(() => {
          update();
        }, 500);
      });      

      // tidak perlu karena akan menghancurkan konstruksi transform 
      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment-location`,
            key: "location"
          })
        );
      }).then(result => {
        vm.locationColumns = result;
        console.log("vm.locationColumns", vm.locationColumns);

        setTimeout(() => {
          update();
        }, 500);
      });
    },
    onAbortFilterHandler() {
      // console.log('delayed filter aborted')
    },    
    onSelectHandler(data, type) {
      const vm = this;

      console.log(data, type);

      if (type == "equipment") {

        // agar dropdown place tidak disable
        vm.form.uuid_tb_location = "";
        vm.form.place_inspection = "";
      }
      
      vm.$refs['uuid_tb_location'].resetValidation()
      vm.$refs['place_inspection'].resetValidation()

      if (type == "location") {

        vm.form.place_inspection = "";

        // dipanggil untuk singkronisasi place dropdown (placeColumns)
        for (let i = 0; i < vm.locationColumns.length; i++) {
          const element = vm.locationColumns[i];

          if (element.value == data) {

            // agar dropdown place tidak disable
            console.log(element);
            switch (Number(element.place)) {
              case 0:
                // vm.form.place_inspection = "";
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
                // vm.form.place_inspection = "";
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

      // vm.requestAxios();
    },    
    onSubmitHandler () {
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
            return    
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

      this.form = {
            uuid_tb_employee: '',
            uuid_tb_schedule: '',
            uuid_tb_location: '',
            uuid_tb_equipment: '',
            place_inspection: '',
            condition_inspection: '',
            grease_shoot_inspection: '',
            weather_inspection: '',
            temperature_inspection: '',
            rain_inspection: '',
            current_upnormal_inspection: '0',
            current_upnormal_description_inspection: '',
            last_upnormal_inspection: '0',
            last_upnormal_description_inspection: '',
            common_description_inspection: '',
            screenshoot_inspection: '',
            valid_inspection: "",
            year: "",
            month: null,            
        }      
    },
 
    /**
     * -------------------------------------------------------------
     * Vuex Block
     * -------------------------------------------------------------
     */ 
    actionVuex(payload) {
      this["set_formulir_inspeksi"]({
        data: payload.data,
        type: payload.type
      });
    },    

    /**
     * -------------------------------------------------------------
     * Axios Block
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
        .catch(function(error) {
          // console.log('error', error);
        });

        vm.actionVuex({
          data: options,
          type: type.key + "Columns"
        });
        return options;
    },    

    requestAxios: _.debounce(function() {
      var vm = this;

      // vm.loading = true;

      if(!vm.form.current_upnormal_description_inspection)
        vm.form.current_upnormal_inspection = "0"

      if(!vm.form.last_upnormal_description_inspection)
        vm.form.last_upnormal_inspection = "0"

      let constructURL = vm.buildURL
      vm.updated == "put" ? constructURL += "/validation" : constructURL

      vm.$axios[vm.updated ? 'put' : 'post'](constructURL+`?year=${vm.form.year}&month=${vm.form.month}`, vm.form)
        .then(function(response) {
          // console.log(vm.updated);
          // console.log(vm.form);
    
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

            // console.log(response.data.payload);

            new Promise(resolve => {

              if(vm.updated == 'put') {
                // update data yang valid/invalid di store invalid
                vm['set_inspeksi_temperatur_panel_'+routeProps]({
                  type: "replace",
                  data: response.data.payload
                });
              } 
              
              if(vm.updated == 'post') {
                // update data yang valid/invalid di store invalid
                vm['set_inspeksi_temperatur_panel_invalid']({
                  type: "add",
                  data: response.data.payload
                });
              }

              resolve()

            }).then(result => {

              // reset sisa detail
              vm.set_formulir_inspeksi({
                data: null,
                type: "reset_form"
              });

              // reset sisa detail
              vm.set_formulir_inspeksi_new({
                data: null,
                type: "reset_form"
              });       

              vm.$router.push({
                name: "private-redirect-success-inspeksi"
              })

            })

          } 

          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;         
        });
    }, 1000),


  }
}

const formName = {
    month:'formulir bulan',
    year:'formulir tahun',
    uuid_tb_employee:'nama karyawan',
    uuid_tb_location:'lokasi inspeksi',
    uuid_tb_schedule:'jadwal inspeksi',
    uuid_tb_equipment:'nama alat diinspeksi',
    place_inspection:'letak saat inspeksi',
    condition_inspection:'kondisi saat inspeksi',
    grease_shoot_inspection:'grease shoot saat inspeksi',
    weather_inspection:'cuaca saat inspeksi',
    temperature_inspection:'temperatur saat inspeksi',
    rain_inspection:'curah hujan saat inspeksi',
    current_upnormal_inspection:'kondisi upnormal saat inspeksi',
    last_upnormal_inspection:'kondisi upnormal terakhir inspeksi',
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
    label: "Vibration",
    value: "3",
    disable: false,
    required: false,
    category: "3"
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

div.radio-title {
  white-space: nowrap; 
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>