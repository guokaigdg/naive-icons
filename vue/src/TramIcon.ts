import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TramIcon = defineComponent({
  name: 'TramIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '12', width: '28', height: '24', rx: '4', fill: '#E9C46A' }));
      children.push(h('rect', { x: '14', y: '16', width: '20', height: '10', rx: '2', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('path', { d: 'M18 12 L24 6 L30 12', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M14 36 L14 42 M34 36 L34 42', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '30', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default TramIcon;
