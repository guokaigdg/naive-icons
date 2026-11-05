import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PowerBankIcon = defineComponent({
  name: 'PowerBankIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '8', width: '24', height: '34', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '13', width: '14', height: '8', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '18', y: '28', width: '5', height: '6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '25', y: '28', width: '5', height: '6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M20 38 L28 38', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default PowerBankIcon;
