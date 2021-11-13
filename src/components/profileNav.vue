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
            await logout()
            if(!error.value){
                console.log('user logged out')
                contex.emit('user', )
                route.push({name: 'Home'}) //redirected to HomePage after Logged Out
            }
        }

        return {handleLogout, user}
    }

}
</script>

<style>

.profile-nav{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #32128b8a;
    margin-bottom: 40px;
}
.profile-nav p{
    margin: 2px;
    font-size: 16px;
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
    width: 90px;
    height: 35px;
    border: none;
}
.button-profile:hover{
    background-color: #32128b8a;
    cursor: pointer;
}
</style>