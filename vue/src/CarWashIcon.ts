import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CarWashIcon = defineComponent({
  name: 'CarWashIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 27 L11 27 L15 20 H29 L33 27 H40 L40 33 H6 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M16.5 26 L18 22 H25.5 L29.5 26 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '14', cy: '34', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '33', cy: '34', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '14', cy: '34', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '34', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '11.5', cy: '15', r: '2.6', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '18.5', cy: '10.5', r: '3', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '26', cy: '7.5', r: '2.4', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
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

export default CarWashIcon;
