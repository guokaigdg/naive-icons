import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const KoalaIcon = defineComponent({
  name: 'KoalaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '15', cy: '19', r: '7.5', fill: '#264653' }));
      children.push(h('circle', { cx: '33', cy: '19', r: '7.5', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '13', fill: '#264653' }));
      children.push(h('circle', { cx: '15', cy: '19', r: '3.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '19', r: '3.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '25', r: '1.8', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '25', r: '1.8', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '32', rx: '4', ry: '5.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default KoalaIcon;
