import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SnowboardIcon = defineComponent({
  name: 'SnowboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(45 24 24)' }, [
          h('rect', { x: '20', y: '7', width: '8', height: '34', rx: '4', fill: '#2A9D8F' }),
          h('rect', { x: '18', y: '15', width: '12', height: '5', rx: '2', fill: '#FAEDCD', stroke: 'none' }),
          h('rect', { x: '18', y: '28', width: '12', height: '5', rx: '2', fill: '#FAEDCD', stroke: 'none' }),
        ]),
      );
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

export default SnowboardIcon;
