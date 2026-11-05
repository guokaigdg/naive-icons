import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MonkeyIcon = defineComponent({
  name: 'MonkeyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '13', cy: '22', r: '5', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '35', cy: '22', r: '5', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '11', fill: '#8B5E3C' }));
      children.push(h('ellipse', { cx: '24', cy: '26', rx: '7', ry: '8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '24', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '24', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M21 30 C23 32 25 32 27 30', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
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

export default MonkeyIcon;
