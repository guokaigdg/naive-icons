import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MultimeterIcon = defineComponent({
  name: 'MultimeterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '6', width: '28', height: '34', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '10', width: '20', height: '11', rx: '1.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17 17 L20 13 L23 17 L26 13 L29 17', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '6.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 29 L28 25', stroke: '#E76F51', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '36.5', r: '1.8', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '36.5', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
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

export default MultimeterIcon;
