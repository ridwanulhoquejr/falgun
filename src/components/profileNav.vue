<template>

   <div class="profile-nav" v-if="user">
    <div>
        <p>{{user.displayName}}</p>
        <p class="email">Currently logged in as {{user.email}}</p>
    </div>
       <button @click="handleLogout" class="button-profile">Logout</button>
   </div>

</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {

    setup(props, context){

        const route = useRouter()

        const {logout, error} = useLogout()
        const { user } = getUser()

        const handleLogout = async ()=> {

            route.push({name: 'Home'}) //redirected to HomePage after Logged Out

            await logout()
            if(!error.value){
                console.log('user logged out')
               
            }
        }

        return {handleLogout, user}
    }

}
</script>

<style>

.profile-nav{
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
   
}
.profile-nav p{
    margin: 2px;
    font-size: 14px;
    color: #444;
}
.profile-nav p.email{
    font-size: 14px;
    color: #999;
    margin-top: 10px;
}
.button-profile{
    color: white;
    background-color: #43A8EB;
    display: block;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 10px;
    transition: ease .2s;
    width: 70px;
    height: 30px;
    border: none;
}
.button-profile:hover{
    background-color: #1884cc;
    cursor: pointer;
}
</style>