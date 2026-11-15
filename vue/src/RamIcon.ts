import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RamIcon = defineComponent({
  name: 'RamIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '15', width: '38', height: '17', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '9', y: '20', width: '6.5', height: '8', rx: '1', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '18', y: '20', width: '6.5', height: '8', rx: '1', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '27', y: '20', width: '6.5', height: '8', rx: '1', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '36', y: '20', width: '6.5', height: '8', rx: '1', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '7', y: '32', width: '34', height: '4.5', rx: '1', fill: '#E9C46A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M23.5 32 V36.5', stroke: '#264653', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default RamIcon;
