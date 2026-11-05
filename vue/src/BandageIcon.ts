import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BandageIcon = defineComponent({
  name: 'BandageIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '18', width: '36', height: '12', rx: '6', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '18', y: '18', width: '12', height: '12', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '21', r: '1.1', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '21', r: '1.1', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '27', r: '1.1', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '27', r: '1.1', fill: '#8B5E3C', stroke: 'none' }));
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

export default BandageIcon;
