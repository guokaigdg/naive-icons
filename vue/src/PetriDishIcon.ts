import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PetriDishIcon = defineComponent({
  name: 'PetriDishIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '12', fill: '#FFFFFF', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '19.5', cy: '20', r: '2.2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '19.5', r: '1.8', fill: '#588157', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '27.5', r: '2.1', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '27', r: '1.6', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '23.5', r: '1.5', fill: '#588157', stroke: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default PetriDishIcon;
