// TextComp.spec.js

import { shallowMount } from '@vue/test-utils';
import TextComp from '@/components/TextComp.vue';

describe('TextComp', () => {
  it('se monta correctamente', () => {
    const wrapper = shallowMount(TextComp);
    expect(wrapper.exists()).toBe(true);
  });

  it('muestra el texto oculto al inicio', () => {
    const wrapper = shallowMount(TextComp);

    
    const hiddenText = wrapper.find('.hide');
    expect(hiddenText.exists()).toBe(true);
   
  });
});






