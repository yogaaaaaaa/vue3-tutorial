const app = Vue.createApp({
    // template: '<h2> i am the template </h2>'
    data(){
        return {
            title: 'The Final Empire',
            author: 'John Snow',
            age: '37'
        }
    }
})

app.mount('#app')