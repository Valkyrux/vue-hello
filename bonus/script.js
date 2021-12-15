const root = new Vue({
    el: '#root',
    data: {
      inputText: 'Inserisci un testo',
      img: "https://images.unsplash.com/photo-1639377498517-3d1d6837a9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      counter: 0
    },
    methods: {
      incremento: function () {
          this.counter++;
      }  
    }
});