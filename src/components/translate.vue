<template>
<div>
    <b-button variant="success" @click='fetch()'> GO </b-button>
    <br/>
    <ul>
        <li v-for='data in datas' :key = 'data'> 
            <span> 일출 : {{ data.sunrise }} </span>
            <span> 일몰 : {{ data.sunset }} </span>
            {{ text }}
            <hr>
        </li>
    </ul>
 
</div>

</template>

<script>

export default {
    data () {
        return {
            app : this.$root.app,
            text : "",
            datas : []
        }
    },
    methods : {
        fetch(){

            this.$http.get(`https://api.sunrise-sunset.org/json`, {
                params : {
                    lat : this.app.lat,
                    lng : this.app.long,
                    date : this.app.date,
                    formatted : 0,
                    text : ""
                }
            })
            .then((res) => {

            console.log(res.data.results)
            
            let info = {
                sunrise : this.convert(res.data.results.sunrise),
                sunset : this.convert(res.data.results.sunset)
            }

            this.datas.push(info)

            }).catch((err)=>{
            console.log(err)
            })
            
            

        },
        convert(str){
                var date = new Date(str)
                var mnth = ("0" + (date.getMonth()+1)).slice(-2)
                var day  = ("0" + date.getDate()).slice(-2)
                var hours  = ("0" + date.getHours()).slice(-2)
                var minutes = ("0" + date.getMinutes()).slice(-2)
            return [ date.getFullYear(), mnth, day].join("-") +" "+[hours, minutes ].join(":");

        }
    },
    created : {
        //생성 시점

    },
    mounted : {
        // template 조작 가능

    }


}
</script>

<style>
div{
    text-align:center;
}
ul {
    list-style : none;
    margin : 1em 0;
    padding : 0 !important;
}
li span{
    display:block;
}


</style>