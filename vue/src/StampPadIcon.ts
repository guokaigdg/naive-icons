import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const StampPadIcon = defineComponent({
  name: 'StampPadIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-10 24 16)' }, [
          h('rect', { x: '8', y: '9', width: '32', height: '8', rx: '2', fill: '#E9C46A' }),
        ]),
      );
      children.push(h('rect', { x: '8', y: '26', width: '32', height: '15', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '12', y: '30', width: '24', height: '8', rx: '1.5', fill: '#E76F51', stroke: 'none' }));
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

export default StampPadIcon;
