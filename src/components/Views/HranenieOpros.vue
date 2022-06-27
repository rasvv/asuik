<template>
  <div>
    <!-- <h3>Статистика образования РАО в {{ dat.ceh }}</h3> -->
    <div class="table__header" >
      <v-row no-gutters class="h40 my-2">
        <v-col cols="2" md="2">
          <v-row no-gutters>
            <fieldset class="border h40p">
              <legend> 
                Выбор хранилища
              </legend>
              <v-col cols="12" class="pt-0">
                <v-row v-for="n in HRANENIEOPROS.length - 1" :key="n" no-gutters >
                  <v-checkbox
                    v-model="HRANENIEOPROS[n - 1].checked"
                    :label="HRANENIEOPROS[n - 1].name"
                    :value="HRANENIEOPROS[n - 1].name"
                    hide-details
                  ></v-checkbox>
                </v-row>              
              </v-col>              
            </fieldset>
          </v-row>
          <v-row  no-gutters >
            <fieldset class="border d-flex flex-column align-center">
              <legend>
                Опрос радиометок
              </legend>
              <v-btn class="mb-2" width="90%">
                Настройка
              </v-btn>
              <v-btn width="90%">
                Опросить
              </v-btn>              
            </fieldset>
            

          </v-row>  
        </v-col>
        <v-col cols="12" md="8">
          <v-row no-gutters class="px-2">
            <fieldset class="border h40">
              <legend>
                Результаты опроса
              </legend>
              <v-row  no-gutters>
                <v-col cols="12">
                  <HranenieOprosHeader />
                  <div class="h40p">
                    <div v-for="n in selected.length" :key="n" no-gutters >
                      <HranenieOpros_Line :hranenieopros="HRANENIEOPROS[selected[n-1]].opros" :name="HRANENIEOPROS[selected[n-1]].name" />
                    </div>                    
                  </div>
                </v-col>
              </v-row>
							<v-row no-gutters>
								Количество учетных единиц: {{ count }}
							</v-row>
            </fieldset>            
          </v-row>

        </v-col>
        <v-col cols="2"  md="2">
          <fieldset class="border h40">
            <legend>
              Состояние контейнера
            </legend>
              <Icons/>
          </fieldset>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <fieldset class="border d-flex">
          <legend>
            Детально:
          </legend>
          <v-col cols="4">
            <fieldset class="border">
              <legend>
                Содержимое контейнера
              </legend>
              <v-row no-gutters>
                <v-col cols="6" class="d-flex justify-end align-center pr-2">
                  Заводской №
                </v-col>
                <v-col cols="6" >
                  <v-text-field
                    label="12544"
                    placeholder="Placeholder"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="6" class="d-flex justify-end align-center pr-2">
                  Регистрационный №
                </v-col>
                <v-col cols="6" >
                  <v-text-field
                    label="874"
                    placeholder="Placeholder"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </fieldset> 
          </v-col>
          <v-col cols="8" class="border"></v-col>
         
        </fieldset>
      </v-row>
    </div>
  </div>
</template>

<script>
import HranenieOpros_Line from './Lines/HranenieOpros_Line.vue';
import HranenieOprosHeader from './Headers/HranenieOprosHeader.vue';
import Icons from './Images/Icons.vue';
// import Cehs from './Cehs.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'hranenie-opros',
  components: {
    HranenieOpros_Line,
    HranenieOprosHeader,
    Icons,
    // Cehs
  },
  data() {
    return {
			count: 0
    };
  },
  methods: {
		countsum(count) {
			this.count += +count
		},
		countclear() {
			this.count = 0
		}
  },
  computed: {
    ...mapGetters([
      'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'HRANENIEOPROS'
    ]),
    selected() {
      let select = []
			this.countclear()
      this.HRANENIEOPROS.map(item => {
        if (item.checked) 
				{
					select.push(item.id - 1)
					this.countsum(item.count)
				}
      })
      return select
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
