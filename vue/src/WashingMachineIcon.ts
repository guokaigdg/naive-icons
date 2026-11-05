import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WashingMachineIcon = defineComponent({
  name: 'WashingMachineIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '5', width: '34', height: '38', rx: '4', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '24', cy: '26', r: '11', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '26', r: '6', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M13 11 L35 11', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '33', cy: '11', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default WashingMachineIcon;
