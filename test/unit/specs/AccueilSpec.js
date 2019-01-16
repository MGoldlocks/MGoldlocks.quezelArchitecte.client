import Vue from 'vue'
import Accueil from '@/components/Accueil'

describe('Accueil.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Accueil)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.accueil h1').textContent)
      .to.equal('Accueil')
  })
})
