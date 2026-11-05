import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TaxiIcon = defineComponent({
  name: 'TaxiIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 26 L12 26 L16 16 L32 16 L36 26 L42 26 L42 34 L6 34 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 25 L19 19 L29 19 L30 25 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '19', y: '9', width: '10', height: '5', rx: '2', fill: '#264653' }));
      children.push(h('circle', { cx: '15', cy: '34', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '33', cy: '34', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '15', cy: '34', r: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '34', r: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M8 30 L12 30 M15 30 L19 30 M22 30 L26 30 M29 30 L33 30 M36 30 L40 30', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
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

export default TaxiIcon;
