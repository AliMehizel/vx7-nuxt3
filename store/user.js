import { defineStore } from "pinia";
import useAxios from '~/store/useAxios'


export const useUser = defineStore('user', {
    state: () => {
        return {
            user: [],
            loading: false,
            error: null
        }
    },
    actions: {
        async GetUser() {
            //http://127.0.0.1:8000/dj-rest-auth/user/
            try {
                this.loading = true
                const res = await useAxios().get('/dj-rest-auth/user/')
                if (res.status !== 200) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                this.user = res.data
                this.loading = false
            } catch (error) {
                this.error = error.message
            }

        },
        async Authenticate(data) {
            let credentiels = data
            try {
                this.loading = true
                const res = await fetch('/dj-rest-auth/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentiels)
                })

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json()
                navigateTo('/profile')
                localStorage.setItem('authTokens', JSON.stringify({ 'access': data.access, 'refresh': data.refresh }))

                //this.user = data
                this.loading = false
            }
            catch (error) {
                this.error = error.message
            }
        }
    }
})