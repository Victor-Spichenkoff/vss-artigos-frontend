import Vue from 'vue'

export const userKey = '__knowledge_user'
export const baseApiUrl = 'https://vss-artigos-backend.onrender.com'
// export const baseApiUrl = 'http://localhost:2006'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }