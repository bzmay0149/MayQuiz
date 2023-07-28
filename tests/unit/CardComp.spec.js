// CardComp.spec.js

import { shallowMount } from '@vue/test-utils';
import CardComp from '@/components/CardComp.vue';

describe('CardComp', () => {
  it('se monta correctamente', () => {
    const wrapper = shallowMount(CardComp, {
      props: {
        imagenHtml: 'ruta/imagenHtml.png',
        imagenCss: 'ruta/imagenCss.png',
        imagenJs: 'ruta/imagenJs.png',
        start1: 'Iniciar 1',
        start2: 'Iniciar 2',
        start3: 'Iniciar 3',
        route1: '/ruta1',
        route2: '/ruta2',
        route3: '/ruta3'
      }
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('renderiza imágenes y botones con las propiedades adecuadas', () => {
    const wrapper = shallowMount(CardComp, {
      props: {
        imagenHtml: 'ruta/imagenHtml.png',
        imagenCss: 'ruta/imagenCss.png',
        imagenJs: 'ruta/imagenJs.png',
        start1: 'Iniciar 1',
        start2: 'Iniciar 2',
        start3: 'Iniciar 3',
        route1: '/ruta1',
        route2: '/ruta2',
        route3: '/ruta3'
      }
    });

    // Verificar que las imágenes se rendericen correctamente
    const htmlImg = wrapper.find('[alt="Html"]');
    expect(htmlImg.exists()).toBe(true);

    const cssImg = wrapper.find('[alt="Css"]');
    expect(cssImg.exists()).toBe(true);

    const jsImg = wrapper.find('[alt="Js"]');
    expect(jsImg.exists()).toBe(true);

    // Verificar que los botones se rendericen correctamente
    const btn1 = wrapper.find('button');
    expect(btn1.exists()).toBe(true);
    expect(btn1.text()).toBe('Iniciar 1');

    const btn2 = wrapper.findAll('button').at(1);
    expect(btn2.exists()).toBe(true);
    expect(btn2.text()).toBe('Iniciar 2');

    const btn3 = wrapper.findAll('button').at(2);
    expect(btn3.exists()).toBe(true);
    expect(btn3.text()).toBe('Iniciar 3');
  });
});
