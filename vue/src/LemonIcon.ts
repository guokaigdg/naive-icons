import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LemonIcon = defineComponent({
  name: 'LemonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '24', rx: '14', ry: '10', transform: 'rotate(-20 24 24)', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10.5 30.5 C 7.5 32.5 5.5 30.5 7.5 28.5', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M37.5 17.5 C 40.5 15.5 42.5 17.5 40.5 19.5', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '21', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '27', cy: '19', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M21 26.5 Q 24 28.5 27 25.5', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
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

export default LemonIcon;
