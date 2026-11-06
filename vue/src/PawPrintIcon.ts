import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PawPrintIcon = defineComponent({
  name: 'PawPrintIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '34', rx: '8', ry: '6', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '14', cy: '24', r: '3.6', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '20', cy: '18', r: '3.6', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '28', cy: '18', r: '3.6', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '34', cy: '24', r: '3.6', fill: '#8B5E3C' }));
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

export default PawPrintIcon;
