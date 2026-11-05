import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ZooIcon = defineComponent({
  name: 'ZooIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 40 L8 20 C8 12 40 12 40 20 L40 40', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 40 L16 26 L32 26 L32 40', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '18', r: '3', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '15', r: '1.6', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '15', r: '1.6', fill: '#264653', stroke: 'none' }));
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

export default ZooIcon;
