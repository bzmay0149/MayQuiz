// Importamos las librerías necesarias
import { shallowMount } from '@vue/test-utils';
import NavComp from '@/components/NavComp.vue'; // Asegúrate de tener la ruta correcta

describe('NavComp', () => {
  it('se renderiza correctamente', () => {
    // Montamos el componente
    const wrapper = shallowMount(NavComp);

    // Verificamos que el componente se haya renderizado sin errores
    expect(wrapper.exists()).toBe(true);
  });
});
