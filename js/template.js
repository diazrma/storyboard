var app = new Vue({
    el: '#template',
    data: {
        titulo: 'Nome do Projeto',
        totalQuadros: 0,
        tituloQuadro:'Nome do Quadro'
    },  methods: {
        novoQuadro: function() {
          
          this.totalQuadros++
        }
      }
})


