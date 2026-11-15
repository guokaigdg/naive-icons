import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DentistIcon = defineComponent({
  name: 'DentistIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '18', width: '32', height: '23', rx: '2', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '14', y: '6.5', width: '20', height: '15.5', rx: '2', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M19 10 C 16.5 10 15.5 12.5 16 15 C 16.5 17 17.5 18 18 20.5 L19.5 22.5 L21 20 C 22 18.5 26 18.5 27 20 L28.5 22.5 L30 20.5 C 30.5 18 31.5 17 32 15 C 32.5 12.5 31.5 10 29 10 C 27 10 26 11 24 11 C 22 11 21 10 19 10 Z', fill: '#FFFFFF', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '20', y: '30.5', width: '8', height: '10.5', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '29', width: '5.5', height: '6.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '31.5', y: '29', width: '5.5', height: '6.5', fill: '#E9C46A', stroke: 'none' }));
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

export default DentistIcon;
