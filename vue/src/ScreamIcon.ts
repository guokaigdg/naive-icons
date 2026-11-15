import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScreamIcon = defineComponent({
  name: 'ScreamIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '17.5', cy: '18.5', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '30.5', cy: '18.5', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M14.5 13.5 C 16 11.5 18.5 11.5 20 13.5', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M28 13.5 C 29.5 11.5 32 11.5 33.5 13.5', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '30', rx: '5.5', ry: '7', fill: '#2A2A2A', stroke: 'none' }));
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

export default ScreamIcon;
