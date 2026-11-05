import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PandaIcon = defineComponent({
  name: 'PandaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '26', r: '15', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '12', cy: '12', r: '5.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '36', cy: '12', r: '5.5', fill: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '18', cy: '24', rx: '4', ry: '5', fill: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '30', cy: '24', rx: '4', ry: '5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '18', cy: '24', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '24', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '32', rx: '4', ry: '2.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default PandaIcon;
