const app = new Vue({
  el:'#app',
  data:{
    //Objetos que contengan información de la app (modelos)
    users:[],
    user:{
      name: 'Luis',
      lastName: 'Ramirez'
    },
    operators:{
      n1: 0,
      n2: 0,
      res:0
    }

  },
  methods:{
    sum: function(event){
      this.operators.res = this.operators.n1 + this.operators.n2;
    }
    //Todas las funciones comunes de la app
  },
  computed:{
    result(){
      return this.operators.n1 + this.operators.n2;
    }
    //Funciones que podrán ser
    // desplegables en la vistas solo si regresan un resultado.
  },
  created(){
    //Aqui se ejecuta código al inicializar la aplicación.
    fetch('/users/get/')
    .then(response => response.json())
    .then(json => {
      this.users = json.data.docs;
    });
  }
});
