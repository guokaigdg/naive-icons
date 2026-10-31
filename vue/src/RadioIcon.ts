import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RadioIcon = defineComponent({
  name: 'RadioIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M32 19 L37 12', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '8', y: '19', width: '32', height: '21', rx: '4', fill: '#E76F51' }));
      children.push(h('circle', { cx: '17', cy: '29', r: '5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M27 25 L36 25', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M27 33 L36 33', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default RadioIcon;
