<template>
<div class = "setting">
    <b-container class="bv-example-row">
        <b-row cols="6">
            <b-col>
                <b-form-input v-model="app.lat" type="text" placeholder="위도를 입력해주세요"></b-form-input>
                <b-form-input v-model="app.long" type="text" placeholder="경도를 입력해주세요"></b-form-input>
                <b-form-input v-model="app.date" type="text" placeholder="날짜(YYYY-MM-DD)"></b-form-input>
            </b-col>
        </b-row>
    </b-container>
    <span>
        <h5>위도 : {{app.lat}} 경도 : {{app.long}} 날짜 : {{app.date}}</h5>
    </span>
</div>

</template>

<script>

export default {
    data () {
        return {
            app : this.$root.app,
            
        }
    },
    methods : {

    },
    watch :{
        // data 변경사항 추적

    },
    created () {

        var self = this

        //현제 위치 알아서 가져오고 현재 날짜 알아서 가져옴
        //브라우저마다 상이 --> 될수도 있고 안될수도 있음.
        if (navigator.geolocation) {
        /* 지오로케이션 사용 가능 */
        navigator.geolocation.getCurrentPosition(function(position) {
            self.app.lat = position.coords.latitude
            self.app.long = position.coords.longitude
            
        });
        } else {
            alert("위치정보 직접 입력")
        /* 지오로케이션 사용 불가능 */
        }
        

    },
    mounted() {
        // template 조작 가능

    }

}
</script>

<style>
.setting{
    margin : 0 auto;
}
span h5{
    text-align:center;
    margin : 1em;
}

</style>